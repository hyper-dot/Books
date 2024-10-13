import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(1, { message: "Product name is too short." }),
  stock: z.coerce.number().min(0, { message: "Cannot be less than 0." }),
  reorderLevel: z.coerce.number().min(0, { message: "Must be more than 0." }),
  salesPrice: z.coerce.number().min(1, { message: "Cannot be less than 1." }),
  costPrice: z.coerce.number().min(1, { message: "Cannot be less than 1." }),
});

export type TProductSchema = z.infer<typeof productSchema>;
