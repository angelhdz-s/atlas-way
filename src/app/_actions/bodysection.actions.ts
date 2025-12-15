'use server';

import { GetAllBodySectionsWithMuscularGroupsUseCase } from '@/modules/bodysection/application/get-bodysections-w-musculargroups.usecase';
import { GetAllBodySectionsUseCase } from '@/modules/bodysection/application/get-bodysections.usecase';
import {
	BodySection,
	BodySectionWithMuscularGroups,
} from '@/modules/bodysection/domain/bodysection.entity';
import { BodySectionPrismaReporisoty } from '@/modules/bodysection/infrastructure/bodysection.prisma.repository';
import { ActionResponse } from '@/shared/contracts/actions.response';

export async function getBodySections(): ActionResponse<BodySection[]> {
	const repo = new BodySectionPrismaReporisoty();
	const usecase = new GetAllBodySectionsUseCase(repo);

	const bodySections = await usecase.execute();

	return {
		success: true,
		message: 'Body sections were obtained',
		data: bodySections,
	};
}

export async function getBodySectionsWithMuscularGroups(): ActionResponse<
	BodySectionWithMuscularGroups[]
> {
	const repo = new BodySectionPrismaReporisoty();
	const usecase = new GetAllBodySectionsWithMuscularGroupsUseCase(repo);

	const bodySections = await usecase.execute();

	return {
		success: true,
		message: 'Body sections were obtained',
		data: bodySections,
	};
}
