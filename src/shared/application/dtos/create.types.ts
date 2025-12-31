export type CreateDto<T> = Omit<T, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateDto<T> = {
	[K in keyof T]?: T[K];
};
