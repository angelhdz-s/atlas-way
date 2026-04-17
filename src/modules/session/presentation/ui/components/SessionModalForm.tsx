'use client';

import { useRouter } from 'next/navigation';
import { ModalForm } from '@/presentation/modules/form/components/modal-form/ModalForm';
import { ModalFormButtons } from '@/presentation/modules/form/components/modal-form/ModalFormButtons';
import { createSessionAction } from '@/modules/session/presentation/session.actions';
import { sessionFormSchema } from '@/modules/session/presentation/ui/config/session.schema';
import { SessionDescription } from '@/modules/session/presentation/ui/components/fields/SessionDescription';
import { SessionName } from '@/modules/session/presentation/ui/components/fields/SessionName';
import { SessionExercises } from '@/modules/session/presentation/ui/components/fields/SessionExercises';
import type { SessionDTO } from '@/modules/session/application/dtos/session.dto';
import type { SelectOption } from '@/presentation/modules/form/form.types';

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
