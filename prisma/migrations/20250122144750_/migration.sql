/*
  Warnings:

  - Added the required column `customer_Vendor_id` to the `sales` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "sales" ADD COLUMN     "customer_Vendor_id" INTEGER NOT NULL;
