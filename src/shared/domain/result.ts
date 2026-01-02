export type Result<T, E> = { success: false; error: E } | { success: true; data: T };

export function Success<T>(data: T): Result<T, never> {
	return {
		success: true,
		data,
	};
}

export function Failure<E>(error: E): Result<never, E> {
	return {
		success: false,
		error,
	};
}
