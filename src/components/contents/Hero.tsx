import * as React from 'react';
import { Col, Row } from 'antd';

import { colorMap, lengthMap, spaceMap, Styles } from '../../styles';

import pattern from '../../assets/images/bg_pattern.png';
import smartphone from '../../assets/images/hero_smartphone.svg';

export const Hero = () => (
  <Row style={styles.container} type="flex" justify="center" align="top">
    <Col md={16} lg={12}>
      <img style={styles.img} src={smartphone} />
    </Col>
  </Row>
);

type StyleKey = 'container' | 'img';
const styles: Styles<StyleKey> = {
  container: {
    backgroundColor: colorMap.white,
    backgroundImage: `url(${pattern})`,
    backgroundRepeat: 'repeat',
    height: lengthMap.hero,
  },
  img: {
    marginTop: spaceMap.sm,
    maxWidth: '100%',
  },
};
