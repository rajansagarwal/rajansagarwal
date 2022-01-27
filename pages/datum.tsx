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

const Page = () => {
  return (
		<>

<Head>
		<title>Datum Health | Rajan Agarwal</title>
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
          <Link href="/">rajan</Link> / <Link href="/ethereal">datum health</Link>
          <br/>
        </Heading>
        <FadeIn>
			
    
 <Heading
          as="h2"
          fontFamily="Newsreader"
          my={7}
          fontSize={{ base: '2em', md: "2em" }}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >

        patient-centric data aggregation.

        </Heading>
			

 <Heading
          as="h2"
          fontFamily="Newsreader"
          my={5}
          fontSize={{ base: '1.4em', md: "1.4em" }}
          fontWeight="500"
					lineHeight="auto"
          color={useColorModeValue("gray.100", "white")}
        >

         TL;DR: Enabling hospitals to transition into a more patient-centric health care process by creating tools for transitioning from traditional data analysis and management systems.

        </Heading>
 <Heading
          as="h2"
          fontFamily="Newsreader"
          my={5}
					lineHeight="auto"
          fontSize={{ base: '1.4em', md: "1.4em" }}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >

        The foundation of all medical data for patients that hospitals solely rely on are Electronic Health Records (EHR). Each patients&#39; profile contains historical evidence on their medical history, visits, symptoms, and prescriptions. Yet, this information is not transparent nor safe for access, not the mention that it fails to integrate aggregated data to inform decision making across multiple parties.
<br/><br/>
The product is poised in a position to create a common middle-layer protocol for inter-EHR communication, and this has unprecedented consequences on how new services and products integrate with a greater customer base.

        </Heading>
			

 <Heading
          as="h2"
          fontFamily="Newsreader"
          my={5}
          fontSize={{ base: '1.4em', md: "1.4em" }}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >

          more coming soon.

        </Heading>
			

	
	
         </FadeIn>
      </Box>
    </Flex>
		</>
  );
};

export default Page;