import { Barbell, BarbellOff } from "../Icons";

export function TrainingIcon({
	className = "",
	strokeWidth = "2",
}: {
	className?: string;
	strokeWidth?: string;
}) {
	return <Barbell className={className} strokeWidth={strokeWidth} />;
}

export function RestIcon({
	className = "",
	strokeWidth = "2",
}: {
	className?: string;
	strokeWidth?: string;
}) {
	return <BarbellOff className={className} strokeWidth={strokeWidth} />;
}

export function TypeDayIcon({
	className = "",
	strokeWidth = "2",
	type,
}: {
	className?: string;
	strokeWidth?: string;
	type: string;
}) {
	if (type === "training") {
		return <TrainingIcon className={className} />;
	}
	return <RestIcon className={className} strokeWidth={strokeWidth} />;
}
