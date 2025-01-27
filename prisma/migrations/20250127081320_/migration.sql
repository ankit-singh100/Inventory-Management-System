-- CreateTable
CREATE TABLE "items" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "quantity" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customer_vendors" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "email" TEXT,
    "phone" VARCHAR(15),
    "street" TEXT,
    "city" TEXT,
    "district" TEXT,
    "province" TEXT,
    "is_vendor" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "customer_vendors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sales" (
    "id" SERIAL NOT NULL,
    "order_date" TIMESTAMP(3) NOT NULL,
    "description" TEXT,
    "customer_Vendor_id" INTEGER NOT NULL,
    "total" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "discount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "before_tax" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "tax_amount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sales_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "item_sales" (
    "sale_id" INTEGER NOT NULL,
    "item_id" INTEGER NOT NULL,

    CONSTRAINT "item_sales_pkey" PRIMARY KEY ("sale_id","item_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "items_name_key" ON "items"("name");

-- AddForeignKey
ALTER TABLE "Item_organization" ADD CONSTRAINT "Item_organization_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sales" ADD CONSTRAINT "sales_customer_Vendor_id_fkey" FOREIGN KEY ("customer_Vendor_id") REFERENCES "customer_vendors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "item_sales" ADD CONSTRAINT "item_sales_sale_id_fkey" FOREIGN KEY ("sale_id") REFERENCES "sales"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "item_sales" ADD CONSTRAINT "item_sales_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
