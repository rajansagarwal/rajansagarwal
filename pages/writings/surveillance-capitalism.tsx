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
		<title>Surveillance Capitalism | Rajan Agarwal</title>
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
          fontSize='1.6em' 
          fontFamily="Newsreader"
          pb={12}
          fontWeight="bold"
          lineHeight="larger"
          color='#949494'
        >
          <Link href="/">rajan</Link> / <Link href="/writings">writings</Link> / surveillance capitalism
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
          <strong>Surveillance Capitalism</strong>
        </Heading>
				<Heading
          as="h3"
          fontFamily="Newsreader"
          fontSize={{ base: '1.2em', md: "1.4em" }}
          py={2}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
          Published by The Junior Economist, 2020<br/><br/>
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
         Was it democracy and free will that chose the next president, or was it our addiction to unregulated social media? I have sadly come to believe that my future vote is up for sale. We&#39;re not old enough to drive, and yet we form firm political opinions at the root of digital influence. Many of us young voters are open-minded and trying to educate ourselves on the facts when choosing who we will support politically. However, through years of digital use, a near-perfect detailed profile has been developed: a weapon of mass destruction
<br/><br/>
Surveillance Capitalism identifies a market-driven mechanism where the personal data is the purchasable asset and that the storage and processing of this data depends on mass network surveillance. Companies that provide us with free web services, such as search engines and social media sites, typically carry out this operation. These businesses gather and scrutinize our online activity to provide data that can be used for commercial purposes. 
<br/><br/>
Incredibly, in the 2016 Election, it was found that they strategically targeted individuals in crucial swing states with false-negative ads to smear Hillary Clinton and prevent her from securing the president&#39;s victory. Before the 2016 U.S. election, Cambridge Analytica, with data acquired from Facebook, claimed it had 5,000 data points on nearly every voter in America.
<br/><br/>
My unbiased thoughts, though ideological in my mind, have made me into a commodity called a persuadable. A persuadable is an individual who is strategically but subtly manipulated into specific actions by the use of specially designed images, whether real or false. Using psychographics, strategic images selected by political parties, the mind is influenced by repeated viewing. Thus, free will at the polls was purchased by the party that paid the most.
<br/><br/>
One may ask, how likely is this to happen again? In 2019, PEW Research stated that 90% of adults aged 18-29 actively used social media, and that number is expected to increase. The information and choices these people make are what determines the next steps in the board game of society. The Economist also analyzes the world’s most valuable resource is no longer oil, but data. Think about the large companies of our time: Amazon, Facebook, and Google. They have become trillion-dollar companies, and yet there aren&#39;t clear laws to regulate our privacy. The general population seems either unaware or apathetic about this phenomenon. Governments say they want to legislate our privacy and choices online, but they are the ones who use it to their advantage. <b>Therefore, nothing changes.</b>
				<br/><br/>
				SocialBakers, an Artificial Intelligence Software Company, analyzes how 72% of U.S. citizens of voting age actively use some form of social media, most prominently Facebook, Instagram, and Twitter, and that it was these sources that aided their decisions. As a young hopeful future economist, I am troubled and truly question how did we get here?
<br/><br/>
		Looking back 50 years, platforms, technology, and implications as such were never considered. In the 21st century, we are given resources and ways to communicate online safely. Allow me to remind you of the famous phrase, nothing is free. These supposedly cost-free apps are available to us within our grasp, but our privacy and future decisions are the actual cost. Take free will into consideration: are our online purchasing decisions a result of what we want, or is it the targeted information, psychographics, and pressure from others to make these decisions?
<br/><br/>
Julien Dimastromatteo, PhD, describes how our actions are heavily tracked. All of our efforts are gathered and are soon put up for sale for companies to retain profit. Unfortunately in our laissez-faire economy, the market decides what is right, rather than regulatory bodies. The proportion of time one spends on a given web site, the text and pictures that are viewed, and our state of mood are all incorporated into algorithms. This information is utilized by social media sites to construct models that forecast our behaviour using three key objectives:
<br/><br/>
1. engagement, or how to keep you scrolling<br/>
2. growth, or how to keep you coming back<br/>
3. advertisement, or how to make sure the two previous goals lead to monetizing. 
<br/><br/>
Whoever has the best model wins.
<br/><br/>
In our polarized world, I am fearful that future electorates will not be truthfully informed, and we will again fall prey to social media. Democracy appears to be for sale online. The question that remains is how do we as ordinary people, take our self-determination back? 
        </Heading>

         </FadeIn>
      </Box>
    </Flex>
		</>
  );
};

export default Projects;