import * as React from 'react';
import { Icon } from 'antd';

import { colorMap, fontSizeMap, spaceMap, Styles } from '../../styles';

interface IconButtonProps {
  readonly href?: string;
  readonly type: string;
}

interface IconButtonState {
  readonly hover: boolean;
}

export class IconButton extends React.Component<
  IconButtonProps,
  IconButtonState
> {
  state = { hover: false };

  render() {
    const { href = '', type } = this.props;
    const { hover } = this.state;
    const textStyle: React.CSSProperties = hover ? styles.over : styles.out;
    return (
      <a
        style={textStyle}
        href={href}
        target="_blank"
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
      >
        <Icon style={styles.icon} type={type} />
      </a>
    );
  }

  private onMouseOver = () => this.setState({ hover: true });

  private onMouseOut = () => this.setState({ hover: false });
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
