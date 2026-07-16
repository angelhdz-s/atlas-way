'use client';

import type { SubmitHandler } from 'react-hook-form';
import type { ExerciseDTO } from '@/modules/exercise/application/dtos/exercise.dto';
import { useFieldArray, useForm } from 'react-hook-form';
import { IconCheck, IconClock, IconX } from '@tabler/icons-react';
import { useContext, useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/presentation/modules/button/components/Button';
import { LastTargets } from '@/presentation/modules/dashboard/components/LastTargets';
import { PageContainer } from '@/presentation/modules/dashboard/components/page/PageContainer';
import { PageContent } from '@/presentation/modules/dashboard/components/page/PageContent';
import { PageHeader } from '@/presentation/modules/dashboard/components/page/PageHeader';
import { useLayer } from '@/presentation/globals/hooks/useLayer';
import { TooltipBackdrop } from '@/presentation/globals/components/TooltipBackdrop';
import { ErrorMessage } from '@/presentation/modules/form/components/ErrorMessage';
import {
  ExerciseTargetsContext,
  type ExerciseTargetsStep,
} from '@/modules/tracking/presentation/ui/contexts/ExerciseTargetsContext';
import { ExerciseTargetsStatus } from '@/modules/tracking/presentation/ui/components/ExerciseTargetsStatus';
import { inputNumberConfig } from '@/presentation/globals/utils/react-hook-form.utils';
import {
  exerciseTargetsSchema,
  type ExerciseTargetsForm,
} from '@/modules/tracking/presentation/schemas/exercise-targets.schema';
import { createTargets } from '@/modules/tracking/presentation/tracking.actions';
import { useToast } from '@/presentation/modules/toast/hooks/useToast';
import { useRouter } from 'next/navigation';

type Props = {
  className?: string;
  exercises: ExerciseDTO[];
  trainingId: string;
};

export function ExerciseTargets({ className, exercises = [], trainingId }: Props) {
  const { push } = useRouter();
  const { addToast } = useToast();

  const { step, stepIndex, steps, movement, updateStep, goToStep, goNextStep, goPreviousStep } =
    useContext(ExerciseTargetsContext);

  const [isShowingConfirmation, setIsShowingConfirmation] = useState<boolean>(false);
  const { ref } = useLayer({
    isOpen: isShowingConfirmation,
    onClose: () => setIsShowingConfirmation(false),
  });

  const {
    control,
    formState: { errors, isSubmitting, isSubmitted },
    trigger,
    handleSubmit,
    register,
    getValues,
  } = useForm<ExerciseTargetsForm>({
    resolver: zodResolver(exerciseTargetsSchema),
    shouldUnregister: false,
    defaultValues: {
      trainingId,
    },
  });

  const { fields, replace } = useFieldArray({ control, name: 'exercises' });

  const formRef = useRef<HTMLFormElement>(null);

  const submitForm: SubmitHandler<ExerciseTargetsForm> = async (data) => {
    if (isSubmitting || isSubmitted) return;
    updateCurrentStep('complete');
    const targetsResult = await createTargets(data);
    if (!targetsResult.success)
      return addToast(targetsResult.message, {
        type: 'error',
      });

    push(`/dashboard/tracking/${trainingId}/training`);
  };

  const isCurrentFormValid = async () => {
    return await trigger(`exercises.${stepIndex}`);
  };

  const getCurrentValues = () => {
    const values = getValues();
    return values.exercises[stepIndex];
  };

  const updateCurrentStep = (status: ExerciseTargetsStep['status']) => {
    const values = getCurrentValues();
    if (!values) return;
    updateStep(stepIndex, {
      status,
      ...values,
    });
  };

  const validateAndCurrentStep = async (update: boolean = false) => {
    const isValid = await isCurrentFormValid();
    if (update) updateCurrentStep(isValid ? 'complete' : 'error');
    return isValid;
  };

  const nextStep = async () => {
    if (!(await validateAndCurrentStep(true))) return;

    goNextStep();
  };

  const previousStep = async () => {
    if (!(await validateAndCurrentStep())) return;
    goPreviousStep();
  };

  const toStep = async (targetStep: number) => {
    if (!(await validateAndCurrentStep())) return;

    goToStep(targetStep);
  };

  useEffect(() => {
    replace(
      exercises.map(({ id, reps, sets, weight }, i) => ({
        order: i + 1,
        exerciseId: id,
        sets,
        reps,
        weight,
      }))
    );
  }, [exercises, replace]);

  return (
    <PageContainer className={twMerge('flex flex-row gap-8', className)}>
      <div className="flex-1 space-y-8">
        <PageHeader title="Tracking" description="Track your progress and achieve your goals" />
        <PageContent className="space-y-8">
          {steps.length > 0 && (
            <header className="space-y-8">
              <ul className="flex items-center gap-2">
                {steps.map((s) => (
                  <li key={s.id}>
                    <button
                      type="button"
                      onClick={async () => await toStep(s.step)}
                      className={twMerge(
                        'flex size-8 w-fit cursor-pointer items-center justify-center gap-2 rounded-full px-2',
                        step === s.step ? 'bg-primary text-fg-strong' : 'bg-fill-base'
                      )}
                    >
                      {`Step ${s.step}`}
                      {s.status === 'complete' && <IconCheck size={16} strokeWidth={2} />}
                      {s.status === 'pending' && <IconClock size={16} strokeWidth={2} />}
                      {s.status === 'error' && <IconX size={16} strokeWidth={2} />}
                    </button>
                  </li>
                ))}
              </ul>

              {exercises[stepIndex] !== undefined && (
                <div
                  key={exercises[stepIndex].id}
                  className={twMerge(
                    'animate-duration-100',
                    movement === 0 ? 'animate-fade-left' : 'animate-fade-right'
                  )}
                >
                  <h6>{exercises[stepIndex].name}</h6>
                  <p>{exercises[stepIndex].description ?? 'No description.'}</p>
                </div>
              )}
            </header>
          )}
          <main>
            <form id="exercise-targets-form" ref={formRef} onSubmit={handleSubmit(submitForm)}>
              <div
                key={`form-fields-container.${stepIndex}`}
                className={twMerge(
                  'animate-duration-100 flex w-full items-start gap-4',
                  movement === 0 ? 'animate-fade-left' : 'animate-fade-right'
                )}
              >
                <label
                  key={`exercises.${stepIndex}.sets`}
                  className="text-fg-strong block w-full space-y-2"
                  htmlFor={`exercises.${stepIndex}.sets`}
                >
                  Sets
                  <p className="text-fg-default">Number of sets</p>
                  <input
                    type="number"
                    id={`exercises.${stepIndex}.sets`}
                    className="bg-fill-base h-10 w-full rounded-xl px-4"
                    {...register(`exercises.${stepIndex}.sets`, {
                      value: fields[stepIndex]?.sets ?? 4,
                      ...inputNumberConfig,
                    })}
                  />
                  <ErrorMessage message={errors.exercises?.[stepIndex]?.sets?.message} />
                </label>

                <label
                  key={`exercises.${stepIndex}.reps`}
                  className="text-fg-strong block w-full space-y-2"
                  htmlFor={`exercises.${stepIndex}.reps`}
                >
                  Reps
                  <p className="text-fg-default">Number of repetitions</p>
                  <input
                    id={`exercises.${stepIndex}.reps`}
                    type="number"
                    className="bg-fill-base h-10 w-full rounded-xl px-4"
                    {...register(`exercises.${stepIndex}.reps`, {
                      value: fields[stepIndex]?.reps ?? 12,
                      ...inputNumberConfig,
                    })}
                  />
                  <ErrorMessage message={errors.exercises?.[stepIndex]?.reps?.message} />
                </label>

                <label
                  key={`exercises.${stepIndex}.weight`}
                  className="text-fg-strong block w-full space-y-2"
                  htmlFor={`exercises.${stepIndex}.weight`}
                >
                  Weight
                  <p className="text-fg-default">Weight quantity</p>
                  <input
                    id={`exercises.${stepIndex}.weight`}
                    type="number"
                    className="bg-fill-base h-10 w-full rounded-xl px-4"
                    {...register(`exercises.${stepIndex}.weight`, {
                      value: fields[stepIndex]?.weight ?? 0,
                      ...inputNumberConfig,
                    })}
                  />
                  <ErrorMessage message={errors.exercises?.[stepIndex]?.weight?.message} />
                </label>
              </div>
            </form>
          </main>
          <footer className="flex items-center justify-end gap-4">
            <Button variant={{ color: 'subtle' }} onClick={previousStep}>
              {step === 1 ? 'Cancel' : 'Previous exercise'}
            </Button>
            {step === steps.length ? (
              <Button
                key="target-submit-button"
                variant={{ color: 'primary' }}
                type="submit"
                form="exercise-targets-form"
                onClick={nextStep}
              >
                Start training
              </Button>
            ) : (
              <Button
                key="target-next-button"
                variant={{ color: 'primary' }}
                onClick={nextStep}
                disabled={isSubmitting}
              >
                Next exercise
              </Button>
            )}
          </footer>
        </PageContent>
      </div>

      <aside className="w-100 space-y-8">
        <header>
          <h5>Push day</h5>
          <p>Push day focused on push muscles development</p>
        </header>
        <LastTargets className="col-span-2" />
        <ExerciseTargetsStatus />
      </aside>

      {isShowingConfirmation && (
        <div className="fixed inset-0 z-10 grid place-content-center">
          <div
            ref={ref}
            className="bg-fill-middle border-bd-muted relative z-10 space-y-4 rounded-xl border p-8"
          >
            <header>
              <h6>Confirmation</h6>
              <p>Here are your targets</p>
            </header>
            <main>
              {fields.map((f, i) => (
                <div key={f.id} className="flex items-center gap-2">
                  <div className="w-full">{exercises[i]?.name ?? 'Exercise not found'}</div>
                  <div className="w-20">{`${f.sets}x${f.reps}`}</div>
                  <div className="w-20">{f.weight} lb</div>
                </div>
              ))}
            </main>
            <footer className="flex justify-end gap-2">
              <Button
                onClick={() => setIsShowingConfirmation(false)}
                variant={{ color: 'primary' }}
              >
                Let's train
              </Button>
            </footer>
          </div>
          <TooltipBackdrop />
        </div>
      )}
    </PageContainer>
  );
}
