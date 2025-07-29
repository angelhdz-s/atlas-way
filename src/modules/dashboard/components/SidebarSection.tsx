export function SidebarSection({
	className = "",
	children,
	name,
}: {
	className?: string;
	children: React.ReactNode;
	name: string;
}) {
	return (
		<section
			className={`
                relative pb-4 pt-6
                before:absolute before:top-0 before:left-0 before:right-0 before:w-[80%] before:h-[2px] before:mx-auto before:bg-foreground/[0.05]
                before:mask-x-from-80% before:mask-x-to-100% ${className}`}
		>
			<header className="px-8 py-1 mb-2">
				<h4 className="text-sm tracking-[2px] font-funnel-display font-normal ld-sec-fg uppercase">
					{name}
				</h4>
			</header>
			{children}
		</section>
	);
}
