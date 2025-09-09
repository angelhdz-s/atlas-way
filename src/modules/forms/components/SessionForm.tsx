import { ModalFormButtons } from "./ModalFormButtons";

export function SessionForm() {
	return (
		<>
			<header className="ld-main-fg">New Session</header>
			<main>
				<form className="flex flex-col gap-4">
					<label>
						Session Name:
						<input
							type="text"
							className="w-full px-3 py-2 border rounded"
							placeholder="Enter Session name"
						/>
					</label>
					<label>
						Description:
						<textarea
							className="w-full px-3 py-2 border rounded"
							placeholder="Enter Session description"
						></textarea>
					</label>
					<footer className="flex gap-2 *:px-4 *:py-2 *:rounded *:w-full *:border-2">
						<ModalFormButtons />
					</footer>
				</form>
			</main>
		</>
	);
}
