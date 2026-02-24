'use client';

import { redirect } from 'next/navigation';

export function LogInButton() {
	const handleSignIn = () => {
		redirect('/api/auth/signin');
	};
	return (
		<button
			type="button"
			className="rounded-full btn-md btn-primary-outline py-1.5 whitespace-nowrap "
			onClick={handleSignIn}
		>
			Log in
		</button>
	);
}
