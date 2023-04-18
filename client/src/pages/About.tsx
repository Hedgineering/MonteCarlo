import React from "react";
// import { Container } from "react-bootstrap";
import { Box, Container, Heading, Text, Card, CardBody, Image, CardFooter, Button, SimpleGrid, Link, VStack, Stack } from "@chakra-ui/react"
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    <Container maxWidth="5xl" >
      <VStack spacing="12" align="left">
        <Box>
          <Stack mb="3" spacing="3">
          <Heading size="xl">About</Heading>
          
          <Box>
            <Text>
              Our project is a Monte Carlo simulation model for equity curve analysis that helps
              users understand what strategies and what risk exposure are viable to use with their
              portfolio. It uses historical stock market data and probability metrics to generate
              multiple forecasts of a user's equity over a series of trades, allowing them to make
              more informed decisions about their investments.
            </Text>
          </Box>
          </Stack>
          <Button variant="solid" colorScheme="gray" leftIcon={<FaGithub />}>
            <Link _hover={{color: "black"}} href="https://github.com/Hedgineering/MonteCarlo">GitHub</Link>
          </Button>
        </Box>
        <Box>
          <Heading size="xl">Contributors</Heading>
          <SimpleGrid spacing={10} minChildWidth="300px">
            <Card maxW="sm">
              <CardBody>
                <Image
                  src="https://media.licdn.com/dms/image/C4D03AQE1rTkZy09Nsg/profile-displayphoto-shrink_800_800/0/1602626150836?e=1687392000&v=beta&t=oDTEEKUlbnokwCYq-J8E-r7Uyz6zCJ6jM_wtep09RMU"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Daniel Chen</Heading>
                  <Text>
                    Hi, I'm Daniel and I'm a junior studying Electrical and Computer Engineering at Rutgers University.
                  </Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <Button variant="solid" colorScheme="linkedin" leftIcon={<FaLinkedin />} type="submit">
                  <Link _hover={{color: "white"}} color="white" href="https://www.linkedin.com/in/chendaniel03/">LinkedIn</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card maxW="sm">
              <CardBody>
                <Image
                  src="https://media.licdn.com/dms/image/C4D03AQE7EBUJvz9xgw/profile-displayphoto-shrink_800_800/0/1634865202439?e=1687392000&v=beta&t=43jnqd-2SemYEy-55JoTHKaivyNzbj3xRVToUsGEzjQ"
                  alt="Rahul Hedge"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Rahul Hedge</Heading>
                  <Text>
                    I am a Full Stack developer with industry experience building websites and web
                    applications. I specialize in JavaScript and have professional experience working
                    with C#, .NET Core, Blazor, Git, and Azure DevOps. I also have experience working
                    with MongoDB, Node.js, and React.
                  </Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <Button variant="solid" colorScheme="linkedin" leftIcon={<FaLinkedin />}>
                  <Link _hover={{color: "white"}} color="white" href="https://www.linkedin.com/in/rahul-anant-hegde/">LinkedIn</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card maxW="sm">
              <CardBody>
                <Image
                  src="https://media.licdn.com/dms/image/C5603AQHunynCGZlg5A/profile-displayphoto-shrink_800_800/0/1653380754231?e=1687392000&v=beta&t=2Q_-7aEo6CVK6WRaqMcahhZg9VGSKZLXmNqhzD0o1BI"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Vrishin Patel</Heading>
                  <Text>
                    I'm an Honors Rutgers School of Engineering junior passionate about machine
                    learning, quantum computing, and finance. I'm double majoring in Electrical
                    and Computer Engineering and Economics, and minoring in Computer Science, and
                    am especially interested in working in the cross section between technology and
                    business.
                  </Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <Button variant="solid" colorScheme="linkedin" leftIcon={<FaLinkedin />}>
                  <Link _hover={{color: "white"}} href="https://www.linkedin.com/in/vrishinpatel/">LinkedIn</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card maxW="sm">
              <CardBody>
                <Image
                  src="https://media.licdn.com/dms/image/C4E03AQFSYzz40I_WsA/profile-displayphoto-shrink_800_800/0/1634171910846?e=1687392000&v=beta&t=0HMpKyvPfnJKqv2qioBdrxHzowIeUNqIB5yz13Co7hU"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Pratyoy Biswas</Heading>
                  <Text>
                    I am a sophomore in the Rutgers University School of Engineering Honors Academy
                    pursuing a double major in Biomedical Engineering and Computer Science, with
                    a minor in Mathematics. Though my main interests lie in machine learning and 
                    bioinformatics, I have always maintained an interest in finance as well.
                  </Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <Button variant="solid" colorScheme="linkedin" leftIcon={<FaLinkedin />}>
                  <Link _hover={{color: "white"}} href="https://www.linkedin.com/in/pratyoy-biswas/">LinkedIn</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card maxW="sm">
              <CardBody>
                <Image
                  src="https://cdn.discordapp.com/attachments/1080257534838976653/1097683756367761558/Screenshot_65.png"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                  boxSize='2xs'
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Sahana Ranganathan</Heading>
                  <Text>
                    I am an aspiring second-year Computer Engineering student minoring in Computer
                    Science. My passion for technology (both hardware and software) brought me to the
                    School of Engineering at Rutgers University-New Brunswick, where I am working on
                    my BS in Computer Engineering. Additionally, I am a Certified Scrum Master and
                    Certified Scrum Product Owner, and I hope to become more involved in project
                    management.
                  </Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <Button variant="solid" colorScheme="linkedin" leftIcon={<FaLinkedin />}>
                  <Link _hover={{color: "white"}} href="https://www.linkedin.com/in/sahana-ranganathan-86a7b4204/">LinkedIn</Link>
                </Button>
              </CardFooter>
            </Card>
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
}