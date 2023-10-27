"use server";
import { prisma } from "@/lib/prisma";

export const getAllCustomers = async () => {
  try {
    const customers = await prisma.customer.findMany();
    return customers;
  } catch (e) {
    console.log(e);
    return null;
  }
};
