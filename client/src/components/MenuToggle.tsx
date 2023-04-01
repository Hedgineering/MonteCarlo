import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";
import { CloseIcon, MenuIcon } from "@chakra-ui/icons";

interface MenuToggleProps extends BoxProps {
  toggle: () => void;
  isOpen: boolean;
}

const MenuToggle: React.FC<MenuToggleProps> = ({ toggle, isOpen, ...props }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle} {...props}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

export default MenuToggle;
