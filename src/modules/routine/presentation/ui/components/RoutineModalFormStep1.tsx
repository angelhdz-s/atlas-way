'use client';

import { Box } from '@/presentation/modules/form/components/Box';
import { Label } from '@/presentation/modules/form/components/LabelInput';
import { Edit, Trash } from '@/presentation/globals/components/Icons';

export function RoutineModalFormStep1({ title }: { title: string }) {
	return (
		<form>
			<header className="ld-main-fg">{title}</header>
			<section className="flex flex-col gap-2">
				<Label title="Sessiones">
					<Box>
						<div>
							<div className="flex items-center justify-between gap-2 p-2 bg-subtle rounded">
								<main>
									<span>Push, Pull, Legs</span>
								</main>
								<aside className="flex items-center gap-2">
									<button>
										<Edit className="size-5" strokeWidth="1" />
									</button>
									<button>
										<Trash className="size-5" strokeWidth="1" />
									</button>
								</aside>
							</div>
							<input type="hidden" name="session.0" />
						</div>
					</Box>
				</Label>
			</section>
		</form>
	);
}
