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
		py="33vh"
    bg="#090c0d"
    color="white">
      <Box w="full" align="left" justify="center" mx="auto" px={{ base: '0%', xl: '17%' }}>
       
<Row>


<Col sm={12}>
<FadeIn delay={200} transitionDuration={700}>
 <Heading
          as="h2"
          fontFamily="Newsreader"
          my={3}
					pb="1"
					className="center"
          fontSize={{ base: '1.3em', md: "1.5em" }}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
          <Link href="/story"><u>inspired</u></Link> by methodical creation, i work on high-impact <Link href="/work"><u>projects</u></Link>.
        </Heading>
 <Heading
          as="h2"
					my={3}
					pb="1"
					pt="2"
					className="center"
          fontFamily="Newsreader"
          fontSize={{ base: '1.3em', md: "1.5em" }}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
        <Link href="/latest"><u>currently</u></Link>, i&#39;m working on <Link href="/ethereal"><u>poetic expression</u></Link> & data <Link href="/datum"><u> aggregation</u></Link>. 
        </Heading>
				 <Heading
          as="h2"
					my={3}
					pb="1"
					pt="2"
					className="center"
          fontFamily="Newsreader"
          fontSize={{ base: '1.3em', md: "1.5em" }}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
        outside of work, i <Link href="/writings"><u>write</u></Link> and launch community <Link href="/ventures"><u>ventures</u></Link>.
        </Heading>

				<Heading
					my={3}
					pb="1"
					pt="2"
					className="center"
          fontFamily="Newsreader"
          fontSize={{ base: '1.3em', md: "1.5em" }}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
         <Transition/>

        </Heading>
  </FadeIn>
</Col>
		</Row>



      </Box>

			
	
    </Flex>


			</Container>
  );
};

export default Index;