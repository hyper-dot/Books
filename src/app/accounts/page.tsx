"use client";
import React from "react";
import { useRef } from "react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createNewSupplier } from "@/actions/accouts.action";
import SubmitButton from "@/components/SubmitButton";

const page = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const { toast } = useToast();

  return (
    <div className="max-w-xl mx-auto">
      <form
        ref={formRef}
        action={async (formData) => {
          const { message } = await createNewSupplier(formData);
          toast({
            title: message,
          });
          formRef.current?.reset();
        }}
      >
        <div className="mb-4">
          <h1 className="text-2xl">Add Account</h1>
        </div>

        <div className="flex gap-3 flex-col">
          <div>
            <label htmlFor="account_name">Name</label>
            <Input
              placeholder="Ex : Subigya Enterprises"
              id="account_name"
              name="account_name"
            />
          </div>
          <div>
            <Select>
              <SelectTrigger className="">
                <SelectValue placeholder="Account Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="supplier">Supplier</SelectItem>
                <SelectItem value="customer">Customer</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label htmlFor="contact_no">Contact No</label>
            <Input
              type="number"
              placeholder="98xxxxxxxx"
              id="contact_no"
              name="contact_no"
            />
          </div>

          <div>
            <label htmlFor="vat">Vat No</label>
            <Input type="number" id="vat" name="vat" placeholder="Ex: 12345" />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <Input
              id="address"
              name="address"
              placeholder="Ex : Hetauda 19, Bastipur"
            />
          </div>
        </div>

        <SubmitButton />
      </form>
    </div>
  );
};

export default page;
