import { Box, Button, Flex, Heading, Image, Link, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import React from 'react';
import Fade from 'react-reveal/Fade'; 
import zara from "../images/zara.png"
import dh from "../images/dh.png"
import jio from "../images/jio.png"
function Projects(){
    return (
        <Box  w="100%" id="project" pt={["25%","10%","10%"]} pb="30px" mt={{base:"40%",sm:"20%"}}>
            <Heading fontWeight="400" fontSize="16px" w="fit-content" px="10px" py="5px" m="auto" background="rgb(245, 223, 78)">Projects</Heading>
            <Heading fontSize="32px" px="10%" textAlign="center">Some of my recent projects</Heading>
            <Box mt="3%" pb="30px" px="10%">
                <Fade left cascade>
                <Flex  wrap={{base:"wrap-reverse",md:"nowrap",lg:"nowrap"}} gap={"10px"} mb="20px" px="30px" py="20px"  boxShadow={"rgb(245, 223, 78) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"} justify="space-between">
                    <Box py="5px">
                    <Heading fontSize={["20px","28px","28px"]}>Zara - Clone (Individual-Project)</Heading>
                    <Text as="b">Tech Stack:</Text><Text> HTML | CSS | REACT | JavaScript | JSON | Chakra UI</Text>
                    <Text display="block" as="b">Features:</Text>
                    <UnorderedList>
                        <ListItem>End-to-End product purchasing flow from the website</ListItem>
                        <ListItem> Responsive and mobile-friendly website</ListItem>
                   </UnorderedList>
                    <Text display="block" as="b">Area of Responsibility</Text>
                    <UnorderedList>
                        <ListItem>Complete Frontend & Backend</ListItem>
                   </UnorderedList>
                   <Flex mt="1%" justify="space-between" alignItems="center">
                    <Link href="https://netlify-thinks-faizanghani2222-gmail-com-is-great-c1660.netlify.app/" isExternal>
                    <Button background="rgb(140, 78, 255)" color="white">Live 
                    <i style={{marginLeft:"6px"}} class="fa-sharp fa-solid fa-arrow-up-right-from-square"></i>
                    </Button>
                    </Link>
                    <Link href="https://github.com/faizanghani2222/-scintillating-work-864" isExternal>
                    <Button background="rgb(140, 78, 255)" color="white">Code
                    <i style={{marginLeft:"6px"}} class="fa-brands fa-github"></i>
                    </Button>
                    </Link>
                   </Flex>
                    </Box>
                    <Box w={["100%","100%","50%","50%"]}>
                        <Image transition="transform .2s" _hover={{transform:" scale(1.2)"}} w="100%" h={["200px","100%%","100%"]} src={zara}/>
                    </Box>
                </Flex>
                </Fade>

                <Fade right cascade>
                <Flex  wrap={{base:"wrap-reverse",md:"nowrap",lg:"nowrap"}} gap={"10px"} mb="20px" px="30px" py="20px"  boxShadow={"rgb(245, 223, 78) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"} justify="space-between">
                    <Box>
                    <Heading fontSize={["20px","28px","28px"]}>Jio Mart - Clone (Group-Project)</Heading>
                    <Text as="b">Tech Stack:</Text><Text> HTML | CSS | JavaScript | JSON</Text>
                    <Text display="block" as="b">Features:</Text>
                    <UnorderedList>
                        <ListItem>End-to-End product purchasing flow from the website</ListItem>
                        <ListItem> Responsive and mobile-friendly website</ListItem>
                   </UnorderedList>
                    <Text display="block" as="b">Area of Responsibility</Text>
                    <UnorderedList>
                        <ListItem>Complete JavaScript and functionality of the website</ListItem>
                        <ListItem>Navbar</ListItem>
                        <ListItem>Cart Page and some other static pages</ListItem>
                   </UnorderedList>
                   <Flex mt="1%" justify="space-between" alignItems="center">
                   <Link href="https://effulgent-narwhal-bd55d8.netlify.app/" isExternal>
                    <Button background="rgb(140, 78, 255)" color="white">Live 
                    <i style={{marginLeft:"6px"}} class="fa-sharp fa-solid fa-arrow-up-right-from-square"></i>
                    </Button>
                    </Link>
                    <Link href="https://github.com/faizanghani2222/saucy-horses-1675" isExternal>
                    <Button background="rgb(140, 78, 255)" color="white">Code
                    <i style={{marginLeft:"6px"}} class="fa-brands fa-github"></i>
                    </Button>
                    </Link>
                   </Flex>
                    </Box>
                    <Box w={["100%","100%","50%","50%"]}>
                        <Image transition="transform .2s" _hover={{transform:" scale(1.2)"}} w="100%" h={["200px","100%%","100%"]} src={jio}/>
                    </Box>
                </Flex>
                </Fade>

                <Fade left cascade>
                <Flex  wrap={{base:"wrap-reverse",md:"nowrap",lg:"nowrap"}} gap={"10px"} mb="20px" px="30px" py="20px"  boxShadow={"rgb(245, 223, 78) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"} justify="space-between">
                    <Box>
                    <Heading fontSize={["20px","28px","28px"]}>Deccan Herald - Clone (Group project)</Heading>
                    <Text as="b">Tech Stack:</Text><Text> HTML | CSS | JavaScript</Text>
                    <Text display="block" as="b">Features:</Text>
                    <UnorderedList>
                        <ListItem>A complete news website having different sections and categories</ListItem>
                   </UnorderedList>
                    <Text display="block" as="b">Area of Responsibility</Text>
                    <UnorderedList>
                        <ListItem>Layout for all categories page and news details page</ListItem>
                        <ListItem>some static pages</ListItem>
                   </UnorderedList>
                   <Flex mt="1%" justify="space-between" alignItems="center">
                   <Link href="https://enchanting-muffin-9f8441.netlify.app/" isExternal>
                    <Button background="rgb(140, 78, 255)" color="white">Live 
                    <i style={{marginLeft:"6px"}} class="fa-sharp fa-solid fa-arrow-up-right-from-square"></i>
                    </Button>
                    </Link>
                    <Link href="https://github.com/Sakil9051/WEB-101-Project" isExternal>
                    <Button background="rgb(140, 78, 255)" color="white">Code
                    <i style={{marginLeft:"6px"}} class="fa-brands fa-github"></i>
                    </Button>
                    </Link>
                   </Flex>
                    </Box>
                    <Box w={["100%","100%","50%","50%"]}>
                        <Image transition="transform .2s" _hover={{transform:" scale(1.2)"}} w="100%" h={["200px","100%%","100%"]} src={dh}/>
                    </Box>
                </Flex>
                </Fade>
            </Box>
        </Box>
    );
}

export default Projects;