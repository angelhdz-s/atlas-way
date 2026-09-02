/*
  Warnings:

  - You are about to drop the column `trainingPlanId` on the `WorkoutSets` table. All the data in the column will be lost.
  - You are about to drop the column `trainingId` on the `WorkoutTargets` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[workoutTargetId,exerciseId,set]` on the table `WorkoutSets` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[workoutId,exerciseId]` on the table `WorkoutTargets` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `workoutTargetId` to the `WorkoutSets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `workoutId` to the `WorkoutTargets` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "WorkoutSets" DROP CONSTRAINT "WorkoutSets_trainingPlanId_fkey";

-- DropForeignKey
ALTER TABLE "WorkoutTargets" DROP CONSTRAINT "WorkoutTargets_trainingId_fkey";

-- DropIndex
DROP INDEX "WorkoutSets_trainingPlanId_exerciseId_set_key";

-- DropIndex
DROP INDEX "WorkoutTargets_trainingId_exerciseId_key";

-- AlterTable
ALTER TABLE "WorkoutSets" DROP COLUMN "trainingPlanId",
ADD COLUMN     "workoutTargetId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "WorkoutTargets" DROP COLUMN "trainingId",
ADD COLUMN     "workoutId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "WorkoutSets_workoutTargetId_exerciseId_set_key" ON "WorkoutSets"("workoutTargetId", "exerciseId", "set");

-- CreateIndex
CREATE UNIQUE INDEX "WorkoutTargets_workoutId_exerciseId_key" ON "WorkoutTargets"("workoutId", "exerciseId");

-- AddForeignKey
ALTER TABLE "WorkoutTargets" ADD CONSTRAINT "WorkoutTargets_workoutId_fkey" FOREIGN KEY ("workoutId") REFERENCES "Workouts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkoutSets" ADD CONSTRAINT "WorkoutSets_workoutTargetId_fkey" FOREIGN KEY ("workoutTargetId") REFERENCES "WorkoutTargets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
