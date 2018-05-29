import * as React from 'react';
import { Col, Layout, Row } from 'antd';

import { IconButton } from '.';
import { LocaleType } from '../locales';
import iosBadge from '../assets/images/en_ios.png';
import androidBadge from '../assets/images/en_android.png';

interface FooterProps {
  readonly textMap: LocaleType;
}

export const Footer = ({ textMap }: FooterProps) => (
  <Layout.Footer className="footer">
    <Row gutter={24} type="flex" justify="center" align="middle">
      <Col>
        <img alt={textMap.app_store} src={iosBadge} />
      </Col>
      <Col>
        <img alt={textMap.google_play} src={androidBadge} />
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
        <a className="link-text-reverse">{textMap.terms_of_use}</a>
        <span> | </span>
        <a className="link-text-reverse">{textMap.privacy_policy}</a>
      </Col>
    </Row>
  </Layout.Footer>
);
