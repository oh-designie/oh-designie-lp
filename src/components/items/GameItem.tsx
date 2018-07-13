import * as React from 'react';
import { pure } from 'recompose';

import { Caption } from '../../components';
import { colorMap, lengthMap, spaceMap, Styles } from '../../styles';

interface Props {
  readonly title: string;
  readonly imageUrl: string;
}

export const GameItem = pure(({ title, imageUrl }: Props) => (
  <figure>
    <img
      style={styles.image}
      height={lengthMap.categoryIcon}
      alt={title}
      src={imageUrl}
    />
    <Caption>{title}</Caption>
  </figure>
));

type StyleKey = 'image';
const styles: Styles<StyleKey> = {
  image: {
    alignItems: 'center',
    border: `${lengthMap.border} solid ${colorMap.ash}`,
    borderRadius: lengthMap.borderRadius,
    height: lengthMap.categoryImg,
    marginTop: spaceMap.xs,
    marginRight: 'auto',
    marginBottom: spaceMap.sm,
    marginLeft: 'auto',
    width: lengthMap.categoryImg,
  },
};
