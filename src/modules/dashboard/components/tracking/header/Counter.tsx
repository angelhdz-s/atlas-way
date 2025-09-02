import { IconTypes } from "@/modules/globals/types";

export function Counter({
	className,
	number,
}: {
	className?: string;
	number: number;
}) {
	return (
		<span
			className={`font-funnel-display text-3xl font-medium p-0.5 text-accent leading-[1] ${className}`}
		>
			{number}
		</span>
	);
}

export function CounterIcon({ icon: Icon }: { icon: IconTypes }) {
	return <Icon className="size-8 text-accent" strokeWidth="2" />;
}
