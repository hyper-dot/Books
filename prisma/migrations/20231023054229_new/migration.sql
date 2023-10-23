/*
  Warnings:

  - A unique constraint covering the columns `[purchase_id]` on the table `PurchaseTransaction` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "PurchaseTransaction_purchase_id_key" ON "PurchaseTransaction"("purchase_id");
