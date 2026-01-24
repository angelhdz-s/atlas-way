import { IExerciseRepository } from '@/modules/exercise/domain/exercise.repository';
import { CreateExerciseInput } from '@/modules/exercise/application/dtos/create-exercise.dto';
import { UseCase } from '@/shared/application/usecase';
import { IdGenerator } from '@/shared/application/id-generator';
import { Exercise } from '@/modules/exercise/domain/exercise.entity';
import { IExerciseInitialStatsRepository } from '@/modules/exercise-initial-stats/domain/exercise-initial-stats.repository';
import { CreateExerciseInitialStatsWithoutExerciseIdInput } from '@/modules/exercise-initial-stats/application/dtos/create-exercise-initial-stats.dto';
import { ExerciseInitialStats } from '@/modules/exercise-initial-stats/domain/exercise-initial-stats.entity';
import { MuscleProps } from '@/modules/muscle/domain/muscle.types';
import { IExerciseToMuscleRepository } from '@/modules/exercise/link/muscle/domain/exercise-to-muscle.repository';
import { LinkExerciseToMuscleInput } from '@/modules/exercise/link/muscle/application/dtos/link-exercise-to-muscle.dto';
import { ExerciseToMuscle } from '@/modules/exercise/link/muscle/domain/exercise-to-muscle.entity';
import { Failure } from '@/shared/domain/result';

export class CreateExercise implements UseCase {
	constructor(
		private repository: IExerciseRepository,
		private linkRepository: IExerciseToMuscleRepository,
		private statsRepository: IExerciseInitialStatsRepository,
		private generator: IdGenerator
	) {}

	async execute(
		exerciseData: CreateExerciseInput,
		muscleIds: MuscleProps['id'][],
		statsData: CreateExerciseInitialStatsWithoutExerciseIdInput | null = null
	) {
		const exerciseId = this.generator.generate();
		const newExercise = Exercise.create(exerciseId, exerciseData);
		const exerciseResult = await this.repository.create(newExercise);

		for (const muscleId of muscleIds) {
			const newMuscleLinkProps: LinkExerciseToMuscleInput = {
				muscleId,
				exerciseId,
			};
			const newExerciseToMuscle = ExerciseToMuscle.create(newMuscleLinkProps);
			const exerciseToMuscleResult = await this.linkRepository.create(newExerciseToMuscle);
			if (!exerciseToMuscleResult.success) return Failure(exerciseToMuscleResult.error);
		}

		if (!statsData) return exerciseResult;

		const statsId = this.generator.generate();

		const newExerciseInitialStats = ExerciseInitialStats.create(statsId, {
			sets: statsData.sets,
			reps: statsData.reps,
			weight: statsData.weight,
			exerciseId,
		});

		const exerciseInitialStatsResult =
			await this.statsRepository.create(newExerciseInitialStats);
		if (!exerciseInitialStatsResult.success) return Failure(exerciseInitialStatsResult.error);

		return exerciseResult;
	}
}
