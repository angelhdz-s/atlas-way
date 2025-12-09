import { ADMIN_ID } from '../../../modules/user/seed/users';
import { Prisma } from '../../../prisma/client';

export const MUSCLES: Prisma.MusclesCreateManyInput[] = [
	{
		muscularGroupId: 1,
		userId: ADMIN_ID,
		name: 'Biceps',
	},
	{
		muscularGroupId: 1,
		userId: ADMIN_ID,
		name: 'Biceps Long Head',
	},
	{
		muscularGroupId: 1,
		userId: ADMIN_ID,
		name: 'Biceps Short Head',
	},
	{
		muscularGroupId: 1,
		userId: ADMIN_ID,
		name: 'Forearms',
	},
	{
		muscularGroupId: 2,
		userId: ADMIN_ID,
		name: 'Anterior Forearms',
	},
	{
		muscularGroupId: 2,
		userId: ADMIN_ID,
		name: 'Rear Forearms',
	},
	{
		muscularGroupId: 3,
		userId: ADMIN_ID,
		name: 'Shoulders',
	},
	{
		muscularGroupId: 3,
		userId: ADMIN_ID,
		name: 'Anterior Shoulders',
	},
	{
		muscularGroupId: 3,
		userId: ADMIN_ID,
		name: 'Lateral Shoulders',
	},
	{
		muscularGroupId: 3,
		userId: ADMIN_ID,
		name: 'Rear Shoulders',
	},
	{
		muscularGroupId: 4,
		userId: ADMIN_ID,
		name: 'Triceps',
	},
	{
		muscularGroupId: 4,
		userId: ADMIN_ID,
		name: 'Triceps Long Head',
	},
	{
		muscularGroupId: 4,
		userId: ADMIN_ID,
		name: 'Triceps Short Head',
	},
	{
		muscularGroupId: 5,
		userId: ADMIN_ID,
		name: 'Abductors',
	},
	{
		muscularGroupId: 6,
		userId: ADMIN_ID,
		name: 'Calves',
	},
	{
		muscularGroupId: 7,
		userId: ADMIN_ID,
		name: 'Glutes',
	},
	{
		muscularGroupId: 8,
		userId: ADMIN_ID,
		name: 'Hamstrings',
	},
	{
		muscularGroupId: 9,
		userId: ADMIN_ID,
		name: 'Quadriceps',
	},
	{
		muscularGroupId: 9,
		userId: ADMIN_ID,
		name: 'Rectus Femoris',
	},
	{
		muscularGroupId: 9,
		userId: ADMIN_ID,
		name: 'Vastus Lateralis',
	},
	{
		muscularGroupId: 9,
		userId: ADMIN_ID,
		name: 'Vastus Medialis',
	},
	{
		muscularGroupId: 10,
		userId: ADMIN_ID,
		name: 'Abdominals',
	},
	{
		muscularGroupId: 10,
		userId: ADMIN_ID,
		name: 'Lower Abdominals',
	},
	{
		muscularGroupId: 10,
		userId: ADMIN_ID,
		name: 'Upper Abdominals',
	},
	{
		muscularGroupId: 11,
		userId: ADMIN_ID,
		name: 'Back',
	},
	{
		muscularGroupId: 11,
		userId: ADMIN_ID,
		name: 'Bibs',
	},
	{
		muscularGroupId: 11,
		userId: ADMIN_ID,
		name: 'Lumbar',
	},
	{
		muscularGroupId: 11,
		userId: ADMIN_ID,
		name: 'Trapezius',
	},
	{
		muscularGroupId: 12,
		userId: ADMIN_ID,
		name: 'Pectorals',
	},
	{
		muscularGroupId: 12,
		userId: ADMIN_ID,
		name: 'Lower Pectorals',
	},
	{
		muscularGroupId: 12,
		userId: ADMIN_ID,
		name: 'Middle Pectorals',
	},
	{
		muscularGroupId: 12,
		userId: ADMIN_ID,
		name: 'Upper Pectorals',
	},
];
