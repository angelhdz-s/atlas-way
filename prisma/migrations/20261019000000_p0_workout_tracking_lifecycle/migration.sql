-- DropIndex
DROP INDEX "Workouts_id_routineId_sessionId_key";

-- AlterTable
ALTER TABLE "Workouts" ALTER COLUMN "date" SET DATA TYPE DATE;

-- AlterTable
ALTER TABLE "WorkoutSets" ADD COLUMN "rir" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Workouts_userId_routineId_sessionId_date_key" ON "Workouts"("userId", "routineId", "sessionId", "date");

-- CreateIndex
CREATE INDEX "Workouts_userId_date_idx" ON "Workouts"("userId", "date");

-- CreateIndex
CREATE INDEX "WorkoutTargets_workoutId_idx" ON "WorkoutTargets"("workoutId");

-- CreateIndex
CREATE INDEX "WorkoutTargets_exerciseId_idx" ON "WorkoutTargets"("exerciseId");

-- CreateIndex
CREATE INDEX "WorkoutSets_workoutTargetId_idx" ON "WorkoutSets"("workoutTargetId");

-- CreateIndex
CREATE INDEX "WorkoutSets_exerciseId_idx" ON "WorkoutSets"("exerciseId");
