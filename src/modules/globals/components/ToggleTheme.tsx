"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "./Icons";
import { THEME } from "@/constants/client";

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
			className={`cursor-pointer ${className}`}
			onClick={handleClick}
		>
			{theme === THEME.DARK && <Sun className="size-6" />}
			{theme === THEME.LIGHT && <Moon className="size-6" />}
		</button>
	) : (
		<div className="size-6" />
	);
}
