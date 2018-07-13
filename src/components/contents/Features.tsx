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
import { IMAGES } from '../../constants';

interface Props {
  readonly textMap: LocaleType;
}

export const Features = pure(({ textMap }: Props) => {
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
                src={IMAGES.MODES.competition}
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
                src={IMAGES.MODES.practice}
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
                src={IMAGES.CATEGORIES.color}
              />
              <figcaption style={styles.caption}>{categories.color}</figcaption>
            </figure>
          </Col>
          <Col xs={24} sm={8}>
            <figure style={styles.iconImg}>
              <img
                height={lengthMap.categoryIcon}
                alt={categories.typography}
                src={IMAGES.CATEGORIES.typography}
              />
              <figcaption style={styles.caption}>
                {categories.typography}
              </figcaption>
            </figure>
          </Col>
          <Col xs={24} sm={8}>
            <figure style={styles.iconImg}>
              <img
                height={lengthMap.categoryIcon}
                alt={categories.layout}
                src={IMAGES.CATEGORIES.layout}
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
                src={IMAGES.GAMES.brightness}
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
                src={IMAGES.GAMES.colorCode1}
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
                src={IMAGES.GAMES.majorityCase}
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
                src={IMAGES.GAMES.majorityShape}
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
                src={IMAGES.GAMES.rectangle}
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
                src={IMAGES.GAMES.typeface}
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
