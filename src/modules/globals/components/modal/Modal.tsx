"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function Modal({
	className = "",
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) {
	const router = useRouter();

	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		router.back();
		e.stopPropagation();
	};

	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				router.back();
			}
		};

		document.addEventListener("keydown", handleEscape);
		return () => {
			document.removeEventListener("keydown", handleEscape);
		};
	}, [router]);

	return (
		<div
			className={`z-50 fixed inset-0 m-auto flex items-center justify-center ${className}`}
		>
			<div className="z-50 bg-zinc-900 p-8 rounded-lg shadow-lg">
				{children}
			</div>
			<div
				className="z-0 fixed inset-0 bg-black/30 select-none"
				onClick={handleClick}
			></div>
		</div>
	);
}
