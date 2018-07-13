import * as React from 'react';
import { pure } from 'recompose';

import { lengthMap } from '../../styles';

interface Props {
  readonly title: string;
  readonly imageUrl: string;
}

export const CategoryIcon = pure(({ title, imageUrl }: Props) => (
  <img height={lengthMap.categoryIcon} alt={title} src={imageUrl} />
));
