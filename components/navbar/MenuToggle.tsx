import { Box } from "@chakra-ui/react";
import { MenuIcon } from "./MenuIcon";
import { CloseIcon } from "./CloseIcon";

export const MenuToggle = ({ toggle, isOpen }: any) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};
