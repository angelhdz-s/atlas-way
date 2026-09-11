/*
  Warnings:

  - You are about to drop the column `workoutId` on the `WorkoutSets` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[workoutTargetId,set]` on the table `WorkoutSets` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `workoutTargetId` to the `WorkoutSets` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "WorkoutSets" DROP CONSTRAINT "WorkoutSets_workoutId_fkey";

-- DropIndex
DROP INDEX "WorkoutSets_workoutId_exerciseId_set_key";

-- AlterTable
ALTER TABLE "WorkoutSets" DROP COLUMN "workoutId",
ADD COLUMN     "workoutTargetId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "WorkoutSets_workoutTargetId_set_key" ON "WorkoutSets"("workoutTargetId", "set");

-- AddForeignKey
ALTER TABLE "WorkoutSets" ADD CONSTRAINT "WorkoutSets_workoutTargetId_fkey" FOREIGN KEY ("workoutTargetId") REFERENCES "WorkoutTargets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
