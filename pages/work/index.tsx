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
      <Box w="full" align="left" justify="center" mx="auto" px={{ base: '1%', md: '1%', xl: '17%' }}>
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
<Col sm={5}>	
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
			<Col sm={7}>
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
				  href="/writings/human-rights"
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
				  href="/writings/human-rights"
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
				  href="/writings/human-rights"
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
				  href="/writings/human-rights"
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
<Col sm={5}>	
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
			<Col sm={7}>
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
          Generative Poetic Art
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
				  href="/writings/human-rights"
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
				  href="/writings/human-rights"
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
				  href="/writings/human-rights"
				>
         Web3: A Case Study
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
			
			 <Row>
<Col sm={5}>	
			<Heading
          as="h2"
          fontFamily="Newsreader"
          my={3}
					lineHeight="auto"
          fontSize={{ base: '2em', md: "2em" }}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
					<Link
				  href="/writings/human-rights"
				>
          School
					</Link>
					<br/><br/>
        </Heading>
				</Col>
			<Col sm={7}>
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
				  href="https://instagram.com/debate.tfss"
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
				  href="https://instagram.com/debate.tfss"
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
      </Box>
    </Flex>
			</Container>
  );
};

export default Page;