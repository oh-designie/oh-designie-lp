import * as React from 'react';
import { Col, Layout, Row } from 'antd';

import { IconButton, Link } from '.';
import { LocaleType } from '../locales';
import {
  colorMap,
  fontSizeMap,
  fontFamilyMap,
  spaceMap,
  Styles,
} from '../styles';

import appStoreBadge from '../assets/images/en_app_store.svg';
import googlePlayBadge from '../assets/images/en_google_play.svg';

interface FooterProps {
  readonly textMap: LocaleType;
}

export const Footer = ({ textMap }: FooterProps) => (
  <Layout.Footer style={styles.footer}>
    <Row
      style={styles.content}
      gutter={16}
      type="flex"
      justify="center"
      align="middle"
    >
      <Col>
        <img height="40" alt={textMap.appStore} src={appStoreBadge} />
      </Col>
      <Col>
        <img height="40" alt={textMap.googlePlay} src={googlePlayBadge} />
      </Col>
    </Row>
    <Row style={styles.content} type="flex" justify="center" align="middle">
      <Col>
        <IconButton href="" type="github" />
        <IconButton href="" type="instagram" />
        <IconButton href="" type="twitter" />
      </Col>
    </Row>
    <Row type="flex" justify="space-between" align="middle">
      <Col>
        <small>{textMap.copyright}</small>
      </Col>
      <Col>
        <Link href="/" text={textMap.termsOfUse} />
        <span> | </span>
        <Link href="/" text={textMap.privacyPolicy} />
      </Col>
    </Row>
  </Layout.Footer>
);

type StyleKey = 'footer' | 'content';
const styles: Styles<StyleKey> = {
  footer: {
    fontFamily: fontFamilyMap.body,
    backgroundColor: colorMap.primary,
    color: colorMap.translucent,
    fontSize: fontSizeMap.sm,
  },
  content: {
    marginTop: spaceMap.xxl,
  },
};
