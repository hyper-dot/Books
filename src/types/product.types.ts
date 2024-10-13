export type Batch = {
  batchNo: number;
  qty: number;
  salesPrice: number;
  costPrice: number;
  _id: string;
  createdAt: string;
  updatedAt: string;
};

export type Product = {
  _id: string;
  user: string;
  reorderLevel: number;
  totalQty: number;
  name: string;
  batches: Batch[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};
