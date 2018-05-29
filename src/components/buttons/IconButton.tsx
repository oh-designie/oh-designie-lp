import * as React from 'react';
import { Icon } from 'antd';

interface IconButtonProps {
  readonly href?: string;
  readonly type: string;
}

export class IconButton extends React.Component<IconButtonProps> {
  render() {
    const { href = '', type } = this.props;
    return (
      <a href={href}>
        <Icon className="icon-btn" type={type} />
      </a>
    );
  }
}
