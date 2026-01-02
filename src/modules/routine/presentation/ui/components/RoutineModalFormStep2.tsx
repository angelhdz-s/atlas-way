'use client';

import { InputNumber } from '@/presentation/modules/form/components/InputNumber';
import { Label } from '@/presentation/modules/form/components/LabelInput';
import { Select } from '@/presentation/modules/form/components/Select';
import { SelectOption } from '@/presentation/modules/form/types';

export function RoutineModalFormStep2({
	title,
	daysOptions,
}: {
	title: string;
	daysOptions: SelectOption[];
}) {
	return (
		<section>
			<header className="ld-main-fg">{title}</header>
			<main className="flex items-center gap-2">
				<Label className="w-full" title="Days Plan">
					<Select name="days" options={daysOptions} multiple={false} />
				</Label>
				<Label className="w-fit" title="Days Range">
					<InputNumber
						name="daysRange"
						min={2}
						max={50}
						className="w-full px-3 py-2 border rounded"
						placeholder="7"
					/>
				</Label>
			</main>
		</section>
	);
}
