-- CreateTable
CREATE TABLE "Item" (
    "item_id" SERIAL NOT NULL,
    "item_name" TEXT NOT NULL,
    "stock" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("item_id")
);

-- CreateTable
CREATE TABLE "PurchaseTransaction" (
    "transaction_item_id" SERIAL NOT NULL,
    "qty" INTEGER NOT NULL,
    "unit_price" INTEGER NOT NULL,
    "item_id" INTEGER NOT NULL,
    "purchase_id" INTEGER NOT NULL,

    CONSTRAINT "PurchaseTransaction_pkey" PRIMARY KEY ("transaction_item_id")
);

-- CreateTable
CREATE TABLE "Purchase" (
    "purchase_id" SERIAL NOT NULL,
    "purchase_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "supplier_id" INTEGER NOT NULL,
    "total_amount" DOUBLE PRECISION NOT NULL,
    "discount" DOUBLE PRECISION NOT NULL,
    "partial_payment" DOUBLE PRECISION,
    "total_cost" DOUBLE PRECISION NOT NULL,
    "purchase_type" TEXT NOT NULL,

    CONSTRAINT "Purchase_pkey" PRIMARY KEY ("purchase_id")
);

-- CreateTable
CREATE TABLE "Supplier" (
    "supplier_id" SERIAL NOT NULL,
    "supplier_name" TEXT NOT NULL,
    "contact_no" TEXT NOT NULL,
    "amount_payable" DOUBLE PRECISION NOT NULL,
    "address" TEXT NOT NULL,
    "vat_no" TEXT NOT NULL,

    CONSTRAINT "Supplier_pkey" PRIMARY KEY ("supplier_id")
);

-- CreateTable
CREATE TABLE "Customer" (
    "customer_id" SERIAL NOT NULL,
    "customer_name" TEXT NOT NULL,
    "contact_no" TEXT NOT NULL,
    "amount_receivable" DOUBLE PRECISION NOT NULL,
    "address" TEXT NOT NULL,
    "vat_no" TEXT NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("customer_id")
);

-- CreateTable
CREATE TABLE "Sale" (
    "sales_id" SERIAL NOT NULL,
    "sales_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "customer_id" INTEGER NOT NULL,
    "total_amount" DOUBLE PRECISION NOT NULL,
    "discount" DOUBLE PRECISION NOT NULL,
    "total_revenue" DOUBLE PRECISION NOT NULL,
    "sales_type" TEXT NOT NULL,

    CONSTRAINT "Sale_pkey" PRIMARY KEY ("sales_id")
);

-- CreateTable
CREATE TABLE "CashAccount" (
    "transaction_id" SERIAL NOT NULL,
    "transaction_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "amount" DOUBLE PRECISION NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "CashAccount_pkey" PRIMARY KEY ("transaction_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Supplier_supplier_name_key" ON "Supplier"("supplier_name");

-- CreateIndex
CREATE UNIQUE INDEX "Supplier_vat_no_key" ON "Supplier"("vat_no");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_customer_name_key" ON "Customer"("customer_name");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_vat_no_key" ON "Customer"("vat_no");

-- AddForeignKey
ALTER TABLE "PurchaseTransaction" ADD CONSTRAINT "PurchaseTransaction_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "Item"("item_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseTransaction" ADD CONSTRAINT "PurchaseTransaction_purchase_id_fkey" FOREIGN KEY ("purchase_id") REFERENCES "Purchase"("purchase_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchase" ADD CONSTRAINT "Purchase_supplier_id_fkey" FOREIGN KEY ("supplier_id") REFERENCES "Supplier"("supplier_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "Customer"("customer_id") ON DELETE RESTRICT ON UPDATE CASCADE;
