/*
  Warnings:

  - You are about to drop the column `price_per_unit` on the `Item` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Item" (
    "item_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "item_name" TEXT NOT NULL,
    "stock" INTEGER NOT NULL
);
INSERT INTO "new_Item" ("item_id", "item_name", "stock") SELECT "item_id", "item_name", "stock" FROM "Item";
DROP TABLE "Item";
ALTER TABLE "new_Item" RENAME TO "Item";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
