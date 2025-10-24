import { useEffect, useState } from 'react';

function RadiobuttonMark({ isChecked }: { isChecked: boolean }) {
	const borderColor = isChecked ? 'border-white' : 'border-subtle';
	const backgroundColor = isChecked ? 'bg-white' : 'bg-transparent';
	return (
		<div
			className={`relative block size-4 rounded-full border-1 transition-colors ${borderColor}`}
		>
			<div
				className={`absolute inset-0 m-auto size-2 rounded-full transition-colors ${backgroundColor}`}
			/>
		</div>
	);
}

type RadiobuttonProps = {
	className?: string;
	label: string;
	value: string;
	checked?: boolean;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export function Radiobutton({
	className = '',
	label,
	value,
	checked = false,
	onChange,
	...props
}: RadiobuttonProps) {
	const [isChecked, setIsChecked] = useState(checked);

	const labelCheckedClass = isChecked
		? 'ld-main-fg border-subtle'
		: 'text-foreground/50 border-subtle/40';

	useEffect(() => {
		if (checked !== isChecked) setIsChecked(checked);
	}, [checked, isChecked]);

	return (
		<label
			className={`flex items-center gap-2 py-1 px-2 rounded border-1 transition-colors ${labelCheckedClass} ${className}`}
		>
			<RadiobuttonMark isChecked={isChecked} />
			<input
				checked={isChecked}
				type="radio"
				value={value}
				onChange={onChange}
				className="hidden"
				{...props}
			/>
			<span>{label}</span>
		</label>
	);
}
