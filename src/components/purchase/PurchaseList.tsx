import React, { useEffect } from "react";
import { Label } from "../ui/label";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import { Trash } from "lucide-react";
import { Input } from "../ui/input";

import {
  productSchemaType,
  cartProduct,
  TPurchaseListProps,
} from "@/constants/products/types";

const PurchaseList: React.FC<TPurchaseListProps> = ({
  productID,
  setProductID,
  setProductList,
  products,
  qty,
  setQty,
  productList,
  totalPrice,
  setUnitPrice,
  unitPrice,
  setTotalPrice,
  discount,
}: any) => {
  // Delete from the selected item
  const deleteSelectedItem = (p: cartProduct) => {
    setProductList((prev: cartProduct[]) => prev.filter((item) => item !== p));
  };

  // Add to selected item
  const addToProductList = () => {
    setProductList((prev: cartProduct[]) => [
      ...prev,
      {
        productID: productID,
        productQty: qty,
        productUnitPrice: unitPrice,
      },
    ]);
    setProductID("");
    setQty("");
    setUnitPrice("");
  };

  useEffect(() => {
    // Calculate the total price based on the productList
    const newTotalPrice = productList.reduce(
      (total: string, product: cartProduct) => {
        const totalPriceForProduct =
          parseInt(product.productQty) * parseFloat(product.productUnitPrice);
        return total + totalPriceForProduct;
      },
      0,
    );

    setTotalPrice(newTotalPrice - discount);
  }, [productList, discount]);

  return (
    <div className="w-full flex flex-col">
      <h1 className="text-2xl py-4">Products List</h1>
      <div>
        <Label htmlFor="product">Product</Label>
        <select
          id="product"
          name="product_name"
          value={productID}
          onChange={(e) => setProductID(e.target.value)}
          className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        >
          <option className="dark:bg-primary-foreground" disabled value="">
            Select a product
          </option>
          {products.map((p: productSchemaType) => (
            <option
              className="dark:bg-primary-foreground"
              key={p.item_id}
              value={p.item_id}
            >
              {p.item_name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex gap-4 mt-2 w-full">
        <div className="w-full">
          <Label htmlFor="qty">Qty</Label>
          <Input
            onChange={(e) => setQty(e.target.value)}
            value={qty}
            id="qty"
            name="qty"
            type="number"
          />
        </div>

        <div className="w-full">
          <Label htmlFor="unit_price">Unit Price</Label>
          <div className="items-center gap-2 flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-within:ring-1 focus-within:ring-ring disabled:cursor-not-allowed disabled:opacity-50">
            <span>Rs.</span>
            <input
              className="w-full focus:outline-none bg-transparent"
              onChange={(e) => setUnitPrice(e.target.value)}
              value={unitPrice}
              id="unit_price"
              name="unit_price"
              type="number"
            />
          </div>
        </div>
      </div>

      <div className="py-4 w-full ">
        <Button
          className="w-full bg-green-400 text-black hover:bg-green-500"
          onClick={addToProductList}
          type="button"
          disabled={productID === "" || qty === "" || unitPrice === ""}
        >
          Add Product
        </Button>
      </div>

      <div className="border rounded-lg p-3">
        <Table className="table-auto">
          <TableCaption>A list of your product cart.</TableCaption>
          <TableHeader className="table-auto">
            <TableRow>
              <TableHead>Item name</TableHead>
              <TableHead>Qty</TableHead>
              <TableHead className="text-right">Unit Price</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {productList.map((p: cartProduct) => (
              <TableRow key={p.productID}>
                <TableCell>
                  {products.find(
                    (product: productSchemaType) =>
                      product.item_id === parseInt(p.productID),
                  )?.item_name ?? "Product not found"}
                </TableCell>
                <TableCell>{p.productQty}</TableCell>
                <TableCell className="text-right">
                  Rs. {p.productUnitPrice}
                </TableCell>

                <TableCell className="text-right">
                  Rs. {parseInt(p.productQty) * parseInt(p.productUnitPrice)}
                </TableCell>
                <TableCell className="flex justify-end">
                  <button
                    onClick={() => {
                      deleteSelectedItem(p);
                    }}
                    className="hover:text-red-500"
                  >
                    <Trash size={16} />
                  </button>
                </TableCell>
              </TableRow>
            ))}

            {productList.length !== 0 && (
              <TableRow>
                <TableHead>Total Amount</TableHead>
                <TableHead></TableHead>
                <TableHead></TableHead>
                <TableHead className="text-right text-primary">
                  Rs. {totalPrice.toFixed(2)}
                </TableHead>
                <TableHead></TableHead>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default PurchaseList;
