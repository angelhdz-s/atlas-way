import { Prisma } from '../../../prisma/client';

export const BODY_SECTIONS: Prisma.BodySectionsCreateManyInput[] = [
	{
		id: 1,
		name: 'Torso',
	},
	{
		id: 2,
		name: 'Arms',
	},
	{
		id: 3,
		name: 'Legs',
	},
];
