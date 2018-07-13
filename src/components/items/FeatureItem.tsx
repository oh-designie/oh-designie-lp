import * as React from 'react';
import { pure } from 'recompose';

import { colorMap, lengthMap, spaceMap, Styles } from '../../styles';
import { Caption } from '../../components';

interface Props extends Partial<React.ReactPortal> {
  readonly title: string;
}

export const FeatureItem = pure(({ title, children }: Props) => (
  <figure style={styles.container}>
    {children}
    <Caption>{title}</Caption>
  </figure>
));

type StyleKey = 'container' | 'icon';
const styles: Styles<StyleKey> = {
  container: {
    alignItems: 'center',
    border: `${lengthMap.border} solid ${colorMap.ash}`,
    borderRadius: lengthMap.borderRadius,
    height: lengthMap.categoryImg,
    marginTop: spaceMap.xs,
    marginRight: 'auto',
    marginBottom: spaceMap.sm,
    marginLeft: 'auto',
    paddingTop: spaceMap.xs,
  },
  icon: {
    marginTop: spaceMap.lg,
    marginBottom: spaceMap.md,
  },
};
