import * as React from 'react';
import { Icon } from 'antd';

import { colorMap, fontSizeMap, spaceMap, Styles } from '../../styles';

interface IconButtonProps {
  readonly href?: string;
  readonly type: string;
}

interface IconButtonState {
  readonly hover: string;
}

export class IconButton extends React.Component<
  IconButtonProps,
  IconButtonState
> {
  state = {
    hover: '',
  };

  render() {
    const { href = '', type } = this.props;
    const textStyle: React.CSSProperties =
      this.state.hover === type ? styles.over : styles.out;
    return (
      <a
        style={textStyle}
        href={href}
        onMouseOver={() => this.handleHover(type)}
        onMouseOut={() => this.handleHover('')}
      >
        <Icon style={styles.icon} type={type} />
      </a>
    );
  }

  private handleHover(hover: string): void {
    this.setState({ hover });
  }
}

type StyleKey = 'icon' | 'out' | 'over';
const styles: Styles<StyleKey> = {
  icon: {
    fontSize: fontSizeMap.md,
    margin: spaceMap.sm,
  },
  out: {
    color: colorMap.white,
  },
  over: {
    color: colorMap.primaryDark,
  },
};
