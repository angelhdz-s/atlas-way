export const ROLES = {
  BASE: {
    id: 'base',
    name: 'Base',
  },
  ADMIN: {
    id: 'admin',
    name: 'Admin',
  },
  SYSTEM: {
    id: 'system',
    name: 'System',
  },
} as const;

export type RoleIds = (typeof ROLES)[keyof typeof ROLES]['id'];
