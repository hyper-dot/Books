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

import { getAllProducts } from "@/actions/product.action";

import { Pencil, Trash } from "lucide-react";
import { z } from "zod";
import { productSchema } from "@/constants/products/types";
import TableSkeleton from "@/components/TableSkeleton";
import EditProduct from "@/components/editProduct";

type Product = z.infer<typeof productSchema>;

const page = () => {
  const [products, setProducts] = useState<Product[] | null>();
  const [query, setQuery] = useState("");

  // Fetch data and store in products
  useEffect(() => {
    getAllProducts().then((p) => setProducts(p));
  }, []);

  // Filtered products
  const filteredProducts = products?.filter((product) =>
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
      {filteredProducts ? (
        <Table>
          <TableCaption className="text-xs">
            A list of your products
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
            {filteredProducts.map((p, index) => (
              <TableRow key={p.item_id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{p.item_name}</TableCell>
                <TableCell>{p.stock}</TableCell>
                <TableCell>
                  <div className="flex gap-4 items-center">
                    <button className="hover:text-blue-500">
                      <EditProduct
                        button={<Pencil size={16} />}
                        name={p.item_name}
                        stock={p.stock ? p.stock : 0}
                        id={p.item_id}
                      />
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
      ) : (
        <TableSkeleton />
      )}
    </div>
  );
};

export default page;
