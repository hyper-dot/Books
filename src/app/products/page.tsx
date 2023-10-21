"use client";
import React, { useRef } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SubmitButton from "@/components/SubmitButton";
import { addProduct } from "@/actions/product.action";

const page = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const { toast } = useToast();
  return (
    <div className="max-w-xl mx-auto px-4">
      <form
        ref={formRef}
        action={async (formData) => {
          const { message, success } = await addProduct(formData);
          toast({
            title: message,
            variant: success ? "default" : "destructive",
          });
          if (success) {
            formRef.current?.reset();
          }
        }}
      >
        <div className="my-4">
          <h1 className="text-2xl font-semibold">Add a product</h1>
        </div>

        <div className="flex gap-3 flex-col">
          <div>
            <Label htmlFor="product_name">Product Name</Label>
            <Input
              placeholder="Ex :  Circuit Board"
              id="product_name"
              name="product_name"
            />
          </div>
          <div>
            <Label htmlFor="stock">Stock</Label>
            <Input
              type="number"
              id="stock"
              name="stock"
              placeholder="Ex : 10"
            />
          </div>
        </div>
        <SubmitButton />
      </form>
    </div>
  );
};

export default page;
