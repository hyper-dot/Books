import React from "react";
import { PrismaClient } from "@prisma/client";
import SuppliersTable from "./SuppliersTable";

const page = async () => {
  const prisma = new PrismaClient();
  const suppliers = await prisma.supplier.findMany();
  await prisma.$disconnect();

  return <SuppliersTable data={suppliers} />;
};

export default page;
