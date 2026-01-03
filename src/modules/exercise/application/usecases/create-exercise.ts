import { IExerciseRepository } from '@/modules/exercise/domain/exercise.repository';
import { CreateExerciseInput } from '@/modules/exercise/application/dtos/create-exercise.dto';
import { UseCase } from '@/shared/application/usecase';
import { IdGenerator } from '@/shared/application/id-generator';
import { Exercise } from '../../domain/exercise.entity';
import { IExerciseInitialStatsRepository } from '@/modules/exerciseinitialstats/domain/exerciseinitialstats.repository';
import { CreateExerciseInitialStatsWithoutExerciseIdInput } from '@/modules/exerciseinitialstats/application/dtos/create-exercise-initial-stats.dto';
import { ExerciseInitialStats } from '@/modules/exerciseinitialstats/domain/exerciseinitialstats.entity';

export class CreateExercise implements UseCase {
	constructor(
		private repository: IExerciseRepository,
		private statsRepository: IExerciseInitialStatsRepository,
		private generator: IdGenerator
	) {}

	async execute(
		exerciseData: CreateExerciseInput,
		statsData: CreateExerciseInitialStatsWithoutExerciseIdInput | null = null
	) {
		const id = this.generator.generate();

		const exercise = Exercise.create(id, {
			name: exerciseData.name,
			description: exerciseData.description,
			userId: exerciseData.userId,
		});

		const exerciseCreated = await this.repository.create(exercise);

		if (!statsData) return exerciseCreated;

		const statsId = this.generator.generate();

		const stats = ExerciseInitialStats.create(statsId, {
			sets: statsData.sets,
			reps: statsData.reps,
			weight: statsData.weight,
			exerciseId: id,
		});

		const statsCreated = await this.statsRepository.create(stats);

		return exerciseCreated;
	}
}
