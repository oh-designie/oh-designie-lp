import * as React from 'react';
import { Button, Icon } from 'antd';

import { Chapter } from '../';

export class Docs extends React.Component {
  render() {
    return (
      <Chapter>
        <Button type="primary" size="large">
          documentation
          <Icon type="right" />
        </Button>
      </Chapter>
    );
  }
}
