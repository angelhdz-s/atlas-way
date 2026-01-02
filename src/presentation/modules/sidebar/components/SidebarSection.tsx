export function SidebarSection({
	className = '',
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
                relative
                before:absolute before:top-0 before:left-0 before:right-0 before:w-[80%] before:h-[2px] before:mx-auto before:bg-foreground/5
                before:mask-x-from-80% before:mask-x-to-100% pb-0 pt-4 ${className}`}
		>
			<header className="mb-2 py-1 px-8">
				<h4 className="text-sm tracking-[2px] font-funnel-display font-normal ld-sec-fg uppercase">
					{name}
				</h4>
			</header>
			{children}
		</section>
	);
}
