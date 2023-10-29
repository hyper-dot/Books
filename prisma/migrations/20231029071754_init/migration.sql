-- CreateTable
CREATE TABLE `Item` (
    `item_id` INTEGER NOT NULL AUTO_INCREMENT,
    `item_name` VARCHAR(191) NOT NULL,
    `stock` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`item_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PurchaseTransaction` (
    `transaction_item_id` INTEGER NOT NULL AUTO_INCREMENT,
    `qty` INTEGER NOT NULL,
    `unit_price` INTEGER NOT NULL,
    `item_id` INTEGER NOT NULL,
    `purchase_id` INTEGER NOT NULL,

    PRIMARY KEY (`transaction_item_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Purchase` (
    `purchase_id` INTEGER NOT NULL AUTO_INCREMENT,
    `purchase_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `supplier_id` BIGINT UNSIGNED NOT NULL,
    `total_amount` DOUBLE NOT NULL,
    `discount` DOUBLE NOT NULL,
    `partial_payment` DOUBLE NULL,
    `total_cost` DOUBLE NOT NULL,
    `purchase_type` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`purchase_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Supplier` (
    `supplier_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `supplier_name` VARCHAR(191) NOT NULL,
    `contact_no` VARCHAR(191) NOT NULL,
    `amount_payable` DOUBLE NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `vat_no` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Supplier_supplier_name_key`(`supplier_name`),
    UNIQUE INDEX `Supplier_vat_no_key`(`vat_no`),
    PRIMARY KEY (`supplier_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Customer` (
    `customer_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `customer_name` VARCHAR(191) NOT NULL,
    `contact_no` VARCHAR(191) NOT NULL,
    `amount_receivable` DOUBLE NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `vat_no` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Customer_customer_name_key`(`customer_name`),
    UNIQUE INDEX `Customer_vat_no_key`(`vat_no`),
    PRIMARY KEY (`customer_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Sale` (
    `sales_id` INTEGER NOT NULL AUTO_INCREMENT,
    `sales_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `customer_id` BIGINT UNSIGNED NOT NULL,
    `total_amount` DOUBLE NOT NULL,
    `discount` DOUBLE NOT NULL,
    `total_revenue` DOUBLE NOT NULL,
    `sales_type` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`sales_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CashAccount` (
    `transaction_id` INTEGER NOT NULL AUTO_INCREMENT,
    `transaction_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `amount` DOUBLE NOT NULL,
    `type` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`transaction_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PurchaseTransaction` ADD CONSTRAINT `PurchaseTransaction_item_id_fkey` FOREIGN KEY (`item_id`) REFERENCES `Item`(`item_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PurchaseTransaction` ADD CONSTRAINT `PurchaseTransaction_purchase_id_fkey` FOREIGN KEY (`purchase_id`) REFERENCES `Purchase`(`purchase_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Purchase` ADD CONSTRAINT `Purchase_supplier_id_fkey` FOREIGN KEY (`supplier_id`) REFERENCES `Supplier`(`supplier_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Sale` ADD CONSTRAINT `Sale_customer_id_fkey` FOREIGN KEY (`customer_id`) REFERENCES `Customer`(`customer_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
