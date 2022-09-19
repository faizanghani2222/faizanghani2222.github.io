import { Box, Flex, Heading, Highlight, Text, Wrap } from '@chakra-ui/react';
import React from 'react';
import Fade from 'react-reveal/Fade'; 
import "../CSS/mystyle.css"
function About() {
    return (
        <>
        <Box w="100%"  id="about" pt={["15%","10%"]}>
            <Heading fontWeight="400" fontSize="16px" w="fit-content" px="10px" py="5px" m="auto" background="rgb(245, 223, 78)">About Me</Heading>
            <Heading fontSize="40px" w="fit-content" m="auto" mt="1%" >Know Me More</Heading>
           <Fade left cascade>
           <Box px="10%"  mt="3%">
                <Heading fontSize="32px" fontWeight="400px">
                <Highlight  
                    query='Faizan Ghani'
                    styles={{ fontWeight: '700',paddingBottom:"2px",borderBottomStyle:"solid",borderBottomWidth:"3px",width:"fit-content",borderColor:"rgb(245, 223, 78)"}}>
                    Hi, I'am Faizan Ghani
                    </Highlight>
                </Heading>
                <Wrap mt={["5%","3%","3%"]}  w={["100%","100%","80%"]}>
                <Text>
                I am an aspiring Full Stack Web Developer  with core knowledge of MERN stack technology,
                I love to code, learn things and adapt to new things by myself.
                Looking forward to applying and enhancing my skills and knowledge as a developer.
                </Text>
                </Wrap>
               <Flex mt="4%" wrap="wrap" justify="space-between" gap="1em" textAlign="center">
                  <Box width={{base:"80%",sm:"40%",md:"30%",lg:"30%"}} p="20px" background="rgb(245, 223, 78)" borderRadius="1em" m="auto">
                    <Heading>1200+</Heading>
                    <Heading fontSize="24px">Hours of Coding</Heading>
                  </Box>
                  <Box width={{base:"80%",sm:"40%",md:"30%",lg:"30%"}} p="20px" background="rgb(245, 223, 78)" borderRadius="1em" m="auto">
                    <Heading>800+</Heading>
                    <Heading fontSize="24px">Hours of DSA</Heading>
                  </Box>
                  <Box width={{base:"80%",sm:"40%",md:"30%",lg:"30%"}} p="20px" background="rgb(245, 223, 78)" borderRadius="1em" m="auto">
                    <Heading>100+</Heading>
                    <Heading fontSize="24px">Hours of Soft Skills</Heading>
                  </Box>
                    </Flex>
               
                    <Box mt={"5%"}>
                    <Heading textAlign={"center"}>My GitHub Stats</Heading>

<Flex my="3%" justify="space-between" flexDirection={['column', 'column','column','row']}>
    <img align="center" alt="error" src="https://github-readme-stats.vercel.app/api?username=faizanghani2222&theme=default&hide_border=true&include_all_commits=false&count_private=true"  height="139" />
    <img align="center"  src="https://github-readme-streak-stats.herokuapp.com/?user=faizanghani2222&theme=default&hide_border=true" alt="faizanghani2222" height="139" />
</Flex>
<img alt="error" src="https://activity-graph.herokuapp.com/graph?username=faizanghani2222&theme=xcode&include_all_commits=true&count_private=true&theme=default" height ="307"/>
                    </Box>
            </Box>
           </Fade>
        </Box>
        </>
    );
}

export default About;