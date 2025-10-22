import Link from 'next/link';

export function Try({ className = '' }: { className?: string }) {
	return (
		<section
			className={`max-w-5xl w-full mx-auto grid place-items-center gap-4 ld-main-fg my-16 ${className}`}
		>
			<h2 className="text-2xl font-bold">Try for free</h2>
			<main className="*:rounded-4xl *:py-2 *:px-4 *:cursor-pointer flex items-center justify-center gap-4 w-fit">
				<Link href="/dashboard" className="btn-lg btn-primary">
					<span className="text-lg font-semibold">Get Started</span>
				</Link>
				<Link href="/login" className="btn-lg btn-primary-outline">
					<span className="text-lg font-semibold">Log In</span>
				</Link>
			</main>
		</section>
	);
}
