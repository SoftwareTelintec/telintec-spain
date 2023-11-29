"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Image,
} from "@nextui-org/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { infoFooter } from "../constants";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Home", "Services", "Contact"];

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="flex md:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="flex md:hidden pr-3" justify="center">
        <NavbarBrand className="w-[150px]">
          <Image
            src="https://telintec.com.mx/_next/static/media/logo.0252c6d3.webp"
            removeWrapper
            alt="logo telintec"
            className="z-0 w-full h-full object-cover"
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-4" justify="center">
        <NavbarBrand className="w-[200px]">
          <Image
            src="https://telintec.com.mx/_next/static/media/logo.0252c6d3.webp"
            removeWrapper
            alt="logo telintec"
            className="z-0 w-full h-full object-cover"
          />
        </NavbarBrand>
        {infoFooter.nav.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Link color="foreground" href={`#${item}`}>
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
