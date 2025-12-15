export type ActionResponse<T> = Promise<{
	success: boolean;
	message: string;
	data: T;
}>;

export type ActionResponseProps<T> = {
	success: boolean;
	message: string;
	data: T;
};
