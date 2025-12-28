'use server';

import { ActionFailure, ActionResponse, ActionSuccess } from '@/shared/contracts/actions.response';
import { BodySection } from '../domain/bodysection.entity';
import { Containers } from '@/di/containers';

export async function getBodySections(): ActionResponse<BodySection[]> {
	const usecase = Containers.BodySections.GetAllBodySectionUseCase;

	const result = await usecase.execute();
	if (!result.success) return ActionFailure(result.error.message);

	return ActionSuccess(result.data, 'Body sections were obtained');
}
