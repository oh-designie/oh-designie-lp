import * as React from 'react';
import { Button, Col, Layout, Row } from 'antd';

import { LocaleType } from '../locales';
import { colorMap, spaceMap, Styles } from '../styles';

interface HeaderProps {
  readonly textMap: LocaleType;
}

export const Header = ({ textMap }: HeaderProps) => (
  <Layout.Header style={styles.header}>
    <Row type="flex" justify="space-between" align="middle">
      <Col>
        <a className="logo">{textMap.appTitle}</a>
      </Col>
      <Col>
        <Button ghost>{textMap.download}</Button>
      </Col>
    </Row>
  </Layout.Header>
);

type StyleKey = 'header';
const styles: Styles<StyleKey> = {
  header: {
    backgroundColor: colorMap.primary,
    boxShadow: `0 ${spaceMap.xs} ${spaceMap.sm} ${colorMap.shadow}`,
  },
};
