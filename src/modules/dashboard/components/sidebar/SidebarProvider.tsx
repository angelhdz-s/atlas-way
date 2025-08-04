"use client";

import { useState } from "react";
import { SidebarContext } from "../../context/sidebar-context";

export function SidebarProvider({ children }: { children: React.ReactNode }) {
	const [isOpen, setIsOpen] = useState<boolean>(true);

	const toggleOpen = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<SidebarContext.Provider value={{ isOpen, toggleOpen }}>
			{children}
		</SidebarContext.Provider>
	);
}
