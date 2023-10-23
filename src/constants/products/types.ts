import { z } from "zod";

export type cartProduct = {
  productID: string;
  productQty: string;
  productUnitPrice: string;
};

export const productSchema = z.object({
  stock: z.number().nullable(),
  item_id: z.bigint(),
  item_name: z.string(),
});

export type TPurchaseListProps = {
  productID: string;
  setProductID: (prev: string) => void;
  setProductList: (prev: cartProduct[]) => void;
  discount: string;
  products: any;
  qty: string;
  setQty: (prev: string) => void;
  productList: cartProduct[];
  totalPrice: number;
  setUnitPrice: (prev: string) => void;
  unitPrice: string;
  setTotalPrice: (prev: number) => void;
};

export type productSchemaType = z.infer<typeof productSchema>;
