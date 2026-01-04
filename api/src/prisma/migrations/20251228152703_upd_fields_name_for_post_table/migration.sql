/*
  Warnings:

  - You are about to drop the column `name` on the `post` table. All the data in the column will be lost.
  - You are about to drop the column `nick` on the `post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "post" DROP COLUMN "name",
DROP COLUMN "nick",
ADD COLUMN     "img" TEXT,
ADD COLUMN     "title" TEXT;
