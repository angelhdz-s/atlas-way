'use client';

import { useRouter } from 'next/navigation';
import { ModalForm } from '@/presentation/modules/form/components/modal-form/ModalForm';
import { ModalFormButtons } from '@/presentation/modules/form/components/modal-form/ModalFormButtons';
import type { SelectOption } from '@/presentation/modules/form/types';
import { createSessionAction } from '../../session.actions';
import { sessionFormSchema } from '../config/session-schema';
import { SessionDescription } from './fields/SessionDescription';
import { SessionName } from './fields/SessionName';
import { SessionExercises } from './fields/SessionExercises';

export function SessionModalForm({ exercises }: { exercises: SelectOption[] }) {
  const router = useRouter();
  const handleSuccess = () => {
    router.back();
  };

  const handleClose = () => {
    router.back();
  };

  const config = {
    action: createSessionAction,
    schema: sessionFormSchema,
    onSuccess: handleSuccess,
  };

  return (
    <ModalForm config={config} title="Plan the session" onClose={handleClose}>
      <SessionName />
      <SessionDescription />
      <SessionExercises exercises={exercises} />

      <ModalFormButtons onClose={handleClose} />
    </ModalForm>
  );
}
