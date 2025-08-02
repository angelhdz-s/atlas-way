"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { THEME } from "@/constants/client";
import { Moon, Sun } from "@/modules/globals/components/Icons";

export function ToggleTheme({ className = "" }: { className?: string }) {
	const [mount, setMount] = useState(false);
	const { theme, setTheme } = useTheme();

	const handleClick = () => {
		setTheme(theme === THEME.DARK ? THEME.LIGHT : THEME.DARK);
	};

	useEffect(() => {
		setMount(true);
	}, []);

	return mount ? (
		<button
			type="button"
			className={`cursor-pointer animate-fade ${className}`}
			onClick={handleClick}
		>
			{theme === THEME.DARK && <Sun className="size-6" />}
			{theme === THEME.LIGHT && <Moon className="size-6" />}
		</button>
	) : (
		<div className={className}>
			<div className="size-6"></div>
		</div>
	);
}
