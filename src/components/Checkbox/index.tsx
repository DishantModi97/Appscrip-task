import { Checkbox, CheckboxGroup } from "@nextui-org/react";
import React from "react";

interface CheckboxProp {
  data?: any[];
  className?: string;
  setSelected: (value: string[]) => void;
  selected: string[];
}

const CCheckbox = (props: CheckboxProp) => {
  const { data, className, selected, setSelected } = props;

  return (
    <CheckboxGroup
      color="primary"
      radius="none"
      className={className}
      value={selected}
      onValueChange={setSelected}
    >
      {data?.map((item, index) => (
        <Checkbox key={index} value={item.value}>
          {item.label}
        </Checkbox>
      ))}
    </CheckboxGroup>
  );
};

export default CCheckbox;
