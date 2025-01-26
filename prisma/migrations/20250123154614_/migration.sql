/*
  Warnings:

  - You are about to drop the `Item_organization` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `customer_vendors` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `item_purchases` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `item_sales` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `items` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `organizations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `purchases` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `sales` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Item_organization" DROP CONSTRAINT "Item_organization_organization_id_fkey";

-- DropForeignKey
ALTER TABLE "item_purchases" DROP CONSTRAINT "item_purchases_purchase_id_fkey";

-- DropForeignKey
ALTER TABLE "item_sales" DROP CONSTRAINT "item_sales_sale_id_fkey";

-- DropForeignKey
ALTER TABLE "sales" DROP CONSTRAINT "sales_customer_Vendor_id_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_organization_id_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_role_id_fkey";

-- DropTable
DROP TABLE "Item_organization";

-- DropTable
DROP TABLE "customer_vendors";

-- DropTable
DROP TABLE "item_purchases";

-- DropTable
DROP TABLE "item_sales";

-- DropTable
DROP TABLE "items";

-- DropTable
DROP TABLE "organizations";

-- DropTable
DROP TABLE "purchases";

-- DropTable
DROP TABLE "sales";

-- DropTable
DROP TABLE "users";

-- DropEnum
DROP TYPE "DiscountType";

-- DropEnum
DROP TYPE "OrganizationType";
