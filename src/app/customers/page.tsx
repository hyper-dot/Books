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
import { deleteCustomerItem } from "@/actions/accouts.action";

const page = async () => {
  const prisma = new PrismaClient();
  const customers = await prisma.customer.findMany();
  await prisma.$disconnect();
  return (
    <div className="max-w-5xl">
      <Table>
        <TableCaption className="text-xs">
          A list of your customers
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>S.N.</TableHead>
            <TableHead>Customer's Name</TableHead>
            <TableHead>Contact No</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>VAT No</TableHead>
            <TableHead className="text-right">Amount Receivable</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {customers.map((c, index) => (
            <TableRow key={c.customer_id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{c.customer_name}</TableCell>
              <TableCell>{c.contact_no}</TableCell>
              <TableCell>{c.address}</TableCell>
              <TableCell>{c.vat_no}</TableCell>
              <TableCell className="text-right">
                {c.amount_receivable}
              </TableCell>
              <TableCell>
                <div className="flex gap-4 items-center pl-4">
                  <button className="hover:text-blue-500">
                    <Pencil size={16} />
                  </button>
                  <DeleteAlertDialogue
                    button={
                      <button className="hover:text-red-500">
                        <Trash size={16} />
                      </button>
                    }
                    onDelete={deleteCustomerItem}
                    id={c.customer_id}
                  />
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
