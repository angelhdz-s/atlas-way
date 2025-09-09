"use client";

import { SidebarAnalyticsSection } from "@/modules/sidebar/components/SidebarAnalyticsSection";
import { SidebarFooter } from "@/modules/sidebar/components/SidebarFooter";
import { SidebarHeader } from "@/modules/sidebar/components/SidebarHeader";
import { SidebarMainSection } from "@/modules/sidebar/components/SidebarMainSection";
import { useSidebar } from "@/modules/sidebar/hooks/useSidebar";

export function Sidebar({ className = "" }: { className?: string }) {
	const { isOpen } = useSidebar();

	return (
		<aside className={`${isOpen ? "w-[var(--sidebar-width)]" : "w-14"}`}>
			<main
				className={`
					py-2 fixed z-10 left-0 top-[var(--header-height)] h-[var(--sidebar-height)] 
					flex flex-col ld-sec-bg shadow-2xl shadow-black/[0.05] font-normal font-funnel-display 
					before:absolute before:inset-0 before:bottom-auto before:h-[1px] before:w-[80%] before:mx-auto before:bg-subtle/10
					${isOpen ? "w-[var(--sidebar-width)] gap-4" : "gap-1.5 w-14"} ${className}
					`}
			>
				<SidebarHeader />

				<main className={`flex-1 flex flex-col ${isOpen ? "gap-4" : ""}`}>
					<SidebarMainSection />

					<SidebarAnalyticsSection />
				</main>

				<SidebarFooter />
			</main>
		</aside>
	);
}
