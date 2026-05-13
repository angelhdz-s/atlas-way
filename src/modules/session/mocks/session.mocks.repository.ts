import { Success } from '@/shared/domain/result';
import { Session } from '@/modules/session/domain/session.entity';
import type { SessionProps } from '@/modules/session/domain/session.types';
import type { ISessionRepository } from '@/modules/session/domain/session.repository';

const MOCK_SESSIONS: SessionProps[] = [
  {
    id: '1df38173-6fae-4abb-8cb2-ce33b6c24da4',
    name: 'Push Day',
    description: 'Chest and triceps workout',
    userId: 'user-123',
    createdAt: new Date(),
    updatedAt: new Date(),
    exercises: [],
  },
  {
    id: '2df38173-6fae-4abb-8cb2-ce33b6c24da4',
    name: 'Pull Day',
    description: 'Back and biceps workout',
    userId: 'user-123',
    createdAt: new Date(),
    updatedAt: new Date(),
    exercises: [],
  },
];

export class InMemorySessionRepository implements ISessionRepository {
  public sessions: Session[] = MOCK_SESSIONS.map((s) => new Session(s));
  async create(data: Session) {
    this.sessions.push(data);
    return Success(data);
  }
  async update(data: Session) {
    const index = this.sessions.findIndex((s) => s.id === data.id);
    if (index !== -1) this.sessions[index] = data;
    return Success(data);
  }
  async findAll() {
    return Success([...this.sessions]);
  }
  async findById(id: SessionProps['id']) {
    const session = this.sessions.find((s) => s.id === id);
    if (!session) return Success(null);
    return Success(session);
  }
  async findByIds(ids: SessionProps['id'][]) {
    const sessions = this.sessions.filter((s) => ids.includes(s.id));
    return Success([...sessions]);
  }
  async delete(id: SessionProps['id']) {
    const session = this.sessions.find((s) => s.id === id);
    if (!session)
      return Success(
        session ??
          new Session({
            id: '',
            name: '',
            description: null,
            exercises: [],
            userId: '',
            createdAt: new Date(),
            updatedAt: new Date(),
          })
      );
    this.sessions = this.sessions.filter((s) => s.id !== id);
    return Success(session);
  }
}
