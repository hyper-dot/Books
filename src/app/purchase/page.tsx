import React from "react";
import { PrismaClient } from "@prisma/client";
import PurchaseForm from "@/components/purchase/PurchaseForm";

const page = async () => {
  const prisma = new PrismaClient();
  const suppliers = await prisma.suppliers.findMany();
  const products = await prisma.item.findMany();
  await prisma.$disconnect();

  return (
    <div className="max-w-xl">
      <div className="my-4">
        <h1 className="text-2xl font-semibold">Add Purchase Record</h1>
        <PurchaseForm suppliers={suppliers} products={products} />
      </div>
    </div>
  );
};

export default page;
