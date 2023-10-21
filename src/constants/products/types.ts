import { z } from "zod";

export const productSchema = z.object({
  stock: z.number().nullable(),
  item_id: z.number(),
  item_name: z.string(),
});

export type productSchemaType = z.infer<typeof productSchema>;
