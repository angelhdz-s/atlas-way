import { useSidebar } from "@/modules/sidebar/hooks/useSidebar";

export function SidebarSection({
	className = "",
	children,
	name,
}: {
	className?: string;
	children: React.ReactNode;
	name: string;
}) {
	const { isOpen } = useSidebar();
	return (
		<section
			className={`
                relative
                before:absolute before:top-0 before:left-0 before:right-0 before:w-[80%] before:h-[2px] before:mx-auto before:bg-foreground/[0.05]
                before:mask-x-from-80% before:mask-x-to-100% ${isOpen ? "pb-0 pt-4" : "pb-1 before:w-[90%] before:mask-none"} ${className}`}
		>
			<header
				className={`mb-2 ${isOpen ? "py-1 px-8" : "p-0 m-0 w-fit mx-auto"}`}
			>
				<h4
					className={`text-sm tracking-[2px] font-funnel-display font-normal ld-sec-fg uppercase ${isOpen ? "" : "opacity-0 hidden"}`}
				>
					{name}
				</h4>
			</header>
			{children}
		</section>
	);
}
