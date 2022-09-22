import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { useRef } from 'react';
import Fade from 'react-reveal/Fade'; 
import FaizanGhani_Resume from "../Resume/FaizanGhani_Resume.pdf"
function Contact() {
    const ref=useRef(null)
    const refe=useRef(null)
    const copy = () => {
        navigator.clipboard.writeText( "+917439035421" );
        ref.current.innerHTML = '<i class="fa-solid fa-check"></i>';
        setTimeout( () => {
          ref.current.innerHTML = '<i class="fa-solid fa-copy"></i>';
        }, 4000 );
      };
      const copye = () => {
        navigator.clipboard.writeText( "faizanghani2222@gmail.com" );
        ref.current.innerHTML = '<i class="fa-solid fa-check"></i>';
        setTimeout( () => {
          ref.current.innerHTML = '<i class="fa-solid fa-copy"></i>';
        }, 4000 );
      };

    return (
        <Box width="100%"  pt={["10%","5%","5%"]} h="50vh" pb="50px" px="10%" id="contact" background="rgb(140, 78, 255)" color="white">
            <Heading fontSize="32px" textAlign="center" textDecoration="underline">Get In Touch</Heading>
            <Flex mt="3%" wrap={{base:"wrap",md:"nowrap",lg:"nowrap"}} justify="space-evenly" alignItems="center" >
               <Fade bottom cascade>
               <Box>
                    <Box display="flex" gap="10px" alignItems="center" mb="10px">
                    <i class="fa-solid fa-location-dot"></i>
                    <Text>Kolkata, West Bengal</Text>
                    </Box>
                    <Box display="flex" gap="10px" alignItems="center"mb="10px">
                    <i class="fa-solid fa-phone"></i>
                    <Text>+91 743 903 5421 <Text ml="20px" display="inline-block" onClick={copy} ref={ref}><i class="fa-solid fa-copy"></i></Text></Text>
                    </Box>
                    <Box display="flex" gap="10px" alignItems="center"mb="10px">
                    <i class="fa-solid fa-envelope"></i>
                    <Text>faizanghani2222@gmail.com <Text ml="20px" display="inline-block" onClick={copye} ref={refe}><i class="fa-solid fa-copy"></i></Text></Text>
                    </Box>
                </Box>
               </Fade>
               <Fade bottom cascade>
               <Box>
                    <Link href="https://github.com/faizanghani2222" isExternal _hover={{color:"black"}}>
                    <Box display="flex" gap="10px" alignItems="center" mb="10px">
                    <i class="fa-brands fa-github"></i>
                    <Text>https://github.com/faizanghani2222
                    <i style={{marginLeft:"6px"}} class="fa-sharp fa-solid fa-arrow-up-right-from-square"></i>
                    </Text>
                    </Box>
                    </Link>
                    <Link href="https://www.linkedin.com/in/faizan-ghani/" isExternal _hover={{color:"black"}}>
                    <Box display="flex" gap="10px" alignItems="center" mb="10px">
                    <i class="fa-brands fa-linkedin"></i>
                    <Text>https://www.linkedin.com/in/faizan-ghani/ 
                    <i style={{marginLeft:"6px"}} class="fa-sharp fa-solid fa-arrow-up-right-from-square"></i>
                    </Text>
                    </Box>
                    </Link>
                    <a id='footerL' href={FaizanGhani_Resume} download>
                    <Box display="flex" gap="10px" alignItems="center"mb="10px">
                    <i class="fa-solid fa-user"></i>
                    <Text>Resume</Text>
                    <i class="fa-solid fa-cloud-arrow-down"></i>
                    </Box>
                    </a>
                </Box>
               </Fade>
            </Flex>
        </Box>
    );
}

export default Contact;