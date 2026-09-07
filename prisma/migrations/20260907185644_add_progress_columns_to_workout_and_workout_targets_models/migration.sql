-- AlterTable
ALTER TABLE "WorkoutTargets" ADD COLUMN     "completedSets" INTEGER DEFAULT 0;

-- AlterTable
ALTER TABLE "Workouts" ADD COLUMN     "completedSets" INTEGER DEFAULT 0,
ADD COLUMN     "totalSets" INTEGER;
