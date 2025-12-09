import { BodySection } from './bodysection.entity';

export interface IBodySectionRepository {
	findAll: () => Promise<BodySection[]>;
	findById: (id: number) => Promise<BodySection | null>;
}
