"use server";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
const prisma = new PrismaClient();

// Create account function
export const createAccount = async (formdata: FormData) => {
  const account_type = formdata.get("account_type");
  if (account_type === "supplier") {
    const res = await createSupplier(formdata);
    await prisma.$disconnect();
    return res;
  } else if (account_type === "customer") {
    const res = await createCustomer(formdata);
    await prisma.$disconnect();
    return res;
  } else {
    return { success: false, message: "Please select account type" };
  }
};

// Create supplier function
export const createSupplier = async (formdata: FormData) => {
  const account_name = formdata.get("account_name");
  const contact_no = formdata.get("contact_no");
  const vat = formdata.get("vat");
  const address = formdata.get("address");

  try {
    if (account_name && contact_no && vat && address) {
      const supplier = await prisma.suppliers.create({
        data: {
          supplier_name: account_name as string, // You can use type assertion here
          contact_no: contact_no as string,
          vat_no: vat as string,
          address: address as string,
          amount_payable: 0,
        },
      });
      revalidatePath("/suppliers");
      return {
        success: true,
        message: "Supplier's account created successfully.",
      };
    } else {
      return { success: false, message: "All fields are required." };
    }
  } catch (e) {
    console.log(e);
    return { success: false, message: "Internal server error." };
  }
};

// Create Customer function
export const createCustomer = async (formdata: FormData) => {
  const account_name = formdata.get("account_name");
  const contact_no = formdata.get("contact_no");
  const vat = formdata.get("vat");
  const address = formdata.get("address");

  try {
    if (account_name && contact_no && vat && address) {
      const customer = await prisma.customers.create({
        data: {
          customer_name: account_name as string, // You can use type assertion here
          contact_no: contact_no as string,
          vat_no: vat as string,
          address: address as string,
          amount_receivable: 0,
        },
      });
      revalidatePath("/customers");
      return {
        success: true,
        message: "Customer's account created successfully.",
      };
    } else {
      return { success: false, message: "All fields are required." };
    }
  } catch (e) {
    return { success: false, message: "Internal server error." };
  }
};

// Delete Customer
export const deleteCustomerItem = async (id: number) => {
  if (!id) return { success: false, message: "Missing id of customer" };
  try {
    await prisma.customers.delete({
      where: {
        customer_id: id,
      },
    });
    revalidatePath("/customers");
    return { success: true, message: "Customer deleted successfully" };
  } catch (err) {
    console.error(err);
    return { success: false, message: "Internal server error" };
  }
};

// Delete Supplier
export const deleteSupplierItem = async (id: number) => {
  if (!id) return { success: false, message: "Missing id of supplier" };
  try {
    await prisma.suppliers.delete({
      where: {
        supplier_id: id,
      },
    });
    revalidatePath("/suppliers");
    return { success: true, message: "Supplier deleted successfully" };
  } catch (err) {
    console.error(err);
    return { success: false, message: "Internal server error" };
  }
};
