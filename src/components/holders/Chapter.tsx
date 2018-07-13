import * as React from 'react';
import { Col, Row } from 'antd';
import { pure } from 'recompose';

import {
  colorMap,
  fontSizeMap,
  lengthMap,
  spaceMap,
  Styles,
} from '../../styles';

interface Props extends Partial<React.ReactPortal> {
  readonly style?: React.CSSProperties;
}

export const Chapter = pure(({ style = {}, children }: Props) => {
  return (
    <Row style={{ ...styles.row, ...style }}>
      <Col>
        <section style={styles.content}>{children}</section>
      </Col>
    </Row>
  );
});

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
    maxWidth: lengthMap.chapterMax,
    margin: 'auto',
  },
};
