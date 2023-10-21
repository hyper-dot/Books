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

const page = async () => {
  const prisma = new PrismaClient();
  const suppliers = await prisma.suppliers.findMany();
  await prisma.$disconnect();
  return (
    <div className="max-w-5xl mx-auto px-4">
      <Table>
        <TableCaption className="text-xs">
          A list of your suppliers
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>S.N.</TableHead>
            <TableHead>Supplier's Name</TableHead>
            <TableHead>Contact No</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>VAT No</TableHead>
            <TableHead className="text-right">Amount Payable</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow> */}
          {suppliers.map((s, index) => (
            <TableRow key={s.supplier_id}>
              <TableCell>{index}</TableCell>
              <TableCell>{s.supplier_name}</TableCell>
              <TableCell>{s.contact_no}</TableCell>
              <TableCell>{s.address}</TableCell>
              <TableCell>{s.vat_no}</TableCell>
              <TableCell className="text-right">{s.amount_payable}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default page;
