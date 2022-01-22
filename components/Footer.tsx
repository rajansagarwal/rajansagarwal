import React from "react";
import {
  chakra,
  Flex
} from "@chakra-ui/react";
import Link from 'next/link';

const Footer = () => {
  return (
    <Flex 
    mx="auto"
    bg="#090c0d"
    color="white">
        <chakra.p 
           className="description"
           color="gray.500" 
           fontSize="0.8em"
           >
          github, twitter, writings, directory
        </chakra.p>

    </Flex>
  );
};

export default Footer;