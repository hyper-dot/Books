/*
  Warnings:

  - You are about to drop the `Buyers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Dealers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `buyer_id` on the `SalesAccount` table. All the data in the column will be lost.
  - You are about to drop the column `dealer_id` on the `PurchaseAccount` table. All the data in the column will be lost.
  - Added the required column `customer_id` to the `SalesAccount` table without a default value. This is not possible if the table is not empty.
  - Added the required column `supplier_id` to the `PurchaseAccount` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Buyers";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Dealers";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Suppliers" (
    "supplier_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "supplier_name" TEXT NOT NULL,
    "contact_no" TEXT NOT NULL,
    "amount_payable" REAL NOT NULL,
    "address" TEXT NOT NULL,
    "vat_no" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Customers" (
    "customer_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "customer_name" TEXT NOT NULL,
    "contact_no" TEXT NOT NULL,
    "amount_receivable" REAL NOT NULL,
    "address" TEXT NOT NULL,
    "vat_no" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SalesAccount" (
    "sales_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "sales_date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "item_id" INTEGER NOT NULL,
    "customer_id" INTEGER NOT NULL,
    "sales_price_per_item" REAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "total_amount" REAL NOT NULL,
    "discount" REAL NOT NULL,
    "total_revenue" REAL NOT NULL,
    "sales_type" TEXT NOT NULL,
    CONSTRAINT "SalesAccount_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "Item" ("item_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "SalesAccount_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "Customers" ("customer_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_SalesAccount" ("discount", "item_id", "quantity", "sales_date", "sales_id", "sales_price_per_item", "sales_type", "total_amount", "total_revenue") SELECT "discount", "item_id", "quantity", "sales_date", "sales_id", "sales_price_per_item", "sales_type", "total_amount", "total_revenue" FROM "SalesAccount";
DROP TABLE "SalesAccount";
ALTER TABLE "new_SalesAccount" RENAME TO "SalesAccount";
CREATE TABLE "new_PurchaseAccount" (
    "purchase_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "purchase_date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "item_id" INTEGER NOT NULL,
    "supplier_id" INTEGER NOT NULL,
    "purchase_price_per_item" REAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "total_amount" REAL NOT NULL,
    "discount" REAL NOT NULL,
    "total_cost" REAL NOT NULL,
    "purchase_type" TEXT NOT NULL,
    CONSTRAINT "PurchaseAccount_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "Item" ("item_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PurchaseAccount_supplier_id_fkey" FOREIGN KEY ("supplier_id") REFERENCES "Suppliers" ("supplier_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PurchaseAccount" ("discount", "item_id", "purchase_date", "purchase_id", "purchase_price_per_item", "purchase_type", "quantity", "total_amount", "total_cost") SELECT "discount", "item_id", "purchase_date", "purchase_id", "purchase_price_per_item", "purchase_type", "quantity", "total_amount", "total_cost" FROM "PurchaseAccount";
DROP TABLE "PurchaseAccount";
ALTER TABLE "new_PurchaseAccount" RENAME TO "PurchaseAccount";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
