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
  <meta name="author" content="Rajan Agarwal"></meta>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
		</Head>

    <Flex 
    px={4} 
    mx="auto"
		py="37vh"
    bg="#090c0d"
    color="white">
      <Box w="full" align="left" justify="center" mx="auto" px={{ base: '0%', md: '17%' }}>
       
<Row>


<Col sm={12}>
<FadeIn delay={1300} transitionDuration={800}>
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
          inspired by methodical creation, i work on high-impact projects.
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
          within the community, i initiate actionable ventures.
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