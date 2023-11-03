"use client";
import React, { useState, useEffect } from "react";

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

import { deleteProductById } from "@/actions/product.action";

import { Pencil, Trash } from "lucide-react";
import { Product } from "@/constants/products/types";
import EditProduct from "@/components/editProduct";
import DeleteAlertDialogue from "@/components/DeleteAlertDialogue";
import Image from "next/image";

const ProductTable = ({ data }: { data: Product[] }) => {
  const [query, setQuery] = useState("");
  const products = data;

  // Filtered products
  const filteredProducts = products.filter((product) =>
    product.item_name.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="max-w-4xl">
      <div className="py-2 w-2/4">
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
        <TableCaption className="text-xs">A list of your products</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>S.N.</TableHead>
            <TableHead></TableHead>
            <TableHead>Product Name</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredProducts.map((p, index) => (
            <TableRow key={p.item_id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>
                <Image
                  className=""
                  height={50}
                  width={50}
                  alt="product"
                  src="https://img.freepik.com/premium-photo/futuristic-gadgets-showcase-lineup-sleek-modern-technological-devices_977107-682.jpg"
                />
              </TableCell>
              <TableCell>{p.item_name}</TableCell>
              <TableCell>{p.stock}</TableCell>
              <TableCell>
                <div className="flex gap-4 items-center">
                  <button className="hover:text-blue-500">
                    <EditProduct
                      button={<Pencil size={16} />}
                      name={p.item_name}
                      stock={p.stock ? p.stock : 0}
                      id={Number(p.item_id)}
                    />
                  </button>
                  <DeleteAlertDialogue
                    button={
                      <button className="hover:text-red-500">
                        <Trash size={16} />
                      </button>
                    }
                    onDelete={deleteProductById}
                    id={Number(p.item_id)}
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

export default ProductTable;
