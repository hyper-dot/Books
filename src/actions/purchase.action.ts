"use server";
import { prisma } from "@/lib/prisma";
import { cartProduct } from "@/constants/products/types";

type TPurchaseRecordDataType = {
  productList: cartProduct[];
  totalAmount: number;
  totalAmountAfterDiscount: number;
  discount: number;
  supplierId: number;
  purchaseType: string;
  date: string;
};

export const addPurchaseRecord = async (data: TPurchaseRecordDataType) => {
  // Checks if product list is empty
  if (data.productList.length === 0) {
    return { success: false, message: "Invalid product list" };
  }
  // Validates the date
  if (!data.supplierId) {
    return { success: false, message: "Supplier is missing" };
  }
  // validated the purchase type
  if (!data.purchaseType) {
    return { success: false, message: "Please specify transaction type" };
  }

  // Validates the transaction
  if (!data.date) {
    return { success: false, message: "Please specify date of transaction" };
  }

  console.log(data);
  return { success: true, message: "All Done !!" };
};
