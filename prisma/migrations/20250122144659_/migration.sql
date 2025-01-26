/*
  Warnings:

  - You are about to drop the column `customer_Vendor_id` on the `sales` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "purchases" DROP CONSTRAINT "purchases_vendor_id_fkey";

-- DropForeignKey
ALTER TABLE "sales" DROP CONSTRAINT "sales_customer_Vendor_id_fkey";

-- AlterTable
ALTER TABLE "sales" DROP COLUMN "customer_Vendor_id";
