"use server";
import { createCustomer } from "./customer";
import { createSupplier } from "./supplier";
import { accountDataSchema, TData } from "@/constants/account";

// Create account function
export const createAccount = async (data: TData) => {
  const parsedData = accountDataSchema.safeParse(data);

  if (parsedData.success) {
    const account_type = parsedData.data.accountType;

    if (account_type === "supplier") {
      const res = await createSupplier(parsedData.data);
      return res;
    } else if (account_type === "customer") {
      const res = await createCustomer(parsedData.data);
      return res;
    } else {
      return { success: false, message: "Please select account type" };
    }
  } else {
    return { success: false, message: "Invalid data" };
  }
};
