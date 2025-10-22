import { STATUS_TEXT_COLORS, WITH_STATUS_GRID_COLS_CLASS } from '../constants/classes';

export function getStatusTextColorClass(status: string) {
	if (status in STATUS_TEXT_COLORS) {
		return STATUS_TEXT_COLORS[status as keyof typeof STATUS_TEXT_COLORS];
	}
	return STATUS_TEXT_COLORS.pending;
}

export function getGridColsClassFromWithStatus(withStatus: boolean) {
	if (withStatus) {
		return WITH_STATUS_GRID_COLS_CLASS.true;
	}
	return WITH_STATUS_GRID_COLS_CLASS.false;
}
