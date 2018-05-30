import * as React from 'react';
import { Layout } from 'antd';

import { About, Footer, Docs, Header, Hero, Features } from '../components';
import { LocaleType } from '../locales';

interface HomeProps {
  readonly textMap: LocaleType;
}

export const Home = ({ textMap }: HomeProps) => (
  <Layout>
    <Header textMap={textMap} />
    <Layout.Content>
      <Hero />
      <About textMap={textMap} />
      <Features textMap={textMap} />
      <Docs textMap={textMap} />
    </Layout.Content>
    <Footer textMap={textMap} />
  </Layout>
);
