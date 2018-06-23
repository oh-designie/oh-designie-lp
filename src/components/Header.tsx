import * as React from 'react';
import { Col, Layout, Row } from 'antd';
import { Link } from 'react-router-dom';
import { pure } from 'recompose';

import { Badge } from '../components';
import { LocaleType } from '../locales';
import { colorMap, fontSizeMap, spaceMap, Styles } from '../styles';
import { BadgeName } from '../enum';

interface HeaderProps {
  readonly textMap: LocaleType;
}

export const Header = pure(({ textMap }: HeaderProps) => (
  <Layout.Header style={styles.header}>
    <Row type="flex" justify="space-between" align="middle">
      <Col>
        <Link style={styles.logo} to="/">
          {textMap.appTitle}
        </Link>
      </Col>
      <Col>
        <Badge type={BadgeName.GooglePlay} />
      </Col>
    </Row>
  </Layout.Header>
));

type StyleKey = 'header' | 'logo';
const styles: Styles<StyleKey> = {
  header: {
    backgroundColor: colorMap.primary,
    boxShadow: `0 ${spaceMap.xs} ${spaceMap.sm} ${colorMap.shadow}`,
    height: 'auto',
    paddingTop: spaceMap.xs,
    paddingRight: spaceMap.lg,
    paddingBottom: spaceMap.xs,
    paddingLeft: spaceMap.lg,
  },
  logo: {
    alignItems: 'center',
    color: colorMap.white,
    fontFamily: 'Nunito, Open Sans, sans-serif',
    fontSize: fontSizeMap.md,
    fontWeight: 700,
  },
};
