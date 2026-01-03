import { GetAllMuscularGroups } from '../application/usecases/get-all-musculargroups';
import { GetMuscularGroupById } from '../application/usecases/get-musculargroup-by-id';
import { MuscularGroupPrismaReporitory } from '../infrastructure/prisma/musculargroup.prisma.repository';

export const muscularGroupRepo = new MuscularGroupPrismaReporitory();

const GetAllMuscularGroupsUseCase = new GetAllMuscularGroups(muscularGroupRepo);
const GetMuscularGroupByIdUseCase = new GetMuscularGroupById(muscularGroupRepo);

export const MuscularGroupContainer = {
	GetAllMuscularGroupsUseCase,
	GetMuscularGroupByIdUseCase,
};
