import { Prisma } from '../../../prisma/client';

export const BODY_SECTIONS: Prisma.BodySectionsCreateManyInput[] = [
	{
		name: 'Torso',
	},
	{
		name: 'Arms',
	},
	{
		name: 'Legs',
	},
];
