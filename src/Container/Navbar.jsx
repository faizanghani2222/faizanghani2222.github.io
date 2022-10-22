import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Flex, Heading, Link, StackDivider, useDisclosure, VStack } from '@chakra-ui/react';
import React from 'react';
import "../CSS/mystyle.css"
import FaizanGhani_Resume from "../Resume/FaizanGhani_Resume.pdf"
function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (
    <>
       <Flex alignItems="center" position="fixed" zIndex="1"background="rgb(245, 223, 78)" top="0" left="0" justifyContent="space-between" w='100%' px="10%" py="10px" >
       
        <Box >
        <Link href="#home"><Heading>{"<FG/>"}</Heading></Link>
        </Box>
        <Flex w="50%" justifyContent={"space-between"} alignItems="center" display={{base:"none",md:"flex",lg:"flex"}}>
          <Link fontWeight="600" href="#home">Home</Link>
          <Link fontWeight="600" href="#about">About</Link>
          <Link fontWeight="600" href="#skill">Skills</Link>
          <Link fontWeight="600" href="#project">Projects</Link>
          <Link fontWeight="600" href="#contact">Contact</Link>
          <Link href={FaizanGhani_Resume} download fontWeight="600">Resume</Link>
          
        </Flex>

         {/* drawer */}
          
         <>
      <Button  fontSize="25px" display={{base:"flex",md:"none",lg:"none"}} alignItem="center"  ref={btnRef} color='black' colorScheme="transparent" onClick={onOpen}>
      <i class="fa-solid fa-bars"></i>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
        
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color="white" />
          

          <DrawerBody backgroundColor="rgb(140, 78, 255)">
            <VStack mt="80px" gap="3" color="white" divider={<StackDivider borderColor='white'/>} >
            <Link fontWeight="600"  onClick={onClose} href="#home">Home</Link>
            <Link  fontWeight="600" onClick={onClose} href="#about">About</Link>
            <Link  fontWeight="600" onClick={onClose} href="#skill">Skills</Link>
            <Link fontWeight="600"  onClick={onClose} href="#project">Projects</Link>
            <Link  fontWeight="600" onClick={onClose} href="#contact">Contact</Link>
            </VStack>
          </DrawerBody>

         
        </DrawerContent>
      </Drawer>
    </>

        {/* drawer end */}
      </Flex>

    </>
  );
}

export default Navbar;