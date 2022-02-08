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
		py="47vh"
    bg="#090c0d"
    color="white">
      <Box w="full" align="center" justify="center">
       
<Row>


<Col sm={12}>
<FadeIn delay={150} transitionDuration={600}>
				<Heading
					className="center"
          fontFamily="Newsreader"
          fontSize={{ base: '1.5em', md: "1.6em" }}
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
    <Flex 
    px={4} 
    mx="auto"
		py="6vh"
    bg="#090c0d"
    color="white">
      <Box w="full" align="left" justify="center" mx="auto" px={{ base: '0%', xl: '17%' }}>
       
      <Heading 
          as='h1' 
          fontSize='1.6em' 
          fontFamily="Newsreader"
          pb={7}
          fontWeight="bold"
          lineHeight="larger"
          color='#949494'
        >
          <Link href="/">story</Link>
        </Heading>

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
          it all began with a few robots, and then a few websites. i quickly fell in love with hacking.
        </Heading>
 <Heading
          as="h2"
					my={3}
					pb="1"
					pt="2"
					className="center"
          lineHeight="auto"
          fontFamily="Newsreader"
          fontSize={{ base: '1.3em', md: "1.5em" }}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
        inspired by methodical creation, i found a new vision for the web.
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
          building isn&#39;t a hobby, it&#39;s a <Link href="/story"><u>vision</u></Link>.
        </Heading>

      </Box>

			
	
    </Flex>

    <Flex 
    px={4} 
    mx="auto"
		py="6vh"
    bg="#090c0d"
    color="white">
      <Box w="full" align="left" justify="center" mx="auto" px={{ base: '0%', xl: '17%' }}>
       
      <Heading 
          as='h1' 
          fontSize='1.6em' 
          fontFamily="Newsreader"
          pb={7}
          fontWeight="bold"
          lineHeight="larger"
          color='#949494'
        >
          <Link href="/">current</Link>
        </Heading>

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
          now, i&#39;m rebuilding patient data systems through aggregation.
        </Heading>
 <Heading
          as="h2"
					my={3}
					pb="1"
					pt="2"
					className="center"
          lineHeight="auto"
          fontFamily="Newsreader"
          fontSize={{ base: '1.3em', md: "1.5em" }}
          color={useColorModeValue("gray.100", "white")}
        >
        i&#39;m creating a new vision for poetic expression through generative art and NLP.
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
          in my free time, i work on papers for evolutionary game theory and quantum diplomacy.<br/><br/>
        </Heading>

      </Box>

			
	
    </Flex>
    <Flex 
    px={4} 
    pt={{ base: '12', md: '24' }} 
    pb={12} 
    mx="auto"
    bg="#090c0d"
    color="white">
      <Box w="full" align="left" justify="center" mx="auto" px={{ base: '0%', xl: '17%' }}>
    <Row>
<Col sm={4.5}>	 
<Heading 
          as='h1' 
          fontSize='1.6em' 
          fontFamily="Newsreader"
          fontWeight="bold"
          lineHeight="larger"
          color='#949494'
          pb={12}
        >
          <Link href="/">ventures</Link>
          <br/>
        </Heading>
				</Col>
			<Col sm={7.5}>

				<Heading
          as="h2"
          fontFamily="Newsreader"
          my={3}
          fontSize={{ base: '1.7em', md: "1.7em" }}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
					<Link
				  href="https://book.heyrajan.com"
				>
         Breaking Barriers
					</Link>
        </Heading>
				
        <Heading
          as="h3"
          fontFamily="Newsreader"
          fontSize={{ base: '1.1em', md: "1.3em" }}
          my={3}
					lineHeight="auto"
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
         A children&#39;s novel that tells the story of Ryan, a 17 year old with autism, and his journey to become a lawyer.<br/><br/>
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
				  href="https://run.heyrajan.com"
				>
         160km Run For Hope
					</Link>
        </Heading>
				
        <Heading
          as="h3"
          fontFamily="Newsreader"
          fontSize={{ base: '1.1em', md: "1.3em" }}
          my={3}
					lineHeight="auto"
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
         Running 160km for social awareness about indigenous reconciliation.<br/><br/>
        </Heading>
				
				</Col>
   </Row> 
   </Box>
   </Flex>
   <Flex 
    px={4} 
    pb={12} 
    bg="#090c0d"
    color="white">
      <Box w="full" align="left" justify="center" mx="auto" px={{ base: '0%', xl: '17%' }}>
    <Row>
