'use server';

import { ActionFailure, ActionResponse, ActionSuccess } from '@/shared/contracts/actions.response';
import { BodySection } from '../domain/bodysection.entity';
import { getContainer } from '@/di/containers';

export async function getBodySections(): ActionResponse<BodySection[]> {
	const container = getContainer();
	const usecase = container.bodySection.GetAllBodySectionUseCase;

	const result = await usecase.execute();
	if (!result.success) return ActionFailure(result.error.message);

	return ActionSuccess(result.data, 'Body sections were obtained');
}
