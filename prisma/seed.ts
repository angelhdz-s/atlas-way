import { USERS } from "../src/modules/globals/seed/users";
import { BODY_SECTIONS } from "../src/modules/globals/seed/body-sections";
import { MUSCLES } from "../src/modules/globals/seed/muscles";
import { MUSCULAR_GROUPS } from "../src/modules/globals/seed/muscular-groups";
import { PrismaClient } from "../src/prisma/client";
import { STATUS } from "../src/modules/globals/seed/status";
import { DAY_TYPES } from "../src/modules/globals/seed/day-types";

const prisma = new PrismaClient();
async function main() {
	await prisma.$transaction([
		prisma.users.createMany({ data: USERS }),
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
