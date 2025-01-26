-- CreateTable
CREATE TABLE "Item_organization" (
    "item_id" INTEGER NOT NULL,
    "organization_id" INTEGER NOT NULL,

    CONSTRAINT "Item_organization_pkey" PRIMARY KEY ("item_id","organization_id")
);
