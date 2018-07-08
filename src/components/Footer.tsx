import * as React from 'react';
import { Col, Layout, Row } from 'antd';
import { pure } from 'recompose';

import { Badge, IconButton, ExLink } from './';
import { BadgeName } from '../enum';
import { LocaleType } from '../locales';
import {
  colorMap,
  fontSizeMap,
  fontFamilyMap,
  lengthMap,
  spaceMap,
  Styles,
} from '../styles';

const githubUrl: string = 'https://github.com/oh-designie';
const twitterUrl: string = 'https://twitter.com/OhDesignie';
// const instagramUrl: string = 'https://instagram.com/ohdesignie';
const termsUrl: string = 'https://www.oh-designie.com/terms';
const privacyUrl: string = 'https://www.oh-designie.com/privacy';

interface FooterProps {
  readonly textMap: LocaleType;
}

export const Footer = pure(({ textMap }: FooterProps) => {
  // TODO: check media queries
  const footerStyle = window.matchMedia('(max-width: 576)').matches
    ? styles.footerXs
    : styles.footer;
  return (
    <div style={footerStyle}>
      <Layout.Footer style={styles.container}>
        <Row style={styles.content} type="flex" justify="center" align="middle">
          <Col>
            <Badge style={styles.badge} type={BadgeName.AppStore} />
          </Col>
          <Col>
            <Badge style={styles.badge} type={BadgeName.GooglePlay} />
          </Col>
        </Row>
        <Row style={styles.content} type="flex" justify="center" align="middle">
          <Col>
            <IconButton href={githubUrl} type="github" />
            {/* <IconButton href={instagramUrl} type="instagram" /> */}
            <IconButton href={twitterUrl} type="twitter" />
          </Col>
        </Row>
        <Row
          style={styles.links}
          type="flex"
          justify="space-between"
          align="middle"
        >
          <Col xs={24} sm={12}>
            <ExLink href={termsUrl} text={textMap.terms} />
            <span> | </span>
            <ExLink href={privacyUrl} text={textMap.privacy} />
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
    marginRight: spaceMap.sm,
    marginLeft: spaceMap.sm,
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
