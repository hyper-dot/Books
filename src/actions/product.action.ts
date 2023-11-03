"use server";

import { prisma } from "@/lib/prisma";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

// Add new product
export const addProduct = async (formdata: FormData) => {
  const prisma = new PrismaClient();

  const product_name = formdata.get("product_name");
  const stock = formdata.get("stock");

  if (!product_name) {
    return { success: false, message: "Product name is required." };
  }

  try {
    const data = {
      item_name: product_name as string,
      stock: stock ? Number(stock as string) : 0,
    };

    const product = await prisma.item.create({
      data: data,
    });
    revalidatePath("/products");
    return { success: true, message: "Product added successfully." };
  } catch (err) {
    console.log(err);
    return { success: false, message: "Error adding the product." };
  } finally {
    await prisma.$disconnect();
  }
};

// Query all products
export const getAllProducts = async () => {
  try {
    const products = await prisma.item.findMany();
    return products;
  } catch (e) {
    console.log(e);
    return null;
  } finally {
    await prisma.$disconnect();
  }
};

// Edit Product
export const editProductById = async ({
  id,
  name,
  stock,
}: {
  id: number;
  name: string;
  stock: number;
}) => {
  try {
    await prisma.item.update({
      where: { item_id: id },
      data: {
        item_name: name,
        stock: stock,
      },
    });
    revalidatePath("/products");
    return { success: true, message: "Product updated successfully" };
  } catch (err) {
    console.log(err);
    return { success: false, message: "Couldn't update product" };
  } finally {
    await prisma.$disconnect();
  }
};

// Delete product
export const deleteProductById = async (id: bigint) => {
  try {
    await prisma.item.delete({
      where: {
        item_id: Number(id),
      },
    });
    revalidatePath("/products");
    return { success: true, message: "Product deleted successfully" };
  } catch (err) {
    console.log(err);
    return { success: false, message: "Couldn't delete product" };
  } finally {
    await prisma.$disconnect();
  }
};
