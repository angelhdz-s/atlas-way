/*
  Warnings:

  - You are about to drop the column `statusId` on the `WorkoutSets` table. All the data in the column will be lost.
  - You are about to drop the column `workoutTargetId` on the `WorkoutSets` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[workoutId,exerciseId,set]` on the table `WorkoutSets` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `workoutId` to the `WorkoutSets` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "WorkoutSets" DROP CONSTRAINT "WorkoutSets_statusId_fkey";

-- DropForeignKey
ALTER TABLE "WorkoutSets" DROP CONSTRAINT "WorkoutSets_workoutTargetId_fkey";

-- DropIndex
DROP INDEX "WorkoutSets_workoutTargetId_exerciseId_set_key";

-- AlterTable
ALTER TABLE "WorkoutSets" DROP COLUMN "statusId",
DROP COLUMN "workoutTargetId",
ADD COLUMN     "workoutId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "WorkoutSets_workoutId_exerciseId_set_key" ON "WorkoutSets"("workoutId", "exerciseId", "set");

-- AddForeignKey
ALTER TABLE "WorkoutSets" ADD CONSTRAINT "WorkoutSets_workoutId_fkey" FOREIGN KEY ("workoutId") REFERENCES "Workouts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
