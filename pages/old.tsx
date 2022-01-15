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
import Footer from '../components/Footer'

const Index = () => {
  return (
		<>
		<Head>
		<title>Rajan Agarwal</title>
  <meta name="description" content="hey, i build cool things with cool people. in my free time, i work on community ventures and research the future of web3!"></meta>
	<meta name="theme-color" content="#090c0d"></meta>
  <meta name="keywords" content="Rajan, Rajan Agarwal, Agarwal, Turner Fenton, Developer, Hacktivist, Brampton, Ontario, Toronto"></meta>
  <meta name="author" content="Rajan Agarwal"></meta>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
		</Head>
    <Flex 
    px={4} 
    pt={{ base: '12', md: '24' }} 
    pb={12} 
    mx="auto"
    bg="#090c0d"
    color="white">
      <Box w="full" align="left" justify="center" mx="auto" px={{ base: '2%', md: '20%' }}>
        

 <Heading
          as="h2"
          fontFamily="Newsreader"
          my={3}
          fontSize={{ base: '1.4em', md: "1.5em" }}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
          it all began with my very first robot. the technical spirit grew as i explored t
        </Heading>

        <Heading
          as="h2"
          fontFamily="Newsreader"
          my={3}
          fontSize={{ base: '1.4em', md: "1.5em" }}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
          I build <Link href="/research"><u>cool things</u></Link> with <Link href="/community"><u>cool people</u></Link>. 
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
          Currently, I&apos;m <Link href="/current"><u>exploring</u></Link> custom blockchains & actionable biotech.
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
          I work with high-impact <Link href="/work"><u>youth organizations</u></Link> & <Link href="/current"><u>startups</u></Link>.
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
        <Footer/>
      </Box>
    </Flex>
		</>
  );
};

export default Index;