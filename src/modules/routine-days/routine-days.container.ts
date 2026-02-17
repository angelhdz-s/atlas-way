import { CreateRoutineDays } from '@/modules/routine-days/application/use-cases/create-routine-days';
import { GetAllRoutineDays } from '@/modules/routine-days/application/use-cases/get-all-routine-days';
import { GetRoutineDaysById } from '@/modules/routine-days/application/use-cases/get-routine-days-by-id';
import { UpdateRoutineDays } from '@/modules/routine-days/application/use-cases/update-routine-days';
import { RoutineDaysPrismaRepository } from '@/modules/routine-days/infrastructure/prisma/routine-days.prisma.repository';
import { IdGeneratorRepository } from '@/shared/application/id-generator';

type Props = {
	idGeneratorRepository: IdGeneratorRepository;
	routineDaysRepository: RoutineDaysPrismaRepository;
};

export const makeRoutineDaysModule = ({ idGeneratorRepository, routineDaysRepository }: Props) => {
	return {
		GetAllRoutineDaysUseCase: new GetAllRoutineDays(routineDaysRepository),
		GetRoutineDaysByIdUseCase: new GetRoutineDaysById(routineDaysRepository),
		CreateRoutineDaysUseCase: new CreateRoutineDays(
			routineDaysRepository,
			idGeneratorRepository
		),
		UpdateRoutineDaysUseCase: new UpdateRoutineDays(routineDaysRepository),
	};
};
