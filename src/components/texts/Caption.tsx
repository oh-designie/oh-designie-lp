import * as React from 'react';
import { pure } from 'recompose';

import { colorMap, fontSizeMap, Styles } from '../../styles';

export const Caption = pure(({ children }: Partial<React.ReactPortal>) => (
  <figcaption style={styles.text}>{children}</figcaption>
));

type StyleKey = 'text';
const styles: Styles<StyleKey> = {
  text: {
    color: colorMap.primaryDark,
    fontFamily: 'Nunito, Open Sans, sans-serif',
    fontSize: fontSizeMap.sm,
    fontWeight: 700,
    textAlign: 'center',
  },
};
