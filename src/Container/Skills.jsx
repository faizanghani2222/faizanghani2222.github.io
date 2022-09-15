import { Box,  Flex,  Grid, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import Fade from 'react-reveal/Fade'; 
import html5 from "../images/html5.png"
import css3 from "../images/css3.png"
import redux from "../images/redux.png"
import js from "../images/js.png"
import rct from "../images/rct.png"
import mongo from "../images/mongo.png"
import nodejs from "../images/nodejs.png"
import ts from "../images/ts.png"
import chakra from "../images/chakra.png"
import ex from "../images/ex.png"
import "../CSS/mystyle.css"
function Skills() {
    return (
      <Box w="100%" id="skill" pt={["25%","10%"]} pb="30px">
         <Heading fontWeight="400" fontSize="16px" w="fit-content" px="10px" py="5px" m="auto" background="rgb(245, 223, 78)">My Skills</Heading>
        <Box px="10%" mt="1%">
        <Heading fontSize="32px" textAlign="center">My Tech Stack</Heading>
       <Fade right cascade>
         <Flex  justifyContent="space-between" wrap={{base:"wrap",md:"nowrap",lg:"nowrap"}} gap={"12em"} py="5%">
          <Box w={{base:"100%",md:"45%",lg:"45%"}}>
          <Heading>Front-end Skills</Heading>  
       <Grid
          templateColumns={['repeat(2, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)']}
          mt="2%"
          gap={"5%"}
        >
          <Box className="shadow" p="10px"  textAlign="center">
          <Image src={html5} alt="error" />
          <Text>HTML5</Text>
          </Box>
          <Box className="shadow" p="10px"  textAlign="center">
         <Image src={css3} alt="error" />
          <Text>CSS3</Text>
          </Box>
          <Box className="shadow" p="10px"  textAlign="center">
         <Image src={rct} alt="error" />
          <Text>ReactJs</Text>
          </Box>
          <Box className="shadow" p="10px"  textAlign="center">
         <Image src={js} alt="error" />
          <Text>JavaScript</Text>
          </Box>
          <Box className="shadow" p="10px"  textAlign="center">
         <Image src={chakra} alt="error" />
          <Text>Chakra UI</Text>
          </Box>
          <Box className="shadow" p="10px"  textAlign="center">
         <Image src={ts} alt="error" />
          <Text>TypeScript</Text>
          </Box>
          <Box className="shadow" p="10px" textAlign="center">
         <Image src={redux} alt="error" />
          <Text>Redux</Text>
          </Box>
          
        </Grid>
          </Box>
          <Box w={{base:"100%",md:"45%",lg:"45%"}}>
          <Heading>Backend Skills</Heading>
        <Grid
          templateColumns={['repeat(2, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)']}
          mt="2%"
          gap={"5%"}
        >
          <Box className="shadow" p="10px"  textAlign="center">
         <Image src={nodejs} alt="error" />
          <Text>NodeJs</Text>
          </Box>
          <Box className="shadow" p="10px"  textAlign="center">
         <Image src={mongo} alt="error" />
          <Text>MongoDb</Text>
          </Box>
          <Box className="shadow" p="10px" textAlign="center">
         <Image src={ex} alt="error" />
          <Text>ExpressJs</Text>
          </Box>
          </Grid>
          </Box>
         </Flex>
       
       </Fade>

        </Box>

      
      </Box>
    );
}

export default Skills;