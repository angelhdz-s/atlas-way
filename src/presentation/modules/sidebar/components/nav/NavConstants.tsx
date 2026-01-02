import { DefaultIcon } from '@/presentation/globals/components/Icons';
import { IconTypes } from '@/presentation/globals/types';

export function NavIconSize({ Icon }: { Icon: IconTypes }) {
	return <DefaultIcon Icon={Icon} />;
}
