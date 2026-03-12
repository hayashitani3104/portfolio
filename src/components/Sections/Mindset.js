import React from "react";
import { Box, Grid, GridItem, ListItem, Text, UnorderedList, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import SectionLayout from "./SectionLayout";

const MotionBox = motion(Box);

const cardGradients = [
  'linear(to-br, rgba(102,126,234,0.15), rgba(118,75,162,0.05))',
  'linear(to-br, rgba(118,75,162,0.15), rgba(240,147,251,0.05))',
  'linear(to-br, rgba(240,147,251,0.1), rgba(102,126,234,0.05))',
  'linear(to-br, rgba(102,126,234,0.1), rgba(240,147,251,0.08))',
];

function MindsetCard({ title, children, index }) {
  return (
    <MotionBox
      h="100%"
      minH="380px"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <GridItem colSpan={1} h="100%" minH="380px">
        <Box
          h="100%"
          minH="380px"
          bg="rgba(26, 26, 46, 0.6)"
          borderRadius="2xl"
          p={[6, 7, 8]}
          border="1px solid"
          borderColor="rgba(102, 126, 234, 0.12)"
          position="relative"
          overflow="hidden"
          _hover={{
            borderColor: 'rgba(102, 126, 234, 0.35)',
            transform: 'translateY(-4px)',
            boxShadow: '0 20px 60px rgba(102, 126, 234, 0.12)',
          }}
          transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
        >
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            bgGradient={cardGradients[index]}
            opacity={0.5}
            pointerEvents="none"
          />

          <VStack align="flex-start" spacing={4} position="relative">
            <Text
              fontSize={['lg', 'lg', 'xl']}
              fontWeight="700"
              bgGradient="linear(to-r, #e0e0e0, #ffffff)"
              bgClip="text"
            >
              {title}
            </Text>
            <Box color="whiteAlpha.700" lineHeight="1.9" fontSize="sm">
              {children}
            </Box>
          </VStack>
        </Box>
      </GridItem>
    </MotionBox>
  );
}

const Mindset = () => {
  return (
    <SectionLayout id="mindset" title="MINDSET">
      <Grid templateColumns={['1fr', '1fr', '1fr', 'repeat(2, 1fr)']} gap={6} alignItems="stretch">
        <MindsetCard title="仕事に対して" index={0}>
          <Text>
            最低限の仕様説明で要件を汲み取ることが得意です。足りない情報はこちらからヒアリングしています。
          </Text>
          <Text mt={2}>
            上流やリーダー経験もあるため、幅広い視点で物事を考えるよう心がけています。
          </Text>
          <UnorderedList mt={4} spacing={2} pl={2} styleType="'▸ '">
            <ListItem>開発としてではなくビジネスとしての最善策を意識する</ListItem>
            <ListItem>食い違いが発生しないよう認識合わせを入念かつ簡潔に行う</ListItem>
            <ListItem>想定外のことがあったとしても状況報告は正しく行う</ListItem>
          </UnorderedList>
        </MindsetCard>

        <MindsetCard title="開発に対して" index={1}>
          <Text>
            保守性が高く、綺麗な作りを意識しながら実装することが好きです。
          </Text>
          <Text mt={2}>
            とはいえ、正しく動くコードを納期内に実装するということを大前提に置いており、これらのバランスを大事にしています。
          </Text>
          <Text mt={2}>
            技術的負債の改修などにおいても費用と効果が見合った対応であるべきだと考えています。
          </Text>
          <Text mt={2}>
            人の書いたコードを読むことも好きで、そこからよく勉強させてもらっています。
          </Text>
        </MindsetCard>

        <MindsetCard title="プライベート" index={2}>
          <Text>
            新卒採用でゲーム会社に入社したのもあり、ゲームが大好きです。が、プレイに費やした時間に虚無感を感じるので、最近はあまりやらないようにしています笑
          </Text>
          <Text mt={2}>
            フリーランスになってからは場所を選ばずフルリモートで活動しており、オーストラリアやニュージーランド、東南アジア周辺を回っていました。
          </Text>
          <Text mt={2}>
            今後も色々な国に行きたいと考えています。
          </Text>
        </MindsetCard>

        <MindsetCard title="性格" index={3}>
          <Text>
            基本的に人見知りですが、業務におけるコミュニケーションには支障ありません。職場の飲み会なんかも大好きです。
          </Text>
          <Text mt={2}>
            冗談を言うのが好きで、林谷のすべらない話も持ち合わせています笑
          </Text>
          <Text mt={2}>
            挑戦できる機会があれば何事もトライしてみる性分で、いつ死んでも後悔ないように生きることを志しています。
          </Text>
        </MindsetCard>
      </Grid>
    </SectionLayout>
  );
};

export default Mindset;
