import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import SectionLayout from "./SectionLayout";

const MotionBox = motion(Box);

const Contact = () => {
  return (
    <SectionLayout id="contact" title="CONTACT">
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        textAlign="center"
        mb={8}
      >
        <Text color="whiteAlpha.600" fontSize="sm" lineHeight="1.8">
          お仕事のご依頼・ご相談はお気軽にお問い合わせください。
        </Text>
      </MotionBox>
      <MotionBox
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        bg="#1a1a2e"
        borderRadius="2xl"
        border="1px solid"
        borderColor="rgba(102, 126, 234, 0.12)"
        overflow="hidden"
        p={[2, 4, 6]}
      >
        <Box borderRadius="xl" overflow="hidden">
          <iframe
            src="https://tayori.com/form/2620f623bbdd63fe095f5bdf0d72fc716802a5b5/"
            frameBorder="no"
            scrolling="no"
            width="100%"
            height="720px"
            title="Contact Form"
            style={{ borderRadius: '12px' }}
          />
        </Box>
      </MotionBox>
    </SectionLayout>
  );
};

export default Contact;
