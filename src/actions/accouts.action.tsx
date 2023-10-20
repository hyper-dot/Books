"use server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Create account function
export const createAccount = async (formdata: FormData) => {
  const account_type = formdata.get("account_type");
  if (account_type === "supplier") {
    const res = await createSupplier(formdata);
    return res;
  } else if (account_type === "customer") {
    const res = await createCustomer(formdata);
    return res;
  } else {
    return { message: "Please select account type" };
  }
};

// Create supplier function
export const createSupplier = async (formdata: FormData) => {
  const account_name = formdata.get("account_name");
  const contact_no = formdata.get("contact_no");
  const vat = formdata.get("vat");
  const address = formdata.get("address");

  try {
    if (account_name && contact_no && vat && address) {
      const supplier = await prisma.suppliers.create({
        data: {
          supplier_name: account_name as string, // You can use type assertion here
          contact_no: contact_no as string,
          vat_no: vat as string,
          address: address as string,
          amount_payable: 0,
        },
      });
      return { message: "Supplier's account created successfully." };
    } else {
      return { message: "All fields are required." };
    }
  } catch (e) {
    return { message: "Internal server error." };
  }
};

// Create Customer function
export const createCustomer = async (formdata: FormData) => {
  const account_name = formdata.get("account_name");
  const contact_no = formdata.get("contact_no");
  const vat = formdata.get("vat");
  const address = formdata.get("address");

  try {
    if (account_name && contact_no && vat && address) {
      const customer = await prisma.customers.create({
        data: {
          customer_name: account_name as string, // You can use type assertion here
          contact_no: contact_no as string,
          vat_no: vat as string,
          address: address as string,
          amount_receivable: 0,
        },
      });
      return { message: "Customer's account created successfully." };
    } else {
      return { message: "All fields are required." };
    }
  } catch (e) {
    return { message: "Internal server error." };
  }
};
