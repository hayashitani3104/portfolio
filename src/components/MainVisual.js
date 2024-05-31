import React from "react";
import { Box, Image } from "@chakra-ui/react";
import mainImage from '../assets/images/main.png';

const MainVisual = () => {
  return (
    <Box width="100%" height={['300px', '400px', '500px', '500px']} overflow="hidden">
      <Image
        src={mainImage}
        alt="main"
        objectFit="cover"
        width="100%"
        height="100%"
      />
    </Box>
  );
}

export default MainVisual;
