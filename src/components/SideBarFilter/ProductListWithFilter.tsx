"use client";
import React, { Key, useCallback, useContext, useState } from "react";
import CCheckbox from "../Checkbox";
import { CheckBoxData, CheckBoxIdealForData, filtersList } from "./MockData";
import { Accordion, AccordionItem, Divider } from "@nextui-org/react";
import { HiChevronDown, HiChevronLeft } from "react-icons/hi";
import ProductList from "./ProductList";
import SideBarFilterContext from "@/context/SideBarFilterContext";

const ProductListWithFilter = () => {
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<Record<string, string[]>>({});
  const { isHideFilter } = useContext(SideBarFilterContext);

  const getIndicator = useCallback(
    (key: string) => {
      return selectedKeys.includes(key) ? (
        <HiChevronLeft
          size={20}
          className="transition-transform duration-300 transform rotate-180"
        />
      ) : (
        <HiChevronDown size={20} />
      );
    },
    [selectedKeys]
  );

  const handleAccordionChange = (key: Key[]) => {
    setSelectedKeys(key as string[]); // Convert Key[] to string[]
  };

  const handleCheckboxChange = (accordionKey: string, values: string[]) => {
    setSelectedCheckboxes((prev) => ({
      ...prev,
      [accordionKey]: values,
    }));
  };

  const handleUnselectAll = (accordionKey: string) => {
    setSelectedCheckboxes((prev) => ({
      ...prev,
      [accordionKey]: [],
    }));
  };

  return (
    <div className="flex flex-row gap-6 mx-14">
      <div
        className={`w-full mt-5 transition-all duration-500 ease-in-out transform ${
          isHideFilter
            ? "max-w-0 -translate-x-full opacity-0"
            : "max-w-xs translate-x-0 opacity-100"
        }`}
      >
        <div className="flex flex-col">
          <CCheckbox
            selected={selectedCheckboxes["default"] || []}
            setSelected={(values) => handleCheckboxChange("default", values)}
            className=""
            data={CheckBoxData}
          />
          <Divider className="mt-3" />
          <Accordion
            onSelectionChange={(keys) => handleAccordionChange(Array.from(keys))}
            selectedKeys={selectedKeys}
            selectionMode="multiple"
            className="max-w-xs p-0"
          >
            {filtersList?.map((item, index) => {
              const accordionKey = (index + 1).toString();
              return (
                <AccordionItem
                  key={accordionKey}
                  title={<span className="text-sm font-semibold">{item}</span>}
                  className="py-0"
                  indicator={getIndicator(accordionKey)}
                  subtitle="All"
                >
                  <div>
                    <div
                      onClick={() => handleUnselectAll(accordionKey)}
                      className="mb-5 cursor-pointer text-gray-600 underline font-light text-xs"
                    >
                      Unselect All
                    </div>
                    <CCheckbox
                      selected={selectedCheckboxes[accordionKey] || []}
                      setSelected={(values) => handleCheckboxChange(accordionKey, values)}
                      className={"mb-3"}
                      data={CheckBoxIdealForData}
                    />
                  </div>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
      <div
        className={`mt-5 transition-all duration-500 ease-in-out flex-grow ${
          isHideFilter ? "w-full" : "w-auto"
        }`}
      >
        <ProductList />
      </div>
    </div>
  );
};

export default ProductListWithFilter;
