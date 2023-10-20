"use server";

export const purchaseAccountAction = (formdata: FormData) => {
  const item_name = formdata.get("product_name");
  const purchase_date = formdata.get("purchase_date");
  const stock = formdata.get("stock");
};