<Col sm={4.5}>	
<Heading 
          as='h1' 
          fontSize='1.6em' 
          fontFamily="Newsreader"
          fontWeight="bold"
          lineHeight="larger"
          color='#949494'
          pb={12}
        >
          <Link href="/writings">latest</Link>
          <br/>
        </Heading>
				</Col>
			<Col sm={7.5}>

				<Heading
          as="h2"
          fontFamily="Newsreader"
          my={3}
          fontSize={{ base: '1.7em', md: "1.7em" }}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
					<Link
				  href="/writings/soulbound"
				>
         Soulbound
					</Link>
        </Heading>
				
        <Heading
          as="h3"
          fontFamily="Newsreader"
          fontSize={{ base: '1.1em', md: "1.3em" }}
          my={3}
					lineHeight="auto"
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
         A reflection and extrapolation of Vitalik Buterin&#39;s latest post.<br/><br/>
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
				  href="/writings/deso"
				>
         A Case For Decentralized Social
					</Link>
        </Heading>
				
        <Heading
          as="h3"
          fontFamily="Newsreader"
          fontSize={{ base: '1.1em', md: "1.3em" }}
          my={3}
					lineHeight="auto"
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
        A vision for true ownership, through classical power distribution.<br/><br/>
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
					lineHeight="auto"
          textDecoration="none"
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
         The classic debate of universalism against relativism.<br/><br/>
        </Heading>
				
        <Heading
          as="h3"
          fontFamily="Newsreader"
          fontSize={{ base: '1.1em', md: "1.3em" }}
          my={3}
					lineHeight="auto"
          textDecoration='underline'
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
         <Link href="/writings">read all writings.</Link><br/><br/>
        </Heading>
				
				</Col>
   </Row> 
   </Box>
   </Flex>
    <Flex 
    px={4} 
    pb={12} 
    mx="auto"
    bg="#090c0d"
    color="white">
      <Box w="full" align="left" justify="center" mx="auto" px={{ base: '1%', md: '1%', xl: '17%' }}>
         <FadeIn>
<Row>
<Col sm={4.5}>	
<Heading 
          as='h1' 
          fontSize='1.6em' 
          fontFamily="Newsreader"
          fontWeight="bold"
          lineHeight="larger"
          color='#949494'
          pb={12}
        >
          <Link href="/">work</Link>
          <br/>
        </Heading>
				</Col>
			<Col sm={7.5}>
				<Heading
          as="h2"
          fontFamily="Newsreader"
          my={3}
          fontSize={{ base: '1.7em', md: "1.7em" }}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
					<Link
				  href="https://mindson.dino.icu"
				>
          Co-Founder, Minds On
					</Link>
        </Heading>
				
        <Heading
          as="h3"
          fontFamily="Newsreader"
          fontSize={{ base: '1.1em', md: "1.3em" }}
          my={3}
					lineHeight="auto"
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
          Directing internal management, leading mental health research, desigining posts and creating funding campaigns.<br/><br/>
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
				  href="https://jectoronto.org"
				>
          Internal Affairs, JEC Toronto
					</Link>
        </Heading>
				
        <Heading
          as="h3"
          fontFamily="Newsreader"
          fontSize={{ base: '1.1em', md: "1.3em" }}
          my={3}
					lineHeight="auto"
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
          Connecting with international board, leading capstone High Returns Web3 financial literacy event.<br/><br/>
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
				  href="/datum"
				>
          Co-Founder, Datum Health
					</Link>
        </Heading>
				
        <Heading
          as="h3"
          fontFamily="Newsreader"
          fontSize={{ base: '1.1em', md: "1.3em" }}
          my={3}
					lineHeight="auto"
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
          Enabling hospitals to transition into a more patient-centric health care process through NLP & Machine Learning.<br/><br/>
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
				  href="https://instagram.com/teamsalutem"
				>
          Team Salutem
					</Link>
        </Heading>
				
        <Heading
          as="h3"
          fontFamily="Newsreader"
          fontSize={{ base: '1.1em', md: "1.3em" }}
          my={3}
					lineHeight="auto"
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
          Tackling malnutrition alongside Public Health Department in Nigeria, an LI-Change proejct.<br/><br/>
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
				  href="https://medium.com/junior-economist"
				>
          Writer, Junior Economist & Mind Matrix
					</Link>
        </Heading>
				
        <Heading
          as="h3"
          fontFamily="Newsreader"
          fontSize={{ base: '1.1em', md: "1.3em" }}
          my={3}
					lineHeight="auto"
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
          Economic writer about uprising socioeconomic issues. Mental Health writer investigating political connections.<br/><br/>
        </Heading>
				
				</Col>
   </Row> 
