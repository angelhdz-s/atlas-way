"use client";

import { useActionState } from "react";
import { createSessionAction } from "@/modules/session/actions/create-session";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useFieldArray, useForm } from "react-hook-form";
import { createExerciseAction } from "@/modules/exercise/actions/create-exercise";
import {
	ExerciseForm,
	exerciseFormSchema,
} from "@/modules/exercise/config/exercise-schema";
import { SelectOption } from "@/modules/form/types";
import { useModalForm } from "@/modules/form/hooks/useFormHook";
import { sessionFormSchema } from "../config/session-schema";

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
	} = useForm({ resolver: zodResolver(sessionFormSchema) });

	const { fields, replace } = useFieldArray({
		control,
		name: "exercises",
	});

	const handleOnExercisesChange = (options: SelectOption[]) => {
		const values = options.map((option) => ({ id: option.value }));
		replace(values);
	};

	const handleSuccess = () => {
		onSuccess?.();
		router.back();
	};

	const onSubmit = async (data: ExerciseForm) => {
		const result = await createSessionAction(data);
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
		handleOnExercisesChange,
	};
}
