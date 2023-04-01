import React from "react";
import { Box, Text, BoxProps } from "@chakra-ui/react";

interface LogoProps extends BoxProps {}

const Logo: React.FC<LogoProps> = ({ ...props }) => {
  return (
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold">
        Logo
      </Text>
    </Box>
  );
};

export default Logo;
