import { createId } from '../node_modules/@paralleldrive/cuid2';
import { DAY_TYPES } from '../src/modules/globals/seed/day-types';
import { BODY_SECTIONS } from '../src/modules/muscle/seed/body-sections';
import { MUSCLES } from '../src/modules/muscle/seed/muscles';
import { MUSCULAR_GROUPS } from '../src/modules/muscle/seed/muscular-groups';
import { STATUS } from '../src/modules/status/seed/status';
import { USERS } from '../src/modules/user/seed/users';
import { PrismaClient } from '../src/prisma/client';

const prisma = new PrismaClient();
async function main() {
	const usersWithId = USERS.map((user) => ({ ...user, id: createId() }));

	await prisma.$transaction([
		prisma.users.createMany({ data: usersWithId }),
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
