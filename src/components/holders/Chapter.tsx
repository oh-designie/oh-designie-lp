import * as React from 'react';
import { Col, Row } from 'antd';

import {
  colorMap,
  fontSizeMap,
  lengthMap,
  spaceMap,
  Styles,
} from '../../styles';

interface ChapterProps {
  readonly styles?: Partial<Styles<StyleKey>>;
}

export const Chapter = ({
  styles: s = {},
  children,
}: ChapterProps & Partial<React.ReactPortal>) => {
  return (
    <Row style={{ ...styles.row, ...s.row }}>
      <Col>
        <section style={styles.content}>{children}</section>
      </Col>
    </Row>
  );
};

type StyleKey = 'row' | 'content';
const styles: Styles<StyleKey> = {
  row: {
    backgroundColor: colorMap.offWhite,
    paddingTop: fontSizeMap.xxl,
    paddingRight: spaceMap.lg,
    paddingBottom: fontSizeMap.xxl,
    paddingLeft: spaceMap.lg,
  },
  content: {
    maxWidth: lengthMap.chapter,
    margin: 'auto',
  },
};
