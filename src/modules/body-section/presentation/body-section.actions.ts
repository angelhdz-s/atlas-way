'use server';

import {
  ActionFailure,
  type ActionResponse,
  ActionSuccess,
} from '@/shared/presentation/action.response';
import type { BodySection } from '../domain/body-section.entity';
import { getContainer } from '@/di/containers';

export async function getBodySections(): ActionResponse<BodySection[]> {
  const container = getContainer();
  const getAllBodySections = container.bodySection.GetAllBodySectionUseCase;

  const bodySectionsResult = await getAllBodySections.execute();
  if (!bodySectionsResult.success) return ActionFailure(bodySectionsResult.error.message);

  return ActionSuccess(bodySectionsResult.data, 'Body sections were obtained');
}
