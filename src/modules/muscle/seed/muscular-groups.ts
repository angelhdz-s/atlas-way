import { Prisma } from '../../../prisma/client';

export const MUSCULAR_GROUPS: Prisma.MuscularGroupsCreateManyInput[] = [
	{
		id: 1,
		bodySectionId: 2,
		name: 'Biceps',
	},
	{
		id: 2,
		bodySectionId: 2,
		name: 'Forearms',
	},
	{
		id: 3,
		bodySectionId: 2,
		name: 'Shoulders',
	},
	{
		id: 4,
		bodySectionId: 2,
		name: 'Triceps',
	},
	{
		id: 5,
		bodySectionId: 3,
		name: 'Abductors',
	},
	{
		id: 6,
		bodySectionId: 3,
		name: 'Calves',
	},
	{
		id: 7,
		bodySectionId: 3,
		name: 'Glutes',
	},
	{
		id: 8,
		bodySectionId: 3,
		name: 'Hamstrings',
	},
	{
		id: 9,
		bodySectionId: 3,
		name: 'Quadriceps',
	},
	{
		id: 10,
		bodySectionId: 1,
		name: 'Abdominals',
	},
	{
		id: 11,
		bodySectionId: 1,
		name: 'Back',
	},
	{
		id: 12,
		bodySectionId: 1,
		name: 'Pectorals',
	},
];
