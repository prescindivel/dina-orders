/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `ProductType` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `ProductType` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "ProductType_name_key";

-- AlterTable
ALTER TABLE "ProductType" ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ProductType_slug_key" ON "ProductType"("slug");
