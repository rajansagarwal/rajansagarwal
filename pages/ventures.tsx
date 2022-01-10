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
import Footer from '../components/Footer'
import Head from 'next/head'

const Projects = () => {
  return (
		<>
		<Head>
		<title>Ventures | Rajan Agarwal</title>
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
          Ventures
          <hr/><br/>
        </Heading>
        
        <Heading
          as="h2"
          fontFamily="Newsreader"
          my={3}
          fontSize={{ base: '2em', md: "2em" }}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
          <strong>Run For Hope 🔗</strong>
        </Heading>
        <Heading
          as="h3"
          fontFamily="Newsreader"
          fontSize={{ base: '1.2em', md: "1.5em" }}
          my={3}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
          As a Canadian, seeing the discoveries of unmarked graves was heartbreaking. On July 12, 160 unmarked graves were discovered. Within the same time period, thousands more were found, symbolizing the treacherous conditions for indigenous families. 
					
					<br/><br/>
					While investigating further into the issue, I came across David Babcock, a teacher in my school board. Deeply affected by the news, he took it upon himself to hike 215km at local trails. His actions are what supercharged the passion behind my Run For Hope, in which I chose to spend 1 month running 160km and tracking my journey.<br/><br/>

          <details>
          <summary>Read More</summary>
          <p><br/>
The first impression is that there is no way I ran 160km; while it is difficult to share every kilometre travelled on camera, I hope that my passion for social change justifies my work.
<br/><br/>
While running may not be the most conventional and impactful strategy, this initiative reached 7000+ unique viewers and promoted physcial wellness for peers that joined.<br/><br/><hr/>
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
          <strong>Breaking Barriers</strong>
        </Heading>
        
        <Heading
          as="h3"
          fontFamily="Newsreader"
          fontSize={{ base: '1.2em', md: "1.5em" }}
          my={3}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
          Breaking Barriers is a novel targeted to raise awareness about autism, from a more gentle stance. In this approach, it was my primary objective to introduce the topic in a familiar, friendly and relatively simple manner. This book is meant for those between 8 and 13, tailored to youth that want to learn about autism, in a more friendly way. 
					<br/><br/>
					The novel features Ryan, a teenager with autism in Ottawa, who is introduced to his journey to become a lawyer. As he breaks the barriers of societal norms, he builds friendships and new skills along the way.<br/><br/>

          <details>
          <summary>Read More</summary>
          <p><br/>
Autism is rarely taught, and when it is, the content is subject to stereotypes and opinions. Ryan Williams, a 17 year old in Ottawa, aims to overcome these social norms during his experience in high school and working in a law practice. His story begins in high school, where Ryan feels out of place in the special-ed class. A special meeting with the principal turns things around, providing him with an eye-opening opportunity in his senior year. 
<br/><br/>
Things go well, and Ryan is invited to study law in university. As time flies, his story continues at a law practice, where he is mentored and doubted by a variety of passionate and out-of-the-ordinary coworkers. His story is inspiring to many, but does it last?<br/><br/><hr/>
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
          <strong>DeFi</strong>
        </Heading>
        
        <Heading
          as="h3"
          fontFamily="Newsreader"
          fontSize={{ base: '1.2em', md: "1.4em" }}
          my={3}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
          As an operations executive at the Junior Economic Commission of Toronto, I am reviving our capstone project: High Returns. Personal finance management is outdated; I am initiating a medium for eduactional conferences, portals and events for learning about the next generation of investments. <br/><br/>

          <details>
          <summary>Read More</summary>
          <p><br/>
JEC Toronto is a federally registered non-profit organization by students dedicated to promote learning and interest about the world of business. 
<br/><br/>
Financial literacy - a skill as essential as in the modern world as the ability to read or tell time. Unfortunately, it is a topic greatly neglected by the school curriculum. High Returns in the past has been focused on financial independence; now, we&#39;re flipping the script towards our decentralized future.
<br/><br/><hr/>
          </p>
          </details>
          <br/>
        </Heading>

        <Footer/>
      </Box>
    </Flex>
	</>
  );
};

export default Projects;