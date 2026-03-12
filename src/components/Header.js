import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Flex, Box, Text, Button, useDisclosure, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerBody } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionText = motion(Text);

const Header = ({ height }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['profile', 'skillset', 'mindset', 'contact'];

  function Navigation({ direction = 'row' }) {
    return (
      <Flex direction={direction} gap={direction === 'column' ? 4 : 0}>
        {navItems.map((item, i) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i, duration: 0.4 }}
          >
            <Link to={item} smooth={true} duration={500} offset={-64}>
              <Button
                variant="ghost"
                px="5"
                py="2"
                fontSize="sm"
                fontWeight="600"
                fontFamily="'Poppins', sans-serif"
                letterSpacing="0.1em"
                textTransform="uppercase"
                color="whiteAlpha.800"
                _hover={{
                  color: 'white',
                  bg: 'whiteAlpha.100',
                  transform: 'translateY(-2px)',
                }}
                transition="all 0.3s ease"
                onClick={onClose}
                borderRadius="full"
              >
                {item}
              </Button>
            </Link>
          </motion.div>
        ))}
      </Flex>
    );
  }

  return (
    <MotionBox
      as="header"
      position="fixed"
      top="0"
      width="full"
      zIndex="banner"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Flex
        as="nav"
        width="full"
        px={['4', '6', '8', '12']}
        py={scrolled ? '2' : '4'}
        justifyContent="space-between"
        alignItems="center"
        height={height}
        bg={scrolled ? 'rgba(15, 15, 26, 0.85)' : 'transparent'}
        backdropFilter={scrolled ? 'blur(20px) saturate(180%)' : 'none'}
        borderBottom={scrolled ? '1px solid rgba(102, 126, 234, 0.15)' : 'none'}
        transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
      >
        <MotionText
          fontSize={['lg', 'xl', 'xl', 'xl']}
          fontWeight="700"
          fontFamily="'Poppins', sans-serif"
          color="whiteAlpha.800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          letterSpacing="0.02em"
        >
          Satoshi Hayashitani
        </MotionText>

        <IconButton
          aria-label="Open Menu"
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon boxSize={5} />}
          display={['flex', 'flex', 'none', 'none']}
          onClick={isOpen ? onClose : onOpen}
          variant="ghost"
          color="whiteAlpha.800"
          _hover={{ color: 'white', bg: 'whiteAlpha.100' }}
          borderRadius="full"
        />

        <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay bg="rgba(0,0,0,0.6)" backdropFilter="blur(8px)" />
          <DrawerContent
            bg="rgba(26, 26, 46, 0.95)"
            backdropFilter="blur(20px)"
            borderLeft="1px solid rgba(102, 126, 234, 0.2)"
            maxWidth="200px"
            pt={16}
          >
            <DrawerBody>
              <Navigation direction="column" />
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        <Box display={['none', 'none', 'flex', 'flex']} alignItems="center">
          <Navigation />
        </Box>
      </Flex>
    </MotionBox>
  );
};

export default Header;
