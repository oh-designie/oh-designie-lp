import * as React from 'react';
import { Button, Col, Layout, Row } from 'antd';

import { LocaleType } from '../locales';
import { colorMap, fontSizeMap, spaceMap, Styles } from '../styles';

interface HeaderProps {
  readonly textMap: LocaleType;
}

export const Header = ({ textMap }: HeaderProps) => (
  <Layout.Header style={styles.header}>
    <Row type="flex" justify="space-between" align="middle">
      <Col>
        <a style={styles.logo}>{textMap.appTitle}</a>
      </Col>
      <Col>
        <Button ghost>{textMap.download}</Button>
      </Col>
    </Row>
  </Layout.Header>
);

type StyleKey = 'header' | 'logo';
const styles: Styles<StyleKey> = {
  header: {
    backgroundColor: colorMap.primary,
    boxShadow: `0 ${spaceMap.xs} ${spaceMap.sm} ${colorMap.shadow}`,
  },
  logo: {
    color: colorMap.white,
    fontFamily: 'Nunito, Open Sans, sans-serif',
    fontSize: fontSizeMap.md,
    fontWeight: 700,
  },
};
