-- CreateTable
CREATE TABLE "purchases" (
    "id" SERIAL NOT NULL,
    "order_date" TIMESTAMP(3) NOT NULL,
    "description" TEXT,
    "vendor_id" INTEGER NOT NULL,
    "sub_total" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "discount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "before_tax" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "tax_amount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "purchases_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "item_purchases" (
    "purchase_id" INTEGER NOT NULL,
    "item_id" INTEGER NOT NULL,

    CONSTRAINT "item_purchases_pkey" PRIMARY KEY ("purchase_id","item_id")
);

-- AddForeignKey
ALTER TABLE "purchases" ADD CONSTRAINT "purchases_vendor_id_fkey" FOREIGN KEY ("vendor_id") REFERENCES "customer_vendors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "item_purchases" ADD CONSTRAINT "item_purchases_purchase_id_fkey" FOREIGN KEY ("purchase_id") REFERENCES "purchases"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "item_purchases" ADD CONSTRAINT "item_purchases_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
