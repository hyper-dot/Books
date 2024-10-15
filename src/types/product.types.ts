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

export type Customer = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  dueAmount: string;
  regNumber: string;
  __v: number;
};
