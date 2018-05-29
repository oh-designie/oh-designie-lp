import * as React from 'react';
import { Layout } from 'antd';

import { About, Footer, Docs, Header, Hero, Features } from '../components';

export const Home = () => (
  <Layout>
    <Header />
    <Layout.Content>
      <Hero />
      <About />
      <Features />
      <Docs />
    </Layout.Content>
    <Footer />
  </Layout>
);
