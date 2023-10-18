'use client'

import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
  } from "@nextui-org/react";
  import DarkMode from "../Darkmode/Darkmode";
  import MenuNav from "./MenuNav";
  import Btn from "../Button/Btn";
import { useReducer } from "react";


export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useReducer((current) => !current, false);

    return (
        <>
       <Navbar
      maxWidth="lg"
      className="fixed h-[80px] max-sm:px-0 px-12"
      isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}
      
    >
      <NavbarContent >
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden"
        />
        <NavbarBrand>
          <Btn to="home" variant="light" className="px-0 font-bold text-inherit font-mons uppercase">
            M Fahlevi 
          </Btn>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Btn to="about" color="light">
            About
          </Btn>
          <Btn to="skill" color="light">
            Technology
          </Btn>
          <Btn to="triple" color="light">
            Portofolio
          </Btn>
        </NavbarItem>
        <NavbarItem>
          <DarkMode />
        </NavbarItem>
      </NavbarContent>
      <div>
        <MenuNav isOpen={isMenuOpen}  setIsMenuOpen={setIsMenuOpen} />
      </div>
    </Navbar>
        </>
    )
}