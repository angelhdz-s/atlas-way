import { GetAllMuscularGroups } from '@/modules/musculargroup/application/usecases/get-all-musculargroups';
import { GetMuscularGroupById } from '@/modules/musculargroup/application/usecases/get-musculargroup-by-id';
import { MuscularGroupPrismaReporitory } from '@/modules/musculargroup/infrastructure/prisma/musculargroup.prisma.repository';
import { globalErrorMapper } from '@/shared/infrastructure/error.mapper.container';
import { prisma } from '@/shared/infrastructure/prisma/client';

export const makeMuscularGroupModule = () => {
	const muscularGroupRepo = new MuscularGroupPrismaReporitory(prisma, globalErrorMapper);
	return {
		GetAllMuscularGroupsUseCase: new GetAllMuscularGroups(muscularGroupRepo),
		GetMuscularGroupByIdUseCase: new GetMuscularGroupById(muscularGroupRepo),
	};
};
