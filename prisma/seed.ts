import { prisma } from '../src/shared/infrastructure/prisma/client';
import { ROUTINE_CYCLES } from '../src/modules/globals/seed/cycle-types';
import { DAY_TYPES } from '../src/modules/globals/seed/day-types';
import { BODY_SECTIONS } from '../src/modules/muscle/seed/body-sections';
import { MUSCLES } from '../src/modules/muscle/seed/muscles';
import { MUSCULAR_GROUPS } from '../src/modules/muscle/seed/muscular-groups';
import { STATUS } from '../src/modules/status/seed/status';
import { ROLES, USERS } from '../src/modules/user/seed/users';
async function main() {
	await prisma.$transaction([
		prisma.roles.createMany({ data: ROLES }),
		prisma.users.createMany({ data: USERS }),
		prisma.routineCycleTypes.createMany({ data: ROUTINE_CYCLES }),
		prisma.status.createMany({ data: STATUS }),
		prisma.dayTypes.createMany({ data: DAY_TYPES }),
		prisma.bodySections.createMany({ data: BODY_SECTIONS }),
		prisma.muscularGroups.createMany({ data: MUSCULAR_GROUPS }),
		prisma.muscles.createMany({ data: MUSCLES }),
	]);
}

main()
	.catch((error) => {
		console.error(error);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
