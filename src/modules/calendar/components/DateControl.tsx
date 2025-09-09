import { ArrowUp } from "@/modules/globals/components/Icons";
import { ArrowButton } from "./ArrowButton";

type DateControlProps = {
	className?: string;
	children: React.ReactNode;
	onLeftClick?: () => void;
	onRightClick?: () => void;
};

const iconSize = "size-4";

export function DateControl({
	className = "",
	children,
	onLeftClick,
	onRightClick,
}: DateControlProps) {
	return (
		<div className={`flex items-center h-full ${className}`}>
			<ArrowButton className="rounded-l" onClick={onLeftClick}>
				<ArrowUp className={`${iconSize} -rotate-90`} strokeWidth="2" />
			</ArrowButton>
			{children}
			<ArrowButton className="rounded-r" onClick={onRightClick}>
				<ArrowUp className={`${iconSize} rotate-90`} strokeWidth="2" />
			</ArrowButton>
		</div>
	);
}
