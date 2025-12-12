export type ActionResponse<T> = Promise<{
	success: boolean;
	message: string;
	data: T;
}>;
