"use client";
import React, { ReactNode, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";

type TEditProductProps = {
  button: ReactNode;
  name: string;
  stock: number;
  id: number;
};

import { editProductById } from "@/actions/product.action";

import { toast } from "./ui/use-toast";

const EditProduct: React.FC<TEditProductProps> = ({
  button,
  name,
  stock,
  id,
}) => {
  const [pname, setPname] = useState(name);
  const [pstock, setPstock] = useState(stock);

  return (
    <Dialog>
      <DialogTrigger asChild>{button}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogDescription>
            Make changes to your products here. Click update when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Name
          </Label>
          <Input
            value={pname}
            onChange={(e) => setPname(e.target.value)}
            id="name"
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="stock" className="text-right">
            Stock
          </Label>
          <Input
            value={pstock}
            onChange={(e) => setPstock(Number(e.target.value))}
            id="stock"
            className="col-span-3"
          />
        </div>
        <DialogFooter>
          <Button
            onClick={async () => {
              const { success, message } = await editProductById({
                id,
                name: pname,
                stock: pstock,
              });
              toast({
                title: message,
                variant: success ? "success" : "destructive",
              });
            }}
            type="submit"
          >
            Update
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditProduct;
