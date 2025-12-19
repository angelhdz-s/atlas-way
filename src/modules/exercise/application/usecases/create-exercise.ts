import { IExerciseRepository } from '@/modules/exercise/domain/exercise.repository';
import { NewExerciseInput } from '@/modules/exercise/application/dtos/create-exercise.dto';
import { UseCase } from '@/shared/application/usecase';
import { IdGenerator } from '@/shared/application/id-generator';
import { Exercise } from '../../domain/exercise.entity';

export class CreateExercise implements UseCase {
	constructor(
		private repository: IExerciseRepository,
		private generator: IdGenerator
	) {}

	async execute(data: NewExerciseInput) {
		const id = this.generator.generate();

		const exercise = Exercise.create(id, {
			name: data.name,
			description: data.description,
			userId: data.userId,
		});

		return await this.repository.create(exercise);
	}
}
