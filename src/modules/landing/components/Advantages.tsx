export function Advantages({ className = "" }: { className?: string }) {
	return (
		<section className={`max-w-5xl w-full mx-auto my-16 ${className}`}>
			<header>
				<h2 className="text-2xl font-bold">Why AtlasWay?</h2>
			</header>

			<main>
				<ul className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
					<li className="flex items-center gap-4">
						<header className="flex flex-col gap-2 flex-1">
							<h3>Highly Customizable</h3>
							<p>
								Tailor your workout routines and nutrition plans to fit your
								unique needs.
							</p>
						</header>
						<figure className="size-24 bg-green-500 rounded-full"></figure>
					</li>

					<li className="flex items-center gap-4">
						<header className="flex flex-col gap-2 flex-1">
							<h3>Highly Customizable</h3>
							<p>
								Tailor your workout routines and nutrition plans to fit your
								unique needs.
							</p>
						</header>
						<figure className="size-24 bg-green-500 rounded-full"></figure>
					</li>

					<li className="flex items-center gap-4">
						<header className="flex flex-col gap-2 flex-1">
							<h3>Highly Customizable</h3>
							<p>
								Tailor your workout routines and nutrition plans to fit your
								unique needs.
							</p>
						</header>
						<figure className="size-24 bg-green-500 rounded-full"></figure>
					</li>

					<li className="flex items-center gap-4">
						<header className="flex flex-col gap-2 flex-1">
							<h3>Highly Customizable</h3>
							<p>
								Tailor your workout routines and nutrition plans to fit your
								unique needs.
							</p>
						</header>
						<figure className="size-24 bg-green-500 rounded-full"></figure>
					</li>
				</ul>
			</main>
		</section>
	);
}
