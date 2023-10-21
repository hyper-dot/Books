"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import SubmitButton from "../SubmitButton";

import { supplierSchemaType } from "@/constants/suppliers/types";
import { productSchemaType } from "@/constants/products/types";
import { addPurchaseRecord } from "@/actions/purchase.action";

type TPurchaseFormProps = {
  suppliers: supplierSchemaType[];
  products: productSchemaType[];
};

const PurchaseForm: React.FC<TPurchaseFormProps> = ({
  suppliers,
  products,
}) => {
  const [date, setDate] = useState("");
  const [qty, setQty] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [discount, setDiscount] = useState("0");
  const [purchaseType, setPurchaseType] = useState("");

  return (
    <form action={addPurchaseRecord}>
      <div className="flex flex-col gap-2">
        <div>
          <Label htmlFor="supplier">Supplier</Label>
          <select
            name="supplier"
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
          >
            {suppliers.map((s) => (
              <option key={s.supplier_id} value={s.supplier_id}>
                {s.supplier_name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <Label htmlFor="supplier">Product</Label>
          <select
            name="product_name"
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
          >
            {products.map((p) => (
              <option key={p.item_id} value={p.item_id}>
                {p.item_name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <Label htmlFor="qty">Qty</Label>
          <Input
            onChange={(e) => setQty(e.target.value)}
            id="qty"
            name="qty"
            type="number"
          />
        </div>

        <div>
          <Label htmlFor="unit_price">Unit Price</Label>
          <div className="items-center gap-2 flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-within:ring-1 focus-within:ring-ring disabled:cursor-not-allowed disabled:opacity-50">
            <span>Rs.</span>
            <input
              className="w-full focus:outline-none"
              onChange={(e) => setUnitPrice(e.target.value)}
              id="unit_price"
              name="unit_price"
              type="number"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="discount">Discount</Label>
          <div className="items-center gap-2 flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-within:ring-1 focus-within:ring-ring disabled:cursor-not-allowed disabled:opacity-50">
            <span>Rs.</span>
            <input
              className="w-full focus:outline-none"
              onChange={(e) => setDiscount(e.target.value)}
              id="discount"
              defaultValue={0}
              name="discount"
              type="number"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="unit_price">Total Amount</Label>
          <div className="items-center gap-2 flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50">
            <span>Rs.</span>
            <input
              className="focus:outline-none"
              readOnly
              value={
                qty && unitPrice && discount
                  ? parseInt(qty) * parseInt(unitPrice) - parseInt(discount)
                  : 0
              }
              id="total_amount"
              name="total_amount"
              type="number"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="purchase_type">Purchase Type</Label>
          <select
            name="purchase_type"
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            onChange={(e) => setPurchaseType(e.target.value)}
          >
            <option value="cash">Cash</option>
            <option value="credit">Credit</option>
            <option value="partial">Partial Payment</option>
          </select>
        </div>
        {purchaseType === "partial" ? (
          <div>
            <Label htmlFor="partial_payment">Partial Payment</Label>
            <div className="items-center gap-2 flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-within:ring-1 focus-within:ring-ring disabled:cursor-not-allowed disabled:opacity-50">
              <span>Rs.</span>
              <input
                className="w-full focus:outline-none"
                onChange={(e) => setDiscount(e.target.value)}
                id="partial_payment"
                name="partial_payment"
                type="number"
              />
            </div>
          </div>
        ) : null}
        <div>
          <Label htmlFor="purchase_date">Purchase Date</Label>
          <input
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
            type="date"
            name="date"
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
      </div>

      <SubmitButton name="Add Record" loadingName="Adding Record" />
    </form>
  );
};

export default PurchaseForm;
