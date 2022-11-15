import { Box, Button, Flex, Heading, Image, Link, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import React from 'react';
import Fade from 'react-reveal/Fade'; 
import zara from "../images/zara.png"
import gh from "../images/gh.png"
import dh from "../images/dh.png"
import jio from "../images/jio.png"
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';
function Projects(){

    const colourTheme = {
        background: "transparent",
        text: "#ffffff",
        grade4: "#8400b8",
        grade3: "#b22ff4",
        grade2: "#b265f6",
        grade1: "#c084f5",
        grade0: "#ecd9fc"
      };
    return (
        <Box  w="100%" id="project" pt={["25%","5%","5%"]} pb="30px" mt={{base:"30%",sm:"20%",md:0,lg:0}}>
            <Heading fontWeight="600" fontSize="16px" w="fit-content" px="10px" py="5px" m="auto" background="rgb(245, 223, 78)">Projects</Heading>
            <Heading fontSize="32px" px="10%" textAlign="center">Some of my recent projects</Heading>
            <Box mt="3%" pb="30px" px="10%">
               
            <Fade left cascade>
                <Flex  wrap={{base:"wrap-reverse",md:"nowrap",lg:"nowrap"}} gap={"10px"} mb="20px" px="30px" py="20px"  boxShadow={"rgb(245, 223, 78) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"} justify="space-between">
                    <Box>
                    <Heading fontSize={["20px","28px","28px"]}>Harvest- Clone (Group project)</Heading>
                    <Text as="b">Tech Stack:</Text><Text>React | Chakra UI | Firebase | NodeJs | Express | MongoDB |
JavaScript | HTML | CSS</Text>
                    <Text display="block" as="b">Features:</Text>
                    <UnorderedList>
                        <ListItem>Live time track feature connected by our backend to track time</ListItem>
                        <ListItem>User can create Invoice and download it as pdf</ListItem>
                        <ListItem>Responsive and mobile-friendly website</ListItem>
                        <ListItem>User can manage projects, add update, delete or export it</ListItem>
                   </UnorderedList>
                  
                    <Text display="block" as="b">Area of Responsibility</Text>
                    <UnorderedList>
                        <ListItem>Time track section and its backend</ListItem>
                        <ListItem>Invoice section and its backend</ListItem>
                   </UnorderedList>
                   <Flex mt="1%" justify="space-between" alignItems="center">
                   <Link href="https://get-harvest-rct201clone.netlify.app/" isExternal>
                    <Button background="rgb(140, 78, 255)" color="white">Live 
                    <i style={{marginLeft:"6px"}} class="fa-sharp fa-solid fa-arrow-up-right-from-square"></i>
                    </Button>
                    </Link>
                    <Link href="https://github.com/SHARUN266/Get-Harvest-clone" isExternal>
                    <Button background="rgb(140, 78, 255)" color="white">Code
                    <i style={{marginLeft:"6px"}} class="fa-brands fa-github"></i>
                    </Button>
                    </Link>
                   </Flex>
                    </Box>
                    <Box w={["100%","100%","50%","50%"]}>
                        <Image transition="transform .2s" _hover={{transform:" scale(1.2)"}} w="100%" h={["200px","100%%","100%"]} src={gh}/>
                    </Box>
                </Flex>
                </Fade>
               
               
                <Fade right cascade>
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

                <Fade left cascade>
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

                <Fade right cascade>
                <Flex  wrap={{base:"wrap-reverse",md:"nowrap",lg:"nowrap"}} gap={"10px"} mb="20px" px="30px" py="20px"  boxShadow={"rgb(245, 223, 78) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"} justify="space-between">
                    <Box>
                    <Heading fontSize={["20px","28px","28px"]}>Deccan Herald - Clone (Group-Project)</Heading>
                    <Text as="b">Tech Stack:</Text><Text> HTML | CSS | JavaScript</Text>
                    <Text display="block" as="b">Features:</Text>
                    <UnorderedList>
                        <ListItem>A complete news website having different sections and categories</ListItem>
                   </UnorderedList>
                    <Text display="block" as="b">Area of Responsibility</Text>
                    <UnorderedList>
                        <ListItem>Layout of all category pages and detail page</ListItem>
                        <ListItem>Responsive navbar</ListItem>
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

               
                <Fade bottom cascade>
                <Box mt={["15%","7%"]}>


                <Heading fontWeight="600" fontSize="16px" w="fit-content" px="10px" py="5px" m="auto" background="rgb(245, 223, 78)">Statistics</Heading>

                <Flex my="6%" wrap="wrap" justify="space-between" gap="1em" textAlign="center">
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

                    <Heading fontSize="32px" textAlign={"center"}>My GitHub Stats</Heading>

<Flex my="3%" justify="space-between" flexDirection={['column', 'column','column','row']}>
    <img align="center" alt="error" src="https://github-readme-stats.vercel.app/api?username=faizanghani2222&theme=default&hide_border=true&include_all_commits=false&count_private=true"  height="139" />
    <img align="center"  src="https://github-readme-streak-stats.herokuapp.com/?user=faizanghani2222&theme=default&hide_border=true" alt="faizanghani2222" height="139" />
</Flex>
{/* <img alt="error" src="https://activity-graph.herokuapp.com/graph?username=faizanghani2222&theme=xcode&include_all_commits=true&count_private=true&theme=default" height ="307"/> */}
<GitHubCalendar
          username="faizanghani2222"
          blockSize={25}
          blockMargin={6}
          theme={colourTheme}
          fontSize={16}
        >
        <ReactTooltip delayShow={20} html />
        </GitHubCalendar>
                    </Box>
                </Fade>
            </Box>
        </Box>
    );
}

export default Projects;