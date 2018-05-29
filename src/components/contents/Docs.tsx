import * as React from 'react';
import { Button, Icon } from 'antd';

import { Chapter } from '../';

export const Docs = () => (
  <Chapter>
    <Button type="primary" size="large">
      documentation
      <Icon type="right" />
    </Button>
  </Chapter>
);
