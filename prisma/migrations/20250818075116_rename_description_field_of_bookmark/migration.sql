/*
  Warnings:

  - You are about to drop the column `desription` on the `bookmarks` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."bookmarks" DROP COLUMN "desription",
ADD COLUMN     "description" TEXT;
