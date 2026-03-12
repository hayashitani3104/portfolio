import React from 'react';
import { Box } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  const headerHeight = ['56px', '64px', '64px', '64px'];

  return (
    <Box bg="#0f0f1a" minH="100vh">
      <Header height={headerHeight} />
      <Box as="main">
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