<br/><br/>
<Row>
<Col sm={4.5}>	
<Heading 
          as='h1' 
          fontSize='1.6em' 
          fontFamily="Newsreader"
          pb={12}
          fontWeight="bold"
          lineHeight="larger"
          color='#949494'
        >
          <Link href="/">research</Link>
          <br/>
        </Heading>
				</Col>
			<Col sm={7.5}>
				<Heading
          as="h2"
          fontFamily="Newsreader"
					lineHeight="auto"
          fontSize={{ base: '1.7em', md: "1.7em" }}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
					<Link
				  href="/ethereal"
				>
          Generative Poetic Art & Neural Networks
					</Link>
        </Heading>
				
        <Heading
          as="h3"
          fontFamily="Newsreader"
          fontSize={{ base: '1.1em', md: "1.3em" }}
          my={3}
					lineHeight="auto"
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
         NLP & Machine Learning to turn literary expression into meaningful art.<br/><br/>
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
				  href="https://www.youtube.com/watch?v=inOwByW_ufs"
				>
          Indigenous Water Distribution
					</Link>
        </Heading>
				
        <Heading
          as="h3"
          fontFamily="Newsreader"
          fontSize={{ base: '1.1em', md: "1.3em" }}
          my={3}
					lineHeight="auto"
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
         Aggregate data collection & community networks for water quality and distribution.<br/><br/>
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
				  href="/writings/deso"
				>
         Decentralized Social
					</Link>
        </Heading>
				
        <Heading
          as="h3"
          fontFamily="Newsreader"
          fontSize={{ base: '1.1em', md: "1.3em" }}
          my={3}
					lineHeight="auto"
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
         By decentralizing data, ownership is transferred to the population; for the first time, the people are in control.<br/><br/>
        </Heading>
				
				
				</Col>
   </Row> 
			<br/><br/>
	 <Row>
<Col sm={4.5}>	
<Heading 
          as='h1' 
          fontSize='1.6em' 
          fontFamily="Newsreader"
          fontWeight="bold"
          lineHeight="larger"
          color='#949494'
          pb={12}
        >
          <Link href="/">technical</Link>
          <br/>
        </Heading>
				</Col>
			<Col sm={7.5}>

				<Heading
          as="h2"
          fontFamily="Newsreader"
          fontSize={{ base: '1.7em', md: "1.7em" }}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
					<Link
				  href="https://devpost.com/software/diplomatica"
				>
         Gamifying Political Awareness
					</Link>
        </Heading>
				
        <Heading
          as="h3"
          fontFamily="Newsreader"
          fontSize={{ base: '1.1em', md: "1.3em" }}
          my={3}
					lineHeight="auto"
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
         Redesigning political and social awareness through a gamified system, Hack The North 2021<br/><br/>
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
				  href="https://workshops.hackclub.com/custom_search"
				>
         Personalized Search Engine
					</Link>
        </Heading>
				
        <Heading
          as="h3"
          fontFamily="Newsreader"
          fontSize={{ base: '1.1em', md: "1.3em" }}
          my={3}
					lineHeight="auto"
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
         Redesigning political and social awareness through a gamified system, Hack The North 2021<br/><br/>
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
				  href="https://devpost.com/software/feather"
				>
         Mainstream Mental Health
					</Link>
        </Heading>
				
        <Heading
          as="h3"
          fontFamily="Newsreader"
          fontSize={{ base: '1.1em', md: "1.3em" }}
          my={3}
					lineHeight="auto"
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
        Social network powered by sentiment analysis & semantic segmentation, tailored for wellness.<br/><br/>
        </Heading>
				</Col>
   </Row> 	

      <br/><br/>
			 <Row>
