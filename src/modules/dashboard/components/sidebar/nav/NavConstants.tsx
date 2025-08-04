import { useSidebar } from "@/modules/dashboard/hooks/useSidebar";
import { IconTypes } from "@/modules/globals/types";

export function NavIconSize({ Icon }: { Icon: IconTypes }) {
	const { isOpen } = useSidebar();
	return <Icon className={`size-5 ${isOpen ? "" : "mx-auto"}`} />;
}
