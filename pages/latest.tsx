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
import Footer from '../../components/Footer'
import FadeIn from 'react-fade-in'
import Head from 'next/head'

const Page = () => {
  return (
		<>

<Head>
		<title>Writings | Rajan Agarwal</title>
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
          <Link href="/">rajan</Link> / <Link href="/latest">latest</Link>
          <br/>
        </Heading>
        <FadeIn>
			
    
 <Heading
          as="h2"
          fontFamily="Newsreader"
          my={3}
          fontSize={{ base: '2em', md: "2em" }}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
					<Link
				  href="https://workshops.hackclub.com/custom_search/"
				>
          Custom Search Engine Workshop ~ Hack Club
					</Link>
        </Heading>
				
        <Heading
          as="h3"
          fontFamily="Newsreader"
          fontSize={{ base: '1.2em', md: "1.4em" }}
          my={3}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
          For the Hack Club community, I wrote a workshop for users to build a personalized search engine.<br/><br/>
          <br/>
        </Heading>

  
 <Heading
          as="h2"
          fontFamily="Newsreader"
          my={3}
          fontSize={{ base: '2em', md: "2em" }}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
					<Link
				  href="https://mindson.dino.icu/posts/v-ethnocentrism"
				>
          Ethnocentrism & Wellbeing ~ Mind Matrix
					</Link>
        </Heading>
				
        <Heading
          as="h3"
          fontFamily="Newsreader"
          fontSize={{ base: '1.2em', md: "1.4em" }}
          my={3}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
         A short article about culture, globalization and individualism.<br/><br/>
          <br/>
        </Heading>


  
 <Heading
          as="h2"
          fontFamily="Newsreader"
          my={3}
          fontSize={{ base: '2em', md: "2em" }}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
					<Link
				href="https://www.youtube.com/watch?v=inOwByW_ufs&t=121s"
				>
          Indigenous water sustainability ~ Hestia
					</Link>
        </Heading>
				
        <Heading
          as="h3"
          fontFamily="Newsreader"
          fontSize={{ base: '1.2em', md: "1.4em" }}
          my={3}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
          At the UTHSDC, we built a solution for water quality and distribution (Best Pitch)<br/><br/>
          <br/>

					more events & content coming soon.
        </Heading>

	
	
         </FadeIn>
      </Box>
    </Flex>
		</>
  );
};

export default Page;