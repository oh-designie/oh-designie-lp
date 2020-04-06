import * as React from 'react';
import Row, { RowProps } from 'antd/lib/row';
import { pure } from 'recompose';

import { spaceMap, Styles } from '../../styles';

export const ImageContainer = pure(({ children, ...props }: RowProps) => {
  const {
    style = {},
    gutter = 8,
    justify = 'center',
    align = 'middle',
  } = props;
  return (
    <Row
      style={{ ...styles.container, ...style }}
      gutter={gutter}
      justify={justify}
      align={align}
    >
      {children}
    </Row>
  );
});

type StyleKey = 'container';
const styles: Styles<StyleKey> = {
  container: {
    marginTop: spaceMap.xl,
  },
};
