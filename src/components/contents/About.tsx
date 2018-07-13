import * as React from 'react';
import { Col, Row } from 'antd';
import { pure } from 'recompose';

import { Chapter, Heading } from './../';
import { LocaleType } from '../../locales';
import { lengthMap, spaceMap, Styles } from '../../styles';
import { IMAGES } from '../../constants';

interface AboutProps {
  readonly textMap: LocaleType;
}

export const About = pure(({ textMap }: AboutProps) => {
  const { title, h1, desc } = textMap.contents.about;
  const { color, typography, layout } = textMap.categories;
  return (
    <Chapter>
      <Heading size="lg" text={title} />
      <Heading size="xl" text={h1} />
      <p>{desc}</p>
      <Row
        style={styles.imgContainer}
        type="flex"
        justify="center"
        align="middle"
      >
        <Col>
          <img
            style={styles.img}
            height={lengthMap.categoryIcon}
            alt={color}
            src={IMAGES.CATEGORIES.color}
          />
          <img
            style={styles.img}
            height={lengthMap.categoryIcon}
            alt={typography}
            src={IMAGES.CATEGORIES.typography}
          />
          <img
            style={styles.img}
            height={lengthMap.categoryIcon}
            alt={layout}
            src={IMAGES.CATEGORIES.layout}
          />
        </Col>
      </Row>
    </Chapter>
  );
});

type StyleKey = 'img' | 'imgContainer';
const styles: Styles<StyleKey> = {
  img: {
    marginRight: spaceMap.sm,
    marginLeft: spaceMap.sm,
  },
  imgContainer: {
    marginTop: spaceMap.xl,
  },
};
