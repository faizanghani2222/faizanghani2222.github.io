import { Box, Text } from '@chakra-ui/react';
import React from 'react';

function Footer() {
    return (
        <Box textAlign="center" py="20px">
            <Text as='sup' >
            Copyright{" "}
            <i class="fa-regular fa-copyright"></i>
             {" "}2022 Designed and Built by Faizan
            </Text>

        </Box>
    );
}

export default Footer;