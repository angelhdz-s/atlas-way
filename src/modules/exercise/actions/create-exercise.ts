"use server";

import { ActionResponseType } from "@/modules/globals/types";
import { PrismaClient } from "@/prisma/client";
import { getUserId } from "@/modules/user/actions/users";
import {
	ExerciseForm,
	exerciseFormSchema,
	ExerciseInitialStatsType,
	ExerciseType,
} from "../config/exercise-schema";

const prisma = new PrismaClient();

export async function createExerciseAction(
	data: ExerciseForm,
): Promise<ActionResponseType> {
	await new Promise((resolve) => setTimeout(resolve, 300));
	const error = await createExercise(data);
	if (error) return { success: false, message: error };
	return { success: true, message: "Exercise created successfully" };
}

export async function createExercise(
	data: ExerciseForm,
): Promise<string | null> {
	const result = exerciseFormSchema.safeParse(data);
	if (!result.success) {
		return result.error.issues.map((issue) => issue.message).join(", ");
	}

	const exerciseId = crypto.randomUUID();
	const userId = await getUserId();
	if (!userId?.id) {
		return "User not found";
	}

	console.log({
		data: {
			id: exerciseId,
			userId: userId.id,
			name: data.exercise.name,
			description: data.exercise.description,
			muscles: data.exercise.muscles,
			exerciseId: exerciseId,
			sets: data.initialStats?.sets,
			reps: data.initialStats?.reps,
			weight: data.initialStats?.weight,
		},
	});

	await newExercise(data, exerciseId, userId.id);

	return null;
}

async function newExercise(
	data: ExerciseForm,
	exerciseId: string,
	userId: string,
) {
	const { exercise: exerciseData, initialStats: initialStatsData } = data;
	try {
		if (!initialStatsData?.sets && !initialStatsData?.reps) {
			await createExercisePrisma(exerciseId, userId, exerciseData);
			return;
		}
		await prisma.$transaction([
			createExercisePrisma(exerciseId, userId, exerciseData),
			createExerciseInitialStatsPrisma(exerciseId, initialStatsData),
		]);
	} catch {
		return "Error creating exercise";
	}
}
function createExercisePrisma(
	exerciseId: string,
	userId: string,
	data: ExerciseType,
) {
	const musclesConnect = data.muscles.map((muscle) => ({
		id: Number(muscle.id),
	}));
	return prisma.exercises.create({
		data: {
			id: exerciseId,
			userId: userId,
			name: data.name,
			description: data.description,
			muscles: {
				connect: musclesConnect,
			},
		},
	});
}

function createExerciseInitialStatsPrisma(
	exerciseId: string,
	data: ExerciseInitialStatsType,
) {
	return prisma.exerciseInitialStats.create({
		data: {
			id: crypto.randomUUID(),
			exerciseId: exerciseId,
			sets: data.sets ?? 0,
			reps: data.reps ?? 0,
			weight: data.weight ?? 0,
		},
	});
}
