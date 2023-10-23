-- CreateTable
CREATE TABLE "Item" (
    "item_id" BIGINT NOT NULL PRIMARY KEY,
    "item_name" TEXT NOT NULL,
    "stock" INTEGER DEFAULT 0
);

-- CreateTable
CREATE TABLE "PurchaseTransaction" (
    "transaction_item_id" BIGINT NOT NULL PRIMARY KEY,
    "item_id" BIGINT NOT NULL,
    "qty" INTEGER NOT NULL,
    "unit_price" INTEGER NOT NULL,
    "purchase_id" BIGINT NOT NULL,
    CONSTRAINT "PurchaseTransaction_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "Item" ("item_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PurchaseTransaction_purchase_id_fkey" FOREIGN KEY ("purchase_id") REFERENCES "Purchase" ("purchase_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Purchase" (
    "purchase_id" BIGINT NOT NULL PRIMARY KEY,
    "purchase_date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "supplier_id" BIGINT NOT NULL,
    "total_amount" REAL NOT NULL,
    "discount" REAL NOT NULL,
    "partial_payment" REAL,
    "total_cost" REAL NOT NULL,
    "purchase_type" TEXT NOT NULL,
    CONSTRAINT "Purchase_supplier_id_fkey" FOREIGN KEY ("supplier_id") REFERENCES "Supplier" ("supplier_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Supplier" (
    "supplier_id" BIGINT NOT NULL PRIMARY KEY,
    "supplier_name" TEXT NOT NULL,
    "contact_no" TEXT NOT NULL,
    "amount_payable" REAL NOT NULL,
    "address" TEXT NOT NULL,
    "vat_no" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Customer" (
    "customer_id" BIGINT NOT NULL PRIMARY KEY,
    "customer_name" TEXT NOT NULL,
    "contact_no" TEXT NOT NULL,
    "amount_receivable" REAL NOT NULL,
    "address" TEXT NOT NULL,
    "vat_no" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Sale" (
    "sales_id" BIGINT NOT NULL PRIMARY KEY,
    "sales_date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "customer_id" BIGINT NOT NULL,
    "total_amount" REAL NOT NULL,
    "discount" REAL NOT NULL,
    "total_revenue" REAL NOT NULL,
    "sales_type" TEXT NOT NULL,
    CONSTRAINT "Sale_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "Customer" ("customer_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CashAccount" (
    "transaction_id" BIGINT NOT NULL PRIMARY KEY,
    "transaction_date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT NOT NULL,
    "amount" REAL NOT NULL,
    "transaction_type" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "PurchaseTransaction_item_id_key" ON "PurchaseTransaction"("item_id");

-- CreateIndex
CREATE UNIQUE INDEX "Supplier_supplier_name_key" ON "Supplier"("supplier_name");

-- CreateIndex
CREATE UNIQUE INDEX "Supplier_vat_no_key" ON "Supplier"("vat_no");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_customer_name_key" ON "Customer"("customer_name");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_vat_no_key" ON "Customer"("vat_no");
