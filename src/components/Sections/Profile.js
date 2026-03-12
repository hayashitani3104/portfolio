import React from "react";
import { Box, Grid, GridItem, Image, Text, VStack, HStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import SectionLayout from "./SectionLayout";
import { calculateAge } from '../../utils/calculateAge';
import profileImage from "../../assets/images/profile.jpg";

const MotionBox = motion(Box);
const MotionImage = motion(Image);

const timelineData = [
  { year: '2015', label: 'DMMグループのゲーム会社に新卒入社' },
  { year: '2020', label: 'フィリピンのオフショア開発会社に転職' },
  { year: '2023', label: 'フリーランスとして独立' },
];

const TimelineDot = () => (
  <Box
    w="14px"
    h="14px"
    borderRadius="full"
    bgGradient="linear(to-br, #667eea, #764ba2)"
    border="3px solid"
    borderColor="#1a1a2e"
    boxShadow="0 0 12px rgba(102, 126, 234, 0.5)"
    flexShrink={0}
  />
);

const Profile = () => {
  return (
    <SectionLayout id="profile" title="PROFILE">
      <Grid templateColumns={['1fr', '1fr', '1fr', 'repeat(8, 1fr)']} gap={[8, 8, 8, 12]}>
        <GridItem colSpan={[1, 1, 1, 3]} display="flex" justifyContent="center" alignItems="flex-start">
          <MotionBox
            position="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Box
              position="absolute"
              top="-4px"
              left="-4px"
              right="-4px"
              bottom="-4px"
              borderRadius="full"
              bgGradient="linear(to-br, #667eea, #764ba2, #f093fb)"
              animation="spin 8s linear infinite"
              sx={{
                '@keyframes spin': {
                  '0%': { transform: 'rotate(0deg)' },
                  '100%': { transform: 'rotate(360deg)' },
                },
              }}
              opacity={0.7}
            />
            <MotionImage
              src={profileImage}
              borderRadius="full"
              w="240px"
              h="240px"
              objectFit="cover"
              position="relative"
              border="4px solid"
              borderColor="#1a1a2e"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </MotionBox>
        </GridItem>

        <GridItem colSpan={[1, 1, 1, 5]}>
          <VStack align={['center', 'center', 'center', 'flex-start']} spacing={6}>
            <Text
              fontSize={['xl', 'xl', '2xl', '2xl']}
              fontWeight="700"
              bgGradient="linear(to-r, #e0e0e0, #ffffff)"
              bgClip="text"
            >
              林谷 智史
              <Text as="span" fontSize="md" fontWeight="400" color="whiteAlpha.600" ml={3}>
                ハヤシタニ サトシ
              </Text>
            </Text>

            <Box
              bg="rgba(26, 26, 46, 0.8)"
              borderRadius="xl"
              p={6}
              border="1px solid"
              borderColor="rgba(102, 126, 234, 0.15)"
              backdropFilter="blur(10px)"
              w="100%"
            >
              <Text lineHeight="1.9" color="whiteAlpha.800">
                北海道札幌市出身。{calculateAge('1992/08/21')}歳。
              </Text>
              <Text lineHeight="1.9" color="whiteAlpha.800" mt={2}>
                Laravelを中心としたバックエンド実装が専門ですが、フロントエンドやサーバー構築、設計や要件定義などの上流工程の経験もあります。
              </Text>
              <Text lineHeight="1.9" color="whiteAlpha.800" mt={2}>
                現在は国内外場所を選ばずフリーランスとして活動しています。
              </Text>
            </Box>

            <Box w="100%" mt={2}>
              <Text
                fontSize="lg"
                fontWeight="600"
                mb={6}
                textAlign={['center', 'center', 'center', 'left']}
                color="whiteAlpha.900"
              >
                Career
              </Text>
              <VStack align="stretch" spacing={0} pl={2}>
                {timelineData.map((item, i) => (
                  <MotionBox
                    key={item.year}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                  >
                    <HStack
                      spacing={4}
                      pb={i < timelineData.length - 1 ? 6 : 0}
                      position="relative"
                    >
                      {i < timelineData.length - 1 && (
                        <Box
                          position="absolute"
                          left="6px"
                          top="14px"
                          w="2px"
                          h="calc(100%)"
                          bgGradient="linear(to-b, rgba(102,126,234,0.6), rgba(102,126,234,0.1))"
                        />
                      )}
                      <TimelineDot />
                      <Text
                        fontFamily="'Poppins', sans-serif"
                        fontWeight="700"
                        fontSize="lg"
                        bgGradient="linear(to-r, #667eea, #a78bfa)"
                        bgClip="text"
                        minW="50px"
                      >
                        {item.year}
                      </Text>
                      <Text color="whiteAlpha.800" fontSize="sm">
                        {item.label}
                      </Text>
                    </HStack>
                  </MotionBox>
                ))}
              </VStack>
            </Box>
          </VStack>
        </GridItem>
      </Grid>
    </SectionLayout>
  );
};

export default Profile;
