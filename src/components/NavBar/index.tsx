import { Divider, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="mt-5">
      <Navbar shouldHideOnScroll className="w-full px-4 sm:px-6 lg:px-8">
        <NavbarContent
          className="flex flex-col sm:flex-row gap-4 sm:gap-10 lg:gap-20 w-full"
          justify="center"
        >
          <NavbarItem>
            <Link color="foreground" href="#">
              SHOP
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page">
              SKILLS
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              STORIES
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              ABOUT
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              CONTACT US
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <Divider orientation="horizontal" />
    </div>
  );
};

export default NavBar;
