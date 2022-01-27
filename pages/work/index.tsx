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
import FadeIn from 'react-fade-in'
import Head from 'next/head'
import { Container, Row, Col } from 'react-grid-system'

const Page = () => {
  return (
		<Container>

<Head>
		<title>Work | Rajan Agarwal</title>
  <meta name="description" content="hey, i build cool things with cool people. in my free time, i work on community ventures and research the future of web3!"></meta>
	<link rel="shortcut icon"  type="image/x-icon" href="https://file.heyrajan.com/i-profile.jpg"/>
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
      <Box w="full" align="left" justify="center" mx="auto" px={{ base: '1%', md: '5%', xl: '17%' }}>
        <Heading 
          as='h1' 
          fontSize='1.6em' 
          fontFamily="Newsreader"
          pb={12}
          fontWeight="bold"
          lineHeight="larger"
          color='#949494'
        >
          <Link href="/">rajan</Link> / <Link href="/writings">work</Link>
          <br/>
        </Heading>
         <FadeIn>
<Row>
<Col sm={6}>	
			<Heading
          as="h2"
          fontFamily="Newsreader"
          my={3}
          fontSize={{ base: '2em', md: "2em" }}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
					<Link
				  href="/writings/human-rights"
				>
          Organizations
					</Link>
					<br/><br/>
        </Heading>
				</Col>
			<Col sm={6}>
				<Heading
          as="h2"
          fontFamily="Newsreader"
          my={3}
          fontSize={{ base: '1.7em', md: "1.7em" }}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
					<Link
				  href="/writings/human-rights"
				>
          On Human Rights & Sovereignty
					</Link>
        </Heading>
				
        <Heading
          as="h3"
          fontFamily="Newsreader"
          fontSize={{ base: '1.1em', md: "1.3em" }}
          my={3}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
          The classic debate of universalism against relativism.<br/><br/>
          <br/>
        </Heading>
				<Heading
          as="h2"
          fontFamily="Newsreader"
          my={3}
          fontSize={{ base: '1.7em', md: "1.7em" }}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
					<Link
				  href="/writings/human-rights"
				>
          On Human Rights & Sovereignty
					</Link>
        </Heading>
				
        <Heading
          as="h3"
          fontFamily="Newsreader"
          fontSize={{ base: '1.1em', md: "1.3em" }}
          my={3}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
          The classic debate of universalism against relativism.<br/><br/>
          <br/>
        </Heading>
				</Col>
   </Row> 

	 <Row>
<Col sm={6}>	
			<Heading
          as="h2"
          fontFamily="Newsreader"
          my={3}
          fontSize={{ base: '2em', md: "2em" }}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
					<Link
				  href="/writings/human-rights"
				>
          Projects
					</Link>
					<br/><br/>
        </Heading>
				</Col>
			<Col sm={6}>
				<Heading
          as="h2"
          fontFamily="Newsreader"
          my={3}
          fontSize={{ base: '1.7em', md: "1.7em" }}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
					<Link
				  href="/writings/human-rights"
				>
          On Human Rights & Sovereignty
					</Link>
        </Heading>
				
        <Heading
          as="h3"
          fontFamily="Newsreader"
          fontSize={{ base: '1.1em', md: "1.3em" }}
          my={3}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
          The classic debate of universalism against relativism.<br/><br/>
          <br/>
        </Heading>
				</Col>
   </Row> 
			
	
         </FadeIn>
      </Box>
    </Flex>
			</Container>
  );
};

export default Page;