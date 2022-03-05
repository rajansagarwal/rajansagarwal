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
import Image from 'next/image';
import Transition from '../components/Transition';
import Footer from '../components/Footer';
import { Container, Col, Row } from 'react-grid-system';
import FadeIn from 'react-fade-in';

const Index = () => {
  return (
		<Container>
		<Head>
		<title>Rajan Agarwal</title>
  <meta name="description" content="hey, i build cool things with cool people. in my free time, i work on community ventures and research the future of web3!"></meta>
	<meta name="theme-color" content="#090c0d"></meta>
  <meta name="keywords" content="Rajan, Rajan Agarwal, Agarwal, Turner Fenton, Developer, Hacktivist, Brampton, Ontario, Toronto"></meta>
	<link rel="shortcut icon"  type="image/x-icon" href="https://file.heyrajan.com/i-profile.jpg"/>
  <meta name="author" content="Rajan Agarwal"></meta>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
		</Head>
		
  
    

    <Flex 
    px={4} 
    mx="auto"
		py="28vh"
    bg="#090c0d"
    color="white">

      <Box w="full" align="left" justify="center" mx="auto" px={{ base: '0%', xl: '17%' }}>
       
      <Col sm={12}>
<FadeIn delay={150} transitionDuration={600}>
				<Heading
					className="center"
          fontFamily="Newsreader"
          fontSize={{ base: '1.5em', md: "1.6em" }}
          fontWeight="500"
          pt={20}
          pb={16}
          color={useColorModeValue("gray.100", "white")}
        >
         <Transition/>
        </Heading>
  </FadeIn>
</Col>
<FadeIn delay={200} transitionDuration={800}>
        
<Heading
          as="h2"
          lineHeight="auto"
					className="center"
          fontFamily="Newsreader"
          fontSize={{ base: '1.3em', md: "1.5em" }}
          fontWeight="500"
          color='#949494'
        >
          
        </Heading><Heading
          as="h2"
					my={3}
					pb="1"
					pt="2"
          lineHeight="auto"
					className="center"
          fontFamily="Newsreader"
          fontSize={{ base: '1.3em', md: "1.5em" }}
          fontWeight="500"
          color='#949494'
        >
          <Link href="/">about,</Link> <Link href="/">work,</Link>  <Link href="/">ideas,</Link>  <Link href="/">contact</Link>
        </Heading>
      <Heading
          as="h2"
          fontFamily="Newsreader"
          my={3}
          lineHeight="auto"
					className="center"
          fontSize={{ base: '1.3em', md: "1.5em" }}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
          currently, i&#39;m rebuilding patient data aggregation & poetic expression through generative art.
        </Heading>
        <Heading
          as="h2"
					my={3}
					pb="1"
					pt="2"
          lineHeight="auto"
					className="center"
          fontFamily="Newsreader"
          fontSize={{ base: '1.3em', md: "1.5em" }}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
          in my free time, i explore evolutionary game theory and quantum diplomacy.<br/><br/>
        </Heading>
        <Heading
          as="h2"
					my={3}
					pb="1"
					pt="2"
          lineHeight="auto"
					className="center"
          fontFamily="Newsreader"
          fontSize={{ base: '1.3em', md: "1.5em" }}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
          
        </Heading>
        
</FadeIn>
      </Box>

			
	
    </Flex>



			</Container>
  );
};

export default Index;