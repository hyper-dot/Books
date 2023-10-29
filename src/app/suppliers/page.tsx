import React from "react";
import { PrismaClient } from "@prisma/client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Pencil, Trash } from "lucide-react";
import DeleteAlertDialogue from "@/components/DeleteAlertDialogue";
import { deleteSupplierItem } from "@/actions/accounts/supplier";
import SuppliersTable from "./SuppliersTable";

const page = async () => {
  const prisma = new PrismaClient();
  const suppliers = await prisma.supplier.findMany();
  await prisma.$disconnect();

  return <SuppliersTable data={suppliers} />;
};

export default page;
