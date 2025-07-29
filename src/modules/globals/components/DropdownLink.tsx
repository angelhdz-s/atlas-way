"use client";

import { usePathname } from "next/navigation";
import { useId, useState } from "react";
import { NavLink } from "@/modules/dashboard/components/NavLink";
import styles from "@/modules/dashboard/components/Sidebar.module.css";
import { ArrowUp } from "./Icons";

export function DropDownLink({
	className = "",
	children,
	header,
	href,
}: {
	className?: string;
	children: React.ReactNode;
	header: React.ReactNode;
	href: string;
}) {
	const id = useId();

	const pathname = usePathname();

	const [visible, setVisible] = useState<boolean>(false);

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();
		setVisible((prev) => !prev);
	};

	return (
		<li className={`${className} ${styles.dropdown_link}`}>
			<header className="flex items-center w-full transition-colors hover:bg-foreground/10">
				<NavLink
					href={href}
					className={`flex-1 hover:bg-transparent ${styles.nav_link}`}
				>
					{header}
				</NavLink>
				<button
					type="button"
					onClick={handleClick}
					className={`p-2 cursor-pointer text-foreground/70 light:text-light-main-foreground/70 hover:text-current/50  transition-colors ${pathname !== href && pathname.startsWith(href) ? "ld-main-fg" : ""}`}
				>
					<ArrowUp
						className={`size-5 mr-2 transition-transform ${visible ? "rotate-0" : "rotate-180"}`}
					/>
				</button>
			</header>
			<nav
				id={id}
				className={`flex flex-col *:text-base overflow-hidden transition-[height] ${styles.nav_sub_links} ${visible ? "h-auto" : "h-0"}`}
			>
				{children}
			</nav>
		</li>
	);
}
