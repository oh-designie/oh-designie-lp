import * as React from 'react';
import { Col, Row } from 'antd';

export class Chapter extends React.Component {
  render() {
    return (
      <Row className="chapter-container">
        <Col>
          <section>{this.props.children}</section>
        </Col>
      </Row>
    );
  }
}
