import '@testing-library/jest-dom';
import { MockIdGenerator } from '@/shared/test/mocks/id-generator.repository.mock';
import { validateSession } from './session.validation';
import { Session } from '../session.entity';

describe('validateSession', () => {
  describe('Happy path', () => {
    it('should validate and return session successfully', () => {
      const idGeneratorMock = new MockIdGenerator();
      const id = idGeneratorMock.id;

      const validation = validateSession({
        id,
        name: 'Session',
        description: null,
        exercises: [],
        userId: id,
      });

      expect(validation.success).toBe(true);
      expect(validation.success && validation.data instanceof Session).toBe(true);
    });
  });

  describe('Exceptions', () => {
    const idGeneratorMock = new MockIdGenerator();
    const validId = idGeneratorMock.id;

    const validSessionData = {
      id: validId,
      name: 'Session',
      description: null,
      exercises: [],
      userId: validId,
    };

    describe('Input', () => {
      it('should fail when invalid input', () => {
        const validation = validateSession(null as never);
        expect(validation.success).toBe(false);
        expect(validation.success === false && validation.error.code).toBe('TECHNICAL_ERROR');
      });

      it('should fail when any required key is missing', () => {
        const { id: _, ...rest } = validSessionData;
        const validation = validateSession(rest as never);
        expect(validation.success).toBe(false);
        expect(validation.success === false && validation.error.code).toBe('TECHNICAL_ERROR');
      });
    });

    describe('ID field', () => {
      it('should fail when is not a valid UUID', () => {
        const validation = validateSession({
          ...validSessionData,
          id: 'invalid-uuid',
        } as unknown as Parameters<typeof validateSession>[0]);
        expect(validation.success).toBe(false);
        expect(validation.success === false && validation.error.code).toBe('TECHNICAL_ERROR');
      });

      it('should fail when is not a string', () => {
        const validation = validateSession({
          ...validSessionData,
          id: 123,
        } as unknown as Parameters<typeof validateSession>[0]);
        expect(validation.success).toBe(false);
        expect(validation.success === false && validation.error.code).toBe('TECHNICAL_ERROR');
      });
    });

    describe('NAME field', () => {
      it('should fail is too short (less than 3 chars)', () => {
        const validation = validateSession({
          ...validSessionData,
          name: 'ab',
        } as unknown as Parameters<typeof validateSession>[0]);
        expect(validation.success).toBe(false);
        expect(validation.success === false && validation.error.code).toBe('TECHNICAL_ERROR');
      });

      it('should fail when is too long (more than 30 chars)', () => {
        const validation = validateSession({
          ...validSessionData,
          name: 'a'.repeat(31),
        } as unknown as Parameters<typeof validateSession>[0]);
        expect(validation.success).toBe(false);
        expect(validation.success === false && validation.error.code).toBe('TECHNICAL_ERROR');
      });

      it('should fail when is not a string', () => {
        const validation = validateSession({
          ...validSessionData,
          name: 123,
        } as unknown as Parameters<typeof validateSession>[0]);
        expect(validation.success).toBe(false);
        expect(validation.success === false && validation.error.code).toBe('TECHNICAL_ERROR');
      });
    });

    describe('DESCRIPTION field', () => {
      it('should fail when is not a string or null', () => {
        const validation = validateSession({
          ...validSessionData,
          description: 123,
        } as unknown as Parameters<typeof validateSession>[0]);
        expect(validation.success).toBe(false);
        expect(validation.success === false && validation.error.code).toBe('TECHNICAL_ERROR');
      });

      it('should fail when is too long (more than 100 chars)', () => {
        const validation = validateSession({
          ...validSessionData,
          description: 'a'.repeat(101),
        } as unknown as Parameters<typeof validateSession>[0]);
        expect(validation.success).toBe(false);
        expect(validation.success === false && validation.error.code).toBe('TECHNICAL_ERROR');
      });
    });

    describe('Extra non-existing keys', () => {
      it('should pass when extra key exists in input', () => {
        const validation = validateSession({
          ...validSessionData,
          extraKey: 'value',
        } as unknown as Parameters<typeof validateSession>[0]);
        expect(validation.success).toBe(true);
      });
    });
  });
});
