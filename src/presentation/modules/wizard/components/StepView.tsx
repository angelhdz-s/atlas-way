import { useStepFormSync } from '@/presentation/modules/wizard/hooks/useStepFormSync';
import { ActionSuccess, type ActionResponseProps } from '@/shared/presentation/action.response';
import { useFormContext } from 'react-hook-form';

type Props = {
  className?: string;
};

const processData = async (data: {
  phaseId: string;
  stepId: string;
  stepData: any;
}): Promise<ActionResponseProps<true>> => {
  return ActionSuccess(true, 'Done');
};

export function StepView({ className }: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const { currentStep, currentStepPath, isSaving, handleNext, handlePrev } =
    useStepFormSync(processData);
  return (
    <div className={className}>
      <header></header>
      <div className="">
        <div>
          <label>
            Reps
            <input type="number" {...register(`${currentStepPath}.reps`)} />
          </label>
        </div>
        <div>
          <label>
            Rir
            <input type="number" {...register(`${currentStepPath}.rir`)} />
          </label>
        </div>
        <div>
          <label>
            Weight
            <input type="number" {...register(`${currentStepPath}.weight`)} />
          </label>
        </div>
      </div>
      <footer>
        <button
          type="button"
          className="bg-subtle text-white"
          onClick={handlePrev}
          disabled={isSaving}
        >
          Previous set
        </button>
        <button
          type="button"
          className="bg-primary text-white"
          onClick={handleNext}
          disabled={isSaving}
        >
          {isSaving ? 'Saving...' : 'Next set'}
        </button>
      </footer>
    </div>
  );
}
