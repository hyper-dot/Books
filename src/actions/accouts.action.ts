"use server";
import { revalidatePath } from "next/cache";
import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";

// Delete Customer
export const deleteCustomerItem = async (id: number) => {
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

// Delete Supplier
export const deleteSupplierItem = async (id: number) => {
  if (!id) return { success: false, message: "Missing id of supplier" };
  try {
    await prisma.supplier.delete({
      where: {
        supplier_id: id,
      },
    });
    revalidatePath("/suppliers");
    return { success: true, message: "Supplier deleted successfully" };
  } catch (err) {
    console.error(err);
    return { success: false, message: "Internal server error" };
  } finally {
    await prisma.$disconnect();
  }
};
