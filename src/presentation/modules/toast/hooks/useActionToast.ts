'use client';

import { useToast } from '@/presentation/modules/toast/hooks/useToast';
import { actionToast } from '@/shared/presentation/ui/utils/action.toast';
import type { ActionResponse } from '@/shared/presentation/action.response';

export function useActionToast<T>(reponse: () => ActionResponse<T>) {
  const { addToast } = useToast();
  const handleAction = async () => {
    const actionResult = await reponse();
    actionToast(actionResult, addToast);
  };

  return {
    handleAction,
  };
}
