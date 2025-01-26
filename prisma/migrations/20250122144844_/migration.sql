-- AddForeignKey
ALTER TABLE "sales" ADD CONSTRAINT "sales_customer_Vendor_id_fkey" FOREIGN KEY ("customer_Vendor_id") REFERENCES "customer_vendors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
