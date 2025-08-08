import { Cog, DefaultIcon } from "./Icons";

export function SettingsButton({ className = "" }: { className?: string }) {
	return (
		<button
			type="button"
			className={`cursor-pointer animate-fade ${className}`}
		>
			<DefaultIcon Icon={Cog} />
		</button>
	);
}
