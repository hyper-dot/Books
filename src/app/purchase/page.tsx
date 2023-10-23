import React from "react";
import { PrismaClient } from "@prisma/client";
import PurchaseForm from "@/components/purchase/PurchaseForm";

const page = async () => {
  const prisma = new PrismaClient();
  const suppliers = await prisma.supplier.findMany();
  const products = await prisma.item.findMany();
  await prisma.$disconnect();

  return (
    <div className="">
      <div className="my-4 justify-around w-full">
        <PurchaseForm suppliers={suppliers} products={products} />
      </div>
    </div>
  );
};

export default page;
