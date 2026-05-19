import { Muscle } from './muscle.entity';

function createMuscle(id: number): Muscle {
  const muscle = new Muscle({
    id,
    name: 'Exercise',
    description: null,
    createdAt: new Date(),
    updatedAt: new Date(),
    group: {
      id: 1,
      name: 'Muscular Group',
      createdAt: new Date(),
      updatedAt: new Date(),
      section: {
        id: 1,
        name: 'Section',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    },
    userId: '1df38173-6fae-4abb-8cb2-ce33b6c24da4',
  });

  return muscle;
}

describe('Muscle entity', () => {
  describe('Getters', () => {
    const muscle = createMuscle(1);
    it('should get id prop successfully', async () => {
      expect(muscle.id).toBe(1);
    });

    it('should get name prop successfully', async () => {
      expect(muscle.name).toBe('Exercise');
    });

    it('should get description prop successfully', async () => {
      expect(muscle.description).toBe(null);
    });

    it('should get createdAt prop successfully', async () => {
      expect(muscle.createdAt instanceof Date).toBe(true);
    });

    it('should get updatedAt prop successfully', async () => {
      expect(muscle.updatedAt instanceof Date).toBe(true);
    });

    it('should get muscularGroup prop successfully', async () => {
      expect(muscle.muscularGroup.name).toBe('Muscular Group');
    });

    it('should get userId prop successfully', async () => {
      expect(muscle.userId).toBe('1df38173-6fae-4abb-8cb2-ce33b6c24da4');
    });

    it('should get bodySection prop successfully', async () => {
      expect(muscle.bodySection.name).toBe('Section');
    });
  });
});
