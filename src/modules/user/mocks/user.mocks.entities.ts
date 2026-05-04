import { User } from '../domain/user.entity';

export const USERS_MOCK = [
  new User({
    id: '3f1c2a9e-1d4a-4f8c-9a2a-1b2c3d4e5f01',
    name: 'Carlos Martínez',
    email: 'carlos.mtz@gmail.com',
    createdAt: new Date('2024-01-10T10:15:00Z'),
    updatedAt: new Date('2024-02-12T14:20:00Z'),
    role: {
      id: 'base',
      name: 'Base',
    },
  }),
  new User({
    id: '7b2d9c4f-2e6a-4c1f-8d3b-2c3d4e5f6a02',
    name: 'Ana López',
    email: 'ana.lopez@gmail.com',
    createdAt: new Date('2024-03-05T09:00:00Z'),
    updatedAt: new Date('2024-03-06T11:30:00Z'),
    role: {
      id: 'admin',
      name: 'Admin',
    },
  }),
  new User({
    id: '1a9e3c7b-3f8d-4b2a-9c4d-3d4e5f6a7b03',
    name: 'Luis Fernández',
    email: 'luis.fernandez@gmail.com',
    createdAt: new Date('2024-04-01T08:45:00Z'),
    updatedAt: new Date('2024-04-02T10:10:00Z'),
    role: {
      id: 'base',
      name: 'Base',
    },
  }),
  new User({
    id: '5c4d2e1f-4a9b-4d3c-8e5f-4e5f6a7b8c04',
    name: 'María González',
    email: 'maria.gonzalez@gmail.com',
    createdAt: new Date('2024-05-12T13:20:00Z'),
    updatedAt: new Date('2024-05-13T15:25:00Z'),
    role: {
      id: 'admin',
      name: 'Admin',
    },
  }),
  new User({
    id: '8d5e3f2a-5b1c-4e4d-9f6a-5f6a7b8c9d05',
    name: 'Jorge Ramírez',
    email: 'jorge.ramirez@gmail.com',
    createdAt: new Date('2024-06-18T07:10:00Z'),
    updatedAt: new Date('2024-06-19T09:40:00Z'),
    role: {
      id: 'base',
      name: 'Base',
    },
  }),
  new User({
    id: '9e6f4a3b-6c2d-4f5e-a07b-6a7b8c9d0e06',
    name: 'Sofía Torres',
    email: 'sofia.torres@gmail.com',
    createdAt: new Date('2024-07-22T16:30:00Z'),
    updatedAt: new Date('2024-07-23T18:00:00Z'),
    role: {
      id: 'admin',
      name: 'Admin',
    },
  }),
  new User({
    id: 'af7a5b4c-7d3e-406f-b18c-7b8c9d0e1f07',
    name: 'Pedro Sánchez',
    email: 'pedro.sanchez@gmail.com',
    createdAt: new Date('2024-08-10T11:55:00Z'),
    updatedAt: new Date('2024-08-11T13:15:00Z'),
    role: {
      id: 'base',
      name: 'Base',
    },
  }),
  new User({
    id: 'bf8b6c5d-8e4f-4170-c29d-8c9d0e1f2a08',
    name: 'Lucía Herrera',
    email: 'lucia.herrera@gmail.com',
    createdAt: new Date('2024-09-14T06:40:00Z'),
    updatedAt: new Date('2024-09-15T08:50:00Z'),
    role: {
      id: 'admin',
      name: 'Admin',
    },
  }),
  new User({
    id: 'cf9c7d6e-9f50-4281-d3ae-9d0e1f2a3b09',
    name: 'Diego Cruz',
    email: 'diego.cruz@gmail.com',
    createdAt: new Date('2024-10-01T12:00:00Z'),
    updatedAt: new Date('2024-10-02T14:10:00Z'),
    role: {
      id: 'base',
      name: 'Base',
    },
  }),
  new User({
    id: 'dfad8e7f-a061-4392-e4bf-0e1f2a3b4c10',
    name: 'Valeria Méndez',
    email: 'valeria.mendez@gmail.com',
    createdAt: new Date('2024-11-20T17:25:00Z'),
    updatedAt: new Date('2024-11-21T19:35:00Z'),
    role: {
      id: 'admin',
      name: 'Admin',
    },
  }),
];
