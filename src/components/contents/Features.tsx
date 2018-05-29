import * as React from 'react';

import { Chapter, Heading } from './../';
import { LocaleType } from '../../locales';

interface FeaturesProps {
  readonly textMap: LocaleType;
}

export const Features = ({ textMap }: FeaturesProps) => {
  const { title, h1, section1, section2 } = textMap.contents.features;
  return (
    <Chapter>
      <Heading size="xl" text={title} />
      <Heading size="xxl" text={h1} />
      <section>
        <Heading text={section1.title} />
        <p>{section1.desc}</p>
      </section>
      <section>
        <Heading text={section2.title} />
        <p>{section2.desc}</p>
      </section>
    </Chapter>
  );
};
