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
import Footer from '../components/Footer'
import FadeIn from 'react-fade-in';

const Projects = () => {
  return (
		<>
		<Head>
		<title>Projects | Rajan Agarwal</title>
<meta name="description" content="hey, i build cool things with cool people. in my free time, i work on community ventures and research the future of web3!"></meta>
	<meta name="theme-color" content="#000000"></meta>
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
      <Box w="full" align="left" justify="center" mx="auto" px={{ base: '1%', md: '17%' }}>


        <Heading 
          as='h1' 
          size='2xl' 
          fontFamily="Newsreader"
          mb={4}
          fontWeight="bold"
          lineHeight="larger"
          color={useColorModeValue("gray.100", "white")}
        >
          Projects
          <hr/><br/>
        </Heading>
        <FadeIn delay={100} transitionDuration={100}>
        <Heading
          as="h2"
          fontFamily="Newsreader"
          my={3}
          fontSize={{ base: '2em', md: "2em" }}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
          <strong>Ethereal Expression</strong>
        </Heading>
        <Heading
          as="h3"
          fontFamily="Newsreader"
          fontSize={{ base: '1.2em', md: "1.5em" }}
          my={3}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
          Software has changed the world, what if it could change the way we express ourselves? Autonomous systems and algorithmic art are critical to this new era of digital expression. Through neural networks and NLP, poetry is interpreted, analyzed and transformed into generative art. <br/><br/>

          <details>
          <summary>Read More</summary>
          <p><br/>
In its independent form, generative art redefines the purpose of computer output; current interfaces are tailored to human interaction, but never human expression. Computational devices may not have emotions, but deep learning has the ability to interpret and design frameworks around these considerations. Through natural language processing (NLP) and neural networks, this AI system can interpret poetry to develop meaningful, generative art.<br/><br/>

The next step for this project is the community impact. Through discussion with uprising poets and influential NLP developers, I want to turn this software into the next generation of literary expression. 
          </p>
          </details>
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
          <strong>Diplomatica</strong>
        </Heading>
        
        <Heading
          as="h3"
          fontFamily="Newsreader"
          fontSize={{ base: '1.2em', md: "1.4em" }}
          my={3}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
          Articles are long, politics are complex and ranting to friends leads to nowhere. We wanted to build a better way to learn; to clear the mist by alleviating false and opinionated facts through a gamified system. And that is what Diplomatica is for, bringing the truth to everyone.<br/><br/>

          <details>
          <summary>Read More</summary>
          <p><br/>
The platform is broken down into scraping relevant and desired articles, summarizing them with our AI models, and a decentralized debate platform to spark thought-provoking conversations and to compete with your friends. We wanted to prioritize a friendly interface, blazing-fast algorithms and the aggregation of data.<br/><br/>
<img src="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/663/021/datas/original.png"/>
          </p>
          </details>
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
          <strong>Hestia</strong>
        </Heading>
        
        <Heading
          as="h3"
          fontFamily="Newsreader"
          fontSize={{ base: '1.2em', md: "1.4em" }}
          my={3}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
          Small Businesses are a vital part of our local communities. We understand the difficulties faced in the transition to a digital-first environment. CoreX was built on the foundation of alleviating the complex difficulties of technical tracking and replacing consultants for SEO and Financial management.<br/><br/>

          <details>
          <summary>Read More</summary>
          <p><br/>
CoreX is a platform used to help online businesses track and store data safely so that the owner has full knowledge and control over their business statistics on an external yet decentralized platform. This can be done by using the E-Commerce website analysis AI, which provides intel on the website stats. There iss also a financial ratings AI, which provides intel on their financial state. 
<br/><br/>
Financial report features also help companies formulate a written copy based on the data. The best part is that it is all done on a single decentralized platform, so that the company’s data is not only secure, but locally stored in a single location. We feel that this will benefit local businesses a lot in managing and improving their businesses.
          </p>
          </details>
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
          <strong>CoreX</strong>
        </Heading>
        
        <Heading
          as="h3"
          fontFamily="Newsreader"
          fontSize={{ base: '1.2em', md: "1.4em" }}
          my={3}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
          Small Businesses are a vital part of our local communities. We understand the difficulties faced in the transition to a digital-first environment. CoreX was built on the foundation of alleviating the complex difficulties of technical tracking and replacing consultants for SEO and Financial management.<br/><br/>

          <details>
          <summary>Read More</summary>
          <p><br/>
CoreX is a platform used to help online businesses track and store data safely so that the owner has full knowledge and control over their business statistics on an external yet decentralized platform. This can be done by using the E-Commerce website analysis AI, which provides intel on the website stats. There iss also a financial ratings AI, which provides intel on their financial state. 
<br/><br/>
Financial report features also help companies formulate a written copy based on the data. The best part is that it is all done on a single decentralized platform, so that the company’s data is not only secure, but locally stored in a single location. We feel that this will benefit local businesses a lot in managing and improving their businesses.
          </p>
          </details>
          <br/>
        </Heading>
</FadeIn>
        <Footer/>
      </Box>
    </Flex>
		</>
  );
};

export default Projects;