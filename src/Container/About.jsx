import { Box, Heading, Highlight, Text } from '@chakra-ui/react';
import React from 'react';
import { useRef } from 'react';
import Fade from 'react-reveal/Fade'; 
import "../CSS/mystyle.css"
function About() {
  const ref =useRef(null)
  const copy = () => {
    navigator.clipboard.writeText( "faizanghani2222@gmail.com" );
    ref.current.innerHTML = '<i class="fa-solid fa-check"></i>';
    setTimeout( () => {
      ref.current.innerHTML = '<i class="fa-solid fa-copy"></i>';
    }, 4000 );
  };

    return (
        <>
        <Box w="100%"  id="about" pt={["15%","10%"]} textAlign="center">
            <Heading fontWeight="600" fontSize="16px" w="fit-content" px="10px" py="5px" m="auto" background="rgb(245, 223, 78)">About Me</Heading>
           <Fade left cascade>
           <Box w="80%" m="auto" mt={["6%","4%"]}>
                <Heading fontSize="32px" fontWeight="400px">
                <Highlight  
                    query='Faizan Ghani'
                    styles={{ fontWeight: '700',paddingBottom:"2px",borderBottomStyle:"solid",borderBottomWidth:"3px",width:"fit-content",borderColor:"rgb(245, 223, 78)"}}>
                    Hi, I'am Faizan Ghani
                    </Highlight>
                </Heading>
                <Box mt={["6%","4%","3%"]}>
                <Text>
                I am an aspiring Full Stack Web Developer  with core knowledge of MERN stack technology,
                I love to code, learn things and adapt to new things by myself.
                Looking forward to applying and enhancing my skills and knowledge as a developer.
                </Text>

                <Text mt={["6%","4%","3%"]} fontWeight="600">Drop a mail @ faizanghani2222@gmail.com<Text ml="20px" display="inline-block" onClick={copy} ref={ref}><i class="fa-solid fa-copy"></i></Text></Text>
                </Box>
              
               
                   
            </Box>
           </Fade>
        </Box>
        </>
    );
}

export default About;