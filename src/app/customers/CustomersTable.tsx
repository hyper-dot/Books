"use client";
import React, { useEffect, useState } from "react";
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
import { deleteCustomerItem } from "@/actions/accounts/customer";
import { Input } from "@/components/ui/input";

const CustomersTable = ({ data }: { data: any }) => {
  const customers = data;
  const [query, setQuery] = useState("");
  const filteredCustomer = customers?.filter((customer: any) =>
    customer.customer_name.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="max-w-5xl">
      <div className="py-2 w-1/2">
        <Input
          placeholder="search..."
          name="query"
          onChange={(e) => {
            e.preventDefault();
            setQuery(e.target.value);
          }}
        />
      </div>

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
          {filteredCustomer.map((c: any, index: number) => (
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

export default CustomersTable;
