import { z } from "zod";

export const accountDataSchema = z.object({
  name: z.string(),
  accountType: z.string(),
  contactNo: z.string(),
  vatNo: z.string(),
  address: z.string(),
});

export type TData = z.infer<typeof accountDataSchema>;
