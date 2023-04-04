import React from "react";
// import { Container } from "react-bootstrap";
import { Box, Container, Heading, Text, Card, CardBody, Image, CardFooter, Button, SimpleGrid, Link, VStack } from "@chakra-ui/react"
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    <Container>
      <VStack spacing={10} align="left">
      <Box>
      <Heading size="xl">About</Heading>
      <Box>
        <Text>Project description + workflow</Text>
      </Box>
        <Button variant="solid" colorScheme="gray" leftIcon={<FaGithub />}>
          <Link href="https://github.com/Hedgineering/MonteCarlo">GitHub</Link>
        </Button>
      </Box>
      <Box>
      <Heading size="lg">Contributors</Heading>
      <SimpleGrid spacing={5} minChildWidth="250px">
        <Card maxW="sm">
          <CardBody>
            {/* <Image
            src=""
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          /> */}
            <Heading size="md">Daniel Chen</Heading>
            <Text>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces and for people who love a chic design with a
              sprinkle of vintage design.
            </Text>
          </CardBody>
          <CardFooter>
            <Button variant="solid" colorScheme="linkedin" leftIcon={<FaLinkedin />}>
              <Link href="https://linkedin.com/in/pratyoy-biswas">LinkedIn</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card maxW="sm">
          <CardBody>
            {/* <Image
            src=""
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          /> */}
            <Heading size="md">Rahul Hedge</Heading>
            <Text>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces and for people who love a chic design with a
              sprinkle of vintage design.
            </Text>
          </CardBody>
          <CardFooter>
            <Button variant="solid" colorScheme="linkedin" leftIcon={<FaLinkedin />}>
              <Link href="https://linkedin.com/in/pratyoy-biswas">LinkedIn</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card maxW="sm">
          <CardBody>
            {/* <Image
            src=""
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          /> */}
            <Heading size="md">Vrishin Patel</Heading>
            <Text>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces and for people who love a chic design with a
              sprinkle of vintage design.
            </Text>
          </CardBody>
          <CardFooter>
            <Button variant="solid" colorScheme="linkedin" leftIcon={<FaLinkedin />}>
              <Link href="https://linkedin.com/in/pratyoy-biswas">LinkedIn</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card maxW="sm">
          <CardBody>
            {/* <Image
            src=""
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          /> */}
            <Heading size="md">Pratyoy Biswas</Heading>
            <Text>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces and for people who love a chic design with a
              sprinkle of vintage design.
            </Text>
          </CardBody>
          <CardFooter>
            <Button variant="solid" colorScheme="linkedin" leftIcon={<FaLinkedin />}>
              <Link href="https://linkedin.com/in/pratyoy-biswas">LinkedIn</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card maxW="sm">
          <CardBody>
            {/* <Image
            src=""
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          /> */}
            <Heading size="md">Sahana Ranganathan</Heading>
            <Text>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces and for people who love a chic design with a
              sprinkle of vintage design.
            </Text>
          </CardBody>
          <CardFooter>
            <Button variant="solid" colorScheme="linkedin" leftIcon={<FaLinkedin />}>
              <Link href="https://linkedin.com/in/pratyoy-biswas">LinkedIn</Link>
            </Button>
          </CardFooter>
        </Card>
      </SimpleGrid>
      </Box>
      </VStack>
    </Container>
  );
}