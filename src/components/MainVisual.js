import React, { useState, useEffect } from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import mainImage from '../assets/images/main.png';

const MotionBox = motion(Box);
const MotionText = motion(Text);

const MainVisual = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

  const [displayText, setDisplayText] = useState('');
  const fullText = 'Satoshi Hayashitani';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayText(fullText.slice(0, index + 1));
      index++;
      if (index >= fullText.length) clearInterval(timer);
    }, 80);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      position="relative"
      width="100%"
      height={['100vh', '100vh', '100vh', '100vh']}
      overflow="hidden"
    >
      <MotionBox
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="120%"
        backgroundImage={`url(${mainImage})`}
        backgroundSize="cover"
        backgroundPosition="center"
        style={{ y, scale }}
      />

      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bg="linear-gradient(180deg, rgba(15,15,26,0.3) 0%, rgba(15,15,26,0.6) 50%, rgba(15,15,26,0.95) 100%)"
      />

      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bg="radial-gradient(ellipse at 20% 50%, rgba(102,126,234,0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 50%, rgba(118,75,162,0.1) 0%, transparent 50%)"
      />

      <MotionBox
        position="relative"
        zIndex="1"
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100%"
        style={{ opacity }}
      >
        <VStack spacing={6} textAlign="center" px={4}>
          <MotionText
            fontSize={['3xl', '4xl', '5xl', '6xl']}
            fontWeight="800"
            fontFamily="'Poppins', sans-serif"
            bgGradient="linear(to-r, #8b9eff, #a06cd5, #f2a6ff)"
            bgClip="text"
            letterSpacing="0.04em"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {displayText}
            <Box
              as="span"
              display="inline-block"
              w="3px"
              h={['30px', '36px', '44px', '52px']}
              bg="#667eea"
              ml="2px"
              verticalAlign="middle"
              animation="blink 1s step-end infinite"
              sx={{
                '@keyframes blink': {
                  '0%, 100%': { opacity: 1 },
                  '50%': { opacity: 0 },
                },
              }}
            />
          </MotionText>

          <MotionText
            fontSize={['md', 'lg', 'xl', 'xl']}
            color="whiteAlpha.700"
            fontWeight="300"
            letterSpacing="0.15em"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.0 }}
          >
            Backend Engineer / Freelance
          </MotionText>

          <MotionBox
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 2.5 }}
            width={['80px', '100px', '120px']}
            height="2px"
            bgGradient="linear(to-r, #667eea, #764ba2)"
            borderRadius="full"
          />

          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3.0 }}
            position="absolute"
            bottom="40px"
          >
            <Box
              w="24px"
              h="40px"
              border="2px solid"
              borderColor="whiteAlpha.400"
              borderRadius="full"
              position="relative"
            >
              <Box
                position="absolute"
                top="8px"
                left="50%"
                transform="translateX(-50%)"
                w="3px"
                h="8px"
                bg="whiteAlpha.600"
                borderRadius="full"
                animation="scrollDown 1.5s ease-in-out infinite"
                sx={{
                  '@keyframes scrollDown': {
                    '0%': { opacity: 1, transform: 'translateX(-50%) translateY(0)' },
                    '100%': { opacity: 0, transform: 'translateX(-50%) translateY(16px)' },
                  },
                }}
              />
            </Box>
          </MotionBox>
        </VStack>
      </MotionBox>
    </Box>
  );
};

export default MainVisual;
