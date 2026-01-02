const INSET = {
	1: 'inset-[-1px] rounded-lg',
	2: 'inset-[-1px] rounded-[calc((var(--spacing)*2)+1px)]',
};

type BorderType = keyof typeof INSET;

/**
 *
 * @param className - Needs to recieve a `bg-color` and `mask`; if is required.
 * @param border - The border value to apply, default is 1.
 *
 */

export function Border({
	className = '',
	border = 1,
}: {
	className?: string;
	border?: BorderType;
}) {
	return <div className={`absolute ${INSET[border]} light:rounded-lg -z-1 ${className}`}></div>;
}

export function BorderBack({
	className = '',
	border = 1,
}: {
	className?: string;
	border?: BorderType;
}) {
	return (
		<>
			<div className={`absolute inset-0 rounded-lg z-0 ${className}`}></div>
			<div
				className={`absolute ${INSET[border]} rounded-[calc(var(--spacing)*2+1px)] -z-2 ${className}`}
			></div>
		</>
	);
}
