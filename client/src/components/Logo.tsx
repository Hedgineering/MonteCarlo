import React from "react";
import { Text, Box, BoxProps } from "@chakra-ui/react";

interface LogoProps extends BoxProps {}

const Logo: React.FC<LogoProps> = ({ ...props }) => {
  return (
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold">
        Monte Carlo
      </Text>
    </Box>
  );
};

export default Logo;