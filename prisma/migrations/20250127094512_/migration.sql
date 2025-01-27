-- DropForeignKey
ALTER TABLE "Item_organization" DROP CONSTRAINT "Item_organization_organization_id_fkey";

-- DropForeignKey
ALTER TABLE "purchases" DROP CONSTRAINT "purchases_vendor_id_fkey";

-- DropForeignKey
ALTER TABLE "sales" DROP CONSTRAINT "sales_customer_id_fkey";

-- AlterTable
ALTER TABLE "sales" ALTER COLUMN "order_date" SET DEFAULT CURRENT_TIMESTAMP;

-- AddForeignKey
ALTER TABLE "Item_organization" ADD CONSTRAINT "Item_organization_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "organizations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sales" ADD CONSTRAINT "sales_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customer_vendors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "purchases" ADD CONSTRAINT "purchases_vendor_id_fkey" FOREIGN KEY ("vendor_id") REFERENCES "customer_vendors"("id") ON DELETE CASCADE ON UPDATE CASCADE;
