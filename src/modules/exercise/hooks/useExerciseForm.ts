"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useFieldArray, useForm } from "react-hook-form";
import { createExerciseAction } from "@/modules/exercise/actions/create-exercise";
import {
	ExerciseForm,
	exerciseFormSchema,
} from "@/modules/exercise/config/exercise-schema";
import { SelectOption } from "@/modules/form/types";
import { useModalForm } from "@/modules/form/hooks/useModalForm";

export function useExerciseForm({
	onSuccess,
}: {
	onSuccess?: () => void;
} = {}) {
	const router = useRouter();

	const { setState } = useModalForm();

	const {
		control,
		register,
		formState: { errors, isSubmitting },
		handleSubmit,
	} = useForm({ resolver: zodResolver(exerciseFormSchema) });

	const { fields, replace } = useFieldArray({
		control,
		name: "exercise.muscles",
	});

	const handleOnMusclesChange = (options: SelectOption[]) => {
		const values = options.map((option) => ({ id: option.value }));
		replace(values);
	};

	const handleSuccess = () => {
		onSuccess?.();
		router.back();
	};

	const onSubmit = async (data: ExerciseForm) => {
		const result = await createExerciseAction(data);
		setState(result);
		if (result.success) {
			handleSuccess();
		}
	};

	const handleSubmitWrapper = handleSubmit(onSubmit);

	return {
		isSubmitting,
		register,
		errors,
		handleSubmit: handleSubmitWrapper,
		fields,
		handleOnMusclesChange,
	};
}
