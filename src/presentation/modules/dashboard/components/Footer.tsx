export function Footer({ className = '' }: { className?: string }) {
	return (
		<footer className={`flex items-center gap-4 p-4 ${className}`}>
			<main className="flex gap-2 items-center">
				<h5>AtlasWay</h5>
				<p>&copy; {new Date().getFullYear()}</p>
			</main>
			<p>
				Mail us at: <a href="mailto:info@atlasway.com">info@atlasway.com</a>
			</p>
			<a href="https://www.github.com/angelhdz-s/atlas-way">GitHub Repository</a>
		</footer>
	);
}
