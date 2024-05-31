import React from "react";
import { Grid, GridItem, Image, Text } from "@chakra-ui/react";
import SectionLayout from "./SectionLayout";
import { calculateAge } from '../../utils/calculateAge';
import profileImage from "../../assets/images/profile.jpg";

const Profile = () => {
  return (
    <SectionLayout id="profile" title="PROFILE">
      <Grid templateColumns={['1fr', '1fr', '1fr', 'repeat(8, 1fr)']} gap={4}>
        <GridItem colSpan={[1, 1, 1, 3]}>
          <Image src={profileImage} borderRadius="full" w="240px" mx="auto" />
        </GridItem>
        <GridItem colSpan={[1, 1, 1, 5]}>
          <Text fontSize={['lg', 'lg', 'lg', 'xl']} fontWeight="bold" textAlign={["center", "center", "center", "left"]} mb={4}>
            林谷 智史(ハヤシタニ サトシ)
          </Text>
          <Text mb={4}>
            北海道札幌市出身。{calculateAge('1992/08/21')}歳。<br />
            Laravelを中心としたバックエンド実装が専門ですが、フロントエンドやサーバー構築、設計や要件定義などの上流工程の経験もあります。<br />
            現在は国内外場所を選ばずフリーランスとして活動しています。<br />
          </Text>
          <Text>
            2015年 大学卒業後に新卒採用でDMMグループのゲーム会社に入社。<br />
            2020年 フィリピンにオフィスを構えるオフショア開発会社に転職。<br />
            2023年 フリーランスとして独立。<br />
          </Text>
        </GridItem>
      </Grid>
    </SectionLayout>
  );
};

export default Profile;
