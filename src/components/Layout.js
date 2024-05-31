import React from 'react';
import { Box } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  const headerHeight = ['48px', '64px', '64px', '64px'];

  return (
    <>
      <Header height={headerHeight} />
      <Box as="main" pt={headerHeight}>
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
