/*
  Warnings:

  - You are about to drop the column `companyName` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `questionAcceptance` on the `Question` table. All the data in the column will be lost.
  - Added the required column `name` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `acceptence` to the `Question` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Company" DROP COLUMN "companyName",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Question" DROP COLUMN "questionAcceptance",
ADD COLUMN     "acceptence" DOUBLE PRECISION NOT NULL;
