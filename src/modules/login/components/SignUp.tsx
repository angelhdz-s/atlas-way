import { LabelInput } from "@/modules/forms/components/Label/label-input";
import { SubmitButton } from "./SubmitButton";

export function SignUp({ className = "" }: { className?: string }) {
	return (
		<main className={` ${className}`}>
			<form method="post" className="flex flex-col gap-4 w-64">
				<LabelInput
					label="Name"
					name="name"
					type="text"
					inputId="user-name"
					required
				/>
				<LabelInput
					label="Email"
					name="email"
					type="email"
					inputId="user-email"
					required
				/>
				<LabelInput
					label="Password"
					name="password"
					type="password"
					inputId="user-password"
					required
				/>
				<LabelInput
					label="Repeat Password"
					name="repeat-password"
					type="password"
					inputId="user-repeat-password"
					required
				/>
				<SubmitButton>Sign Up</SubmitButton>
				<div className="flex gap-2">
					<span className="text-sm text-zinc-500">Having an account?</span>
					<a
						href="/login"
						className="text-sm text-blue-500 hover:text-blue-700"
					>
						Log In
					</a>
				</div>
			</form>
		</main>
	);
}
