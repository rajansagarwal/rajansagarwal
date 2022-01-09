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
import Head from 'next/head';
import { Tooltip } from '@geist-ui/react';

const Index = () => {
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
          fontSize={{ base: '1.4em', md: "1.5em" }}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
          I build <Link href="/projects"><u>cool things</u></Link> with <Link href="/interact"><u>cool people</u></Link>. 
        </Heading>
        <Heading
          as="h3"
          fontFamily="Newsreader"
          my={3}
          fontSize={{ base: '1.4em', md: "1.5em" }}
          fontWeight="500"
          lineHeight="shorter"
          color={useColorModeValue("gray.100", "white")}
        >
          Currently, I&apos;m <Link href="/research"><u>researching</u></Link>  custom blockchains & actionable biotech.
        </Heading>
        <Heading
          as="h4"
          fontFamily="Newsreader"
          my={3}
          fontSize={{ base: '1.4em', md: "1.5em" }}
          fontWeight="500"
          lineHeight="shorter"
          color={useColorModeValue("gray.100", "white")}
        >
          I work with high-impact <Link href="/story"><u>youth organizations</u></Link> & <Link href="/current"><u>startups</u></Link>.
        </Heading>
        <Heading
          as="h4"
          fontFamily="Newsreader"
          my={3}
          fontSize={{ base: '1.4em', md: "1.5em" }}
          fontWeight="500"
          lineHeight="shorter"
          color={useColorModeValue("gray.100", "white")}
        >
          Within the community, I initiate <Link href="/ventures"><u>actionable ventures</u></Link>. 
        </Heading>
        <chakra.p 
           className="description"
           color="gray.500" 
           fontSize={{ base: '1.2em', md: "1.2em" }}
           >
          github, twitter, philosophy, directory
        </chakra.p>
      </Box>
    </Flex>
  );
};

export default Index;