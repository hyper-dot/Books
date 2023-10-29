"use server";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { TData } from "@/constants/account";

// Find all supplier
export const getAllSuppliers = async () => {
  try {
    const suppliers = await prisma.supplier.findMany();
    return suppliers;
  } catch (err) {
    console.log(err);
    return null;
  } finally {
    await prisma.$disconnect();
  }
};

// Create supplier function
export const createSupplier = async (data: TData) => {
  const account_name = data.name;
  const contact_no = data.contactNo;
  const vat = data.vatNo;
  const address = data.address;

  try {
    if (account_name && contact_no && vat && address) {
      const supplier = await prisma.supplier.create({
        data: {
          supplier_name: account_name as string, // You can use type assertion here
          contact_no: contact_no as string,
          vat_no: vat as string,
          address: address as string,
          amount_payable: 0,
        },
      });
      revalidatePath("/suppliers");
      // Success Messaage
      return {
        success: true,
        message: "Supplier's account created successfully.",
      };
    } else {
      // Validation
      return { success: false, message: "All fields are required." };
    }
  } catch (e) {
    console.log(e); // Logs the whole error
    // Handles Prisma Error
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        return { success: false, message: "Vat No. or Name already exists" };
      }
    }
    // If not found returns internal server error
    return { success: false, message: "Internal server error" };
  } finally {
    await prisma.$disconnect();
  }
};

// Delete Supplier
export const deleteSupplierItem = async (id: bigint) => {
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
