import * as React from 'react';

import { Chapter, Heading } from './../';
import { LocaleType } from '../../locales';

interface AboutProps {
  readonly textMap: LocaleType;
}

export const About = ({ textMap }: AboutProps) => {
  const { title, h1, desc } = textMap.contents.about;
  return (
    <Chapter>
      <Heading size="xl" text={title} />
      <Heading size="xxl" text={h1} />
      <p>{desc}</p>
    </Chapter>
  );
};
