-- CreateTable
CREATE TABLE "Item" (
    "item_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "item_name" TEXT NOT NULL,
    "stock" INTEGER NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "PurchaseTransaction" (
    "transaction_item_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "qty" INTEGER NOT NULL,
    "unit_price" INTEGER NOT NULL,
    "item_id" INTEGER NOT NULL,
    "purchase_id" INTEGER NOT NULL,
    CONSTRAINT "PurchaseTransaction_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "Item" ("item_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PurchaseTransaction_purchase_id_fkey" FOREIGN KEY ("purchase_id") REFERENCES "Purchase" ("purchase_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Purchase" (
    "purchase_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "purchase_date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "supplier_id" INTEGER NOT NULL,
    "total_amount" REAL NOT NULL,
    "discount" REAL NOT NULL,
    "partial_payment" REAL,
    "total_cost" REAL NOT NULL,
    "purchase_type" TEXT NOT NULL,
    CONSTRAINT "Purchase_supplier_id_fkey" FOREIGN KEY ("supplier_id") REFERENCES "Supplier" ("supplier_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Supplier" (
    "supplier_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "supplier_name" TEXT NOT NULL,
    "contact_no" TEXT NOT NULL,
    "amount_payable" REAL NOT NULL,
    "address" TEXT NOT NULL,
    "vat_no" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Customer" (
    "customer_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "customer_name" TEXT NOT NULL,
    "contact_no" TEXT NOT NULL,
    "amount_receivable" REAL NOT NULL,
    "address" TEXT NOT NULL,
    "vat_no" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Sale" (
    "sales_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "sales_date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "customer_id" INTEGER NOT NULL,
    "total_amount" REAL NOT NULL,
    "discount" REAL NOT NULL,
    "total_revenue" REAL NOT NULL,
    "sales_type" TEXT NOT NULL,
    CONSTRAINT "Sale_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "Customer" ("customer_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CashAccount" (
    "transaction_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "transaction_date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT NOT NULL,
    "amount" REAL NOT NULL,
    "transaction_type" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Supplier_supplier_name_key" ON "Supplier"("supplier_name");

-- CreateIndex
CREATE UNIQUE INDEX "Supplier_vat_no_key" ON "Supplier"("vat_no");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_customer_name_key" ON "Customer"("customer_name");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_vat_no_key" ON "Customer"("vat_no");
