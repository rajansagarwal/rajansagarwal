import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  Heading,
  Button,
  HStack,
} from "@chakra-ui/react";
import Link from 'next/link';

const Hero = () => {
  return (
    <Flex 
    px={4} 
    pt={{ base: '12', md: '24' }} 
    pb={12} 
    mx="auto"
    bg="#090c0d"
    color="white">
      <Box w="full" align="left" justify="center" mx="auto" px={{ base: '2%', md: '20%' }}>
        <Heading 
          as='h1' 
          size='2xl' 
          fontFamily="Newsreader"
          mb={4}
          fontWeight="bold"
          lineHeight="larger"
          color={useColorModeValue("gray.100", "white")}
        >
          Rajan Agarwal
        </Heading>
        <Heading
          as="h2"
          fontFamily="Newsreader"
          my={3}
          fontSize={{ base: '2xl', md: "2xl" }}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
          I build <Link href="">cool things</Link> with <Link href="">cool people</Link>.
        </Heading>
        <Heading
          as="h3"
          fontFamily="Newsreader"
          my={3}
          fontSize="2xl"
          fontWeight="500"
          lineHeight="shorter"
          color={useColorModeValue("gray.100", "white")}
        >
          Currently, I&apos;m working on a custom blockchain for deployment.
        </Heading>
        <Heading
          as="h4"
          fontFamily="Newsreader"
          my={3}
          fontSize="2xl"
          fontWeight="500"
          lineHeight="shorter"
          color={useColorModeValue("gray.100", "white")}
        >
          I work with high-impact youth organizations & startups.
        </Heading>
        <Heading
          as="h4"
          fontFamily="Newsreader"
          my={3}
          fontSize="2xl"
          fontWeight="500"
          lineHeight="shorter"
          color={useColorModeValue("gray.100", "white")}
        >
          Within the community, I initiate actionable ventures.
        </Heading>
        <chakra.p 
           className="description"
           color="gray.500" 
           fontSize="1xl"
           >
          github, twitter, philosophy, directory
        </chakra.p>
      </Box>
    </Flex>
  );
};

export default Hero;