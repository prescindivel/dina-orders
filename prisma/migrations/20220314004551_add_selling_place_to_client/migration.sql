-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_productSizeId_fkey";

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "productSizeId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_sellingPlaceId_fkey" FOREIGN KEY ("sellingPlaceId") REFERENCES "SellingPlace"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_productSizeId_fkey" FOREIGN KEY ("productSizeId") REFERENCES "ProductSize"("id") ON DELETE SET NULL ON UPDATE CASCADE;