<Col sm={4.5}>	
<Heading 
          as='h1' 
          fontSize='1.6em' 
          fontFamily="Newsreader"
          pb={12}
          fontWeight="bold"
          lineHeight="larger"
          color='#949494'
        >
          <Link href="/">leadership</Link>
          <br/>
        </Heading>
				</Col>
			<Col sm={7.5}>
				<Heading
          as="h2"
          fontFamily="Newsreader"
					lineHeight="auto"
          fontSize={{ base: '1.7em', md: "1.7em" }}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
					<Link
				  href="https://instagram.com/tfsshack"
				>
          Co-President, TFSS Hack Club
					</Link>
        </Heading>
				
        <Heading
          as="h3"
          fontFamily="Newsreader"
          fontSize={{ base: '1.1em', md: "1.3em" }}
          my={3}
					lineHeight="auto"
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
         2022; We&#39;re at our best when we&#39;re making. A new way to build and explore innovation.<br/><br/>
        </Heading>
				<Heading
          as="h2"
          fontFamily="Newsreader"
          my={3}
					lineHeight="auto"
          fontSize={{ base: '1.7em', md: "1.7em" }}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
					<Link
				  href="https://www.omun.ca/"
				>
          Delegate, TFSS Model UN
					</Link>
        </Heading>
				
        <Heading
          as="h3"
          fontFamily="Newsreader"
          fontSize={{ base: '1.1em', md: "1.3em" }}
          my={3}
					lineHeight="auto"
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
         2022; Exploring global politics through the lens of expressionism.<br/><br/>
        </Heading>
				<Heading
          as="h2"
          fontFamily="Newsreader"
          my={3}
					lineHeight="auto"
          fontSize={{ base: '1.7em', md: "1.7em" }}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
					<Link
				  href="https://turnerfentondeca.com"
				>
          Instructor, TFSS DECA
					</Link>
        </Heading>
				
        <Heading
          as="h3"
          fontFamily="Newsreader"
          fontSize={{ base: '1.1em', md: "1.3em" }}
          my={3}
					lineHeight="auto"
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
         2021, 2022; Marketing and Clinical Management Instructor for 50+ students. 2x Top Case & National Competitor <br/><br/>
        </Heading>
				<Heading
          as="h2"
          fontFamily="Newsreader"
          my={3}
					lineHeight="auto"
          fontSize={{ base: '1.7em', md: "1.7em" }}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
					<Link
				  href="https://instagram.com/debate.tfss"
				>
          President, Turner Fenton Debate Society
					</Link>
        </Heading>
				
        <Heading
          as="h3"
          fontFamily="Newsreader"
          fontSize={{ base: '1.1em', md: "1.3em" }}
          my={3}
					lineHeight="auto"
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
         2021; Introducing a new method of self-exploration.<br/><br/>
        </Heading>
				
				</Col>
   </Row> 
			
	
         </FadeIn>

         <Heading
          as="h3"
          fontFamily="Newsreader"
          fontSize={{ base: '1.1em', md: "1.3em" }}
          py={16}
					lineHeight="auto"
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
          <i>Vengeance, held as votive not in vain, is the value and veracity of such shall vindicate the vigilant and virtuous.</i><br/><br/>
        </Heading>
      </Box>
    </Flex>


			</Container>
  );
};

export default Index;