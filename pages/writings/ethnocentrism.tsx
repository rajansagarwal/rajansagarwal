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
		<title>Ethnocentrism | Rajan Agarwal</title>
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
          fontSize='1.6em' 
          fontFamily="Newsreader"
          pb={12}
          fontWeight="bold"
          lineHeight="larger"
          color='#949494'
        >
          <Link href="/">rajan</Link> / <Link href="/writings">writings</Link> / ethnocentrism
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
          <strong>Globalization & Mental Health</strong>
        </Heading>
				<Heading
          as="h3"
          fontFamily="Newsreader"
          fontSize={{ base: '1.2em', md: "1.4em" }}
          py={2}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
          Published by Mind Matrix, 2022<br/><br/>
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
         Culture is at the core of individualism. Mental health is growing faster than ever, but these beliefs are rooted with relativism and generational social dynamics. Mental health is primarily a western concept, introducing ethnocentric perspectives between nations, groups and individuals. From a psychodynamic and sociocultural perspective, this paradigm is closely aligned with prejudice and cross-cultural psychology.
<br/><br/>
So where does culture meet globalization?
<br/><br/>
The Western conception of the person as a bounded, unique, more or less integrated motivational and cognitive universe, a dynamic center of awareness, emotion, judgment, and action, organized into a distinctive whole and set contrastively.
<br/><br/>
Against social and natural background is, however incorrigible it may seem to us, a rather peculiar idea within the context of culture. The vastness of cross-cultural psychology can be supported by Hofstede&#39;s cultural dimensions, or more specifically Power Distribution, Indulgence and Collectivsm. Together, these contextually tackle the debate of universalism against relativism.
<br/><br/>
Power Distance & Distribution
From egalitarian to hierarchal standpoints, there is a definite degree of people that are comfortable with upwards influence. This revolves around the acceptance of inequality in the mainstream distribution of power in society. Psychologically, this distribution of power represents wellbeing and the support for mental health. Globalization is not just an indicator of growth, but also the inchoate development of stable solutions for the betterment of a nation.
<br/><br/>
Indulgence & Restraint
<br/><br/>
Societies exist in one of two realms: gratification or structural violence. When comparing centralized satisfaction to normative repression, the ideologies of relativists really shine. The inverse relationship between these two terms normally contrasts basic entitlements to restrictions via social norms, but this can be taken one step further with psychological context.
<br/><br/>
A nation&#39;s top priority will always be to maintain the wellbeing of citizens, often measured by its capacity. In terms of mental health, this is no longer a case against restraint, but rather ignorance. Globalization through internal suppresion strongly reflects the current ideals by the majotity of modern countries, where stability is no longer accounted for. The question is no longer why are there restraints, but rather how can we have self-determination without sufficient governance?
<br/><br/>
Collectivism
<br/><br/>
Self-determination is the new definition of freedom; unfortunately, this sense of freedom is corrupted by the seemingly indifferent individualism and collectivism. Unification often puts omre emphasis on relationships, loyalty and support for wellbeing, while individualist societies proceed in their own affiliations. Seems like a pretty simple choice, right? Individualism is so attractice because of its self-sufficiency, autonomy and independence—the socioeconomic growth is undeniably greater; this time, however, it is not at the hands of globalization, but rather the ravenous desire for sovereignty.
<br/><br/>
Even in the best of both worlds, mental health remains insignificant. One of the largest factors for the lack of funding is not a financial deficit, but rather the chronic prioritization of internal sovereignty: control is more valuable than development.
<br/><br/>
Resolution
<br/><br/>
We return to the big question: universalism vs relativism. Historically, culture has played a critical role mental health, through hierarchal support, the loss of self-determination and boundless individualism. This pervasive paradigm will continue to affect populations for the rest of our lives, for it is societal diversity that reminds us what is happening, and our mental health that tells us what is not.
        </Heading>

         </FadeIn>
      </Box>
    </Flex>
		</>
  );
};

export default Projects;