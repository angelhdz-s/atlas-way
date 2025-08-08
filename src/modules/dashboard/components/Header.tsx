"use client";

import { useSidebar } from "@/modules/dashboard/hooks/useSidebar";
import { Bars3 } from "@/modules/globals/components/Icons";
import { Breadcrumb } from "./Breadcrumb";
import { ToggleTheme } from "@/modules/globals/components/ToggleTheme";
import { LangButton } from "@/modules/globals/components/LangButton";
import { SettingsButton } from "@/modules/globals/components/SettingsButton";
import { UserInfo } from "./UserInfo";
import { NotificationsButton } from "./NotificationsButton";

export function Header({ className = "" }: { className?: string }) {
	const { toggleOpen } = useSidebar();

	return (
		<header
			className={`grid grid-cols-[1fr_auto_1fr] ld-sec-bg px-2 gap-4 font-funnel-display ${className} h-14`}
		>
			<main className="flex items-center gap-4 h-full">
				<button
					type="button"
					onClick={toggleOpen}
					className="cursor-pointer p-2"
				>
					<Bars3 className="size-6 ld-main-fg" />
				</button>
				<Breadcrumb />
			</main>
			<div className="flex items-center gap-2 h-full">
				<input
					type="search"
					placeholder="Search"
					className="flex-1 h-8 px-4 rounded-4xl border-1 border-current/20 outline-none"
				/>
				<aside className="flex items-center">
					<NotificationsButton className="p-2 rounded-full" />
					<SettingsButton className="p-2 rounded-full" />
					<ToggleTheme className="p-2 rounded-full" />
					<LangButton className="p-2 rounded-full" />
				</aside>
			</div>
			<aside className="flex items-center justify-end gap-2 h-full">
				<UserInfo />
			</aside>
		</header>
	);
}
