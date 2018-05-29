import * as React from 'react';
import { Button, Col, Layout, Row } from 'antd';

export const Header = () => (
  <Layout.Header className="header">
    <Row type="flex" justify="space-between" align="middle">
      <Col>
        <a className="logo">Oh Designie</a>
      </Col>
      <Col>
        <Button ghost>Download</Button>
      </Col>
    </Row>
  </Layout.Header>
);
