import React from "react";
import { Grid, GridItem, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import SectionLayout from "./SectionLayout";

function MindsetItems({title, children}) {
  return (
    <GridItem colSpan={[1, 1, 1, 1]}>
      <Text fontSize={['lg', 'lg', 'lg', 'xl']} fontWeight="bold" textAlign="center" mb={8}>
        {title}
      </Text>
      {children}
    </GridItem>
  );
}

const Mindset = () => {
  return (
    <SectionLayout id="mindset" title="MINDSET">
      <Grid templateColumns={['1fr', '1fr', '1fr', 'repeat(2, 1fr)']} gap={16}>
        <MindsetItems title="仕事に対して">
          <Text>
            最低限の仕様説明で要件を汲み取ることが得意です。足りない情報はこちらからヒアリングしています。<br />
            上流やリーダー経験もあるため、幅広い視点で物事を考えるよう心がけています。<br />
            業務において以下をモットーにしております。
          </Text>
          <UnorderedList mt={4}>
            <ListItem>開発としてではなくビジネスとしての最善策を意識する。</ListItem>
            <ListItem>食い違いが発生しないよう認識合わせを入念かつ簡潔に行う。</ListItem>
            <ListItem>想定外のことがあったとしても状況報告は正しく行う。</ListItem>
          </UnorderedList>
        </MindsetItems>
        <MindsetItems title="開発に対して">
          <Text>
            保守性が高く、綺麗な作りを意識しながら実装することが好きです。<br />
            とはいえ、正しく動くコードを納期内に実装することを大前提に置いており、これらのバランスを大事にしています。<br />
            技術的負債の改修などにおいても費用と効果が見合った対応であるべきだと考えています。<br />
            人の書いたコードを読むことも好きで、そこからよく勉強させてもらっています。
          </Text>
        </MindsetItems>
        <MindsetItems title="プライベート">
          <Text>
            新卒採用でゲーム会社に入社したのもあり、ゲームが大好きです。<br />
            が、プレイに費やした時間に虚無感を感じるので、最近はあまりやらないようにしています笑<br />
            フリーランスになってからは場所を選ばずフルリモートで活動しており、オーストラリアやニュージーランド、東南アジア周辺を回っていました。<br />
            今後も色々な国に行きたいと考えています。<br />
          </Text>
        </MindsetItems>
        <MindsetItems title="性格">
          <Text>
            基本的に人見知りですが、業務におけるコミュニケーションには支障ありません。職場の飲み会なんかも大好きです。<br />
            冗談を言うのが好きで、林谷のすべらない話も持ち合わせています笑<br />
            お仕事でご一緒できましたらぜひ披露させてください。<br />
            挑戦できる機会があれば何事もトライしてみる性分で、いつ死んでも後悔ないように生きることを志しています。
          </Text>
        </MindsetItems>
      </Grid>
    </SectionLayout>
  );
};

export default Mindset;
