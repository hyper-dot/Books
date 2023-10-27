"use server";
import { prisma } from "@/lib/prisma";
import { cartProduct } from "@/constants/products/types";
import { revalidatePath } from "next/cache";

type TPurchaseRecordDataType = {
  productList: cartProduct[];
  totalAmount: number;
  totalAmountAfterDiscount: number;
  discount: number;
  supplierId: number;
  purchaseType: string;
  date: string;
};

export const addPurchaseRecord = async (formData: TPurchaseRecordDataType) => {
  // Checks if product list is empty
  if (formData.productList.length === 0) {
    return { success: false, message: "Invalid product list" };
  }
  // Validates the date
  if (!formData.supplierId) {
    return { success: false, message: "Supplier is missing" };
  }
  // validated the purchase type
  if (!formData.purchaseType) {
    return { success: false, message: "Please specify transaction type" };
  }

  // Validates the transaction
  if (!formData.date) {
    return { success: false, message: "Please specify date of transaction" };
  }

  try {
    // Add purchase record
    const {
      discount,
      supplierId,
      purchaseType,
      date,
      totalAmount,
      totalAmountAfterDiscount,
    } = formData;
    const purchase = await prisma.purchase.create({
      data: {
        purchase_date: new Date(date).toISOString(),
        supplier_id: supplierId,
        total_amount: totalAmount,
        discount: discount,
        partial_payment: null,
        total_cost: totalAmountAfterDiscount,
        purchase_type: purchaseType,
      },
    });

    // Add cash transaction
    if (purchaseType === "cash") {
      const res = await addCashTransaction(
        totalAmountAfterDiscount,
        "out",
        new Date(date).toISOString(),
      );
      if (!res) {
        return { success: false, message: "Couldn't record cash transaction" };
      }
      revalidatePath("/cash");
    }

    // Add record of each product
    for (let singleProduct of formData.productList) {
      const productRecord = await createPurchaseTransaction(
        singleProduct,
        purchase,
      );
      // handles error if product record not created
      if (!productRecord) {
        return { success: false, message: "Error while storing items data" };
      }

      // Handles error if item not found
      const oldItem = await findItemByID("item", productRecord.item_id);
      if (!oldItem) {
        return {
          success: false,
          message: "Couldn't find existing item having given id",
        };
      }

      const newItem = await prisma.item.update({
        where: {
          item_id: productRecord.item_id,
        },
        data: {
          stock: oldItem.stock + productRecord.qty,
        },
      });
    }
  } catch (err) {
    console.log(err);
    return { success: false, message: "Internal server error" };
  } finally {
    await prisma.$disconnect();
  }

  return { success: true, message: "Purchase record created successfully !!" };
};

// Add product in purchase transaction
const createPurchaseTransaction = async (
  product: cartProduct,
  purchase: any,
) => {
  const { productQty, productID, productUnitPrice } = product;
  try {
    // add purchase transaction
    const productRecord = await prisma.purchaseTransaction.create({
      data: {
        qty: Number(productQty),
        unit_price: Number(productUnitPrice),
        item_id: Number(productID),
        purchase_id: purchase.purchase_id,
      },
    });
    return productRecord;
  } catch (err) {
    console.log(err);
    return null;
  } finally {
    await prisma.$disconnect();
  }
};

// Finds item by id
const findItemByID = async (table: string, id: number) => {
  try {
    // @ts-expect-error
    const item = await prisma[table].findUnique({
      where: {
        item_id: id,
      },
    });
    return item;
  } catch (err) {
    console.log(err);
    return null;
  } finally {
    await prisma.$disconnect();
  }
};

//add cash transaction
const addCashTransaction = async (
  amount: number,
  type: string,
  date: string,
) => {
  try {
    const cashTransaction = await prisma.cashAccount.create({
      data: {
        amount: amount,
        transaction_date: date,
        type: type as string,
      },
    });
    return cashTransaction;
  } catch (err) {
    console.log(err);
    return null;
  }
};
