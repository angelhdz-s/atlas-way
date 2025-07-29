export function Footer({ className = "" }: { className?: string }) {
	return (
		<footer
			className={`w-full mt-16 h-48 bg-zinc-900 flex items-center ${className}`}
		>
			<main className="max-w-5xl mx-auto flex items-center justify-between gap-16">
				<aside>
					<h5 className="text-2xl">
						<strong>AtlasWay</strong> &copy; {new Date().getFullYear()}
					</h5>
				</aside>

				<main>
					<a href="https://www.github.com/angelhdz-s/atlas-way">
						GitHub Repository
					</a>
				</main>
			</main>
		</footer>
	);
}
