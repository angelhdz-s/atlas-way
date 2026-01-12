import { IExerciseRepository } from '@/modules/exercise/domain/exercise.repository';
import { CreateExerciseInput } from '@/modules/exercise/application/dtos/create-exercise.dto';
import { UseCase } from '@/shared/application/usecase';
import { IdGenerator } from '@/shared/application/id-generator';
import { Exercise } from '@/modules/exercise/domain/exercise.entity';
import { IExerciseInitialStatsRepository } from '@/modules/exerciseinitialstats/domain/exerciseinitialstats.repository';
import { CreateExerciseInitialStatsWithoutExerciseIdInput } from '@/modules/exerciseinitialstats/application/dtos/create-exercise-initial-stats.dto';
import { ExerciseInitialStats } from '@/modules/exerciseinitialstats/domain/exerciseinitialstats.entity';
import { MuscleProps } from '@/modules/muscle/domain/muscle.types';
import { IExerciseToMuscleRepository } from '@/modules/exercise/link/muscle/domain/exercise-to-muscle.repository';
import { LinkExerciseToMuscleInput } from '@/modules/exercise/link/muscle/application/dtos/link-exercise-to-muscle.dto';
import { ExerciseToMuscle } from '@/modules/exercise/link/muscle/domain/exercise-to-muscle.entity';

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

		const exercise = Exercise.create(exerciseId, exerciseData);

		const exerciseCreated = await this.repository.create(exercise);

		for (const muscleId of muscleIds) {
			const newMuscleLinkProps: LinkExerciseToMuscleInput = {
				muscleId,
				exerciseId,
			};
			const exerciseToMuscle = ExerciseToMuscle.create(newMuscleLinkProps);
			await this.linkRepository.create(exerciseToMuscle);
		}

		if (!statsData) return exerciseCreated;

		const statsId = this.generator.generate();

		const stats = ExerciseInitialStats.create(statsId, {
			sets: statsData.sets,
			reps: statsData.reps,
			weight: statsData.weight,
			exerciseId,
		});

		await this.statsRepository.create(stats);

		return exerciseCreated;
	}
}
