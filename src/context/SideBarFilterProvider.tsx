"use client";
import React, { ReactNode, useState } from "react";
import SideBarFilterContext from "./SideBarFilterContext";

interface SideBarFilterProps {
  children: ReactNode;
}

const SideBarFilterProvider = ({ children }: SideBarFilterProps) => {
  const [isHideFilter, setIsHideFilter] = useState<boolean>(false);

  return (
    <SideBarFilterContext.Provider value={{ isHideFilter, setIsHideFilter }}>
      {children}
    </SideBarFilterContext.Provider>
  );
};

export default SideBarFilterProvider;
