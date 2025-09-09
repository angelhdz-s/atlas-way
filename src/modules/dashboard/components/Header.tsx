"use client";

import { useSidebar } from "@/modules/sidebar/hooks/useSidebar";
import { LayoutSidebar } from "@/modules/globals/components/Icons";
import { Breadcrumb } from "./Breadcrumb";
import { ToggleTheme } from "@/modules/globals/components/ToggleTheme";
import { LangButton } from "@/modules/globals/components/LangButton";
import { SettingsButton } from "@/modules/globals/components/SettingsButton";
import { UserInfo } from "./UserInfo";
import { NotificationsButton } from "../../notifications/components/NotificationsButton";
import Link from "next/link";
import { Imagotype } from "@/modules/globals/components/AtlasWayLogo";
import { Users } from "@/prisma/client";

export function Header({
	user,
	className = "",
}: {
	user?: Users;
	className?: string;
}) {
	const { isOpen, toggleOpen } = useSidebar();

	return (
		<header className="h-[var(--header-height)] w-full">
			<main
				className={`fixed top-0 left-0 z-10 w-full grid grid-cols-[1fr_auto_1fr] ld-sec-bg pr-2 gap-4 font-funnel-display ${className} h-[var(--header-height)]`}
			>
				<section className="flex items-center gap-2 h-full">
					<main
						className={`flex justify-between items-center gap-0 h-full ${isOpen ? "pl-4 w-[var(--sidebar-width)]" : ""} `}
					>
						<Link
							href="/"
							className={`flex items-center gap-2 font-light font-funnel-display ${isOpen ? "" : "justify-center w-14"}`}
						>
							<Imagotype closed={!isOpen} />
						</Link>
						<button
							type="button"
							onClick={toggleOpen}
							className="cursor-pointer p-2"
						>
							<LayoutSidebar className="size-6 ld-main-fg" />
						</button>
					</main>
					<Breadcrumb />
				</section>
				<section className="flex items-center gap-2 h-full">
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
				</section>
				<section className="flex items-center justify-end gap-2 h-full">
					<UserInfo user={user} />
				</section>
			</main>
		</header>
	);
}
