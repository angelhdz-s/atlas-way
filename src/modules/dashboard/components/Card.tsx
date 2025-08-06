export function Card({
	className = "",
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) {
	return (
		<article className={`p-4 rounded-xl bg-zinc-800 ${className}`}>
			{children}
		</article>
	);
}

export function DashboardCard({ children }: { children: React.ReactNode }) {
	return (
		<article
			className="
			p-8 bg-background light:bg-light-sec-background border-1 border-foreground/10 
			shadow-xl shadow-black/[0.05] flex flex-col gap-6 w-90 rounded-xl tracking-tight
			"
		>
			{children}
		</article>
	);
}

export function DashboardCardHeader({
	title,
	decoration,
	children,
}: {
	title: string;
	decoration: React.ReactNode;
	children: React.ReactNode;
}) {
	return (
		<header>
			<main className="flex items-center justify-between gap-2">
				<h2 className="text-3xl font-funnel-display font-medium ld-main-fg whitespace-nowrap text-ellipsis overflow-hidden tracking-tight pr-1 pb-1">
					{title}
				</h2>
				{decoration}
			</main>
			{children}
		</header>
	);
}

export function DashboardCardSubHeader({
	children,
	description,
}: {
	children: React.ReactNode;
	description: string;
}) {
	return (
		<footer className="flex flex-col gap-1 text-lg font-light">
			<main className="ld-sub-fg">{children}</main>
			<p>{description}</p>
		</footer>
	);
}

export function DashboardCardMain({ children }: { children: React.ReactNode }) {
	return <main className="flex-1 flex flex-col gap-6">{children}</main>;
}

export function DashboardCardFooter({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<footer className="flex items-center gap-2 text-sm">{children}</footer>
	);
}

export function DashboardCardButton({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<button
			type="button"
			className="flex items-center gap-1 btn-md btn-subtle ml-auto"
		>
			{children}
		</button>
	);
}
