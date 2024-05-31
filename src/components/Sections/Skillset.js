import React from "react";
import { Accordion, AccordionItem, AccordionButton, Grid, GridItem, Image, Text, AccordionIcon, Box, Flex, Center, AccordionPanel } from "@chakra-ui/react";
import SectionLayout from "./SectionLayout";
import { getLevelStars } from '../../utils/getLevelStars';
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
// import jenkinsImage from "../../assets/images/skillset/jenkins.png";
import toolImage from "../../assets/images/skillset/tool.png";
import redmineImage from "../../assets/images/skillset/redmine.png";
import confluenceImage from "../../assets/images/skillset/confluence.png";
import backlogImage from "../../assets/images/skillset/backlog.png";
import notionImage from "../../assets/images/skillset/notion.png";
import chatImage from "../../assets/images/skillset/chat.png";
import chatworkImage from "../../assets/images/skillset/chatwork.png";
import slackImage from "../../assets/images/skillset/slack.png";
import teamsImage from "../../assets/images/skillset/teams.png";

const skillsetItems = [
  {
    name: 'PHP',
    image: phpImage,
    years: 9,
    level: 5,
    description: '最も得意な言語です。プログラマーになってからずっと触り続けており、案件探しもPHPを主軸に置いています。',
    children: [
      {
        name: 'Laravel',
        image: laravelImage,
        years: 7,
        level: 5,
        description: '最も得意なフレームワークです。ソースレビュアーとしての経験もあり、アーキテクチャの設計も対応できます。',
      },
      {
        name: 'その他のフレームワーク',
        image: cakephpImage,
        years: 'それぞれ約半',
        level: 3,
        description: 'CakePHP、Phalcon、ZendFramework、Symfonyの経験があります。最近の案件はLaravel中心になりますが、これらのフレームワークも抵抗なく触ることができます。',
      },
      {
        name: 'WordPress',
        image: wordpressImage,
        years: 3,
        level: 4,
        description: 'ブログの構築もできますが、どちらかというとECサイトとかの保守運用案件をやってました。',
      },
      {
        name: 'EC-CUBE',
        image: eccubeImage,
        years: 2,
        level: 4,
        description: '2系、4系ともに経験があります。外部決済サービスやプラグインの導入も可能です。',
      },
    ],
  },
  {
    name: 'SQL',
    image: databaseImage,
    years: 9,
    level: 4,
    description: 'バックエンド実装での使用、パフォーマンスチューニングまで対応可能です。集計作業等の複雑なクエリも書くことができます。',
    children: [
      {
        name: 'MySQL',
        image: mysqlImage,
        years: 9,
        level: 5,
        description: '最も使用してきたSQLです。派生であるMariaDBなどの使用経験もあります。',
      },
      {
        name: 'PostgreSQL',
        image: postgresImage,
        years: 3,
        level: 4,
        description: '現在参画中の案件で使用しています。基本的な使い方はMySQLと変わらないと思っています。',
      },
      {
        name: 'SQL Server',
        image: sqlserverImage,
        years: '半',
        level: 2,
        description: '以前スポット案件で使用経験がありました。',
      },
    ],
  },
  {
    name: 'JavaScript',
    image: javascriptImage,
    years: 5,
    level: 3,
    description: '主な実務経験は生のJSやJQueryになります。VueやReactの実務経験を積みたいです。',
    children: [
      {
        name: '生JS',
        image: javascriptImage,
        years: 5,
        level: 4,
        description: '色々実装できます。ページに動きをつけたり要素の表示制御等対応可能です。',
      },
      {
        name: 'Jquery',
        image: jqueryImage,
        years: 5,
        level: 4,
        description: '上述の生JSと同様、色々実装・解読できます。',
      },
      {
        name: 'React',
        image: reactImage,
        years: 0,
        level: 2,
        description: '実務経験はありませんが、独学で実装を行なっています。本サイトもReactを採用しています。',
      },
    ],
  },
  {
    name: 'HTML/CSS',
    image: htmlCssImage,
    years: 3,
    level: 3,
    description: '0からのコーディング経験はありませんが、基本理解はできているためデザインカンプを頂ければ対応できます。',
    children: [
      {
        name: 'HTML',
        image: htmlImage,
        years: 3,
        level: 3,
        description: '一通りのタグは理解しており、既存ファイルの解読も難なくできます。',
      },
      {
        name: 'CSS',
        image: cssImage,
        years: 3,
        level: 2,
        description: '簡単ではありますが、既存ページの余白やフォント調整を行なった経験があります。',
      },
      {
        name: 'Bootstrap',
        image: bootstrapImage,
        years: 3,
        level: 4,
        description: '主に管理ツールの実装に使用しています。一通りの使い方は理解しており、細かい調整まで対応が可能です。',
      },
    ],
  },
  {
    name: 'Linux関連',
    image: linuxImage,
    years: 6,
    level: 3,
    description: 'コマンドラインは抵抗なくいじることができます。ミドルウェアなどの導入も可能です。',
    children: [
      {
        name: 'Nginx',
        image: nginxImage,
        years: 4,
        level: 4,
        description: '導入や設定の見直しまで対応していました。SSLとの連携も経験しています。',
      },
      {
        name: 'Apache',
        image: apacheImage,
        years: 3,
        level: 3,
        description: '前述のNginxと同様な対応経験があります。',
      },
      {
        name: 'Let\'s Encrypt',
        image: letsencryptImage,
        years: 2,
        level: 2,
        description: '無料のSSLを導入したいという要件から使用した経験があります。',
      },
    ],
  },
  {
    name: 'サーバー構築',
    image: serverImage,
    years: 6,
    level: 3,
    description: '本番やテスト環境、Dockerによるローカル環境の構築が可能です。',
    children: [
      {
        name: 'AWS',
        image: awsImage,
        years: 3,
        level: 3,
        description: 'EC2やRDSを用いてWebサーバーの構築をすることができます。Lightsailの使用経験もあります。',
      },
      {
        name: 'Docker',
        image: dockerImage,
        years: 6,
        level: 4,
        description: 'docker-composeも含め、技術選定に合わせたイメージや構成でコンテナを構築することが可能です。',
      },
      {
        name: 'Git',
        image: gitImage,
        years: 9,
        level: 5,
        description: 'ブランチ運用は事前に必ず確認し、デグレ等のトラブルは発生させません。GitHubやBitbucketでのプルリクエスト・ソースレビューなどの概念理解はできております。レビュアー経験もあります。',
      },
      {
        name: 'VPS',
        image: vpsImage,
        years: 3,
        level: 3,
        description: 'さくらやConoha、VALUE SERVERの利用経験があります。開発環境や個人的なブログの構築をしていました。',
      },
    ],
  },
  {
    name: 'チャットツール',
    image: chatImage,
    years: 9,
    level: 4,
    description: 'チャットコミュニケーションは誤解が生まれやすいため、主語述語の省略は控え、簡潔にわかりやすくを目指しています。',
    children: [
      {
        name: 'Chatwork',
        image: chatworkImage,
        years: 6,
        level: 4,
        description: '初めて使ったチャットツールです。シンプルで使いやすいと思っています。',
      },
      {
        name: 'Slack',
        image: slackImage,
        years: 6,
        level: 4,
        description: '最も気に入っているチャットツールです。スレッドで話題ごとに内容をまとめられるのが好きです。',
      },
      {
        name: 'Teams',
        image: teamsImage,
        years: '半',
        level: 2,
        description: 'チャットツールというよりコラボレーションツールですが、主にチャットで利用していました。',
      },
    ],
  },
  {
    name: 'プロジェクト管理ツール',
    image: toolImage,
    years: 9,
    level: 3,
    description: 'これまで数々の現場で作業してきたので、色々なプロジェクト管理ツールを触ってきています。',
    children: [
      {
        name: 'Redmine',
        image: redmineImage,
        years: 3,
        level: 4,
        description: 'チケット管理やwikiの記述などの経験があります。',
      },
      {
        name: 'Confluence',
        image: confluenceImage,
        years: 3,
        level: 3,
        description: 'Jiraとセットで使っていたりしました。チームリーダーを担当していた時期に作業管理で使用していました。',
      },
      {
        name: 'Notion',
        image: notionImage,
        years: 6,
        level: 3,
        description: '最近の案件で触る機会が多いです。シンプルで使いやすく気に入っています。',
      },
      {
        name: 'Backlog',
        image: backlogImage,
        years: 3,
        level: 2,
        description: '採用している案件は多くない印象ですが、使用経験があります。',
      },
    ],
  },
];

