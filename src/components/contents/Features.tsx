import * as React from 'react';
import { Col, List, Row } from 'antd';

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

interface FeaturesProps {
  readonly textMap: LocaleType;
}

export const Features = ({ textMap }: FeaturesProps) => {
  const { title, h1, section1, section2 } = textMap.contents.features;
  const { color, font, layout } = textMap.categories;
  const { competition, practice } = textMap.mode;
  return (
    <Chapter styles={styles}>
      <Heading size="lg" text={title} />
      <Heading size="xl" text={h1} />
      <section style={styles.section}>
        <Heading text={section1.title} />
        <p>{section1.desc}</p>
        <Row style={styles.imgContainer} gutter={24}>
          <Col span={12}>
            <List
              size="large"
              bordered
              header={
                <figure style={styles.icon}>
                  <img
                    style={styles.icon}
                    height={fontSizeMap.lg}
                    alt={competition}
                    src={competitionIcon}
                  />
                  <figcaption style={styles.caption}>{competition}</figcaption>
                </figure>
              }
              dataSource={['2 Players', '3 Games', 'Consume 1 life']}
              renderItem={(str: string) => (
                <List.Item>
                  <text style={styles.listText}>{str}</text>
                </List.Item>
              )}
            />
          </Col>
          <Col span={12}>
            <List
              size="large"
              bordered
              header={
                <figure style={styles.icon}>
                  <img
                    style={styles.icon}
                    height={fontSizeMap.lg}
                    alt={practice}
                    src={practiceIcon}
                  />
                  <figcaption style={styles.caption}>{practice}</figcaption>
                </figure>
              }
              dataSource={['1 Player', '1 Game', 'No life needed']}
              renderItem={(str: string) => (
                <List.Item>
                  <text style={styles.listText}>{str}</text>
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </section>
      <section style={styles.section}>
        <Heading text={section2.title} />
        <p>{section2.desc}</p>
        <Row
          style={styles.imgContainer}
          type="flex"
          justify="space-around"
          align="middle"
        >
          <Col>
            <figure style={styles.img}>
              <img
                height={lengthMap.categoryIcon}
                alt={color}
                src={colorIcon}
              />
              <figcaption style={styles.caption}>{color}</figcaption>
            </figure>
          </Col>
          <Col>
            <figure style={styles.img}>
              <img height={lengthMap.categoryIcon} alt={font} src={fontIcon} />
              <figcaption style={styles.caption}>{font}</figcaption>
            </figure>
          </Col>
          <Col>
            <figure style={styles.img}>
              <img
                height={lengthMap.categoryIcon}
                alt={layout}
                src={layoutIcon}
              />
              <figcaption style={styles.caption}>{layout}</figcaption>
            </figure>
          </Col>
        </Row>
      </section>
    </Chapter>
  );
};

type StyleKey =
  | 'caption'
  | 'icon'
  | 'imgContainer'
  | 'img'
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
    margin: spaceMap.sm,
  },
  imgContainer: {
    marginTop: spaceMap.xl,
  },
  img: {
    border: `${lengthMap.border} solid ${colorMap.ash}`,
    borderRadius: lengthMap.borderRadius,
    height: lengthMap.categoryImg,
    paddingTop: spaceMap.lg,
    width: lengthMap.categoryImg,
  },
  listText: {
    color: colorMap.primaryDark,
    fontFamily: fontFamilyMap.title,
    fontSize: fontSizeMap.xs,
    fontWeight: 300,
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
