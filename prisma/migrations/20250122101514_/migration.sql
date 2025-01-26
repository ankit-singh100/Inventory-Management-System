/*
  Warnings:

  - You are about to drop the column `sub_total` on the `sales` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "sales" DROP COLUMN "sub_total",
ADD COLUMN     "total" DOUBLE PRECISION NOT NULL DEFAULT 0;
