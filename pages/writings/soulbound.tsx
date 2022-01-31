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

const Projects = () => {
  return (
		<>

<Head>
		<title>Soulbound | Rajan Agarwal</title>
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
          <Link href="/">rajan</Link> / <Link href="/writings">writings</Link> / soulbound
          <br/>
        </Heading>
        <FadeIn>
        <Heading
          as="h2"
          fontFamily="Newsreader"
          my={2}
          fontSize={{ base: '2em', md: "2em" }}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
          <strong>Soulbound in the Digital World</strong>
        </Heading>
				<Heading
          as="h3"
          fontFamily="Newsreader"
          fontSize={{ base: '1.2em', md: "1.4em" }}
          py={2}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
          January 2022<br/><br/>
          <br/>
        </Heading>
       


        <Heading
          as="h3"
          fontFamily="Newsreader"
          fontSize={{ base: '1.2em', md: "1.4em" }}
          py={10}
					lineHeight="auto"
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
What if the world around us, and the things we do, could be <b>soulbound?</b> This is the notion that Vitalik Buterin, the creator of Ethereum, has proposed: personal connection, often through accountability, in digital spaces. You can find this full post <Link href="https://vitalik.ca/general/2022/01/26/soulbound.html"><u>here.</u></Link>
<br/><br/>
Being soulbound is a concept that he has been working on for a while. The soulbound network is a network of people who are connected to each other through their actions. <i>{' '}Soulbound items, once picked up, cannot be transferred or sold to another player.</i> Just like in World Of Warcraft, in order to get your character anywhere close to having the best weapons and armor, you have no choice but to take action.
<br/><br/>
<i>Proof of Attendance Protocol</i>
<br/><br/>
POAP is a standard by which projects can send NFTs that represent the idea that the recipient personally participated in some event. As Vitalik puts it, <i>if someone shows you that they have an NFT that is obtainable by doing X, you can&#39;t tell whether they did X themselves or whether they just paid someone else to do X.</i> By doing an action, your effort becomes tied to what you receive; when you work in a job, the financial outcome becomes associated with your work, increasing its value. When you are in a group of people who are all doing the same thing, you can use POAP to show that you are all doing the same thing.
<br/><br/>
By becoming attached to the world around you, you can be better attached to your assets. Simply put, this heavily increases the social signaling value: people who have them can show them off, and there are more and more tools precisely to help users do that. While transferable NFTs have their place and can be really valuable on their own for supporting artists and charities, there is also a large and underexplored design space of what non-transferable NFTs could become.
<br/><br/>
<i>The Transferability Dilemma</i>
<br/><br/>
One of the largest values of the soulbound network is the ability to transfer NFTs. By increasing the value it has to you, its foreign value is dissipated. One of the largest purposes of NFT holdings is to flip it for more money, if its value is dependant on your personal connection, then what value does it serve to others? Essentially, they would be much less valuable if someone who doesn&#39;t meet the condition themselves could just go buy one from someone who does. 
<br/><br/>
Alas, we return to the pervasive paradigm of purpose. Just like abstract art, NFTs reflect the value that it gives you. While transferable NFTs have their place and can be really valuable on their own for supporting artists and charities, there is also a large and underexplored design space of what non-transferable NFTs could become.
<br/><br/>
<i>Soulbound Governance</i>
<br/><br/>
As Vitalik puts it, lightly, <i>there are very bad things that can easily happen to governance mechanisms if governance power is easily transferable</i>. Essentially, what if DAO governance of blockchain protocols could somehow make governance power conditional on participation? Once again, a large and fruitful design space opens up that today is difficult to access.
<br/><br/>
<i>The Web</i>
<br/><br/>
No matter what we do, it will always come down to the money. People celebrate the ownership, and outright waste, of large amounts of wealth, and this limits the appeal and the long-term sustainability of the culture that emerges around these items. The objective is not to limit usage, but put the blockchain at the centre of ecosystems promotes collective effort.

 </Heading>

         </FadeIn>
      </Box>
    </Flex>
		</>
  );
};

export default Projects;