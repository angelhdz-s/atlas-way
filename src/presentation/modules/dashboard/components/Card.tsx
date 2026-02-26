export function Card({
	className = '',
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) {
	return <article className={`p-4 rounded-xl bg-zinc-800 ${className}`}>{children}</article>;
}

const CARD_TYPE_CLASSES = {
	default: 'bg-back border border-bd-default',
	disabled: 'bg-back border border-bd-default opacity-50',
	main: 'bg-primary fg-strong-light light:fg-strong-dark border border-primary',
	special: 'bg-accent fg-strong-light light:fg-strong-dark border border-accent',
};

export type CardHighlightType = keyof typeof CARD_TYPE_CLASSES;

function getCardHighlightClass(type: CardHighlightType = 'default') {
	return CARD_TYPE_CLASSES[type];
}

export type DashboardCardSize = 'xs' | 'sm' | 'md' | 'lg';

function getWidthClass(size: DashboardCardSize) {
	if (size === 'xs') return 'w-40';
	if (size === 'sm') return 'w-60';
	if (size === 'md') return 'w-75';
	return 'w-92';
}

export function DashboardCard({
	children,
	type,
	size = 'lg',
}: {
	children: React.ReactNode;
	type?: CardHighlightType;
	size?: DashboardCardSize;
}) {
	const className = getCardHighlightClass(type);
	const widthClass = getWidthClass(size);

	return (
		<article
			className={`
				p-8 
			shadow-xl shadow-black/5 flex flex-col gap-6 rounded-xl tracking-tight ${widthClass} ${className}
				`}
		>
			{children}
		</article>
	);
}

export function DashboardCardHeader({
	title,
	children,
	decoration,
}: {
	title: string;
	children?: React.ReactNode;
	decoration?: React.ReactNode;
}) {
	return (
		<header>
			<main className="flex items-center justify-between gap-2">
				<h2 className="text-3xl font-funnel-display font-medium fg-strong whitespace-nowrap text-ellipsis overflow-hidden tracking-tight pr-1 pb-1">
					{title}
				</h2>
				{decoration}
			</main>
			{children}
		</header>
	);
}

function StatisticsSeparator({ value }: { value?: string }) {
	return (
		<>
			<li className="flex items-center">
				<span className="block w-px h-4 bg-subtle/50"></span>
			</li>
			<li>{value}</li>
		</>
	);
}

type CountersType = [string?, string?, string?];

function StatisticsTags({ counters }: { counters?: CountersType }) {
	return counters?.map((counter, index) =>
		index === 0 ? (
			<li key={index}>{counter}</li>
		) : (
			<StatisticsSeparator key={index} value={counter} />
		)
	);
}

export function DashboardCardSubHeader({
	description,
	counters,
}: {
	description: string;
	counters?: CountersType;
}) {
	return (
		<footer className="flex flex-col gap-1 text-lg font-light">
			{counters && counters.length > 0 && (
				<main className="fg-muted">
					<ul className="text-base flex justify-between gap-2">
						<StatisticsTags counters={counters} />
					</ul>
				</main>
			)}
			<p>{description}</p>
		</footer>
	);
}

export function DashboardCardMain({ children }: { children: React.ReactNode }) {
	return <main className="flex-1 flex flex-col gap-6">{children}</main>;
}

export function DashboardCardFooter({ children }: { children: React.ReactNode }) {
	return <footer className="flex items-center gap-2 text-sm">{children}</footer>;
}

export function DashboardCardButton({ children }: { children: React.ReactNode }) {
	return (
		<button type="button" className="flex items-center gap-1 btn-md btn-subtle ml-auto">
			{children}
		</button>
	);
}

type DashboardCardTagValueType = string | React.ReactNode;

type DashboardCardTagType = {
	selected: boolean;
	value: DashboardCardTagValueType;
};

export function DashboardCardTags({ values }: { values: DashboardCardTagType[] }) {
	return (
		<ul className="flex flex-wrap gap-1">
			{values.map((tag, index) => (
				<DashboardCardTag key={index} tag={tag} />
			))}
		</ul>
	);
}

export function DashboardCardTag({ tag }: { tag: DashboardCardTagType }) {
	const { value, selected } = tag;
	const className = selected
		? 'bg-accent fg-strong-light light:fg-strong-dark'
		: 'bg-front fg-strong';
	return <li className={`px-3 py-1 rounded-full text-sm font-light ${className}`}>{value}</li>;
}
