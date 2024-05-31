import React from 'react';
import { Link } from 'react-scroll';
import { Flex, Box, Text, Button, useDisclosure, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerBody } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const Header = ({ height, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  function Navigation() {
    return (
      <>
        <p>
          <Link to='profile' smooth={true} duration={500}>
            <Button variant='link' px="4" onClick={onClose}>PROFILE</Button>
          </Link>
        </p>
        <p>
          <Link to='skillset' smooth={true} duration={500}>
            <Button variant='link' px="4" onClick={onClose}>SKILLSET</Button>
          </Link>
        </p>
        <p>
          <Link to='mindset' smooth={true} duration={500}>
            <Button variant='link' px="4" onClick={onClose}>MINDSET</Button>
          </Link>
        </p>
        <p>
          <Link to='contact' smooth={true} duration={500}>
            <Button variant='link' px="4" onClick={onClose}>CONTACT</Button>
          </Link>
        </p>
      </>
    );
  }

  return (
    <Box as="header" position="fixed" top="0" width="full" zIndex="banner" bg="white">
      <Flex as="header" width="full" px="4" py="4" boxShadow="lg" justifyContent="space-between" alignItems="center" height={height}>
        <Text fontSize={['xl', '2xl', '2xl', '2xl']} fontWeight="bold">About Satoshi Hayashitani</Text>
        <IconButton
          aria-label="Open Menu"
          size="lg"
          icon={<HamburgerIcon />}
          display={['flex', 'flex', 'none', 'none']}
          onClick={onOpen}
          bg="white"
        />

        <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent maxWidth="160px">
            <DrawerBody>
              <Navigation />
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        <Box display={['none', 'none', 'flex', 'flex']} alignItems="center">
          <Navigation />
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
