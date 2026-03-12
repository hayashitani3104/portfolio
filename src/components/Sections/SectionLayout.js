import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionText = motion(Text);

const SectionLayout = ({ id, title, children }) => {
  return (
    <Box as="section" id={id} width={['90vw', '85vw', '80vw', '80vw']} mx="auto" py={['16', '20', '24', '28']}>
      <MotionBox
        mb="16"
        textAlign="center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <MotionText
          fontSize={['2xl', '3xl', '3xl', '4xl']}
          fontWeight="800"
          fontFamily="'Poppins', sans-serif"
          bgGradient="linear(to-r, #667eea, #764ba2)"
          bgClip="text"
          letterSpacing="0.1em"
          textTransform="uppercase"
          display="inline-block"
        >
          {title}
        </MotionText>
        <MotionBox
          mt={4}
          mx="auto"
          width="60px"
          height="3px"
          bgGradient="linear(to-r, #667eea, #764ba2)"
          borderRadius="full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
      </MotionBox>

      <MotionBox
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      >
        {children}
      </MotionBox>
    </Box>
  );
};

export default SectionLayout;
