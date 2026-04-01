'use client';

import { useRouter } from 'next/navigation';
import { ModalForm } from '@/presentation/modules/form/components/modal-form/ModalForm';
import { ModalFormButtons } from '@/presentation/modules/form/components/modal-form/ModalFormButtons';
import type { SelectOption } from '@/presentation/modules/form/form.types';
import { createSessionAction } from '../../session.actions';
import { sessionFormSchema } from '../config/session.schema';
import { SessionDescription } from './fields/SessionDescription';
import { SessionName } from './fields/SessionName';
import { SessionExercises } from './fields/SessionExercises';
import { SessionDTO } from '@/modules/session/application/dtos/session.dto';

export function SessionModalForm({
  exercises,
  data,
}: {
  exercises: SelectOption[];
  data?: SessionDTO;
}) {
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

  const exerciseIds = data?.exercises.map((e) => e.id) ?? [];

  return (
    <ModalForm config={config} title="Plan the session" onClose={handleClose}>
      <SessionName value={data?.name} />
      <SessionDescription value={data?.description} />
      <SessionExercises exercises={exercises} itemsSelected={exerciseIds} />

      <ModalFormButtons onClose={handleClose} />
    </ModalForm>
  );
}
