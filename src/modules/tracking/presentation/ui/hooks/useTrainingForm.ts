import type { TrainingSetForm } from '@/modules/tracking/presentation/schemas/training.schema';
import { useEffect, useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import { createTrainingSet } from '@/modules/tracking/presentation/tracking.actions';
import { useTrainingSteps } from '@/modules/tracking/presentation/ui/hooks/useTrainingSteps';
import { useToast } from '@/presentation/modules/toast/hooks/useToast';

export function useTrainingForm() {
  const { addToast } = useToast();

  // Current stage/step ref to updated state ensurance
  // avoiding useEffect reexecution logic when rerender
  const currentStageIndexRef = useRef<{
    stage: number;
    step: number;
  }>({
    stage: -1,
    step: -1,
  });

  const {
    nextStep,
    previousStep,
    stageIndex,
    stepIndex,
    trainingState,
    targets,
    updateCurrentStep,
    finishStage,
  } = useTrainingSteps();

  const methods = useFormContext<TrainingSetForm>();

  const {
    register,
    formState: { errors, isReady, isSubmitting },
    handleSubmit,
    reset,
  } = methods;

  // Reset the form values getting the information of the current step
  // It keeps the same metrics from previous steps (sets) saved when applicable
  const resetValues = () => {
    const currentStage = trainingState.stages[stageIndex];
    if (!currentStage) return;

    const currentTarget = targets[stageIndex];
    if (!currentTarget) return;

    const step = currentStage.steps[stepIndex];
    if (!step) return;

    const lastStep = currentStage.steps[stepIndex - 1];
    if (!lastStep || step.status === 'COMPLETED')
      return reset({
        exerciseId: currentTarget.exerciseId,
        trainingId: currentTarget.trainingId,
        set: step.set,
        reps: step.reps,
        rir: step.rir,
        weight: step.weight,
        id: step.id,
      });

    // Not completed

    reset({
      exerciseId: currentTarget.exerciseId,
      trainingId: currentTarget.trainingId,
      set: step.set,
      reps: lastStep.reps,
      rir: lastStep.rir,
      weight: lastStep.weight,
      id: step.id,
    });
  };

  // Gets the current step information: current stage with current step information;
  const getCurrentStep = () => {
    const currentStage = trainingState.stages[stageIndex];
    if (!currentStage) return;

    const step = currentStage.steps[stageIndex];
    if (!step) return;

    const { steps, ...stageWithoutSteps } = currentStage;

    return {
      ...stageWithoutSteps,
      step,
      steps: steps.length,
    };
  };

  // Handle function to process data from every training set form
  // Receives data and verifies if data has changed, whether not do not send the data
  const onSubmit = async (data: TrainingSetForm) => {
    const currentStage = trainingState.stages[stageIndex];
    const currentStep = currentStage?.steps[stepIndex];

    if (currentStep !== undefined) {
      const { rir, reps, weight, status } = currentStep;
      if (
        rir === data.rir &&
        reps === data.reps &&
        weight === data.weight &&
        status === 'COMPLETED'
      )
        return nextStep();
    }

    const setResult = await createTrainingSet(data);
    if (!setResult.success)
      return addToast(setResult.message, {
        type: 'error',
      });

    const set = setResult.data;
    const step = getCurrentStep();
    if (!step) return;

    updateCurrentStep(
      {
        id: set.id,
        key: step.step.key,
        title: step.step.title,
        reps: set.reps,
        rir: set.rir,
        set: set.set,
        weight: set.weight,
        status: 'COMPLETED',
      },
      stageIndex,
      stepIndex
    );

    nextStep();
  };

  // Handle submit wrapper with react hook form handleSubmit method
  // Form only uses this method instead of loading onSubmit with handleSubmit directly in the form.
  const handleSubmitSet = handleSubmit(onSubmit);

  // Reset form values every previous step movement
  const goPreviousStep = () => {
    previousStep();
    resetValues();
  };

  // Finish/interrupt/leave exercise
  const leaveExercise = () => {
    finishStage(stageIndex);
    nextStep();
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: resetValues() changes in every rerender. It can't be used as dependencie
  useEffect(() => {
    const stepUpdated = currentStageIndexRef.current.step === stepIndex;
    const stageUpdated = currentStageIndexRef.current.stage === stageIndex;
    if (stepUpdated && stageUpdated) return;
    resetValues();
    currentStageIndexRef.current = {
      stage: stageIndex,
      step: stepIndex,
    };
  }, [stepIndex, stageIndex]);

  return {
    goPreviousStep,
    register,
    handleSubmit: handleSubmitSet,
    isReady,
    isSubmitting,
    errors,
    leaveExercise,
  };
}
