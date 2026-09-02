-- CreateEnum
CREATE TYPE "StatusEnum" AS ENUM ('PENDING', 'IN_PROGRESS', 'COMPLETED', 'CANCELED');

-- CreateEnum
CREATE TYPE "WorkoutStatusEnum" AS ENUM ('PENDING', 'TARGETS_SET', 'IN_PROGRESS', 'INTERRUPTED', 'COMPLETED', 'SKIPPED');

-- CreateTable
CREATE TABLE "Roles" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "roleId" TEXT NOT NULL DEFAULT 'base',

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RoutineCycleTypes" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RoutineCycleTypes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Routines" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "routineCycleId" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "days" INTEGER NOT NULL DEFAULT 7,
    "initialDate" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Routines_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RoutineDays" (
    "id" TEXT NOT NULL,
    "routineId" TEXT NOT NULL,
    "sessionId" TEXT,
    "name" TEXT NOT NULL,
    "dayNumber" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RoutineDays_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sessions" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Exercises" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "reps" INTEGER NOT NULL,
    "sets" INTEGER NOT NULL,
    "weight" INTEGER NOT NULL,

    CONSTRAINT "Exercises_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notifications" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Notifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Status" (
    "id" "StatusEnum" NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DayTypes" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DayTypes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BodySections" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BodySections_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MuscularGroups" (
    "id" SERIAL NOT NULL,
    "bodySectionId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MuscularGroups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Muscles" (
    "id" SERIAL NOT NULL,
    "muscularGroupId" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Muscles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkoutStatus" (
    "id" "WorkoutStatusEnum" NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WorkoutStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Workouts" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "routineId" TEXT,
    "sessionId" TEXT,
    "date" TIMESTAMP(3) NOT NULL,
    "statusId" "WorkoutStatusEnum" NOT NULL,
    "dayTypeId" TEXT NOT NULL,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Workouts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkoutTargets" (
    "id" TEXT NOT NULL,
    "trainingId" TEXT NOT NULL,
    "exerciseId" TEXT NOT NULL,
    "statusId" "WorkoutStatusEnum" NOT NULL,
    "sets" INTEGER NOT NULL,
    "reps" INTEGER NOT NULL,
    "weight" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WorkoutTargets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkoutSets" (
    "id" TEXT NOT NULL,
    "trainingPlanId" TEXT NOT NULL,
    "exerciseId" TEXT NOT NULL,
    "set" INTEGER NOT NULL,
    "reps" INTEGER NOT NULL,
    "weight" INTEGER NOT NULL,
    "statusId" "StatusEnum" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WorkoutSets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExercisesToMuscles" (
    "exerciseId" TEXT NOT NULL,
    "muscleId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ExercisesToMuscles_pkey" PRIMARY KEY ("exerciseId","muscleId")
);

-- CreateTable
CREATE TABLE "SessionsToExercises" (
    "sessionId" TEXT NOT NULL,
    "exerciseId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SessionsToExercises_pkey" PRIMARY KEY ("sessionId","exerciseId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "RoutineCycleTypes_name_key" ON "RoutineCycleTypes"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Sessions_name_key" ON "Sessions"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Status_name_key" ON "Status"("name");

-- CreateIndex
CREATE UNIQUE INDEX "DayTypes_name_key" ON "DayTypes"("name");

-- CreateIndex
CREATE UNIQUE INDEX "BodySections_name_key" ON "BodySections"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Workouts_id_routineId_sessionId_key" ON "Workouts"("id", "routineId", "sessionId");

-- CreateIndex
CREATE UNIQUE INDEX "WorkoutTargets_trainingId_exerciseId_key" ON "WorkoutTargets"("trainingId", "exerciseId");

-- CreateIndex
CREATE UNIQUE INDEX "WorkoutSets_trainingPlanId_exerciseId_set_key" ON "WorkoutSets"("trainingPlanId", "exerciseId", "set");

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Routines" ADD CONSTRAINT "Routines_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Routines" ADD CONSTRAINT "Routines_routineCycleId_fkey" FOREIGN KEY ("routineCycleId") REFERENCES "RoutineCycleTypes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoutineDays" ADD CONSTRAINT "RoutineDays_routineId_fkey" FOREIGN KEY ("routineId") REFERENCES "Routines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoutineDays" ADD CONSTRAINT "RoutineDays_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "Sessions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sessions" ADD CONSTRAINT "Sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exercises" ADD CONSTRAINT "Exercises_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notifications" ADD CONSTRAINT "Notifications_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MuscularGroups" ADD CONSTRAINT "MuscularGroups_bodySectionId_fkey" FOREIGN KEY ("bodySectionId") REFERENCES "BodySections"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Muscles" ADD CONSTRAINT "Muscles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Muscles" ADD CONSTRAINT "Muscles_muscularGroupId_fkey" FOREIGN KEY ("muscularGroupId") REFERENCES "MuscularGroups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workouts" ADD CONSTRAINT "Workouts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workouts" ADD CONSTRAINT "Workouts_dayTypeId_fkey" FOREIGN KEY ("dayTypeId") REFERENCES "DayTypes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workouts" ADD CONSTRAINT "Workouts_routineId_fkey" FOREIGN KEY ("routineId") REFERENCES "Routines"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workouts" ADD CONSTRAINT "Workouts_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "Sessions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workouts" ADD CONSTRAINT "Workouts_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "WorkoutStatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkoutTargets" ADD CONSTRAINT "WorkoutTargets_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "WorkoutStatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkoutTargets" ADD CONSTRAINT "WorkoutTargets_trainingId_fkey" FOREIGN KEY ("trainingId") REFERENCES "Workouts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkoutTargets" ADD CONSTRAINT "WorkoutTargets_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "Exercises"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkoutSets" ADD CONSTRAINT "WorkoutSets_trainingPlanId_fkey" FOREIGN KEY ("trainingPlanId") REFERENCES "WorkoutTargets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkoutSets" ADD CONSTRAINT "WorkoutSets_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "Status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExercisesToMuscles" ADD CONSTRAINT "ExercisesToMuscles_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "Exercises"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExercisesToMuscles" ADD CONSTRAINT "ExercisesToMuscles_muscleId_fkey" FOREIGN KEY ("muscleId") REFERENCES "Muscles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SessionsToExercises" ADD CONSTRAINT "SessionsToExercises_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "Sessions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SessionsToExercises" ADD CONSTRAINT "SessionsToExercises_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "Exercises"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
