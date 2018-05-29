import * as React from 'react';
import { Col, Layout, Row } from 'antd';

import iosBadge from '../assets/images/en_ios.png';
import androidBadge from '../assets/images/en_android.png';
import { IconButton } from '.';

export const Footer = () => (
  <Layout.Footer className="footer">
    <Row gutter={24} type="flex" justify="center" align="middle">
      <Col>
        <img src={iosBadge} />
      </Col>
      <Col>
        <img src={androidBadge} />
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
      <Col>©2018 Oh Designie</Col>
      <Col>
        <a className="link-text-reverse">Terms of use</a>
        <span> | </span>
        <a className="link-text-reverse">Privacy policy</a>
      </Col>
    </Row>
  </Layout.Footer>
);
