import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavHeader from "../components/NavHeader";

const RootLayout: React.FC = () => {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      {/* Header */}
      <Box
        as="header"
      >
        <NavHeader />
      </Box>

      {/* Main content */}
      <Box flex="1">
        <Outlet />
      </Box>

      {/* Footer */}
      <Box
        as="footer"
        mt={8}
        py={4}
        px={8}
        borderTopWidth="1px"
        borderTopColor="gray.200"
        textAlign="center"
      >
        <Text fontSize="sm">
          © {new Date().getFullYear()} Monte Carlo. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
};

export default RootLayout;
