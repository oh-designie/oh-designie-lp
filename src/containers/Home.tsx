import * as React from 'react';
import { Affix, Layout } from 'antd';

import { About, Footer, Docs, Header, Hero, Features } from '../components';
import { LocaleType } from '../locales';
import {
  colorMap,
  fontFamilyMap,
  fontSizeMap,
  lengthMap,
  Styles,
} from '../styles';

interface HomeProps {
  readonly textMap: LocaleType;
}

export const Home = ({ textMap }: HomeProps) => (
  <Layout style={styles.container}>
    <Affix>
      <Header textMap={textMap} />
    </Affix>
    <Layout.Content>
      <Hero />
      <About textMap={textMap} />
      <Features textMap={textMap} />
      <Docs textMap={textMap} />
    </Layout.Content>
    <Footer textMap={textMap} />
  </Layout>
);

type StyleKey = 'container';
const styles: Styles<StyleKey> = {
  container: {
    backgroundColor: colorMap.offWhite,
    color: colorMap.primaryDark,
    fontFamily: fontFamilyMap.body,
    fontSize: fontSizeMap.sm,
    fontWeight: 300,
    lineHeight: fontSizeMap.lg,
    minWidth: lengthMap.minWidth,
    textAlign: 'center',
  },
};
