import * as React from 'react';
import { Col, Layout, Row } from 'antd';

import iosBadge from '../assets/images/en_ios.png';
import androidBadge from '../assets/images/en_android.png';

export class Footer extends React.Component {
  render() {
    return (
      <Layout.Footer className="footer">
        <Row gutter={24} type="flex" justify="center" align="middle">
          <Col>
            <img src={iosBadge} />
          </Col>
          <Col>
            <img src={androidBadge} />
          </Col>
        </Row>
        <Row type="flex" justify="space-between" align="middle">
          <Col>©2018 Oh Designie</Col>
          <Col />
        </Row>
      </Layout.Footer>
    );
  }
}
