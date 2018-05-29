import * as React from 'react';
import { Col, Row } from 'antd';

export class Chapter extends React.Component {
  render() {
    return (
      <Row className="chapter-container">
        <Col>{this.props.children}</Col>
      </Row>
    );
  }
}
