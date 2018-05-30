import * as React from 'react';
import { Col, Row } from 'antd';

import { colorMap, Styles } from '../../styles';

interface ChapterProps {
  readonly styles?: Partial<Styles<StyleKey>>;
}

export const Chapter = ({
  styles: s = {},
  children,
}: ChapterProps & Partial<React.ReactPortal>) => {
  return (
    <Row style={{ ...styles.row, ...s.row }} className="chapter-container">
      <Col>
        <section>{children}</section>
      </Col>
    </Row>
  );
};

type StyleKey = 'row';
const styles: Styles<StyleKey> = {
  row: {
    backgroundColor: colorMap.offWhite,
    paddingTop: '4rem',
    paddingRight: '2rem',
    paddingBottom: '4rem',
    paddingLeft: '2rem',
  },
};
