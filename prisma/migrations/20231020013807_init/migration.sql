-- CreateTable
CREATE TABLE "Item" (
    "item_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "item_name" TEXT NOT NULL,
    "price_per_item" REAL NOT NULL,
    "stock" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Dealers" (
    "dealer_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dealer_name" TEXT NOT NULL,
    "contact_no" TEXT NOT NULL,
    "amount_payable" REAL NOT NULL,
    "address" TEXT NOT NULL,
    "vat_no" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Buyers" (
    "buyer_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "buyer_name" TEXT NOT NULL,
    "contact_no" TEXT NOT NULL,
    "amount_receivable" REAL NOT NULL,
    "address" TEXT NOT NULL,
    "vat_no" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "PurchaseAccount" (
    "purchase_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "purchase_date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "item_id" INTEGER NOT NULL,
    "dealer_id" INTEGER NOT NULL,
    "purchase_price_per_item" REAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "total_amount" REAL NOT NULL,
    "discount" REAL NOT NULL,
    "total_cost" REAL NOT NULL,
    "purchase_type" TEXT NOT NULL,
    CONSTRAINT "PurchaseAccount_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "Item" ("item_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PurchaseAccount_dealer_id_fkey" FOREIGN KEY ("dealer_id") REFERENCES "Dealers" ("dealer_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SalesAccount" (
    "sales_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "sales_date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "item_id" INTEGER NOT NULL,
    "buyer_id" INTEGER NOT NULL,
    "sales_price_per_item" REAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "total_amount" REAL NOT NULL,
    "discount" REAL NOT NULL,
    "total_revenue" REAL NOT NULL,
    "sales_type" TEXT NOT NULL,
    CONSTRAINT "SalesAccount_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "Item" ("item_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "SalesAccount_buyer_id_fkey" FOREIGN KEY ("buyer_id") REFERENCES "Buyers" ("buyer_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CashAccount" (
    "transaction_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "transaction_date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT NOT NULL,
    "amount" REAL NOT NULL,
    "transaction_type" TEXT NOT NULL
);
