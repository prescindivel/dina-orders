/*
  Warnings:

  - A unique constraint covering the columns `[phone]` on the table `Client` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Client" DROP CONSTRAINT "Client_sellingPlaceId_fkey";

-- CreateTable
CREATE TABLE "_ClientToSellingPlace" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ClientToSellingPlace_AB_unique" ON "_ClientToSellingPlace"("A", "B");

-- CreateIndex
CREATE INDEX "_ClientToSellingPlace_B_index" ON "_ClientToSellingPlace"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Client_phone_key" ON "Client"("phone");

-- AddForeignKey
ALTER TABLE "_ClientToSellingPlace" ADD FOREIGN KEY ("A") REFERENCES "Client"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClientToSellingPlace" ADD FOREIGN KEY ("B") REFERENCES "SellingPlace"("id") ON DELETE CASCADE ON UPDATE CASCADE;
