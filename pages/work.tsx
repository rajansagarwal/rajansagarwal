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

const Projects = () => {
  return (
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
          Previous Experiences
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
          <strong>Team Salutem</strong>
        </Heading>
        <Heading
          as="h3"
          fontFamily="Newsreader"
          fontSize={{ base: '1.2em', md: "1.4em" }}
          my={3}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
          Description 1<br/><br/>

          <details>
          <summary>Read More</summary>
          <p><br/>
Summary & more info
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
          <strong>JEC Toronto</strong>
        </Heading>
        
        <Heading
          as="h3"
          fontFamily="Newsreader"
          fontSize={{ base: '1.2em', md: "1.4em" }}
          my={3}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
          Description 1<br/><br/>

          <details>
          <summary>Read More</summary>
          <p><br/>
Summary & more info
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
          <strong>Minds On</strong>
        </Heading>
        
        <Heading
          as="h3"
          fontFamily="Newsreader"
          fontSize={{ base: '1.2em', md: "1.4em" }}
          my={3}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
          Description 1<br/><br/>

          <details>
          <summary>Read More</summary>
          <p><br/>
Summary & more info
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
          <strong>Hack Club</strong>
        </Heading>
        
        <Heading
          as="h3"
          fontFamily="Newsreader"
          fontSize={{ base: '1.2em', md: "1.4em" }}
          my={3}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
          Description 1<br/><br/>

          <details>
          <summary>Read More</summary>
          <p><br/>
Summary & more info
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
          <strong>Turner Fenton Debate Society</strong>
        </Heading>
        
        <Heading
          as="h3"
          fontFamily="Newsreader"
          fontSize={{ base: '1.2em', md: "1.4em" }}
          my={3}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
          Description 1<br/><br/>

          <details>
          <summary>Read More</summary>
          <p><br/>
Summary & more info
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
          <strong>DECA</strong>
        </Heading>
        
        <Heading
          as="h3"
          fontFamily="Newsreader"
          fontSize={{ base: '1.2em', md: "1.4em" }}
          my={3}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
          Description 1<br/><br/>

          <details>
          <summary>Read More</summary>
          <p><br/>
Summary & more info
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
          <strong>Beyond the Five</strong>
        </Heading>
        
        <Heading
          as="h3"
          fontFamily="Newsreader"
          fontSize={{ base: '1.2em', md: "1.4em" }}
          my={3}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
          Description 1<br/><br/>

          <details>
          <summary>Read More</summary>
          <p><br/>
Summary & more info
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
          <strong>UofT URECS Research</strong>
        </Heading>
        
        <Heading
          as="h3"
          fontFamily="Newsreader"
          fontSize={{ base: '1.2em', md: "1.4em" }}
          my={3}
          fontWeight="500"
          color={useColorModeValue("gray.100", "white")}
        >
          Description 1<br/><br/>

          <details>
          <summary>Read More</summary>
          <p><br/>
Summary & more info
          </p>
          </details>
          <br/>
        </Heading>
 <Footer/>
      </Box>
    </Flex>
  );
};

export default Projects;