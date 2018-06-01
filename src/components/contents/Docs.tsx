import * as React from 'react';
import { Icon } from 'antd';

import { Button, Chapter } from '../';
import { LocaleType } from '../../locales';
import { fontSizeMap, spaceMap, Styles } from '../../styles';

interface DocsProps {
  readonly textMap: LocaleType;
}

export const Docs = ({ textMap }: DocsProps) => (
  <Chapter>
    <Button>
      {textMap.docs}
      <Icon style={styles.btnIcon} type="right" />
    </Button>
  </Chapter>
);

type StyleKey = 'btnIcon';
const styles: Styles<StyleKey> = {
  btnIcon: {
    fontSize: fontSizeMap.sm,
    marginLeft: spaceMap.sm,
  },
};
