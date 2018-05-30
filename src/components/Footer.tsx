import * as React from 'react';
import { Col, Layout, Row } from 'antd';

import { IconButton } from '.';
import { LocaleType } from '../locales';
import appStoreBadge from '../assets/images/en_app_store.svg';
import googlePlayBadge from '../assets/images/en_google_play.svg';

interface FooterProps {
  readonly textMap: LocaleType;
}

export const Footer = ({ textMap }: FooterProps) => (
  <Layout.Footer className="footer">
    <Row gutter={8} type="flex" justify="center" align="middle">
      <Col>
        <img height="40" alt={textMap.appStore} src={appStoreBadge} />
      </Col>
      <Col>
        <img height="40" alt={textMap.googlePlay} src={googlePlayBadge} />
      </Col>
    </Row>
    <Row type="flex" justify="center" align="middle">
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
        <a className="link-text-reverse">{textMap.termsOfUse}</a>
        <span> | </span>
        <a className="link-text-reverse">{textMap.privacyPolicy}</a>
      </Col>
    </Row>
  </Layout.Footer>
);
