import { Prisma } from '../../../prisma/client';

export const MUSCULAR_GROUPS: Prisma.MuscularGroupsCreateManyInput[] = [
	{
		bodySectionId: 2,
		name: 'Biceps',
	},
	{
		bodySectionId: 2,
		name: 'Forearms',
	},
	{
		bodySectionId: 2,
		name: 'Shoulders',
	},
	{
		bodySectionId: 2,
		name: 'Triceps',
	},
	{
		bodySectionId: 3,
		name: 'Abductors',
	},
	{
		bodySectionId: 3,
		name: 'Calves',
	},
	{
		bodySectionId: 3,
		name: 'Glutes',
	},
	{
		bodySectionId: 3,
		name: 'Hamstrings',
	},
	{
		bodySectionId: 3,
		name: 'Quadriceps',
	},
	{
		bodySectionId: 1,
		name: 'Abdominals',
	},
	{
		bodySectionId: 1,
		name: 'Back',
	},
	{
		bodySectionId: 1,
		name: 'Pectorals',
	},
];
