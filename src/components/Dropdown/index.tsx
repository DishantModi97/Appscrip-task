import { dropdown, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import React from "react";
import { HiChevronDown } from "react-icons/hi";

interface DropdownProps {
  selectedValue: string;
  selectedKeys: any;
  dropdownList: { label: string; value: string }[];
  setSelectedKeys?: any;
}

const CDorpdown = (props: DropdownProps) => {
  const { dropdownList, selectedKeys, selectedValue, setSelectedKeys } = props;

  return (
    <Dropdown>
      <DropdownTrigger>
        <div className="cursor-pointer flex items-center">
          {selectedValue} <HiChevronDown size={20} />
        </div>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectedKeys={selectedKeys}
        selectionMode="single"
        onSelectionChange={setSelectedKeys}
      >
        {dropdownList?.map((item) => (
          <DropdownItem key={item.value}>{item.label}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default CDorpdown;
