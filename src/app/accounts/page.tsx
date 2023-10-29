"use client";
import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

import { createAccount } from "@/actions/accounts/createAccount";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";

const page = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    accountType: "",
    contactNo: "",
    vatNo: "",
    address: "",
  });

  return (
    <div className="max-w-xl">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setLoading(true);
          const { success, message } = await createAccount(data);
          toast({
            title: message,
            variant: success ? "success" : "destructive",
          });
          if (success) {
            setData({
              name: "",
              accountType: "",
              contactNo: "",
              vatNo: "",
              address: "",
            });
          }
          setLoading(false);
        }}
      >
        <div className="my-4">
          <h1 className="text-2xl font-semibold">Add an account</h1>
        </div>

        <div className="flex gap-3 flex-col">
          <div>
            <Label htmlFor="account_name">Name</Label>
            <Input
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              placeholder="Ex : Subigya Enterprises"
              id="account_name"
              name="account_name"
            />
          </div>
          <div>
            <Label>Choose account type</Label>
            <select
              name="supplier"
              value={data.accountType}
              onChange={(e) =>
                setData({ ...data, accountType: e.target.value })
              }
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option
                className="dark:bg-primary-foreground rounded-t-lg"
                disabled
                value=""
              >
                Select Account type
              </option>
              <option value="customer">Customer</option>
              <option value="supplier">Supplier</option>
            </select>
          </div>

          <div>
            <Label htmlFor="contact_no">Contact No</Label>
            <Input
              value={data.contactNo}
              onChange={(e) => setData({ ...data, contactNo: e.target.value })}
              type="number"
              placeholder="98xxxxxxxx"
              id="contact_no"
              name="contact_no"
            />
          </div>

          <div>
            <Label htmlFor="vat">Vat No</Label>
            <Input
              value={data.vatNo}
              onChange={(e) => setData({ ...data, vatNo: e.target.value })}
              type="number"
              id="vat"
              name="vat"
              placeholder="Ex: 12345"
            />
          </div>
          <div>
            <Label htmlFor="address">Address</Label>
            <Input
              value={data.address}
              onChange={(e) => setData({ ...data, address: e.target.value })}
              id="address"
              name="address"
              placeholder="Ex : Hetauda 19, Bastipur"
            />
          </div>
        </div>
        <Button className="w-full mt-4">
          {loading ? (
            <span className="flex items-center gap-2">
              <span>Adding</span> <Loader size={20} className="animate-spin" />
            </span>
          ) : (
            "Add"
          )}
        </Button>
      </form>
    </div>
  );
};

export default page;
