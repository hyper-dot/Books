import { purchaseAccountAction } from "@/actions/purchaseAccount";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const page = () => {
  return (
    <div className="max-w-xl mx-auto">
      <form action={purchaseAccountAction}>
        <div className="w-full mb-4">
          <h1 className="text-xl">Purchase Account</h1>
        </div>

        <div className="flex flex-col gap-2">
          <div>
            <label htmlFor="product_name">Product Name</label>
            <Input name="product_name" id="product_name" type="text" />
          </div>

          <div>
            <label htmlFor="Stock">Stock</label>
            <Input name="stock" id="stock" type="number" />
          </div>

          <div>
            <label htmlFor="purchase_date">Purchase Date</label>
            <Input name="purchase_date" id="stock" type="date" />
          </div>
        </div>

        <Button className="mt-4 w-full">Submit</Button>
      </form>
    </div>
  );
};

export default page;
