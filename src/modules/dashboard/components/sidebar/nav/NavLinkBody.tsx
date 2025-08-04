export function NavLinkBody({ title }: { title: React.ReactNode }) {
	return (
		<div
			className="absolute h-full left-16 top-0 
            rounded ld-sec-bg border-1 border-foreground/10
            hidden group-hover:grid place-content-center
            "
		>
			<span className="px-4 flex items-center gap-2 whitespace-nowrap">
				{title}
			</span>
		</div>
	);
}
