'use client';

import { LabelInput } from '@/modules/form/components/Label/label-input';
import { SubmitButton } from './SubmitButton';

export function Login({ className = '' }: { className?: string }) {
	return (
		<main className={` ${className}`}>
			<form action="" method="post" className="flex flex-col gap-6 w-64">
				<LabelInput label="Email" name="email" type="email" inputId="user-email" required />
				<LabelInput
					label="Password"
					name="password"
					type="password"
					inputId="user-password"
					required
				/>
				<SubmitButton>Log In</SubmitButton>
				<div className="flex gap-2">
					<span className="text-sm text-zinc-500">Not having an account?</span>
					<a href="/signup" className="text-sm text-blue-500 hover:text-blue-700">
						Sign up
					</a>
				</div>
			</form>
		</main>
	);
}
