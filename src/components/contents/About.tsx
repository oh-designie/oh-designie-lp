import * as React from 'react';
import { Col, Row } from 'antd';

import { Chapter, Heading } from './../';
import { LocaleType } from '../../locales';
import { lengthMap, spaceMap, Styles } from '../../styles';

import colorIcon from '../../assets/images/categories/color.svg';
import fontIcon from '../../assets/images/categories/font.svg';
import layoutIcon from '../../assets/images/categories/layout.svg';

interface AboutProps {
  readonly textMap: LocaleType;
}

export const About = ({ textMap }: AboutProps) => {
  const { title, h1, desc } = textMap.contents.about;
  const { color, font, layout } = textMap.categories;
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
            src={colorIcon}
          />
          <img
            style={styles.img}
            height={lengthMap.categoryIcon}
            alt={font}
            src={fontIcon}
          />
          <img
            style={styles.img}
            height={lengthMap.categoryIcon}
            alt={layout}
            src={layoutIcon}
          />
        </Col>
      </Row>
    </Chapter>
  );
};

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
