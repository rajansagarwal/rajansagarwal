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

const Projects = () => {
  return (
		<>
		<Head>
		<title>Research | Rajan Agarwal</title>
		<link rel="shortcut icon"  type="image/x-icon" href="https://file.heyrajan.com/i-profile.jpg"/>
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
          as='h1' 
          size='2xl' 
          fontFamily="Newsreader"
          mb={4}
          fontWeight="bold"
          lineHeight="larger"
          color={useColorModeValue("gray.100", "white")}
        >
          Projects & Research
          <hr/><br/>
        </Heading>
        
        <Heading
          as="h2"
          fontFamily="Newsreader"
          my={3}
          fontSize={{ base: '1.8em', md: "2em" }}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
          <strong>Ethereal Expression</strong>
        </Heading>
        <Heading
          as="h3"
          fontFamily="Newsreader"
          fontSize={{ base: '1.2em', md: "1.45em" }}
          my={3}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
          Software has changed the world, what if it could change the way we express ourselves? Autonomous systems and algorithmic art are critical to this new era of digital expression. Through neural networks and NLP, poetry is interpreted, analyzed and transformed into generative art. <br/><br/>

          <i>Read More</i>
          <br/><br/>
        </Heading>

           <Heading
          as="h2"
          fontFamily="Newsreader"
          my={3}
          fontSize={{ base: '1.8em', md: "2em" }}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
          <strong>Political Awareness</strong>
        </Heading>
        
        <Heading
          as="h3"
          fontFamily="Newsreader"
          fontSize={{ base: '1.2em', md: "1.45em" }}
          my={3}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
          Articles are long, politics are complex and ranting to friends leads to nowhere. We wanted to build a better way to learn; to clear the mist by alleviating false and opinionated facts through a gamified system. And that is what Diplomatica is for, bringing the truth to everyone.<br/><br/>

          <i>Read More</i>
          <br/><br/>
        </Heading>

  <Heading
          as="h2"
          fontFamily="Newsreader"
          my={3}
          fontSize={{ base: '1.8em', md: "2em" }}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
          <strong>Indigenous Access to Water</strong>
        </Heading>
        
				
        <Heading
          as="h3"
          fontFamily="Newsreader"
          fontSize={{ base: '1.2em', md: "1.45em" }}
          my={3}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
          Data infrastructure will be a primary tool in the effective quality control and health management of first nations community through a fundamental resource: water. Maintenance and pipe infrastructure are at the root cause of this  issue in indigenous communities. Data aggregation and data analysis can provide new opportunities for safety and access to water.<br/><br/>

          <i>Read More</i>
          <br/><br/>
        </Heading>

<Heading
          as="h2"
          fontFamily="Newsreader"
          my={3}
          fontSize={{ base: '1.8em', md: "2em" }}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
          <strong>A Web3 Network</strong>
        </Heading>
        
				
        <Heading
          as="h3"
          fontFamily="Newsreader"
          fontSize={{ base: '1.2em', md: "1.45em" }}
          my={3}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
         The vision is simple: to change the perspective of the internet. The overwhelming control by large companies forces us to move to decentralized software, but these organizations and protocols often require a lot of code. By decentralizing data, the ownership of organization is transferred to the population; for the first time, the people are in control. <br/><br/>

          <i>Read More</i>
          <br/><br/>
        </Heading>

<Heading
          as="h2"
          fontFamily="Newsreader"
          my={3}
          fontSize={{ base: '1.8em', md: "2em" }}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
          <strong>Autonomous Farming</strong>
        </Heading>
        
				
        <Heading
          as="h3"
          fontFamily="Newsreader"
          fontSize={{ base: '1.2em', md: "1.45em" }}
          my={3}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
         Bringing focus to digital farming and community maintenance. Whether on a large scale farm or an urban roof, data centralization, community/social building and live crop measurements are prioritized. <br/><br/>

          <i>Read More</i>
          <br/><br/>
        </Heading>

           <Heading
          as="h2"
          fontFamily="Newsreader"
          my={3}
          fontSize={{ base: '1.8em', md: "2em" }}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
          <strong>Small Business Management</strong>
        </Heading>
        
        <Heading
          as="h3"
          fontFamily="Newsreader"
          fontSize={{ base: '1.2em', md: "1.45em" }}
          my={3}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
          Small Businesses are a vital part of our local communities. We understand the difficulties faced in the transition to a digital-first environment. CoreX was built on the foundation of alleviating the complex difficulties of technical tracking and replacing consultants for SEO and Financial management.<br/><br/>

          <i>Read More</i>
          <br/><br/>
        </Heading>


<Heading
          as="h2"
          fontFamily="Newsreader"
          my={3}
          fontSize={{ base: '1.8em', md: "2em" }}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
          <strong>Mainstream Wellness</strong>
        </Heading>
        
				
        <Heading
          as="h3"
          fontFamily="Newsreader"
          fontSize={{ base: '1.2em', md: "1.45em" }}
          my={3}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
         Staying relaxed online has never been easier. Essentially, it is an effective combination of meditation apps like Calm, DayLio for journaling, Omegle for audio chatting and Signal for anonymous conversation. Powered by sentiment analysis & semantic segmentation, the platform tailors itself to you.<br/><br/>

          <i>Read More</i>
          <br/><br/>
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
		</>
  );
};

export default Projects;