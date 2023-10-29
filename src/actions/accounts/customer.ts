"use server";
import { TData } from "@/constants/account";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

// Get all customers
export const getAllCustomers = async () => {
  try {
    const customers = await prisma.customer.findMany();
    return customers;
  } catch (e) {
    console.log(e);
    return null;
  }
};

// Create Customer function
export const createCustomer = async (data: TData) => {
  const account_name = data.name;
  const contact_no = data.contactNo;
  const vat = data.vatNo;
  const address = data.address;

  try {
    if (account_name && contact_no && vat && address) {
      const customer = await prisma.customer.create({
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
    console.log(e);
    return { success: false, message: "Internal server error." };
  } finally {
    await prisma.$disconnect();
  }
};

// Delete Customer
export const deleteCustomerItem = async (id: bigint) => {
  if (!id) return { success: false, message: "Missing id of customer" };
  try {
    await prisma.customer.delete({
      where: {
        customer_id: id,
      },
    });
    revalidatePath("/customers");
    return { success: true, message: "Customer deleted successfully" };
  } catch (err) {
    console.error(err);
    return { success: false, message: "Internal server error" };
  } finally {
    await prisma.$disconnect();
  }
};
