import React from 'react';
import { Box, Flex, Text, VStack } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box
      as="footer"
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        h="1px"
        bgGradient="linear(to-r, transparent, rgba(102,126,234,0.4), rgba(118,75,162,0.4), transparent)"
      />

      <Flex
        width="full"
        px="4"
        py="8"
        bg="rgba(10, 10, 20, 0.8)"
        backdropFilter="blur(10px)"
        justifyContent="center"
        alignItems="center"
      >
        <VStack spacing={3}>
          <Text fontSize={['10px', 'xs', 'xs']} color="whiteAlpha.400">
            当サイトのテキストや画像等の無断転載・無断使用はご遠慮ください。
          </Text>
          <Text
            fontSize="xs"
            color="whiteAlpha.300"
            fontFamily="'Poppins', sans-serif"
            letterSpacing="0.05em"
          >
            Powered by React & Chakra UI
          </Text>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Footer;
