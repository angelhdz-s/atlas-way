export function Footer({ className = '' }: { className?: string }) {
	return (
		<footer className={`w-full mt-16 h-48 bg-middle flex items-center ${className}`}>
			<main className="fg-strong max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 md:gap-16">
				<aside>
					<h5 className="text-2xl">
						<strong className="font-funnel-display">AtlasWay</strong> &copy;{' '}
						{new Date().getFullYear()}
					</h5>
				</aside>

				<main>
					<a href="https://www.github.com/angelhdz-s/atlas-way">GitHub Repository</a>
				</main>
			</main>
		</footer>
	);
}
