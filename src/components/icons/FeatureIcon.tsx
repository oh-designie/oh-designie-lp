import * as React from 'react';
import { pure } from 'recompose';

import { lengthMap, spaceMap, Styles } from '../../styles';

interface Props {
  readonly title: string;
  readonly imageUrl: string;
}

export const FeatureIcon = pure(({ title, imageUrl }: Props) => (
  <img
    style={styles.icon}
    height={lengthMap.modeIcon}
    alt={title}
    src={imageUrl}
  />
));

type StyleKey = 'icon';
const styles: Styles<StyleKey> = {
  icon: {
    marginTop: spaceMap.lg,
    marginBottom: spaceMap.md,
  },
};
