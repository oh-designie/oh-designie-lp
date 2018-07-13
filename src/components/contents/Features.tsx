import * as React from 'react';
import { Col } from 'antd';
import { pure } from 'recompose';

import {
  Chapter,
  Heading,
  ImageContainer,
  FeatureItem,
  GameItem,
  CategoryIcon,
  FeatureIcon,
} from '..';
import { LocaleType } from '../../locales';
import { colorMap, spaceMap, Styles } from '../../styles';
import { IMAGES } from '../../constants';

interface Props {
  readonly textMap: LocaleType;
}

export const Features = pure(({ textMap }: Props) => {
  const { categories, modes, games } = textMap;
  const { title, h1, section1, section2, section3 } = textMap.contents.features;
  return (
    <Chapter style={styles.container}>
      <Heading size="lg" text={title} />
      <Heading size="xl" text={h1} />
      <section style={styles.section}>
        <Heading text={section1.title} />
        <p>{section1.desc}</p>
        <ImageContainer>
          <Col xs={24} sm={8}>
            <FeatureItem title={modes.practice}>
              <FeatureIcon
                title={modes.practice}
                imageUrl={IMAGES.MODES.practice}
              />
            </FeatureItem>
          </Col>
          <Col xs={24} sm={8}>
            <FeatureItem title={modes.competition}>
              <FeatureIcon
                title={modes.competition}
                imageUrl={IMAGES.MODES.competition}
              />
            </FeatureItem>
          </Col>
        </ImageContainer>
      </section>
      <section style={styles.section}>
        <Heading text={section2.title} />
        <p>{section2.desc}</p>
        <ImageContainer>
          <Col xs={24} sm={8}>
            <FeatureItem title={categories.color}>
              <CategoryIcon
                title={categories.color}
                imageUrl={IMAGES.CATEGORIES.color}
              />
            </FeatureItem>
          </Col>
          <Col xs={24} sm={8}>
            <FeatureItem title={categories.typography}>
              <CategoryIcon
                title={categories.typography}
                imageUrl={IMAGES.CATEGORIES.typography}
              />
            </FeatureItem>
          </Col>
          <Col xs={24} sm={8}>
            <FeatureItem title={categories.layout}>
              <CategoryIcon
                title={categories.layout}
                imageUrl={IMAGES.CATEGORIES.layout}
              />
            </FeatureItem>
          </Col>
        </ImageContainer>
      </section>
      <section style={styles.section}>
        <Heading text={section3.title} />
        <p>{section3.desc}</p>
        <ImageContainer>
          <Col xs={24} sm={8} lg={4}>
            <GameItem
              title={games.brightness}
              imageUrl={IMAGES.GAMES.brightness}
            />
          </Col>
          <Col xs={24} sm={8} lg={4}>
            <GameItem
              title={games.colorCode1}
              imageUrl={IMAGES.GAMES.colorCode1}
            />
          </Col>
          <Col xs={24} sm={8} lg={4}>
            <GameItem
              title={games.majorityCase}
              imageUrl={IMAGES.GAMES.majorityCase}
            />
          </Col>
          <Col xs={24} sm={8} lg={4}>
            <GameItem
              title={games.majorityShape}
              imageUrl={IMAGES.GAMES.majorityShape}
            />
          </Col>
          <Col xs={24} sm={8} lg={4}>
            <GameItem
              title={games.rectangle}
              imageUrl={IMAGES.GAMES.rectangle}
            />
          </Col>
          <Col xs={24} sm={8} lg={4}>
            <GameItem title={games.typeface} imageUrl={IMAGES.GAMES.typeface} />
          </Col>
        </ImageContainer>
      </section>
    </Chapter>
  );
});

type StyleKey = 'container' | 'imgContainer' | 'section';
const styles: Styles<StyleKey> = {
  container: {
    backgroundColor: colorMap.white,
  },
  imgContainer: {
    marginTop: spaceMap.xl,
  },
  section: {
    marginTop: spaceMap.xxl,
  },
};
