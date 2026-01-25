export type ActionResponse<T> = Promise<ActionResponseProps<T>>;

export type ActionResponseProps<T> = ActionSuccessType<T> | ActionFailureType;

type ActionSuccessType<T> = {
	success: true;
	message: string;
	data: T;
};
type ActionFailureType = {
	success: false;
	message: string;
	data: null;
};

export function ActionSuccess<T>(data: T, message: string): ActionSuccessType<T> {
	return {
		success: true,
		message,
		data,
	};
}
export function ActionFailure(message: string): ActionFailureType {
	return {
		success: false,
		message,
		data: null,
	};
}
