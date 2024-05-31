import React from 'react';
import { Box } from '@chakra-ui/react';
import Layout from '../components/Layout';
import MainVisual from '../components/MainVisual';
import Profile from '../components/Sections/Profile';
import Skillset from '../components/Sections/Skillset';
import Mindset from '../components/Sections/Mindset';
import Contact from '../components/Sections/Contact';

const Home = () => {
  return (
    <Layout>
      <MainVisual />
      <Box bg="gray.100">
        <Profile />
      </Box>
      <Box>
        <Skillset />
      </Box>
      <Box bg="gray.100">
        <Mindset />
      </Box>
      <Box>
        <Contact />
      </Box>
    </Layout>
  );
};

export default Home;
