'use client';

import { twMerge } from 'tailwind-merge';
import { ErrorMessage } from '@/presentation/modules/form/components/ErrorMessage';
import { inputNumberConfig } from '@/presentation/globals/utils/react-hook-form.utils';
import { useStepFormSync } from '@/presentation/modules/wizard/hooks/useStepFormSync';
import type { SetForm } from '@/modules/tracking/presentation/schemas/training.schema';
import { useFormContext } from 'react-hook-form';

type Props = {
  className?: string;
};

export function TrainingFormWrapper({ className }: Props) {
  const {
    register,
    formState: { errors, isReady },
  } = useFormContext<Record<string, SetForm>>();

  const { currentStepPath } = useStepFormSync();
  if (!isReady) return <Fallback />;

  return (
    <div className={className}>
      <div
        key={`training-form-fields-container-${currentStepPath}`}
        className={twMerge(
          'animate-duration-100 flex w-full items-start gap-4',
          'animate-fade-left'
        )}
      >
        <label
          className="text-fg-strong block w-full space-y-2"
          htmlFor={`${currentStepPath}.reps`}
        >
          Reps
          <p className="text-fg-default">Number of repetitions</p>
          <input
            id={`${currentStepPath}.reps`}
            type="number"
            className="bg-fill-base h-10 w-full rounded-xl px-4"
            {...register(`${currentStepPath}.reps`, {
              ...inputNumberConfig,
            })}
          />
          <ErrorMessage message={errors[currentStepPath]?.reps?.message} />
        </label>

        <label className="text-fg-strong block w-full space-y-2" htmlFor={`${currentStepPath}.rir`}>
          Repeats in reserve (RIR)
          <p className="text-fg-default">Reps remaining</p>
          <input
            id={`${currentStepPath}.rir`}
            type="number"
            className="bg-fill-base h-10 w-full rounded-xl px-4"
            {...register(`${currentStepPath}.rir`, inputNumberConfig)}
          />
          <ErrorMessage message={errors?.[currentStepPath]?.rir?.message} />
        </label>

        <label
          className="text-fg-strong block w-full space-y-2"
          htmlFor={`${currentStepPath}.weight`}
        >
          Weight
          <p className="text-fg-default">Weight quantity</p>
          <input
            id={`${currentStepPath}.weight`}
            type="number"
            className="bg-fill-base h-10 w-full rounded-xl px-4"
            {...register(`${currentStepPath}.weight`, inputNumberConfig)}
          />
          <ErrorMessage message={errors?.[currentStepPath]?.weight?.message} />
        </label>
      </div>
    </div>
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
