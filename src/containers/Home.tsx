import * as React from 'react';
import { Layout } from 'antd';

import { About, Footer, Docs, Header, Hero, Features } from '../components';

export class Home extends React.Component {
  render() {
    return (
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
  }
}
