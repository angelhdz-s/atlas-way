"use client";

import { ToggleTheme } from "@/modules/globals/components/ToggleTheme";
import { useToast } from "@/modules/globals/hooks/useToast";

export function Header({
	className = "",
	title,
}: {
	className?: string;
	title: string;
}) {
	const { addToast } = useToast();

	const handleClick = () => {
		addToast("Hello from the header!");
	};
	return (
		<header
			className={`ld-sec-bg flex items-center px-8 gap-4 py-4 font-funnel-display ${className}`}
		>
			<h3 className="text-lg font-bold ld-main-fg">{title}</h3>
			<input
				type="search"
				placeholder="Search"
				className="flex-1 h-8 px-4 rounded-4xl border-1 border-current/20 outline-none"
			/>
			<aside className="flex items-center gap-4">
				<ToggleTheme />
				<button type="button" onClick={handleClick}>
					About
				</button>
			</aside>
		</header>
	);
}
