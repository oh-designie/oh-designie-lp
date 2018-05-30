import * as React from 'react';
import { Col, Row } from 'antd';

import { Chapter, Heading } from './../';
import { LocaleType } from '../../locales';
import { colorSet, Styles } from '../../styles';

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
  const styles: Styles = { row: { backgroundColor: colorSet.white } };
  return (
    <Chapter styles={styles}>
      <Heading size="xl" text={title} />
      <Heading size="xxl" text={h1} />
      <section>
        <Heading text={section1.title} />
        <p>{section1.desc}</p>
        <Row type="flex" justify="space-around" align="middle">
          <Col>
            <figure>
              <img
                className="img-c"
                height="60"
                alt={competition}
                src={competitionIcon}
              />
              <figcaption>{competition}</figcaption>
            </figure>
          </Col>
          <Col>
            <figure>
              <img
                className="img-c"
                height="60"
                alt={practice}
                src={practiceIcon}
              />
              <figcaption>{practice}</figcaption>
            </figure>
          </Col>
        </Row>
      </section>
      <section>
        <Heading text={section2.title} />
        <p>{section2.desc}</p>
        <Row type="flex" justify="space-around" align="middle">
          <Col>
            <figure>
              <img className="img-c" height="100" alt={color} src={colorIcon} />
              <figcaption>{color}</figcaption>
            </figure>
          </Col>
          <Col>
            <figure>
              <img className="img-c" height="100" alt={font} src={fontIcon} />
              <figcaption>{font}</figcaption>
            </figure>
          </Col>
          <Col>
            <figure>
              <img
                className="img-c"
                height="100"
                alt={layout}
                src={layoutIcon}
              />
              <figcaption>{layout}</figcaption>
            </figure>
          </Col>
        </Row>
      </section>
    </Chapter>
  );
};
