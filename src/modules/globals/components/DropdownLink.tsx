"use client";

import { usePathname } from "next/navigation";
import { useId, useState } from "react";
import { HeaderLink } from "@/modules/dashboard/components/NavLink";
import styles from "@/modules/dashboard/components/sidebar/Sidebar.module.css";
import { ArrowUp } from "./Icons";
import { useSidebar } from "@/modules/dashboard/hooks/useSidebar";
import { IconTypes } from "../types.d";

function DropDownButton({
	visible,
	onClick,
	mainPath,
}: {
	visible: boolean;
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	mainPath: string;
}) {
	const pathName = usePathname();
	const childSelected = pathName.startsWith(mainPath) && pathName !== mainPath;
	const classes = `${childSelected && !visible ? "bg-primary text-main-foreground hover:text-main-foreground/50" : ""} ${mainPath}`;

	return (
		<button
			type="button"
			onClick={onClick}
			className={`grid place-content-center cursor-pointer aspect-square size-8 rounded-full transition-colors ${classes}`}
		>
			<ArrowUp
				className={`size-5 transition-transform ${visible ? "rotate-0" : "rotate-180"}`}
			/>
		</button>
	);
}

export function DropDownLink({
	className = "",
	children,
	header,
	href,
	Icon,
}: {
	className?: string;
	children: React.ReactNode;
	header: string;
	href: string;
	Icon: IconTypes;
}) {
	const id = useId();

	const { isOpen } = useSidebar();

	const [visible, setVisible] = useState<boolean>(false);

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();
		setVisible((prev) => !prev);
	};

	return (
		<div className={`mx-4`}>
			<HeaderLink href={href} Icon={Icon} label={header}>
				<DropDownButton
					onClick={handleClick}
					visible={visible}
					mainPath={href}
				/>
			</HeaderLink>
			<nav
				id={id}
				className={`flex flex-col overflow-hidden transition-[height] ${styles.nav_sub_links} ${visible ? "h-auto" : "h-0"}`}
			>
				<div className="pl-8">{children}</div>
			</nav>
		</div>
	);
}
