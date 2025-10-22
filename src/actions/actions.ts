'use server';

import prisma from '@/modules/globals/lib/db';
import { revalidatePath } from 'next/cache';

export async function addBodySection(form: FormData) {
	const name = form.get('name') as string;
	await prisma.bodySection.create({
		data: {
			name,
		},
	});

	revalidatePath('/');
}
