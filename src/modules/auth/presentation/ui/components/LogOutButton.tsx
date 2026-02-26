'use client';

import { redirect } from 'next/navigation';

export function LogOutButton() {
	const handleSignOut = () => {
		redirect('/api/auth/signout');
	};
	return (
		<button
			type="button"
			className="cursor-pointer btn-md pl-0 py-1.5
			whitespace-nowrap
			hover:fg-strong transition-colors"
			onClick={handleSignOut}
		>
			Log Out
		</button>
	);
}
