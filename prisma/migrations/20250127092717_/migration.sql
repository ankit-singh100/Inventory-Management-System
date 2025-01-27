/*
  Warnings:

  - You are about to drop the column `customer_Vendor_id` on the `sales` table. All the data in the column will be lost.
  - Added the required column `customer_id` to the `sales` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "sales" DROP CONSTRAINT "sales_customer_Vendor_id_fkey";

-- AlterTable
ALTER TABLE "sales" DROP COLUMN "customer_Vendor_id",
ADD COLUMN     "customer_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "sales" ADD CONSTRAINT "sales_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customer_vendors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
