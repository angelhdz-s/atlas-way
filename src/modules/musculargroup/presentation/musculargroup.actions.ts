import { GetAllMuscularGroupUseCase } from '@/modules/musculargroup/application/get-musculargroup.usecase';
import { GetAllMuscularGroupByBodySectionUseCase } from '@/modules/musculargroup/application/get-musculargroups-by-bodysection.usecase';
import { MuscularGroup } from '@/modules/musculargroup/domain/musculargroup.entity';
import { MuscularGroupPrismaReporitory } from '@/modules/musculargroup/infrastructure/musculargroup.prisma.repository';
import { ActionResponse } from '@/shared/contracts/actions.response';

export async function getMuscularGroups(): ActionResponse<MuscularGroup[]> {
	const repo = new MuscularGroupPrismaReporitory();
	const usecase = new GetAllMuscularGroupUseCase(repo);
	const musculargroups = await usecase.execute();

	return {
		success: true,
		message: 'Muscular groups were obtained successfully',
		data: musculargroups,
	};
}

export async function getMuscularGroupsByBodySection(
	id: MuscularGroup['bodySectionId']
): ActionResponse<MuscularGroup[]> {
	const repo = new MuscularGroupPrismaReporitory();
	const usecase = new GetAllMuscularGroupByBodySectionUseCase(repo);
	const musculargroups = await usecase.execute(id);
	return {
		success: true,
		message: 'Muscular groups were obtained successfully',
		data: musculargroups,
	};
}
