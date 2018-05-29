import * as React from 'react';
import { Icon } from 'antd';

interface IconButtonProps {
  readonly href?: string;
  readonly type: string;
}

export const IconButton = ({ href = '', type }: IconButtonProps) => (
  <a href={href}>
    <Icon className="icon-btn" type={type} />
  </a>
);
