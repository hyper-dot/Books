import { z } from "zod";

export const supplierSchema = z.object({
  vat_no: z.string(),
  address: z.string(),
  contact_no: z.string(),
  supplier_id: z.bigint(),
  supplier_name: z.string(),
  amount_payable: z.number(),
});

export type supplierSchemaType = z.infer<typeof supplierSchema>;
