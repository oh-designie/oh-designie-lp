import * as React from 'react';
import { Col, Row } from 'antd';

import { Chapter, Heading } from './../';
import { LocaleType } from '../../locales';
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
      <Heading size="xl" text={title} />
      <Heading size="xxl" text={h1} />
      <p>{desc}</p>
      <Row type="flex" justify="center" align="middle">
        <Col>
          <img className="img-c" height="100" alt={color} src={colorIcon} />
          <img className="img-c" height="100" alt={font} src={fontIcon} />
          <img className="img-c" height="100" alt={layout} src={layoutIcon} />
        </Col>
      </Row>
    </Chapter>
  );
};
