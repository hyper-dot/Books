/*
  Warnings:

  - A unique constraint covering the columns `[customer_name]` on the table `Customers` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[vat_no]` on the table `Customers` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[supplier_name]` on the table `Suppliers` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[vat_no]` on the table `Suppliers` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Customers_customer_name_key" ON "Customers"("customer_name");

-- CreateIndex
CREATE UNIQUE INDEX "Customers_vat_no_key" ON "Customers"("vat_no");

-- CreateIndex
CREATE UNIQUE INDEX "Suppliers_supplier_name_key" ON "Suppliers"("supplier_name");

-- CreateIndex
CREATE UNIQUE INDEX "Suppliers_vat_no_key" ON "Suppliers"("vat_no");
