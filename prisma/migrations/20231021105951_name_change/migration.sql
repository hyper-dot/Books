/*
  Warnings:

  - You are about to alter the column `contact_no` on the `Suppliers` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Suppliers" (
    "supplier_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "supplier_name" TEXT NOT NULL,
    "contact_no" INTEGER NOT NULL,
    "amount_payable" REAL NOT NULL,
    "address" TEXT NOT NULL,
    "vat_no" TEXT NOT NULL
);
INSERT INTO "new_Suppliers" ("address", "amount_payable", "contact_no", "supplier_id", "supplier_name", "vat_no") SELECT "address", "amount_payable", "contact_no", "supplier_id", "supplier_name", "vat_no" FROM "Suppliers";
DROP TABLE "Suppliers";
ALTER TABLE "new_Suppliers" RENAME TO "Suppliers";
CREATE UNIQUE INDEX "Suppliers_supplier_name_key" ON "Suppliers"("supplier_name");
CREATE UNIQUE INDEX "Suppliers_vat_no_key" ON "Suppliers"("vat_no");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
