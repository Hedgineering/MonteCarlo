import React from "react";
import { Container } from "react-bootstrap";
import { Center, Heading, Text, Link as ChakraLink, Icon, Button } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";

const NotFoundPage: React.FC = () => {
  return (
    <Container>
      <Center h="80vh">
        <div>
          <Heading as="h1" size="4xl" mb={8}>
            404
          </Heading>
          <Text fontSize="2xl" mb={8}>
            Oops! The page you are looking for cannot be found.
          </Text>
          <ChakraLink as="a" href="/" _hover={{ textDecoration: "none" }}>
            <Button variant="solid" size="lg" leftIcon={<Icon as={FaHome} />}>
              Back to Home
            </Button>
          </ChakraLink>
        </div>
      </Center>
    </Container>
  );
};

export default NotFoundPage;
