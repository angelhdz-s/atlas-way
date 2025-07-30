export function AtlasWayLogo({ className = "" }: { className?: string }) {
	return (
		<div className={`flex tracking-tight font-black ${className}`}>
			<span className="pr-[0.5%] bg-gradient-to-t ld-main-fg-gradient bg-clip-text text-transparent">
				Atlas
			</span>
			<span className="-ml-[1.5%] translate-y-[2%] pr-[0.5%] bg-gradient-to-t from-red-700 to-red-500 light:from-red-800 light:to-red-500 bg-clip-text text-transparent">
				Way
			</span>
		</div>
	);
}
