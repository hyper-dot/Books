import React from "react";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

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

const page = async () => {
  const products = await prisma.item.findMany();
  await prisma.$disconnect();

  return (
    <div className="max-w-4xl">
      <Table>
        <TableCaption className="text-xs">
          A list of your suppliers
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>S.N.</TableHead>
            <TableHead>Product Name</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((p, index) => (
            <TableRow key={p.item_id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{p.item_name}</TableCell>
              <TableCell>{p.stock}</TableCell>
              <TableCell>
                <div className="flex gap-4 items-center">
                  <button className="hover:text-blue-500">
                    <Pencil size={16} />
                  </button>
                  <button className="hover:text-red-500">
                    <Trash size={16} />
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default page;
