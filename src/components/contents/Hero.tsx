import * as React from 'react';
import { Col, Row } from 'antd';

import smartphone from '../../assets/images/hero_smartphone.svg';

export class Hero extends React.Component {
  render() {
    return (
      <Row className="pat-container" type="flex" justify="center" align="top">
        <Col>
          <img className="img-phone" src={smartphone} />
        </Col>
      </Row>
    );
  }
}
