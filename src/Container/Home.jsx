import { Box, Button, Flex, Heading, Image, Link } from '@chakra-ui/react';
import Fade from 'react-reveal/Fade'; 
import React from 'react';
import pic from "../images/pic.jpg"
import bg from "../images/bg.png"
import FaizanGhani_Resume from "../Resume/FaizanGhani_Resume.pdf"
function Home() {
    return (
        
           <Box id='home' position="relative" pt="100px" height={"100vh"}  background="rgb(245, 223, 78)">
            <Flex justifyContent="space-between" wrap={{base:"wrap-reverse",md:"nowrap",lg:"nowrap"}} gap={"50px"} px="10%">
              <Box mt={{base:"5%",sm:"25%",md:"0px",lg:"0px"}}>
              <Fade top cascade>
                 <Heading lineHeight="1.5em" fontSize={{base:"28px",sm:"30px",md:"40px",lg:"48px"}} color="#0e2431" fontWeight={700}>Hi 👋,<br />
                 I'am <span style={{color:"rgb(140, 78, 255)"}}>Faizan</span> <br />
                 MERN Stack Developer</Heading>
                 
                 <Link href={FaizanGhani_Resume} download>
                 <Button mt="5%" background="rgb(140, 78, 255)" _hover={{background:"rgb(140, 70, 200)"}} borderRadius="none" p="5" color="white">My Resume
                 <i style={{marginLeft:"10px"}} class="fa-solid fa-cloud-arrow-down"></i>
                 </Button>
                 </Link>
                 
                 </Fade>
              </Box>
              <Box width={{base:"80%",sm:"80%",md:"400px",lg:"400px"}} height={{base:"250px",md:"300px",lg:"250px"}}  m={{base:"auto",md:"0px",lg:"0px"}} >
              <Fade top cascade>
                <Image w="fit-content"   height="100%" borderRadius="50%" src={pic} alt="error"  />
                </Fade>
              </Box>
            </Flex>
            <Image position="absolute" bottom="0" width="100%"  src={bg}/>
          </Box>
          
    );
}

export default Home