"use client";

import { useRouter } from "next/navigation";

export default function CloseButton({
	className = "",
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) {
	const router = useRouter();
	const handleClose = () => {
		router.back();
	};
	return (
		<button
			type="button"
			className={`cursor-pointer ${className}`}
			onClick={handleClose}
		>
			{children}
		</button>
	);
}
