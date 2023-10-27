import { z } from "zod";

export const customerSchema = z.object({
  address: z.string(),
  contact_no: z.string(),
  customer_name: z.string(),
  vat_no: z.string(),
  amount_receivable: z.number().optional(),
  customer_id: z.number(),
});
