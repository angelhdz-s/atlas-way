export function Hero({ className = "" }: { className?: string }) {
	return (
		<section
			className={`max-w-5xl w-full mx-auto flex items-center justify-between gap-4 py-16 mb-16 ${className}`}
		>
			<header className="flex flex-col gap-4">
				<h1 className="text-4xl font-bold">Welcome to AtlasWay!</h1>
				<p className="max-w-xl">
					{`
                AtlasWay is your go-to platform for tracking workouts, exercises,
                and nutrition. Whether you're a beginner or a seasoned athlete, we
                provide the tools you need to achieve your fitness goals.
              `}
				</p>
			</header>
			<aside className="">
				<figure className="size-82 bg-blue-500 rounded-full"></figure>
			</aside>
		</section>
	);
}
