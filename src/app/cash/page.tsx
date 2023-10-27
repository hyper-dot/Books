import React from "react";
import { prisma } from "@/lib/prisma";

import { Badge } from "@/components/ui/badge";
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
  const cashAccounts = await prisma.cashAccount.findMany();
  console.log(cashAccounts);
  return (
    <div className="max-w-5xl">
      <Table>
        <TableCaption className="text-xs">
          A list of your cash transactions
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>S.N.</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>IN/OUT</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cashAccounts.map((c, index) => (
            <TableRow key={c.transaction_id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{c.amount}</TableCell>
              <TableCell>
                {c.type === "in" ? (
                  <Badge className="bg-green-500">{c.type}</Badge>
                ) : (
                  <Badge variant="destructive">{c.type}</Badge>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default page;
