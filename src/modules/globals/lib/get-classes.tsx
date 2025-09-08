import { STATUS_TEXT_COLORS } from "../constants/classes";

export function getStatusTextColorClass(status: string) {
	if (status in STATUS_TEXT_COLORS) {
		return STATUS_TEXT_COLORS[status as keyof typeof STATUS_TEXT_COLORS];
	}
	return STATUS_TEXT_COLORS.pending;
}
