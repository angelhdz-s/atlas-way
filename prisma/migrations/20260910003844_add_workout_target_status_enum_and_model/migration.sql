/*
  Warnings:

  - Changed the type of `statusId` on the `WorkoutTargets` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "WorkoutTargetStatusEnum" AS ENUM ('PENDING', 'IN_PROGRESS', 'INTERRUPTED', 'COMPLETED', 'SKIPPED');

-- DropForeignKey
ALTER TABLE "WorkoutTargets" DROP CONSTRAINT "WorkoutTargets_statusId_fkey";

-- AlterTable
ALTER TABLE "WorkoutTargets" DROP COLUMN "statusId",
ADD COLUMN     "statusId" "WorkoutTargetStatusEnum" NOT NULL;

-- CreateTable
CREATE TABLE "WorkoutTargetStatus" (
    "id" "WorkoutTargetStatusEnum" NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WorkoutTargetStatus_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "WorkoutTargets" ADD CONSTRAINT "WorkoutTargets_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "WorkoutTargetStatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
