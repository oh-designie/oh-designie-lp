import * as React from 'react';
import { Button, Col, Layout, Row } from 'antd';

import { LocaleType } from '../locales';

interface HeaderProps {
  readonly textMap: LocaleType;
}

export const Header = ({ textMap }: HeaderProps) => (
  <Layout.Header className="header">
    <Row type="flex" justify="space-between" align="middle">
      <Col>
        <a className="logo">{textMap.app_title}</a>
      </Col>
      <Col>
        <Button ghost>{textMap.download}</Button>
      </Col>
    </Row>
  </Layout.Header>
);
