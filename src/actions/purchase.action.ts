"use server";
export const addPurchaseRecord = (formdata: FormData) => {
  const supplier = formdata.get("supplier_id");
  const product_name = formdata.get("product_name");
  const qty = formdata.get("qty");
  const unit_price = formdata.get("unit_price");
  const discount = formdata.get("discount");
  const total_amount = formdata.get("total_amount");
  const purchase_type = formdata.get("purchase_type");
  const partial_payment = formdata.get("partial_payment");
  const date = formdata.get("date");

  console.log({
    supplier,
    product_name,
    qty,
    unit_price,
    discount,
    total_amount,
    purchase_type,
    date,
    partial_payment,
  });
};
