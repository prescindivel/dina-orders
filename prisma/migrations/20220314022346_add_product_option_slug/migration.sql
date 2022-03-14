/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `ProductOption` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `ProductOption` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "ProductOption_name_key";

-- AlterTable
ALTER TABLE "ProductOption" ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ProductOption_slug_key" ON "ProductOption"("slug");
