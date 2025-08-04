import { createContext } from "react";

export const SidebarContext = createContext<{
	isOpen: boolean;
	toggleOpen?: () => void;
}>({
	isOpen: true,
	toggleOpen: undefined,
});
