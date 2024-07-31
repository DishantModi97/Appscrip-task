import { createContext } from "react";

const SideBarFilterContext = createContext<{
  isHideFilter: boolean;
  setIsHideFilter: (value: boolean) => void;
}>({
  isHideFilter: false,
  setIsHideFilter: () => {},
});

export default SideBarFilterContext;
