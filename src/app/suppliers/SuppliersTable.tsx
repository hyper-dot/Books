"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";

import { Pencil, Trash } from "lucide-react";
import DeleteAlertDialogue from "@/components/DeleteAlertDialogue";
import { deleteSupplierItem } from "@/actions/accounts/supplier";

const SuppliersTable = ({ data }: { data: any }) => {
  const suppliers = data;
  const [query, setQuery] = useState("");
  const filteredSuppliers = suppliers?.filter((supplier: any) =>
    supplier.supplier_name.toLowerCase().includes(query.toLowerCase()),
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
          {filteredSuppliers.map((s: any, index: number) => (
            <TableRow key={s.supplier_id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{s.supplier_name}</TableCell>
              <TableCell>{s.contact_no}</TableCell>
              <TableCell>{s.address}</TableCell>
              <TableCell>{s.vat_no}</TableCell>
              <TableCell className="text-right">{s.amount_payable}</TableCell>
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
                    onDelete={deleteSupplierItem}
                    id={s.supplier_id}
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

export default SuppliersTable;
