import type { SubmitHandler } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';
import { ErrorMessage } from '@/presentation/modules/form/components/ErrorMessage';
import { inputNumberConfig } from '@/presentation/globals/utils/react-hook-form.utils';
import { useTrainingSteps } from '@/modules/tracking/presentation/ui/hooks/useTrainingSteps';
import { useTrainingForm } from '@/modules/tracking/presentation/ui/hooks/useTrainingForm';
import type { TrainingSetForm } from '@/modules/tracking/presentation/schemas/training.schema';

type Props = {
  className?: string;
};

const processData: SubmitHandler<TrainingSetForm> = (_data) => {
  // logic here
};

export function TrainingFormWrapper({ className }: Props) {
  const { stepIndex, stageIndex } = useTrainingSteps();

  const { handleSubmit, isReady, errors, register } = useTrainingForm();

  if (!isReady) return <Fallback />;

  return (
    <form id="training-set-form" onSubmit={handleSubmit(processData)} className={className}>
      <div
        key={`training-form-fields-container-${stageIndex}-${stepIndex}`}
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
            {...register(`reps`, {
              ...inputNumberConfig,
            })}
          />
          <ErrorMessage message={errors.reps?.message} />
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
            {...register(`rir`, inputNumberConfig)}
          />
          <ErrorMessage message={errors.rir?.message} />
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
            {...register(`weight`, inputNumberConfig)}
          />
          <ErrorMessage message={errors.weight?.message} />
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
