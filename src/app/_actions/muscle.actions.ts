import { BodySection } from '@/modules/bodysection/domain/bodysection.entity';
import { GetAllMusclesByMuscularGroupUseCase } from '@/modules/muscle/application/find-muscles-by-musculargroup.usecase';
import { GetAllMuscleUseCase } from '@/modules/muscle/application/find-muscles.usecase';
import { Muscle } from '@/modules/muscle/domain/muscle.entity';
import { MusclePrismaRepository } from '@/modules/muscle/infrastructure/muscle.prisma.repository';
import { ActionResponse } from '@/shared/contracts/actions.response';
import { getMuscularGroupsByBodySection } from './musculargroup.actions';
import { GetAllMusclesByBodySectionUseCase } from '@/modules/muscle/application/find-muscles-by-bodysection.usecase';

export async function getMuscles(): ActionResponse<Muscle[]> {
	const repo = new MusclePrismaRepository();
	const usecase = new GetAllMuscleUseCase(repo);

	const muscles = await usecase.execute();

	return {
		success: true,
		message: 'Muscles were obtained successfully',
		data: muscles,
	};
}

export async function getMusclesByMuscularGroup(
	id: Muscle['muscularGroupId']
): ActionResponse<Muscle[]> {
	const repo = new MusclePrismaRepository();
	const usecase = new GetAllMusclesByMuscularGroupUseCase(repo);
	const muscles = await usecase.execute(id);

	return {
		success: true,
		message: 'Muscles were obtained successfully',
		data: muscles,
	};
}

export async function getMusclesByBodySection(id: BodySection['id']): ActionResponse<Muscle[]> {
	const repo = new MusclePrismaRepository();
	const usecase = new GetAllMusclesByBodySectionUseCase(repo);

	const muscles = await usecase.execute(id);
	return {
		success: true,
		message: '',
		data: muscles,
	};
}
