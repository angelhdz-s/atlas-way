'use client';

import type { ExerciseDTO } from '@/modules/exercise/application/dtos/exercise.dto';
import z from 'zod/v3';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { IconCheck, IconClock, IconX } from '@tabler/icons-react';
import { Button } from '@/presentation/modules/button/components/Button';
import { PageContainer } from '@/presentation/modules/dashboard/components/page/PageContainer';
import { PageContent } from '@/presentation/modules/dashboard/components/page/PageContent';
import { PageHeader } from '@/presentation/modules/dashboard/components/page/PageHeader';
import { ErrorMessage } from '@/presentation/modules/form/components/ErrorMessage';
import { useFieldArray, useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { inputNumberConfig } from '@/presentation/modules/form/config/input-config';

type Props = {
  className?: string;
  targets: ExerciseDTO[];
};

type TrainingStep = {
  id: string;
  title: string;
  set: number;
  reps: number;
  rir: number;
  weight: number;
  status: 'pending' | 'complete' | 'error' | 'cancel';
};

type TrainingStage = {
  id: string;
  title: string;
  stage: number;
  status: 'pending' | 'complete' | 'cancel' | 'error';
  steps: TrainingStep[];
};

type TrainingState = {
  lastStep: number;
  length: number;
  stages: TrainingStage[];
};

const sessionTrainingSetSchema = z
  .object({
    set: z.number().min(1),
    reps: z.number().min(1).optional(),
    weight: z.number().min(0).optional(),
    rir: z.number().min(0).optional(),
    status: z.enum(['pending', 'complete', 'cancel']),
  })
  .superRefine(({ reps, rir, weight, status }, ctx) => {
    const values = [reps, rir, weight];

    const allUndefined = values.every((v) => v === undefined) && status === 'cancel';
    if (allUndefined) return;

    if (reps === undefined)
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['reps'],
        message: "Reps can't be empty",
        fatal: false,
      });

    if (rir === undefined)
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['rir'],
        message: "Repeats in reserve can't be empty",
        fatal: false,
      });
    if (weight === undefined)
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['weight'],
        message: "Weight can't be empty",
        fatal: false,
      });
  });

export type SessionTrainingSetForm = z.infer<typeof sessionTrainingSetSchema>;

const sessionTrainingSchema = z.object({
  exercises: z.array(
    z.object({
      exerciseId: z.string().uuid(),
      status: z.enum(['pending', 'complete', 'cancel']),
      sets: z.array(sessionTrainingSetSchema),
    })
  ),
});

export type SessionTrainingForm = z.infer<typeof sessionTrainingSchema>;

const initializeStages = (targets: ExerciseDTO[]): TrainingState => {
  const limitStage = targets.length;
  let limitStep: number = 1;
  const stages: TrainingStage[] = targets.map((t, index) => {
    const steps: TrainingStep[] = Array.from({ length: t.sets }, (_, i) => i + 1).map((s) => ({
      title: `Set ${s}`,
      id: `${t.id}-${s}`,
      set: s,
      reps: t.reps,
      rir: 0,
      weight: t.weight,
      status: 'pending',
    }));

    if (index === limitStage - 1) limitStep = t.sets;

    return {
      id: t.id,
      stage: index + 1,
      title: t.name,
      status: 'pending',
      steps,
    };
  });

  return {
    lastStep: limitStep,
    length: limitStage,
    stages,
  };
};

type Step = {
  stage: number;
  step: number;
  accumulatedStep: number;
};

const processData: SubmitHandler<SessionTrainingForm> = (data) => {
  console.log(data);
};

