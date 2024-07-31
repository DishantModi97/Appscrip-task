"use client";
import React, { useMemo, useState } from "react";
import { BsHandbag } from "react-icons/bs";
import { CiHeart, CiSearch, CiUser } from "react-icons/ci";
import CDorpdown from "../Dropdown";
import Image from "next/image";
import Logo from "../../../public/images/Logo.png";

const Header = () => {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["Eng"]));
  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );
  return (
    <div className="my-5 mx-14 flex justify-center items-center ">
      <div className="flex justify-between items-center w-full px-8">
        <div className="text-xl font-bold">
          <Image src={Logo} height={40} width={40} alt="" />
        </div>
        <h2 className="text-3xl">Logo</h2>
        <div className="flex justify-center items-center space-x-4">
          <CiSearch size={24} />
          <CiHeart size={24} />
          <BsHandbag size={20} />
          <CiUser size={24} />
          <CDorpdown
            dropdownList={[{ label: "Eng", value: "eng" }]}
            selectedKeys={selectedKeys}
            selectedValue={selectedValue}
            setSelectedKeys={(keys: Set<string>) => setSelectedKeys(keys)}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
