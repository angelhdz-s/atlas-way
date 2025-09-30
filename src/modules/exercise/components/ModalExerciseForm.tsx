"use client";

import { useRouter } from "next/navigation";
import { useExerciseForm } from "@/modules/exercise/hooks/useExerciseForm";
import { ModalForm } from "@/modules/form/components/ModalForm";
import { ModalFormButtons } from "@/modules/form/components/ModalFormButtons";
import { SelectOption } from "@/modules/form/types";
import { ExerciseFormFields } from "./ExerciseFormFields";

export function ExerciseForm({
	title,
	muscles,
}: {
	title: string;
	muscles: SelectOption[];
}) {
	const router = useRouter();

	const handleSuccess = () => {
		console.log("Form closed");
		router.back(); // close modal
	};
	const { action, isPending } = useExerciseForm({ onSuccess: handleSuccess });

	return (
		<ModalForm title={title} action={action}>
			<ExerciseFormFields muscles={muscles} />
			<footer className="flex gap-2 *:px-4 *:py-2 *:rounded *:w-full *:border-2">
				<ModalFormButtons isPending={isPending} />
			</footer>
		</ModalForm>
	);
}
