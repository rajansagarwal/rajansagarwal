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
		<title>The Trillionare Paradox | Rajan Agarwal</title>
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
          <Link href="/">rajan</Link> / <Link href="/writings">writings</Link> / trillionare
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
          <strong>The Trillionare Paradox</strong>
        </Heading>
				<Heading
          as="h3"
          fontFamily="Newsreader"
          fontSize={{ base: '1.2em', md: "1.4em" }}
          py={2}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
          Published by The Junior Economist, 2021<br/><br/>
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
         You are playing a fun mobile game, and over the duration of a week, you become a trillionaire in the game’s currency. Not a big deal, right? We take it so lightly, and it is not necessarily a large feat. How hard could it be for today&#39;s entrepreneurs?
<br/><br/>
The reality is that the key to success in the 21st-century is the thing we use daily: data. The same devices you use to do your chemistry homework, play games, and read articles can create the next big thing. Artificial Intelligence (AI) is often thrown around left and right without truly understanding its potential. With our handy tools of Machine Learning and Algorithms, we can dive deeper into how AI can revolutionize the business world.<br/><br/>

In laymen&#39;s terms, this is how computers can think like humans. But in honesty, this is an oversimplified and broad definition. Artificial Intelligence is truly whatever you want it to be. Speech recognition, problem-solving, learning, planning and of utmost prominence: doing things that the human brain can’t comprehend. When comparing AI to humans, the three most significant indicators are Nature, Functionality and Learning. The most considerable understanding is that machine intelligence is digital, while humans are analog. Thus, when comparing natures and functionality, it is essential to consider that humans have an innate reptilian brain (ie. the fight or flight response, sexual urges, etc.), short and long term memory and learn from nurturing in childhood while machines require an initial database of information that has been inputted by programmers. Humans gradually learn from their mistakes while machines use trial & error or other algorithms to identify patterns at astronomical speeds. This demonstrates that artificial intelligence&#39;s boundaries are little to none; however, it requires the creative mind of the human developer.
<br/><br/>
In the business world, processes are often measured through efficiency and effectiveness. If a company can operate successfully while still being cautious of these two terms, then their chances of success are more probable.
          <br/><br/>
AI needs data. It can&#39;t conduct a focus group or perform a business meeting, but rather analyze data and make predictions. The best part is that the business world has an indefinite surplus of data, whether it’s finances or actual consumer data. Rather than finding the potential value as an if-then statement, it creates borders based on pre-existent data to make future predictions. In the business world, there are two ways to use AI: internally and externally

<br/><br/>

On an internal scale, businesses use it in the core fields (marketing, finance, accounting and CSR). Marketing is all about finding and meeting consumer needs, and so patterns are more than relevant to track consumer behaviour. Keeping privacy rights in mind, consumers&#39; suitable conditions can be based on their purchasing and viewing actions.
<br/><br/>
Finance and accounting will always use AI in the sense that financial predictions can become more and more accurate. Within the boundaries of what is and is not ethical, most businesses use these systems to develop a strong understanding of where their business will be in the future.
<br/><br/>
Then CSR is mainly utilized to reduce human bias; this is one of the most common barriers in decision making. Although it’s not very commonly used, this is a significant way to improve the effectiveness of a business through AI. On an internal scale, the most significant objective is to be more efficient with money and resources. On an external scale, however, it’s all about the output.
<br/><br/>
On the majority of social networking platforms, there is some form of consumer individuality. These silicon-valley applications are never the same for any two people, and by using AI, they can appeal to what you need. 
<br/><br/>
When thinking of the most famous companies globally, Facebook, Apple, Amazon and Netflix are commonly referred to. Although they may not have the most prominent uses of AI, they have their revolutionary technologies.
<br/><br/>
Facebook is one of the original big companies, and they use AI in 3 ways: text analysis, facial recognition and targeted advertising. By analyzing what their users say in their posts, the system can almost re-create you and your future actions (i.e. what you will click next, what mood you are in). What may come as a shock is that every post of yourself in the system falls under facial recognition, which means that the system can track, detect and select specific faces to be on the content.
<br/><br/>
Although this feels like an insane violation of privacy, it complies not with existing privacy policies but the open-source code makes it difficult to counteract. Finally, targeted advertising is the largest cash inflow. People are more likely to click on an advertisement that they can relate to or are interested in at a specific time.
<br/><br/>
Amazon and Apple are also leading users of AI with their top-notch technology. Amazon is known for its recommendations for products, Alexa response system and Amazon Web Services (AWS) platform. Similarly, Apple uses AI to create a phone interface based on preferences and Siri, one of the most advanced verbal bots on the planet.
<br/><br/>
Finally, Netflix was one of the first video streaming companies to bring in the recommendation system alongside Youtube. They analyze movies/shows based on relevance to current issues, category, and on your previous watched content under the title: recommendations.
<br/><br/>
Who will be the first trillionare? If you think the answer to that question is Elon Musk due to the rise of Tesla or Mark Zuckerburg with Facebook or Jeff Bezos of Amazon, you may be wrong.
<br/><br/>
In the first World War, the first billionaire, John D. Rockefeller, took advantage of the uprising potential in the oil industry. Under the same principles, the first trillionaire will be anyone who truly takes advantage of their surroundings. Perhaps it will be a current billionaire taking control of disruptive future technology? Maybe an underdog with a passion? Could it be a revolutionary medical product? In the end, it could be the next person to colonize Mars.
        </Heading>

         </FadeIn>
      </Box>
    </Flex>
		</>
  );
};

export default Projects;