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
		<title>Ventures | Rajan Agarwal</title>
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
          <Link href="/">rajan</Link> / <Link href="/ventures">ventures</Link>
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
				  href="https://book.heyrajan.com"
				>
          breaking barriers
					</Link>
        </Heading>
				
        <Heading
          as="h3"
          fontFamily="Newsreader"
          fontSize={{ base: '1.2em', md: "1.4em" }}
          my={3}
					lineHeight="auto"
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
         Breaking Barriers is a novel targeted to raise awareness about autism, from a more gentle stance. In this approach, it was my primary objective to introduce the topic in a familiar, friendly and relatively simple manner. 
				 <br/><br/>
				 This book is meant for those between 8 and 13, tailored to youth that want to learn about autism, in a more friendly way. The novel features Ryan, a teenager with autism in Ottawa, who is introduced to his journey to become a lawyer. As he breaks the barriers of societal norms, he builds friendships and new skills along the way. 
				 <br/>
          <br/>
        </Heading>
<hr/>
<br/>
  
 <Heading
          as="h2"
          fontFamily="Newsreader"
          my={3}
          fontSize={{ base: '2em', md: "2em" }}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
					<Link
				  href="https://run.heyrajan.com"
				>
          run for hope
					</Link>
        </Heading>
				
        <Heading
          as="h3"
          fontFamily="Newsreader"
          fontSize={{ base: '1.2em', md: "1.4em" }}
          my={3}
					lineHeight="auto"
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
        As a Canadian, seeing the discoveries of unmarked graves was heartbreaking. On July 12, 160 unmarked graves were discovered. Within the same time period, thousands more were found, symbolizing the treacherous conditions for indigenous families. In search of a way to help, I chose to spend 1 month running 160km and tracking my journey.
				<br/><br/>
				While running may not be the most conventional and impactful strategy, this initiative reached 7000+ unique viewers and promoted physcial wellness for peers that joined.<br/><br/>
        </Heading>
<hr/>
<br/>

 <Heading
          as="h2"
          fontFamily="Newsreader"
          my={3}
          fontSize={{ base: '2em', md: "2em" }}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
					<Link
				  href="https://instagram.com/_etherealexpression"
				>
          ethereal expression
					</Link>
        </Heading>
				
        <Heading
          as="h3"
          fontFamily="Newsreader"
          fontSize={{ base: '1.2em', md: "1.4em" }}
          my={3}
					lineHeight="auto"
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
       Software has changed the world, what if it could change the way we express ourselves? Autonomous systems and algorithmic art are critical to this new era of digital expression. Through neural networks and NLP, poetry is interpreted, analyzed and transformed into generative art.
				<br/><br/>
				Computational devices may not have emotions, but deep learning has the ability to interpret and design frameworks around these considerations. Through natural language processing (NLP) and neural networks, this AI system can interpret poetry to develop meaningful, generative art.<br/><br/>
          <br/>
        </Heading>

	
	
         </FadeIn>
      </Box>
    </Flex>
		</>
  );
};

export default Page;