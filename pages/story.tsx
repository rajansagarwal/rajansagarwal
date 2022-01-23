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
import Link from 'next/link'
import FadeIn from 'react-fade-in'
import Head from 'next/head'

const Page = () => {
  return (
		<>

<Head>
		<title>Story | Rajan Agarwal</title>
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
          <Link href="/">rajan</Link> / <Link href="/story">story</Link>
          <br/>
        </Heading>
        <FadeIn>
			
    
 <Heading
          as="h2"
          fontFamily="Newsreader"
          my={5}
          fontSize={{ base: '1.4em', md: "1.4em" }}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >

         it all began with a few robots, and then a few websites.

        </Heading>
			

 <Heading
          as="h2"
          fontFamily="Newsreader"
          my={5}
          fontSize={{ base: '1.4em', md: "1.4em" }}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >

         i fell in love with the idea of hacking: building cool things with cool people.

        </Heading>

	
 <Heading
          as="h2"
          fontFamily="Newsreader"
          my={5}
          fontSize={{ base: '1.4em', md: "1.4em" }}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >

          coding isn&#39;t a hobby, it&#39;s a vision.

        </Heading>
			

 <Heading
          as="h2"
          fontFamily="Newsreader"
          my={5}
          fontSize={{ base: '1.4em', md: "1.4em" }}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >

          more <i>story</i> coming soon.

        </Heading>
			

	
	
         </FadeIn>
      </Box>
    </Flex>
		</>
  );
};

export default Page;