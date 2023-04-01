import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const RootLayout: React.FC = () => {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      {/* Header */}
      <Box
        as="header"
        py={4}
        px={8}
        borderBottomWidth="1px"
        borderBottomColor="gray.200"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontSize="xl" fontWeight="bold">
            Monte Carlo
          </Text>
          <Link href="/about">About</Link>
        </Flex>
      </Box>

      {/* Main content */}
      <Box flex="1">
        <Outlet />
      </Box>

      {/* Footer */}
      <Box
        as="footer"
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
