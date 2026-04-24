import type { ToastContextType } from '@/presentation/modules/toast/contexts/toast-context';
import type { ActionResponseProps } from '@/shared/presentation/action.response';

export function actionToast<T>(
  response: ActionResponseProps<T>,
  addToast: ToastContextType['addToast']
) {
  if (!response.success) {
    return addToast(response.message, {
      type: 'error',
    });
  }

  return addToast(response.message, {
    type: 'success',
  });
}
