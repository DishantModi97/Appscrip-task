"use client";
import { Button, Divider } from "@nextui-org/react";
import React, { useContext, useMemo, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import CDorpdown from "../Dropdown";
import { filterDropdownList } from "./data";
import SideBarFilterContext from "@/context/SideBarFilterContext";

const ProductFilterBar = () => {
  const [selected, setSelected] = React.useState(new Set(["receomended"]));

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );
  const { setIsHideFilter, isHideFilter } = useContext(SideBarFilterContext);
  return (
    <div className="space-y-4 mx-14">
      <Divider />
      <div className="flex items-center">
        <div className="flex-1 flex items-center">
          <span className="font-bold">3425 ITEMS</span>
          <Button
            onClick={() => setIsHideFilter(!isHideFilter)}
            className="text-[14px] border-none underline bg-transparent shadow-none ml-4"
            startContent={isHideFilter ? <HiChevronRight size={20} /> : <HiChevronLeft size={20} />}
          >
            {isHideFilter ? "SHOW FILTER" : "HIDE FILTER"}
          </Button>
        </div>
        <div className="flex-1 flex justify-end">
          <CDorpdown
            dropdownList={filterDropdownList}
            selectedKeys={selected}
            selectedValue={selectedValue}
            setSelectedKeys={setSelected}
          />
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default ProductFilterBar;
