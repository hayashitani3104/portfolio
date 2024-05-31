import React from 'react';
import { Box, Center } from '@chakra-ui/react';

const SectionLayout = ({ id, title, children }) => {
  return (
    <Box as="section" id={id} width="80vw" mx="auto" py="24">
      <Center fontSize={['xl', '2xl', '2xl', '3xl']} fontWeight="bold" mb="16">
        {title}
      </Center>
      {children}
    </Box>
  );
};

export default SectionLayout;
