import * as React from 'react';
import { Icon } from 'antd';
import { pure } from 'recompose';

import { Button, Chapter } from '../';
import { LocaleType } from '../../locales';
import { fontSizeMap, spaceMap, Styles } from '../../styles';

const gameGuideUrl = 'https://www.oh-designie.com';

interface DocsProps {
  readonly textMap: LocaleType;
}

export const Docs = pure(({ textMap }: DocsProps) => (
  <Chapter>
    <Button href={gameGuideUrl}>
      {textMap.docs}
      <Icon style={styles.btnIcon} type="right" />
    </Button>
  </Chapter>
));

type StyleKey = 'btnIcon';
const styles: Styles<StyleKey> = {
  btnIcon: {
    fontSize: fontSizeMap.sm,
    marginLeft: spaceMap.sm,
  },
};
