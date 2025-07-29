"use client";

import { ModalFormButtons } from "./ModalFormButtons";

export function RoutineForm() {
	return (
		<>
			<header className="ld-main-fg">New Routine</header>
			<main>
				<form className="flex flex-col gap-4">
					<label>
						Routine Name:
						<input
							type="text"
							className="w-full px-3 py-2 border rounded"
							placeholder="Enter routine name"
						/>
					</label>
					<label>
						Description:
						<textarea
							className="w-full px-3 py-2 border rounded"
							placeholder="Enter routine description"
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
