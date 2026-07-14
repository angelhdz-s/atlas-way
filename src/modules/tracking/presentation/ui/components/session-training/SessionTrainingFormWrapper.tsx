import type { SubmitHandler } from 'react-hook-form';
import type { SessionTrainingForm } from '@/modules/tracking/presentation/tracking.presentation.types';
import { twMerge } from 'tailwind-merge';
import { ErrorMessage } from '@/presentation/modules/form/components/ErrorMessage';
import { inputNumberConfig } from '@/presentation/modules/form/config/input-config';
import { useSessionTrainingForm } from '@/modules/tracking/presentation/ui/hooks/useSessionTrainingForm';
import { useSessionTrainingSteps } from '@/modules/tracking/presentation/ui/hooks/useSessionTrainingSteps';

type Props = {
  className?: string;
};

const processData: SubmitHandler<SessionTrainingForm> = (_data) => {
  // logic here
};

export function SessionTrainingFormWrapper({ className }: Props) {
  const { trainingState, stepIndex, stageIndex } = useSessionTrainingSteps();

  const { handleSubmit, isReady, errors, register } = useSessionTrainingForm();

  if (!isReady) return <Fallback />;

  return (
    <form id="session-training-form" onSubmit={handleSubmit(processData)} className={className}>
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
              value: trainingState.stages[stageIndex]?.steps[stepIndex]?.reps,
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
            {...register(`exercises.${stageIndex}.sets.${stepIndex}.rir`, inputNumberConfig)}
          />
          <ErrorMessage message={errors.exercises?.[stageIndex]?.sets?.[stepIndex]?.rir?.message} />
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
            {...register(`exercises.${stageIndex}.sets.${stepIndex}.weight`, inputNumberConfig)}
          />
          <ErrorMessage
            message={errors.exercises?.[stageIndex]?.sets?.[stepIndex]?.weight?.message}
          />
        </label>
      </div>
    </form>
  );
}

function Fallback() {
  return (
    <div className="flex h-20 w-full items-start gap-8">
      <div className="w-full space-y-4">
        <div className="w-full space-y-2">
          <div className="bg-fill-base h-4 w-24 rounded-full" />
          <div className="bg-fill-base h-4 w-full rounded-full" />
        </div>
        <main className="bg-fill-base h-10 w-full rounded-full"></main>
      </div>
      <div className="w-full space-y-4">
        <div className="w-full space-y-2">
          <div className="bg-fill-base h-4 w-24 rounded-full" />
          <div className="bg-fill-base h-4 w-full rounded-full" />
        </div>
        <main className="bg-fill-base h-10 w-full rounded-full"></main>
      </div>
      <div className="w-full space-y-4">
        <div className="w-full space-y-2">
          <div className="bg-fill-base h-4 w-24 rounded-full" />
          <div className="bg-fill-base h-4 w-full rounded-full" />
        </div>
        <main className="bg-fill-base h-10 w-full rounded-full"></main>
      </div>
    </div>
  );
}
