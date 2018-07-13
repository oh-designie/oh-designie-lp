import * as React from 'react';
import { Col, Row } from 'antd';
import { pure } from 'recompose';

import { Chapter, Heading } from './../';
import { LocaleType } from '../../locales';
import {
  colorMap,
  fontFamilyMap,
  fontSizeMap,
  lengthMap,
  spaceMap,
  Styles,
} from '../../styles';

import competitionIcon from '../../assets/images/icons/competition.svg';
import practiceIcon from '../../assets/images/icons/practice.svg';
import colorIcon from '../../assets/images/categories/color.svg';
import fontIcon from '../../assets/images/categories/font.svg';
import layoutIcon from '../../assets/images/categories/layout.svg';
import brightnessIcon from '../../assets/images/games/brightness.png';
import colorCode1Icon from '../../assets/images/games/color_code1.png';
import majorityCaseIcon from '../../assets/images/games/majority_case.png';
import majorityShapeIcon from '../../assets/images/games/majority_shape.png';
import typefaceIcon from '../../assets/images/games/typeface.png';
import rectangleIcon from '../../assets/images/games/rectangle.png';

interface FeaturesProps {
  readonly textMap: LocaleType;
}

export const Features = pure(({ textMap }: FeaturesProps) => {
  const { categories, modes, games } = textMap;
  const { title, h1, section1, section2, section3 } = textMap.contents.features;
  return (
    <Chapter styles={styles}>
      <Heading size="lg" text={title} />
      <Heading size="xl" text={h1} />
      <section style={styles.section}>
        <Heading text={section1.title} />
        <p>{section1.desc}</p>
        <Row
          style={styles.imgContainer}
          gutter={8}
          type="flex"
          justify="center"
          align="middle"
        >
          <Col xs={24} sm={8}>
            <figure style={styles.iconImg}>
              <img
                style={styles.icon}
                height={lengthMap.modeIcon}
                alt={modes.practice}
                src={practiceIcon}
              />
              <figcaption style={styles.caption}>{modes.practice}</figcaption>
            </figure>
          </Col>
          <Col xs={24} sm={8}>
            <figure style={styles.iconImg}>
              <img
                style={styles.icon}
                height={lengthMap.modeIcon}
                alt={modes.competition}
                src={competitionIcon}
              />
              <figcaption style={styles.caption}>
                {modes.competition}
              </figcaption>
            </figure>
          </Col>
        </Row>
      </section>
      <section style={styles.section}>
        <Heading text={section2.title} />
        <p>{section2.desc}</p>
        <Row
          style={styles.imgContainer}
          gutter={8}
          type="flex"
          justify="center"
          align="middle"
        >
          <Col xs={24} sm={8}>
            <figure style={styles.iconImg}>
              <img
                height={lengthMap.categoryIcon}
                alt={categories.color}
                src={colorIcon}
              />
              <figcaption style={styles.caption}>{categories.color}</figcaption>
            </figure>
          </Col>
          <Col xs={24} sm={8}>
            <figure style={styles.iconImg}>
              <img
                height={lengthMap.categoryIcon}
                alt={categories.font}
                src={fontIcon}
              />
              <figcaption style={styles.caption}>{categories.font}</figcaption>
            </figure>
          </Col>
          <Col xs={24} sm={8}>
            <figure style={styles.iconImg}>
              <img
                height={lengthMap.categoryIcon}
                alt={categories.layout}
                src={layoutIcon}
              />
              <figcaption style={styles.caption}>
                {categories.layout}
              </figcaption>
            </figure>
          </Col>
        </Row>
      </section>
      <section style={styles.section}>
        <Heading text={section3.title} />
        <p>{section3.desc}</p>
        <Row
          style={styles.imgContainer}
          gutter={8}
          type="flex"
          justify="center"
          align="middle"
        >
          <Col xs={24} sm={8} lg={4}>
            <figure>
              <img
                style={styles.gameImg}
                height={lengthMap.categoryIcon}
                alt={games.brightness}
                src={brightnessIcon}
              />
              <figcaption style={styles.caption}>{games.brightness}</figcaption>
            </figure>
          </Col>
          <Col xs={24} sm={8} lg={4}>
            <figure>
              <img
                style={styles.gameImg}
                height={lengthMap.categoryIcon}
                alt={games.colorCode1}
                src={colorCode1Icon}
              />
              <figcaption style={styles.caption}>{games.colorCode1}</figcaption>
            </figure>
          </Col>
          <Col xs={24} sm={8} lg={4}>
            <figure>
              <img
                style={styles.gameImg}
                height={lengthMap.categoryIcon}
                alt={games.majorityCase}
                src={majorityCaseIcon}
              />
              <figcaption style={styles.caption}>
                {games.majorityCase}
              </figcaption>
            </figure>
          </Col>
          <Col xs={24} sm={8} lg={4}>
            <figure>
              <img
                style={styles.gameImg}
                height={lengthMap.categoryIcon}
                alt={games.majorityShape}
                src={majorityShapeIcon}
              />
              <figcaption style={styles.caption}>
                {games.majorityShape}
              </figcaption>
            </figure>
          </Col>
          <Col xs={24} sm={8} lg={4}>
            <figure>
              <img
                style={styles.gameImg}
                height={lengthMap.categoryIcon}
                alt={games.rectangle}
                src={rectangleIcon}
              />
              <figcaption style={styles.caption}>{games.rectangle}</figcaption>
            </figure>
          </Col>
          <Col xs={24} sm={8} lg={4}>
            <figure>
              <img
                style={styles.gameImg}
                height={lengthMap.categoryIcon}
                alt={games.typeface}
                src={typefaceIcon}
              />
              <figcaption style={styles.caption}>{games.typeface}</figcaption>
            </figure>
          </Col>
        </Row>
      </section>
    </Chapter>
  );
});

type StyleKey =
  | 'caption'
  | 'gameImg'
  | 'icon'
  | 'imgContainer'
  | 'iconImg'
  | 'listText'
  | 'row'
  | 'section';
const styles: Styles<StyleKey> = {
  caption: {
    color: colorMap.primaryDark,
    fontFamily: 'Nunito, Open Sans, sans-serif',
    fontSize: fontSizeMap.sm,
    fontWeight: 700,
    textAlign: 'center',
  },
  icon: {
    marginTop: spaceMap.lg,
    marginBottom: spaceMap.md,
  },
  imgContainer: {
    marginTop: spaceMap.xl,
  },
  iconImg: {
    alignItems: 'center',
    border: `${lengthMap.border} solid ${colorMap.ash}`,
    borderRadius: lengthMap.borderRadius,
    height: lengthMap.categoryImg,
    marginTop: spaceMap.xs,
    marginRight: 'auto',
    marginBottom: spaceMap.sm,
    marginLeft: 'auto',
    paddingTop: spaceMap.md,
    width: lengthMap.categoryImg,
  },
  gameImg: {
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
  listText: {
    color: colorMap.primaryDark,
    fontFamily: fontFamilyMap.title,
    fontSize: fontSizeMap.xs,
    fontWeight: 300,
    margin: 0,
    textAlign: 'center',
    width: '100%',
  },
  row: {
    backgroundColor: colorMap.white,
  },
  section: {
    marginTop: spaceMap.xxl,
  },
};
