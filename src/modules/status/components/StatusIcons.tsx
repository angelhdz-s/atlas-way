import {
	CircleOutline,
	SolidCircleCheck,
	SolidCircleX,
} from "../../globals/components/Icons";

export function CompletedIcon({ className }: { className?: string }) {
	return <SolidCircleCheck className={`${className} text-complete`} />;
}

export function CanceledIcon({ className }: { className?: string }) {
	return <SolidCircleX className={`${className} text-cancel`} />;
}

export function PendingIcon({ className }: { className?: string }) {
	return <CircleOutline className={`${className}`} />;
}

export function StatusIcon({
	status,
	className = "",
}: {
	status: string;
	className?: string;
}) {
	if (status === "completed") {
		return <CompletedIcon className={className} />;
	}
	if (status === "canceled") {
		return <CanceledIcon className={className} />;
	}
	return <PendingIcon className={className} />;
}
