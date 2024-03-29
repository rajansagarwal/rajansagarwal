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
		<title>Ethereal Expression | Rajan Agarwal</title>
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
          <Link href="/">rajan</Link> / <Link href="/ethereal">ethereal expression</Link>
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

        a poetic journey, powered by code.

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

        TL;DR: Software has changed the world, what if it could change the way we express ourselves? Autonomous systems and algorithmic art are critical to this new era of digital expression. Through neural networks and NLP, poetry is interpreted, analyzed and transformed into generative art.

        </Heading>			
	<br/>		<img src="https://cloud-r2onbrszd-hack-club-bot.vercel.app/0image.png"/>
	<br/>
 <Heading
          as="h1"
          fontFamily="Newsreader"
          my={5}
					mt={9}
          fontSize={{ base: '2em', md: "2em" }}
          fontWeight="500"
					lineHeight="auto"
          color={useColorModeValue("gray.100", "white")}
        >

       Project Breakdown

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

         In its independent form, generative art redefines the purpose of computer output; current interfaces are tailored to human interaction, but never human expression. Computational devices may not have emotions, but deep learning has the ability to interpret and design frameworks around these considerations. Through natural language processing (NLP) and neural networks, this AI system can interpret poetry to develop meaningful, generative art.
<br/><br/>
The z+quantize method allows for motion graphics for generative art—quantization algorithms utilize range-based linear methods asymmetrically, which maps the minimum and maximum points using a quantization bias. The convolution layer allows for the range to be used extensively, creating distinct min/max points for the resultant graphic to be placed in. This system also allows for keyframes and animations to be implemented. In terms of developing the graphics themselves, the neural network introduces a text to image paradigm, by combining GAN architectures with OpenAI’s CLIP system. The Vector Quantized Generative Adversarial Network (VQGAN), utilizes these convolutional neural networks with a Contrastive Language-Image Pre-training (CLIP) model, to create supervised learning for visual models. The two models work simultaneously, to compile countless interpretations of the prompt, and subsequently compare this graphic to the prompt to identify its respective accuracy.
<br/><br/>
The next step for this project is the community impact. Through discussion with uprising poets and influential NLP developers, I want to turn this software into the next generation of literary expression
<br/><br/>

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