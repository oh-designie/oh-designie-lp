import * as React from 'react';
import { Icon } from 'antd';
import { pure } from 'recompose';

import { Button, Chapter } from '../';
import { LocaleType } from '../../locales';
import { fontSizeMap, spaceMap, Styles } from '../../styles';
import { URLS } from '../../constants';

interface Props {
  readonly textMap: LocaleType;
}

export const Docs = pure(({ textMap }: Props) => (
  <Chapter>
    <Button href={URLS.GAME_GUIDE.index}>
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