export function SessionTraining({ className, targets }: Props) {
  const [currentStep, setCurrentStep] = useState<Step>({
    stage: 1,
    step: 1,
    accumulatedStep: 1,
  });
  const stepIndex = currentStep.step - 1;
  const stageIndex = currentStep.stage - 1;

  const [trainingStages, setTrainingStages] = useState<TrainingState>(initializeStages(targets));

  const {
    control,
    register,
    trigger,
    getValues,
    formState: { errors, isReady },
    handleSubmit,
  } = useForm<SessionTrainingForm>({
    resolver: zodResolver(sessionTrainingSchema),
    shouldUnregister: false,
  });

  const { fields, replace, update } = useFieldArray({
    control,
    name: 'exercises',
  });

  const updateTrainingStages = (values: SessionTrainingSetForm, error = false) => {
    const stage = trainingStages.stages[stageIndex];
    if (!stage) return;
    const step = stage.steps[stepIndex];
    if (!step) return;

    setTrainingStages((prev) => {
      const stateCopy = { ...prev };
      const stageCopy = stateCopy.stages[stageIndex];
      if (!stageCopy) return prev;
      const stepCopy = stageCopy.steps[stepIndex];
      if (!stepCopy) return prev;
      stageCopy.steps[stepIndex] = {
        ...stepCopy,
        reps: values.reps ?? stepCopy.reps,
        set: values.set ?? stepCopy.set,
        weight: values.weight ?? stepCopy.weight,
        rir: values.rir ?? stepCopy.rir,
        status: values.status,
      };

      if (error) stageCopy.status = 'error';
      else {
        const areStepsComplete = stageCopy.steps.every((s) => s.status === 'complete');
        stageCopy.status = areStepsComplete ? 'complete' : 'pending';
      }

      stateCopy.stages[stageIndex] = stageCopy;
      return stateCopy;
    });
  };

  const updateFields = (values: SessionTrainingSetForm) => {
    const stage = fields[stageIndex];
    if (!stage) return;
    const set = stage.sets[stepIndex];
    if (!set) return;
    const setsCopy = [...stage.sets];
    setsCopy[stepIndex] = values;

    const areStepsCompleted = setsCopy.every((s) => s.status === 'complete');
    update(stageIndex, {
      ...stage,
      sets: setsCopy,
      status: areStepsCompleted ? 'complete' : 'pending',
    });
  };

  const goNextStep = async () => {
    const isValid = await trigger(`exercises.${stageIndex}.sets.${stepIndex}`);
    const values = getValues();
    const step = values.exercises[stageIndex]?.sets[stepIndex];
    if (!step) return;
    updateTrainingStages(
      {
        ...step,
        status: isValid ? 'complete' : 'pending',
      },
      !isValid
    );

    updateFields({ ...step, status: isValid ? 'complete' : 'pending' });

    if (!isValid) return;

    if (currentStep.stage === trainingStages.length && currentStep.step === trainingStages.lastStep)
      return;

    const stageData = trainingStages.stages[stageIndex];
    if (!stageData) return;

    if (currentStep.step + 1 > stageData.steps.length) {
      return setCurrentStep((prev) => {
        const prevCopy = { ...prev };
        const { accumulatedStep, stage } = prevCopy;

        return {
          accumulatedStep: accumulatedStep + 1,
          stage: stage + 1,
          step: 1,
        };
      });
    }

    return setCurrentStep((prev) => {
      const prevCopy = { ...prev };
      const { accumulatedStep, step, stage } = prevCopy;

      return {
        accumulatedStep: accumulatedStep + 1,
        step: step + 1,
        stage,
      };
    });
  };

  const goPreviousStep = () => {
    if (currentStep.stage === 1 && currentStep.step === 1) return;

    if (currentStep.step - 1 < 1) {
      const stageData = trainingStages.stages[stageIndex - 1];
      if (!stageData) return;
      return setCurrentStep((prev) => {
        const prevCopy = { ...prev };
        const { accumulatedStep, stage } = prevCopy;

        return {
          accumulatedStep: accumulatedStep - 1,
          stage: stage - 1,
          step: stageData.steps.length,
        };
      });
    }

    return setCurrentStep((prev) => {
      const prevCopy = { ...prev };
      const { accumulatedStep, step, stage } = prevCopy;

      return {
        accumulatedStep: accumulatedStep - 1,
        step: step - 1,
        stage,
      };
    });
  };

  useEffect(() => {
    setTrainingStages(initializeStages(targets));
    replace(
      targets.map((t) => {
        const sets: SessionTrainingSetForm[] = Array.from({ length: t.sets }, (_, i) => i + 1).map(
          (s) => ({
            id: `${t.id}-${s}`,
            set: s,
            reps: t.reps,
            rir: 0,
            weight: t.weight,
            status: 'pending',
          })
        );

        return {
          exerciseId: t.id,
          status: 'pending',
          sets,
        };
      })
    );
  }, [targets, replace]);

  return (
    <PageContainer className={twMerge('flex flex-row gap-8', className)}>
      <div className="flex-1 space-y-8">
        <PageHeader title="Training" description="Let's train" />
        <PageContent className="space-y-8">
          {trainingStages.length > 0 && (
            <header className="space-y-8">
              <ul className="flex items-center gap-2">
                {trainingStages.stages.map((s, i) => (
                  <li key={s.id}>
                    <button
                      type="button"
                      className={twMerge(
                        'flex size-8 w-fit cursor-pointer items-center justify-center gap-2 rounded-full px-2',
                        s.stage === currentStep.stage ? 'bg-primary text-fg-strong' : 'bg-fill-base'
                      )}
                    >
                      {`Step ${i + 1}`}
                      {s.status === 'pending' && <IconClock size={16} strokeWidth={2} />}
                      {s.status === 'complete' && <IconCheck size={16} strokeWidth={2} />}
                      {s.status === 'error' && <IconX size={16} strokeWidth={2} />}
                    </button>
                  </li>
                ))}
              </ul>

              {targets[stageIndex] !== undefined && (
                <div
                  key={targets[stageIndex].id}
                  className={twMerge('animate-duration-100', 'animate-fade-left')}
                >
                  <h6>{targets[stageIndex].name}</h6>
                  <p>{targets[stageIndex].description ?? 'No description.'}</p>
                </div>
              )}

              <div className="flex items-center gap-8">
                <div className="w-20">
                  <h4>Stage</h4>
                  <p>{currentStep.stage}</p>
                </div>
                <div className="w-20">
                  <h4>Step</h4>
                  <p>{currentStep.step}</p>
                </div>
              </div>
            </header>
          )}
          <main className="min-h-24">
            {isReady && (
              <form id="session-training-form" onSubmit={handleSubmit(processData)}>
                <div
                  key={`form-fields-container.${stepIndex}`}
                  className={twMerge(
                    'animate-duration-100 flex w-full items-start gap-4',
                    'animate-fade-left'
                  )}
                >
                  <label
                    key={`exercises.${stageIndex}.sets.${stepIndex}.reps`}
                    className="text-fg-strong block w-full space-y-2"
                    htmlFor={`exercises.${stageIndex}.sets.${stepIndex}.reps`}
                  >
                    Reps
                    <p className="text-fg-default">Number of repetitions</p>
                    <input
                      id={`exercises.${stageIndex}.sets.${stepIndex}.reps`}
                      type="number"
                      className="bg-fill-base h-10 w-full rounded-xl px-4"
                      {...register(`exercises.${stageIndex}.sets.${stepIndex}.reps`, {
                        ...inputNumberConfig,
                        value: trainingStages.stages[stageIndex]?.steps[stepIndex]?.reps,
                      })}
                    />
                    <ErrorMessage
                      message={errors.exercises?.[stageIndex]?.sets?.[stepIndex]?.reps?.message}
                    />
                  </label>

                  <label
                    key={`exercises.${stageIndex}.sets.${stepIndex}.rir`}
                    className="text-fg-strong block w-full space-y-2"
                    htmlFor={`exercises.${stageIndex}.sets.${stepIndex}.rir`}
                  >
                    Repeats in reserve (RIR)
                    <p className="text-fg-default">Reps remaining</p>
                    <input
                      id={`exercises.${stageIndex}.sets.${stepIndex}.rir`}
                      type="number"
                      className="bg-fill-base h-10 w-full rounded-xl px-4"
                      {...register(
                        `exercises.${stageIndex}.sets.${stepIndex}.rir`,
                        inputNumberConfig
                      )}
                    />
                    <ErrorMessage
                      message={errors.exercises?.[stageIndex]?.sets?.[stepIndex]?.rir?.message}
                    />
                  </label>

                  <label
                    key={`exercises.${stageIndex}.sets.${stepIndex}.weight`}
                    className="text-fg-strong block w-full space-y-2"
                    htmlFor={`exercises.${stageIndex}.sets.${stepIndex}.weight`}
                  >
                    Weight
                    <p className="text-fg-default">Weight quantity</p>
                    <input
                      id={`exercises.${stageIndex}.sets.${stepIndex}.weight`}
                      type="number"
                      className="bg-fill-base h-10 w-full rounded-xl px-4"
                      {...register(
                        `exercises.${stageIndex}.sets.${stepIndex}.weight`,
                        inputNumberConfig
                      )}
                    />
                    <ErrorMessage
                      message={errors.exercises?.[stageIndex]?.sets?.[stepIndex]?.weight?.message}
                    />
                  </label>
                </div>
              </form>
            )}
          </main>
          <footer className="flex items-center justify-end gap-4">
            <Button key="target-next-button" variant={{ color: 'subtle' }} onClick={goPreviousStep}>
              {currentStep.stage === 1 && currentStep.step === 1 ? 'Cancel' : 'Previous set'}
            </Button>
            {currentStep.stage === trainingStages.length &&
            currentStep.step === trainingStages.lastStep ? (
              <Button
                key={'session-training-submit-button'}
                variant={{ color: 'primary' }}
                onClick={goNextStep}
                type="submit"
                form="session-training-form"
              >
                Finish training
              </Button>
            ) : (
              <Button
                key={'session-training-next-button'}
                variant={{ color: 'primary' }}
                onClick={goNextStep}
              >
                Next set
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
        <div className="space-y-4">
          {trainingStages.stages.map((t) => (
            <section key={t.id} className="space-y-1">
              <header className="flex justify-between gap-8">
                <h5>{t.title}</h5>
                <aside>
                  {t.status === 'pending' && <IconClock size={16} strokeWidth={2} />}
                  {t.status === 'complete' && <IconCheck size={16} strokeWidth={2} />}
                  {t.status === 'error' && <IconX size={16} strokeWidth={2} />}
                </aside>
              </header>
              {t.steps.map((s) => (
                <ul key={s.id} className="flex items-center gap-2">
                  <li className="w-full">{`Set ${s.set}`}</li>
                  <li>{s.reps}</li>
                  <li>{s.weight}</li>
                  <li>
                    {s.status === 'pending' && <IconClock size={16} strokeWidth={2} />}
                    {s.status === 'complete' && <IconCheck size={16} strokeWidth={2} />}
                    {s.status === 'error' && <IconX size={16} strokeWidth={2} />}
                  </li>
                </ul>
              ))}
            </section>
          ))}
        </div>
      </aside>
    </PageContainer>
  );
}
