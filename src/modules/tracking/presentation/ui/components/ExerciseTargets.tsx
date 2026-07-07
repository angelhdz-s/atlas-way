'use client';

import { IconCheck, IconClock } from '@tabler/icons-react';
import { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { type SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod/v3';
import type { ExerciseDTO } from '@/modules/exercise/application/dtos/exercise.dto';
import { Button } from '@/presentation/modules/button/components/Button';
import { LastTargets } from '@/presentation/modules/dashboard/components/LastTargets';
import { PageContainer } from '@/presentation/modules/dashboard/components/page/PageContainer';
import { PageContent } from '@/presentation/modules/dashboard/components/page/PageContent';
import { PageHeader } from '@/presentation/modules/dashboard/components/page/PageHeader';
import { useToast } from '@/presentation/modules/toast/hooks/useToast';
import { ExerciseSchema } from '@/modules/exercise/presentation/ui/schemas/exercise.schema';
import { inputNumberConfig } from '@/presentation/modules/form/config/input-config';
import { useLayer } from '@/presentation/globals/hooks/useLayer';
import { TooltipBackdrop } from '@/presentation/globals/components/TooltipBackdrop';
import { ErrorMessage } from '@/presentation/modules/form/components/ErrorMessage';

type Props = {
  className?: string;
  exercises: ExerciseDTO[];
};

const exerciseMetricsSchema = ExerciseSchema.pick({
  reps: true,
  sets: true,
  weight: true,
});

const exerciseTargets = z.object({
  exercises: z.array(exerciseMetricsSchema),
});

type ExerciseTargets = z.infer<typeof exerciseTargets>;

type Step = {
  id: string;
  step: number;
  title: string;
  status: 'pending' | 'complete';
};

const processData: SubmitHandler<ExerciseTargets> = async (data) => {
  console.log('Submitted');
  console.log(data);
  await Promise.resolve(() => {
    setTimeout(() => {}, 1000);
  });
};

export function ExerciseTargets({ className, exercises = [] }: Props) {
  const [movement, setMovement] = useState<number>(0);
  const [isShowingConfirmation, setIsShowingConfirmation] = useState<boolean>(false);
  const { ref } = useLayer({
    isOpen: isShowingConfirmation,
    onClose: () => setIsShowingConfirmation(false),
  });
  const { addToast } = useToast();

  const {
    control,
    formState: { errors, isReady },
    trigger,
    handleSubmit,
    register,
  } = useForm<ExerciseTargets>({
    resolver: zodResolver(exerciseTargets),
    shouldUnregister: false,
  });

  const { fields, replace } = useFieldArray({ control, name: 'exercises' });

  const formRef = useRef<HTMLFormElement>(null);

  const [steps, setSteps] = useState<Step[]>(
    exercises.map((e, i) => ({
      id: e.id,
      step: i + 1,
      title: e.name,
      status: 'pending',
    }))
  );

  const [step, setStep] = useState<number>(1);
  const indexStep = step - 1;

  const goNextStep = async () => {
    const isValid = await trigger(`exercises.${indexStep}`);
    if (!isValid) return;

    setSteps((prevSteps) => {
      const prevStepsCopy = [...prevSteps];
      if (!prevStepsCopy[indexStep]) return prevSteps;
      prevStepsCopy[indexStep].status = 'complete';
      return [...prevStepsCopy];
    });

    if (step + 1 > steps.length) return;
    setStep((step) => step + 1);
    if (movement !== 0) setMovement(0);
  };

  const goPreviousStep = () => {
    trigger(`exercises.${indexStep}`);
    if (step - 1 < 1) return;
    setStep((step) => step - 1);
    if (movement !== -1) setMovement(-1);
  };

  useEffect(() => {
    replace(
      exercises.map(({ reps, sets, weight }) => ({
        sets,
        reps,
        weight,
      }))
    );
    setSteps(
      exercises.map((e, i) => ({
        id: e.id,
        step: i + 1,
        title: e.name,
        status: 'pending',
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
                  <li
                    key={s.id}
                    className={twMerge(
                      'flex size-8 w-fit items-center justify-center gap-2 rounded-full px-2',
                      step === s.step ? 'bg-primary text-fg-strong' : 'bg-fill-base'
                    )}
                  >
                    {`Step ${s.step}`}
                    {s.status === 'complete' ? (
                      <IconCheck size={16} strokeWidth={2} />
                    ) : (
                      <IconClock size={16} strokeWidth={2} />
                    )}
                  </li>
                ))}
              </ul>

              {exercises[indexStep] !== undefined && (
                <div
                  key={exercises[indexStep].id}
                  className={twMerge(
                    'animate-duration-100',
                    movement === 0 ? 'animate-fade-left' : 'animate-fade-right'
                  )}
                >
                  <h6>{exercises[indexStep].name}</h6>
                  <p>{exercises[indexStep].description ?? 'No description.'}</p>
                </div>
              )}
            </header>
          )}
          <main>
            <form id="exercise-targets-form" ref={formRef} onSubmit={handleSubmit(processData)}>
              <div
                key={`form-fields-container.${indexStep}`}
                className={twMerge(
                  'animate-duration-100 flex w-full items-start gap-4',
                  movement === 0 ? 'animate-fade-left' : 'animate-fade-right'
                )}
              >
                <label
                  key={`exercises.${indexStep}.sets`}
                  className="text-fg-strong block w-full space-y-2"
                  htmlFor={`exercises.${indexStep}.sets`}
                >
                  Sets
                  <p className="text-fg-default">Number of sets</p>
                  <input
                    type="number"
                    id={`exercises.${indexStep}.sets`}
                    className="bg-fill-base h-10 w-full rounded-xl px-4"
                    {...register(`exercises.${indexStep}.sets`, {
                      value: fields[indexStep]?.sets ?? 4,
                      ...inputNumberConfig,
                    })}
                  />
                  <ErrorMessage message={errors.exercises?.[indexStep]?.sets?.message} />
                </label>

                <label
                  key={`exercises.${indexStep}.reps`}
                  className="text-fg-strong block w-full space-y-2"
                  htmlFor={`exercises.${indexStep}.reps`}
                >
                  Reps
                  <p className="text-fg-default">Number of repetitions</p>
                  <input
                    id={`exercises.${indexStep}.reps`}
                    type="number"
                    className="bg-fill-base h-10 w-full rounded-xl px-4"
                    {...register(`exercises.${indexStep}.reps`, {
                      value: fields[indexStep]?.reps ?? 12,
                      ...inputNumberConfig,
                    })}
                  />
                  <ErrorMessage message={errors.exercises?.[indexStep]?.reps?.message} />
                </label>

                <label
                  key={`exercises.${indexStep}.weight`}
                  className="text-fg-strong block w-full space-y-2"
                  htmlFor={`exercises.${indexStep}.weight`}
                >
                  Weight
                  <p className="text-fg-default">Weight quantity</p>
                  <input
                    id={`exercises.${indexStep}.weight`}
                    type="number"
                    className="bg-fill-base h-10 w-full rounded-xl px-4"
                    {...register(`exercises.${indexStep}.weight`, {
                      value: fields[indexStep]?.weight ?? 0,
                      ...inputNumberConfig,
                    })}
                  />
                  <ErrorMessage message={errors.exercises?.[indexStep]?.weight?.message} />
                </label>
              </div>
            </form>
          </main>
          <footer className="flex items-center justify-end gap-4">
            <Button variant={{ color: 'subtle' }} onClick={goPreviousStep}>
              {step === 1 ? 'Cancel' : 'Previous exercise'}
            </Button>
            {step === steps.length ? (
              <Button
                key="target-submit-button"
                variant={{ color: 'primary' }}
                type="submit"
                form="exercise-targets-form"
              >
                Start training
              </Button>
            ) : (
              <Button key="target-next-button" variant={{ color: 'primary' }} onClick={goNextStep}>
                Next exercise
              </Button>
            )}
          </footer>
        </PageContent>
      </div>

      <aside className="w-120 space-y-8">
        <header>
          <h5>Push day</h5>
          <p>Push day focused on push muscles development</p>
        </header>
        <LastTargets className="col-span-2" />
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
