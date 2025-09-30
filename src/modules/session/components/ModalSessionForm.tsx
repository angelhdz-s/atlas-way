"use client";

import { useRouter } from "next/navigation";
import { ModalForm } from "@/modules/form/components/ModalForm";
import { ModalFormButtons } from "@/modules/form/components/ModalFormButtons";
import { SelectOption } from "@/modules/form/types";
import { useSessionForm } from "@/modules/session/hooks/useSessionForm";
import { useForm } from "@/modules/form/hooks/useForm";
import { SessionFormFields } from "@/modules/session/components/SessionFormFields";

export function ModalSessionForm({
	title,
	exercises,
}: {
	title: string;
	exercises: SelectOption[];
}) {
	const router = useRouter();
	const handleSuccess = () => {
		router.back();
	};

	const { state, action, isPending } = useSessionForm();
	useForm({ state, onSuccess: handleSuccess });

	return (
		<ModalForm title={title} action={action}>
			<SessionFormFields exercises={exercises} />
			<footer className="flex gap-2 *:px-4 *:py-2 *:rounded *:w-full *:border-2">
				<ModalFormButtons isPending={isPending} />
			</footer>
		</ModalForm>
	);
}
