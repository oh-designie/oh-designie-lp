import * as React from 'react';
import { Layout } from 'antd';

import { About, Footer, Docs, Header, Hero, Features } from '../components';
import { EN_US } from '../locales';

export const Home = () => (
  <Layout>
    <Header textMap={EN_US} />
    <Layout.Content>
      <Hero />
      <About textMap={EN_US} />
      <Features textMap={EN_US} />
      <Docs textMap={EN_US} />
    </Layout.Content>
    <Footer textMap={EN_US} />
  </Layout>
);
