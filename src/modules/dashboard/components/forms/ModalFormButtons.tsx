"use client";

import { useRouter } from "next/navigation";
import CloseButton from "@/modules/globals/components/modal/CloseButton";

export function ModalFormButtons() {
	const router = useRouter();

	const handleSubmit = () => {
		// Logic here
		router.back();
	};
	return (
		<>
			<button
				type="button"
				className="bg-blue-600 border-blue-600 cursor-pointer"
				onClick={handleSubmit}
			>
				Create
			</button>
			<CloseButton className="text-white border-zinc-800">Cancel</CloseButton>
		</>
	);
}
