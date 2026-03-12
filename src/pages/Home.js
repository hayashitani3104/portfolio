import React from 'react';
import { Box } from '@chakra-ui/react';
import Layout from '../components/Layout';
import MainVisual from '../components/MainVisual';
import Profile from '../components/Sections/Profile';
import Skillset from '../components/Sections/Skillset';
import Mindset from '../components/Sections/Mindset';
import Contact from '../components/Sections/Contact';

const FloatingOrb = ({ top, left, size, color, delay }) => (
  <Box
    position="absolute"
    top={top}
    left={left}
    w={size}
    h={size}
    borderRadius="full"
    bg={color}
    filter="blur(80px)"
    opacity={0.15}
    pointerEvents="none"
    animation={`float ${6 + delay}s ease-in-out infinite alternate`}
    sx={{
      '@keyframes float': {
        '0%': { transform: 'translateY(0px)' },
        '100%': { transform: 'translateY(-30px)' },
      },
    }}
  />
);

const Home = () => {
  return (
    <Layout>
      <MainVisual />

      <Box position="relative" bg="#0f0f1a" overflow="hidden">
        <FloatingOrb top="5%" left="5%" size="400px" color="#667eea" delay={0} />
        <FloatingOrb top="30%" left="80%" size="350px" color="#764ba2" delay={2} />
        <FloatingOrb top="55%" left="10%" size="300px" color="#f093fb" delay={1} />
        <FloatingOrb top="75%" left="70%" size="380px" color="#667eea" delay={3} />

        <Box position="relative" zIndex={1}>
          <Profile />

          <Box
            h="1px"
            mx="auto"
            w="60%"
            bgGradient="linear(to-r, transparent, rgba(102,126,234,0.3), transparent)"
          />

          <Skillset />

          <Box
            h="1px"
            mx="auto"
            w="60%"
            bgGradient="linear(to-r, transparent, rgba(118,75,162,0.3), transparent)"
          />

          <Mindset />

          <Box
            h="1px"
            mx="auto"
            w="60%"
            bgGradient="linear(to-r, transparent, rgba(240,147,251,0.2), transparent)"
          />

          <Contact />
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
