'use client';

import { useFormStatus } from 'react-dom';

export function SubmitButton({ children }: { children: string }) {
	const { pending } = useFormStatus();
	return (
		<button
			type="submit"
			className="h-12 bg-red-600 rounded-4xl cursor-pointer hover:bg-red-700 transition-colors disabled:opacity-50"
			disabled={pending}
		>
			<span className="text-lg font-semibold">{children}</span>
		</button>
	);
}
