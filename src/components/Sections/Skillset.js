import React, { useState } from "react";
import {
  Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel,
  Grid, GridItem, Image, Text, Box, Flex, Center, HStack
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import SectionLayout from "./SectionLayout";
import phpImage from "../../assets/images/skillset/php.png";
import laravelImage from "../../assets/images/skillset/laravel.png";
import cakephpImage from "../../assets/images/skillset/cakephp.png";
import wordpressImage from "../../assets/images/skillset/wordpress.png";
import eccubeImage from "../../assets/images/skillset/eccube.png";
import javascriptImage from "../../assets/images/skillset/javascript.png";
import databaseImage from "../../assets/images/skillset/database.png";
import mysqlImage from "../../assets/images/skillset/mysql.png";
import postgresImage from "../../assets/images/skillset/postgres.png";
import sqlserverImage from "../../assets/images/skillset/sqlserver.png";
import jqueryImage from "../../assets/images/skillset/jquery.png";
import reactImage from "../../assets/images/skillset/react.png";
import serverImage from "../../assets/images/skillset/server.png";
import awsImage from "../../assets/images/skillset/aws.png";
import vpsImage from "../../assets/images/skillset/vps.png";
import dockerImage from "../../assets/images/skillset/docker.png";
import htmlCssImage from "../../assets/images/skillset/html-css.png";
import htmlImage from "../../assets/images/skillset/html.png";
import cssImage from "../../assets/images/skillset/css.png";
import bootstrapImage from "../../assets/images/skillset/bootstrap.png";
import linuxImage from "../../assets/images/skillset/linux.png";
import nginxImage from "../../assets/images/skillset/nginx.png";
import apacheImage from "../../assets/images/skillset/apache.png";
import gitImage from "../../assets/images/skillset/git.png";
import letsencryptImage from "../../assets/images/skillset/letsencrypt.png";
import toolImage from "../../assets/images/skillset/tool.png";
import redmineImage from "../../assets/images/skillset/redmine.png";
import confluenceImage from "../../assets/images/skillset/confluence.png";
import backlogImage from "../../assets/images/skillset/backlog.png";
import notionImage from "../../assets/images/skillset/notion.png";
import chatImage from "../../assets/images/skillset/chat.png";
import chatworkImage from "../../assets/images/skillset/chatwork.png";
import slackImage from "../../assets/images/skillset/slack.png";
import teamsImage from "../../assets/images/skillset/teams.png";

const MotionBox = motion(Box);
const MotionGridItem = motion(GridItem);

const skillsetItems = [
  {
    name: 'PHP',
    image: phpImage,
    years: 9,
    level: 5,
    description: '最も得意な言語です。プログラマーになってからずっと触り続けており、案件探しもPHPを主軸に置いています。',
    children: [
      { name: 'Laravel', image: laravelImage, years: 7, level: 5, description: '最も得意なフレームワークです。ソースレビュアーとしての経験もあり、アーキテクチャの設計も対応できます。' },
      { name: 'その他のFW', image: cakephpImage, years: 'それぞれ約半年~1', level: 3, description: 'CakePHP、Phalcon、ZendFramework、Symfonyの経験があります。' },
      { name: 'WordPress', image: wordpressImage, years: 3, level: 4, description: 'ブログの構築もできますが、どちらかというとECサイトとかの保守運用案件をやってました。' },
      { name: 'EC-CUBE', image: eccubeImage, years: 2, level: 4, description: '2系、4系ともに経験があります。外部決済サービスやプラグインの導入も可能です。' },
    ],
  },
  {
    name: 'SQL',
    image: databaseImage,
    years: 9,
    level: 4,
    description: 'バックエンド実装での使用、パフォーマンスチューニングまで対応可能です。',
    children: [
      { name: 'MySQL', image: mysqlImage, years: 9, level: 5, description: '最も使用してきたSQLです。派生であるMariaDBなどの使用経験もあります。' },
      { name: 'PostgreSQL', image: postgresImage, years: 3, level: 4, description: '現在参画中の案件で使用しています。' },
      { name: 'SQL Server', image: sqlserverImage, years: '半', level: 2, description: '以前スポット案件で使用経験がありました。' },
    ],
  },
  {
    name: 'JavaScript',
    image: javascriptImage,
    years: 5,
    level: 3,
    description: '主な実務経験は生のJSやJQueryになります。VueやReactの実務経験を積みたいです。',
    children: [
      { name: '生JS', image: javascriptImage, years: 5, level: 4, description: 'ページに動きをつけたり要素の表示制御等対応可能です。' },
      { name: 'jQuery', image: jqueryImage, years: 5, level: 4, description: '上述の生JSと同様、色々実装・解読できます。' },
      { name: 'React', image: reactImage, years: 0, level: 2, description: '実務経験はありませんが、独学で実装を行なっています。本サイトもReactを採用しています。' },
    ],
  },
  {
    name: 'HTML/CSS',
    image: htmlCssImage,
    years: 3,
    level: 3,
    description: '基本理解はできているためデザインカンプを頂ければ対応できます。',
    children: [
      { name: 'HTML', image: htmlImage, years: 3, level: 3, description: '一通りのタグは理解しており、既存ファイルの解読も難なくできます。' },
      { name: 'CSS', image: cssImage, years: 3, level: 2, description: '既存ページの余白やフォント調整を行なった経験があります。' },
      { name: 'Bootstrap', image: bootstrapImage, years: 3, level: 4, description: '主に管理ツールの実装に使用しています。' },
    ],
  },
  {
    name: 'Linux',
    image: linuxImage,
    years: 9,
    level: 4,
    description: 'コマンドラインは抵抗なくいじることができます。ミドルウェアなどの導入も可能です。',
    children: [
      { name: 'Git', image: gitImage, years: 9, level: 5, description: 'ブランチ運用は事前に必ず確認し、デグレ等のトラブルは発生させません。' },
      { name: 'Nginx', image: nginxImage, years: 4, level: 4, description: '導入や設定の見直しまで対応していました。SSLとの連携も経験しています。' },
      { name: 'Apache', image: apacheImage, years: 3, level: 3, description: '前述のNginxと同様な対応経験があります。' },
      { name: "Let's Encrypt", image: letsencryptImage, years: 2, level: 2, description: '無料のSSLを導入したいという要件から使用した経験があります。' },
    ],
  },
  {
    name: 'サーバー構築',
    image: serverImage,
    years: 6,
    level: 3,
    description: '本番やテスト環境、Dockerによるローカル環境の構築が可能です。',
    children: [
      { name: 'AWS', image: awsImage, years: 3, level: 3, description: 'EC2やRDSを用いてWebサーバーの構築をすることができます。' },
      { name: 'Docker', image: dockerImage, years: 6, level: 4, description: 'docker-composeも含め、技術選定に合わせたコンテナを構築することが可能です。' },
      { name: 'VPS', image: vpsImage, years: 3, level: 3, description: 'さくらやConoha、VALUE SERVERの利用経験があります。' },
    ],
  },
  {
    name: 'チャットツール',
    image: chatImage,
    years: 9,
    level: 4,
    description: '箇条書きを使ったり、簡潔にわかりやすいチャットコミュニケーションを目指しています。',
    children: [
      { name: 'Chatwork', image: chatworkImage, years: 6, level: 4, description: '初めて使ったチャットツールです。シンプルで使いやすいと思っています。' },
      { name: 'Slack', image: slackImage, years: 6, level: 4, description: '最も気に入っているチャットツールです。' },
      { name: 'Teams', image: teamsImage, years: '半', level: 2, description: '主にチャットで利用していました。' },
    ],
  },
  {
    name: '管理ツール',
    image: toolImage,
    years: 9,
    level: 3,
    description: '色々なプロジェクト管理ツールを触ってきています。',
    children: [
      { name: 'Redmine', image: redmineImage, years: 3, level: 4, description: 'チケット管理やwikiの記述などの経験があります。' },
      { name: 'Confluence', image: confluenceImage, years: 3, level: 3, description: 'Jiraとセットで使っていたりしました。' },
      { name: 'Notion', image: notionImage, years: 6, level: 3, description: '最近の案件で触る機会が多いです。' },
      { name: 'Backlog', image: backlogImage, years: 3, level: 2, description: '使用経験があります。' },
    ],
  },
];

const SkillBar = ({ level, delay = 0, triggerAnimation = false }) => {
  const percentage = (level / 5) * 100;
  return (
    <Box w="100%" h="6px" bg="rgba(255,255,255,0.08)" borderRadius="full" overflow="hidden">
      <MotionBox
        h="100%"
        bgGradient="linear(to-r, #667eea, #764ba2)"
        borderRadius="full"
        initial={{ width: '0%' }}
        {...(triggerAnimation
          ? {
              animate: { width: `${percentage}%` },
              transition: { duration: 1, delay, ease: 'easeOut' },
            }
          : {
              whileInView: { width: `${percentage}%` },
              viewport: { once: true },
              transition: { duration: 1, delay, ease: 'easeOut' },
            })}
        style={{ transformOrigin: 'left' }}
      />
    </Box>
  );
};

const SkillCard = ({ item, index }) => {
  const [expandedIndex, setExpandedIndex] = useState([]);
  const isExpanded = expandedIndex.includes(0);

  return (
  <MotionGridItem
    h="100%"
    minH="180px"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
  >
    <Box
      h="100%"
      minH="180px"
      bg="rgba(26, 26, 46, 0.6)"
      borderRadius="2xl"
      border="1px solid"
      borderColor="rgba(102, 126, 234, 0.12)"
      overflow="hidden"
      _hover={{
        borderColor: 'rgba(102, 126, 234, 0.35)',
        transform: 'translateY(-4px)',
        boxShadow: '0 20px 60px rgba(102, 126, 234, 0.15)',
      }}
      transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
    >
      <Accordion allowMultiple index={expandedIndex} onChange={setExpandedIndex}>
        <AccordionItem border="none">
          <Box px={6} pt={6} pb={4}>
            <Flex gap={5} alignItems="flex-start">
              <Center
                w="60px"
                h="60px"
                flexShrink={0}
                bg="gray.100"
                borderRadius="xl"
                p={3}
              >
                <Image src={item.image} maxW="100%" maxH="100%" objectFit="contain" />
              </Center>
              <Box flex="1" minW={0}>
                <HStack justify="space-between" mb={1}>
                  <Text fontSize="lg" fontWeight="700" color="white">
                    {item.name}
                  </Text>
                  <Text fontSize="xs" color="whiteAlpha.500" fontFamily="'Poppins', sans-serif" flexShrink={0}>
                    {item.years}年
                  </Text>
                </HStack>
                <SkillBar level={item.level} delay={index * 0.1} />
                <Text fontSize="sm" color="whiteAlpha.600" mt={3} lineHeight="1.7" noOfLines={2}>
                  {item.description}
                </Text>
              </Box>
            </Flex>
          </Box>

          <AccordionButton
            justifyContent="center"
            py={3}
            _hover={{ bg: 'rgba(102, 126, 234, 0.06)' }}
            borderTop="1px solid"
            borderColor="rgba(102, 126, 234, 0.08)"
          >
            <Text fontSize="xs" color="whiteAlpha.500" fontWeight="500" letterSpacing="0.05em">
              詳細を見る
            </Text>
            <AccordionIcon color="whiteAlpha.500" ml={1} />
          </AccordionButton>

          <AccordionPanel pb={6} px={6} bg="rgba(15, 15, 26, 0.3)">
            {item.children.map((child, ci) => (
              <MotionBox
                key={child.name}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: ci * 0.1 }}
              >
                <Flex
                  gap={4}
                  py={4}
                  alignItems="flex-start"
                  borderBottom={ci < item.children.length - 1 ? '1px solid' : 'none'}
                  borderColor="rgba(102, 126, 234, 0.06)"
                >
                  <Center
                    w="44px"
                    h="44px"
                    flexShrink={0}
                    bg="gray.100"
                    borderRadius="lg"
                    p={2}
                  >
                    <Image src={child.image} maxW="100%" maxH="100%" objectFit="contain" />
                  </Center>
                  <Box flex="1" minW={0}>
                    <HStack justify="space-between" mb={1}>
                      <Text fontSize="sm" fontWeight="600" color="whiteAlpha.900">
                        {child.name}
                      </Text>
                      <Text fontSize="xs" color="whiteAlpha.400" fontFamily="'Poppins', sans-serif" flexShrink={0}>
                        {child.years}年
                      </Text>
                    </HStack>
                    <SkillBar key={`${child.name}-${isExpanded}`} level={child.level} delay={ci * 0.1 + 0.2} triggerAnimation={isExpanded} />
                    <Text fontSize="xs" color="whiteAlpha.500" mt={2} lineHeight="1.7">
                      {child.description}
                    </Text>
                  </Box>
                </Flex>
              </MotionBox>
            ))}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  </MotionGridItem>
  );
};

const Skillset = () => {
  return (
    <SectionLayout id="skillset" title="SKILLSET">
      <Grid templateColumns={['1fr', '1fr', '1fr', 'repeat(2, 1fr)']} gap={6} alignItems="stretch">
        {skillsetItems.map((item, i) => (
          <SkillCard key={item.name} item={item} index={i} />
        ))}
      </Grid>
    </SectionLayout>
  );
};

export default Skillset;
