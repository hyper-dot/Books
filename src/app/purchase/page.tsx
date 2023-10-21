import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { PrismaClient } from "@prisma/client";

import { Label } from "@/components/ui/label";

const page = async () => {
  const prisma = new PrismaClient();
  const suppliers = await prisma.suppliers.findMany();
  return (
    <div className="max-w-xl mx-auto px-2">
      <div className="my-4">
        <h1 className="text-2xl font-semibold">Add Purchase Record</h1>
      </div>
      <form>
        <div className="flex flex-col gap-2">
          <div>
            <Label htmlFor="supplier">Supplier</Label>
            <select
              name="supplier"
              id=""
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            >
              {suppliers.map((s) => (
                <option value={s.supplier_id}>{s.supplier_name}</option>
              ))}
            </select>
          </div>

          <div>
            <Label htmlFor="product_name">Product Name</Label>
            <Input name="product_name" id="product_name" type="text" />
          </div>

          <div>
            <Label htmlFor="Stock">Stock</Label>
            <Input name="stock" id="stock" type="number" />
          </div>

          <div>
            <Label htmlFor="purchase_date">Purchase Date</Label>
            <Input name="purchase_date" id="stock" type="date" />
          </div>
        </div>

        <Button className="mt-4 w-full">Submit</Button>
      </form>
    </div>
  );
};

export default page;
