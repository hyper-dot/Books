"use client";
import React from "react";
import { useRef } from "react";
import { useToast } from "@/components/ui/use-toast";

import { createAccount } from "@/actions/accounts/createAccount";

import SubmitButton from "@/components/SubmitButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const page = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const { toast } = useToast();

  return (
    <div className="max-w-xl">
      <form
        ref={formRef}
        action={async (formData) => {
          const { success, message } = await createAccount(formData);
          toast({
            title: message,
            variant: success ? "success" : "destructive",
          });
          if (success) {
            formRef.current?.reset();
          }
        }}
      >
        <div className="my-4">
          <h1 className="text-2xl font-semibold">Add an account</h1>
        </div>

        <div className="flex gap-3 flex-col">
          <div>
            <Label htmlFor="account_name">Name</Label>
            <Input
              placeholder="Ex : Subigya Enterprises"
              id="account_name"
              name="account_name"
            />
          </div>
          <div>
            <Label>Choose account type</Label>
            <Select name="account_type">
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
            <Label htmlFor="contact_no">Contact No</Label>
            <Input
              type="number"
              placeholder="98xxxxxxxx"
              id="contact_no"
              name="contact_no"
            />
          </div>

          <div>
            <Label htmlFor="vat">Vat No</Label>
            <Input type="number" id="vat" name="vat" placeholder="Ex: 12345" />
          </div>
          <div>
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              name="address"
              placeholder="Ex : Hetauda 19, Bastipur"
            />
          </div>
        </div>

        <SubmitButton name="Add" loadingName="Adding Account" />
      </form>
    </div>
  );
};

export default page;
