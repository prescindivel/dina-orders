/*
  Warnings:

  - You are about to drop the `_ClientToSellingPlace` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `sellingPlaceId` to the `Client` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_ClientToSellingPlace" DROP CONSTRAINT "_ClientToSellingPlace_A_fkey";

-- DropForeignKey
ALTER TABLE "_ClientToSellingPlace" DROP CONSTRAINT "_ClientToSellingPlace_B_fkey";

-- AlterTable
ALTER TABLE "Client" ADD COLUMN     "sellingPlaceId" TEXT NOT NULL;

-- DropTable
DROP TABLE "_ClientToSellingPlace";

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_sellingPlaceId_fkey" FOREIGN KEY ("sellingPlaceId") REFERENCES "SellingPlace"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
