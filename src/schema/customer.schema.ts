import { z } from "zod";

export const customerSchema = z.object({
  name: z.string().min(3, { message: "Name is too short." }),
  email: z.string().email(),
  phone: z.string().min(7, { message: "Phone number is too short." }),
  address: z.string().min(3, { message: "Address is too short." }),
  reg_no: z.string().optional(),
  due_amount: z.string().optional(),
});

export type TCustomerSchema = z.infer<typeof customerSchema>;
