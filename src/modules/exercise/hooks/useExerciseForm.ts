"use client";

import { useFieldArray } from "react-hook-form";
import { createExerciseAction } from "@/modules/exercise/actions/create-exercise";
import { exerciseFormSchema } from "@/modules/exercise/config/exercise-schema";
import { SelectOption } from "@/modules/form/types";
import { useFormHook } from "@/modules/form/hooks/useFormHook";
export function useExerciseForm({
	onSuccess,
}: {
	onSuccess?: () => void;
} = {}) {
	const { register, control, isSubmitting, errors, handleSubmit } =
		useFormHook({
			action: createExerciseAction,
			schema: exerciseFormSchema,
			onSuccess,
		});

	const { fields, replace } = useFieldArray({
		control,
		name: "exercise.muscles",
	});

	const handleOnMusclesChange = (options: SelectOption[]) => {
		const values = options.map((option) => ({ id: option.value }));
		replace(values);
	};

	return {
		register,
		handleSubmit,
		errors,
		isSubmitting,
		fields,
		handleOnMusclesChange,
	};
}
