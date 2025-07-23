export function BentoGrid({ className = "" }: { className?: string }) {
	return (
		<section
			className={`w-full max-w-5xl mx-auto my-16 flex flex-col gap-4 ${className}`}
		>
			<h2 className="text-2xl font-bold">Explore Our Features</h2>
			<main className="grid grid-cols-4 gap-6 *:rounded-lg *:min-h-32">
				<article className="bg-zinc-900 row-span-2"></article>
				<article className="bg-zinc-900 col-span-2 row-span-3"></article>
				<article className="bg-zinc-900 row-span-2"></article>
				<article className="bg-zinc-900 row-span-2"></article>
				<article className="bg-zinc-900 row-span-2"></article>
				<article className="bg-zinc-900 row-span-3"></article>
				<article className="bg-zinc-900 row-span-3"></article>
				<article className="bg-zinc-900 row-span-2"></article>
				<article className="bg-zinc-900 row-span-2"></article>
			</main>
		</section>
	);
}
