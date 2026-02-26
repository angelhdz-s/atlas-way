export function NavLinkBody({ title }: { title: React.ReactNode }) {
	return (
		<div
			className="absolute z-50 h-full left-16 top-0 
            rounded bg-middle hidden
            group-hover:grid place-content-center
            "
			style={{
				clipPath:
					"path('M 10,0 A 5,5 0,0,0 5,5 L 5,16 A 5,5 0,0,1 0,21 A 5,5 0,0,1 5,26 L 5,36 A 5,5 0,0,0 10,40 L 500,40 L 500,0 Z')",
			}}
		>
			<span className="pr-4 pl-[18px] flex items-center gap-2 whitespace-nowrap">
				{title}
			</span>
		</div>
	);
}
