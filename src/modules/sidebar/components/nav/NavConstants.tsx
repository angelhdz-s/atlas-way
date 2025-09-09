import { useSidebar } from "@/modules/sidebar/hooks/useSidebar";
import { DefaultIcon } from "@/modules/globals/components/Icons";
import { IconTypes } from "@/modules/globals/types";

export function NavIconSize({ Icon }: { Icon: IconTypes }) {
	const { isOpen } = useSidebar();
	return <DefaultIcon Icon={Icon} className={isOpen ? "" : "mx-auto"} />;
}
