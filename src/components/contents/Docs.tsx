import * as React from 'react';
import { Button, Icon } from 'antd';

import { Chapter } from '../';
import { LocaleType } from '../../locales';

interface DocsProps {
  readonly textMap: LocaleType;
}

export const Docs = ({ textMap }: DocsProps) => (
  <Chapter>
    <Button type="primary" size="large">
      {textMap.docs}
      <Icon type="right" />
    </Button>
  </Chapter>
);
