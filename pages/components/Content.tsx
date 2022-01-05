import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  Button,
  HStack,
} from "@chakra-ui/react";

const Content = () => {
  return (
    <Flex 
    px={4} 
    pt={12} 
    pb={12} 
    mx="auto"
    bg="black"
    color="white">
      <Box w="full" align="left" justify="left" mx="auto" px={{ base: '7', md: '20' }}>
        <chakra.h1
          mb={3}
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight="bold"
          lineHeight="shorter"
          color={useColorModeValue("gray.100", "white")}
        >
          hey, i'm rajan
        </chakra.h1>
        <chakra.h1
          mb={3}
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight="bold"
          lineHeight="shorter"
          color={useColorModeValue("gray.100", "white")}
        >
          I work in the community.
        </chakra.h1>
      </Box>
    </Flex>
  );
};

export default Content;