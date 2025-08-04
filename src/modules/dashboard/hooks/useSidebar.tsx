import { useContext } from "react";
import { SidebarContext } from "../context/sidebar-context";

export function useSidebar() {
	return useContext(SidebarContext);
}
