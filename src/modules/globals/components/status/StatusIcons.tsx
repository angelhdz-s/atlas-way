import { CircleOutline, SolidCircleCheck, SolidCircleX } from "../Icons";

export function CompletedIcon({ className }: { className?: string }) {
	return <SolidCircleCheck className={`${className} text-complete`} />;
}

export function CanceledIcon({ className }: { className?: string }) {
	return <SolidCircleX className={`${className} text-cancel`} />;
}

export function PendingIcon({ className }: { className?: string }) {
	return <CircleOutline className={`${className}`} />;
}
