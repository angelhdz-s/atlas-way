"use client";

import { SidebarAnalyticsSection } from "@/modules/dashboard/components/sidebar/SidebarAnalyticsSection";
import { SidebarFooter } from "@/modules/dashboard/components/sidebar/SidebarFooter";
import { SidebarHeader } from "@/modules/dashboard/components/sidebar/SidebarHeader";
import { SidebarMainSection } from "@/modules/dashboard/components/sidebar/SidebarMainSection";
import { useSidebar } from "../../hooks/useSidebar";

export function Sidebar({ className = "" }: { className?: string }) {
	const { isOpen } = useSidebar();
	return (
		<aside className={`${isOpen ? "w-74" : "w-14"}`}>
			<main
				className={`fixed z-2 top-0 left-0 bottom-0 h-full flex flex-col ld-sec-bg shadow-2xl shadow-black/[0.05] font-normal font-funnel-display ${isOpen ? "w-74 gap-4" : "gap-1.5 w-14"} ${className}`}
			>
				<SidebarHeader />

				<main className={`flex-1 flex flex-col ${isOpen ? "gap-4" : ""}`}>
					<SidebarMainSection />

					<SidebarAnalyticsSection />
				</main>

				<SidebarFooter name="Angel Sotelo" email="useremail@example.com" />
			</main>
		</aside>
	);
}
