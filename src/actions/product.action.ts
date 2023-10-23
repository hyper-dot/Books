"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const addProduct = async (formdata: FormData) => {
  const prisma = new PrismaClient();

  const product_name = formdata.get("product_name");
  const stock = formdata.get("stock");

  if (!product_name) {
    return { success: false, message: "Product name is required." };
  }

  try {
    const data = {
      item_id: Date.now(),
      item_name: product_name as string,
      stock: stock ? parseInt(stock as string, 10) : 0,
    };

    const product = await prisma.item.create({
      data: data,
    });
    revalidatePath("/products");
    return { success: true, message: "Product added successfully." };
  } catch (err) {
    console.log(err);
    return { success: false, message: "Error adding the product." };
  }
};
