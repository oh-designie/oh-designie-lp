import * as React from 'react';
import { Col } from 'antd';
import { pure } from 'recompose';

import { Chapter, Heading, ImageContainer } from '../../components';
import { LocaleType } from '../../locales';
import { IMAGES } from '../../constants';
import { CategoryIcon } from '../icons';

interface Props {
  readonly textMap: LocaleType;
}

export const About = pure(({ textMap }: Props) => {
  const { title, h1, desc } = textMap.contents.about;
  const { color, typography, layout } = textMap.categories;
  return (
    <Chapter>
      <Heading size="lg" text={title} />
      <Heading size="xl" text={h1} />
      <p>{desc}</p>
      <ImageContainer>
        <Col>
          <CategoryIcon title={color} imageUrl={IMAGES.CATEGORIES.color} />
        </Col>
        <Col>
          <CategoryIcon
            title={typography}
            imageUrl={IMAGES.CATEGORIES.typography}
          />
        </Col>
        <Col>
          <CategoryIcon title={layout} imageUrl={IMAGES.CATEGORIES.layout} />
        </Col>
      </ImageContainer>
    </Chapter>
  );
});
