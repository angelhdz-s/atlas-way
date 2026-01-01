import { DefaultIcon } from '@/modules/globals/components/Icons';
import { IconTypes } from '@/modules/globals/types';

export function NavIconSize({ Icon }: { Icon: IconTypes }) {
	return <DefaultIcon Icon={Icon} />;
}
