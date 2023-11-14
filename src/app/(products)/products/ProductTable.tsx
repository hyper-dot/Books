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

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import { deleteProductById } from "@/actions/product.action";

import { Pencil, Trash } from "lucide-react";
import EditProduct from "@/components/editProduct";
import DeleteAlertDialogue from "@/components/DeleteAlertDialogue";
import Image from "next/image";

type Product = { stock: number; item_id: number; item_name: string };

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
                <HoverCard>
                  <HoverCardTrigger>{p.item_name}</HoverCardTrigger>
                  <HoverCardContent className="">
                    <div className="flex gap-4 ">
                      <div>
                        <h3 className="text-lg font-semibold">{p.item_name}</h3>
                        <p className="text-xs">
                          item Dessc Download the perfect products pictures.
                          Find over 100+ of the best free products images. Free
                          for commercial use ✓ No attribution required
                        </p>
                      </div>
                      <div>
                        <Image
                          width={500}
                          height={500}
                          src="https://img.freepik.com/premium-psd/shoes-social-media-instagram-post-template_505751-2681.jpg?w=740"
                          alt="product"
                        />
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </TableCell>
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
