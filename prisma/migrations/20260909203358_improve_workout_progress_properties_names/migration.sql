/*
  Warnings:

  - You are about to drop the column `completedSets` on the `Workouts` table. All the data in the column will be lost.
  - You are about to drop the column `totalSets` on the `Workouts` table. All the data in the column will be lost.
  - You are about to drop the `RoutineDays` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "RoutineDays" DROP CONSTRAINT "RoutineDays_routineId_fkey";

-- DropForeignKey
ALTER TABLE "RoutineDays" DROP CONSTRAINT "RoutineDays_sessionId_fkey";

-- AlterTable
ALTER TABLE "Workouts" DROP COLUMN "completedSets",
DROP COLUMN "totalSets",
ADD COLUMN     "completedTargets" INTEGER DEFAULT 0,
ADD COLUMN     "totalTargets" INTEGER;

-- DropTable
DROP TABLE "RoutineDays";

-- CreateTable
CREATE TABLE "RoutinePlan" (
    "id" TEXT NOT NULL,
    "routineId" TEXT NOT NULL,
    "sessionId" TEXT,
    "name" TEXT NOT NULL,
    "dayNumber" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RoutinePlan_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RoutinePlan" ADD CONSTRAINT "RoutinePlan_routineId_fkey" FOREIGN KEY ("routineId") REFERENCES "Routines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoutinePlan" ADD CONSTRAINT "RoutinePlan_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "Sessions"("id") ON DELETE SET NULL ON UPDATE CASCADE;