const Skillset = () => {
  return (
    <SectionLayout id="skillset" title="SKILLSET">
      <Grid templateColumns={['1fr', '1fr', '1fr', 'repeat(2, 1fr)']} columnGap={16} rowGap={4}>
        {skillsetItems.map((item) => (
          <GridItem>
            <Accordion allowMultiple>
              <AccordionItem borderTop="1" borderBottom="0">
                <Flex gap={16} pt={8}>
                  <Center flex="1">
                    <Image src={item.image} />
                  </Center>
                  <Box flex="3">
                    <Text fontSize={['lg', 'lg', 'lg', 'xl']} fontWeight="bold">{item.name}</Text>
                    <Grid templateColumns="repeat(2, 1fr)" py={4}>
                      <GridItem>
                        <Text fontWeight="bold">熟練度</Text>
                      </GridItem>
                      <GridItem>
                        <Text>{getLevelStars(item.level)}</Text>
                      </GridItem>
                      <GridItem>
                        <Text fontWeight="bold">経験年数</Text>
                      </GridItem>
                      <GridItem>
                        <Text>{item.years}年</Text>
                      </GridItem>
                    </Grid>
                    <Text>{item.description}</Text>
                  </Box>
                </Flex>
                <AccordionButton justifyContent="center">
                  <Text>もっと見る</Text>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                  {item.children.map((child) => (
                    <Flex gap={16} py={8}>
                      <Center flex="1">
                        <Image src={child.image} />
                      </Center>
                      <Box flex="3">
                        <Text fontSize="xl" fontWeight="bold">{child.name}</Text>
                        <Grid templateColumns="repeat(2, 1fr)" py={4}>
                          <GridItem>
                            <Text fontWeight="bold">熟練度</Text>
                          </GridItem>
                          <GridItem>
                            <Text>{getLevelStars(child.level)}</Text>
                          </GridItem>
                          <GridItem>
                            <Text fontWeight="bold">経験年数</Text>
                          </GridItem>
                          <GridItem>
                            <Text>{child.years}年</Text>
                          </GridItem>
                        </Grid>
                        <Text>{child.description}</Text>
                      </Box>
                    </Flex>
                  ))}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </GridItem>
        ))}
      </Grid>
    </SectionLayout>
  );
};

export default Skillset;
