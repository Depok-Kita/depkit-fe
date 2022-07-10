import { useState } from "react";
import { NavbarContainer } from "./NavbarContainer";
import Logo from "./Logo";
import { MenuToggle } from "./MenuToggle";
import { MenuLinks } from "./MenuLinks";

export const Navbar = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavbarContainer {...props}>
      <Logo color={["black", "black", "primary.500", "primary.500"]} />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavbarContainer>
  );
};
