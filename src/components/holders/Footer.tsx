import * as React from 'react';
import { Col, Layout, Row } from 'antd';
import { pure } from 'recompose';

import { Badge, IconButton, ExLink } from '../../components';
import { BadgeName } from '../../enum';
import { LocaleType } from '../../locales';
import {
  colorMap,
  fontSizeMap,
  fontFamilyMap,
  lengthMap,
  spaceMap,
  Styles,
} from '../../styles';
import { URLS } from '../../constants';

interface Props {
  readonly textMap: LocaleType;
}

export const Footer = pure(({ textMap }: Props) => {
  // TODO: check media queries
  const footerStyle = window.matchMedia('(max-width: 576)').matches
    ? styles.footerXs
    : styles.footer;
  return (
    <div style={footerStyle}>
      <Layout.Footer style={styles.container}>
        <Row style={styles.content} justify="center" align="middle">
          <Col>
            <Badge style={styles.badge} type={BadgeName.AppStore} />
            <Badge style={styles.badge} type={BadgeName.GooglePlay} />
          </Col>
        </Row>
        <Row style={styles.content} justify="center" align="middle">
          <Col>
            <IconButton href={URLS.github} type="github" />
            <IconButton href={URLS.twitter} type="twitter" />
          </Col>
        </Row>
        <Row style={styles.links} justify="space-between" align="middle">
          <Col xs={24} sm={12}>
            <ExLink href={URLS.GAME_GUIDE.terms} text={textMap.terms} />
            <span> | </span>
            <ExLink href={URLS.GAME_GUIDE.privacy} text={textMap.privacy} />
          </Col>
          <Col xs={24} sm={12}>
            <small>{textMap.copyright}</small>
          </Col>
        </Row>
      </Layout.Footer>
    </div>
  );
});

type StyleKey =
  | 'badge'
  | 'container'
  | 'content'
  | 'footerXs'
  | 'footer'
  | 'links';
const styles: Styles<StyleKey> = {
  badge: {
    marginRight: spaceMap.xs,
    marginLeft: spaceMap.xs,
  },
  container: {
    backgroundColor: colorMap.primary,
    color: colorMap.translucent,
    fontFamily: fontFamilyMap.body,
    fontSize: fontSizeMap.sm,
  },
  content: {
    marginTop: spaceMap.xxl,
  },
  footerXs: {
    clipPath: 'none',
  },
  footer: {
    clipPath: `circle(${lengthMap.footerCircle} at 50% 760%)`,
  },
  links: {
    marginTop: spaceMap.xs,
    marginRight: 'auto',
    marginLeft: 'auto',
    maxWidth: lengthMap.chapterMax,
  },
};
