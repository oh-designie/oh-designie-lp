import * as React from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import { pure } from 'recompose';

import { Button, Chapter } from '../../components';
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
      <ArrowRightOutlined style={styles.btnIcon} />
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
