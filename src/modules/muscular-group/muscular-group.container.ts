import { GetAllMuscularGroups } from '@/modules/muscular-group/application/use-cases/get-all-muscular-groups';
import { GetMuscularGroupById } from '@/modules/muscular-group/application/use-cases/get-muscular-group-by-id';
import { MuscularGroupPrismaReporitory } from '@/modules/muscular-group/infrastructure/prisma/muscular-group.prisma.repository';
import { globalErrorMapper } from '@/shared/infrastructure/errors/error.mapper';
import { prisma } from '@/shared/infrastructure/prisma/client';

export const makeMuscularGroupModule = () => {
	const muscularGroupRepo = new MuscularGroupPrismaReporitory(prisma, globalErrorMapper);
	return {
		GetAllMuscularGroupsUseCase: new GetAllMuscularGroups(muscularGroupRepo),
		GetMuscularGroupByIdUseCase: new GetMuscularGroupById(muscularGroupRepo),
	};
};
