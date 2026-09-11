import { prisma } from '../src/shared/infrastructure/prisma/client';
import { ROUTINE_CYCLES } from '../src/presentation/globals/seed/cycle-types';
import { DAY_TYPES } from '../src/presentation/globals/seed/day-types';
import { BODY_SECTIONS } from '../src/modules/muscle/seed/body-sections';
import { MUSCLES } from '../src/modules/muscle/seed/muscles';
import { MUSCULAR_GROUPS } from '../src/modules/muscle/seed/muscular-groups';
import { STATUS } from '../src/modules/status/seed/status';
import { WORKOUT_STATUS, WORKOUT_TARGET_STATUS } from '../src/modules/tracking/seeds/tracking.seed';
import { ROLES, USERS } from '../src/modules/user/seed/users';
async function main() {
  await prisma.$transaction([
    prisma.roles.createMany({ data: ROLES, skipDuplicates: true }),
    prisma.users.createMany({ data: USERS, skipDuplicates: true }),
    prisma.routineCycleTypes.createMany({ data: ROUTINE_CYCLES, skipDuplicates: true }),
    prisma.status.createMany({ data: STATUS, skipDuplicates: true }),
    prisma.dayTypes.createMany({ data: DAY_TYPES, skipDuplicates: true }),
    prisma.bodySections.createMany({ data: BODY_SECTIONS, skipDuplicates: true }),
    prisma.muscularGroups.createMany({ data: MUSCULAR_GROUPS, skipDuplicates: true }),
    prisma.muscles.createMany({ data: MUSCLES, skipDuplicates: true }),
    prisma.workoutStatus.createMany({ data: WORKOUT_STATUS, skipDuplicates: true }),
    prisma.workoutTargetStatus.createMany({ data: WORKOUT_TARGET_STATUS, skipDuplicates: true }),
  ]);
}

main()
  .catch((error) => {
    // biome-ignore lint/suspicious/noConsole: Server error log
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
