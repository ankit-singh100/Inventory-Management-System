/*
  Warnings:

  - You are about to drop the column `discount` on the `items` table. All the data in the column will be lost.
  - You are about to drop the column `discount_type` on the `items` table. All the data in the column will be lost.
  - You are about to drop the column `tax` on the `items` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Item_organization" DROP CONSTRAINT "Item_organization_item_id_fkey";

-- DropForeignKey
ALTER TABLE "item_purchases" DROP CONSTRAINT "item_purchases_item_id_fkey";

-- DropForeignKey
ALTER TABLE "item_sales" DROP CONSTRAINT "item_sales_item_id_fkey";

-- AlterTable
ALTER TABLE "items" DROP COLUMN "discount",
DROP COLUMN "discount_type",
DROP COLUMN "tax";
