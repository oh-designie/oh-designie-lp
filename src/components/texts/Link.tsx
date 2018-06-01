import * as React from 'react';

import { colorMap, fontSizeMap, Styles } from '../../styles';

interface LinkProps {
  readonly href?: string;
  readonly text: string;
}

interface LinkState {
  readonly hover: boolean;
}

export class Link extends React.Component<LinkProps, LinkState> {
  state = { hover: false };

  render() {
    const { href = '', text } = this.props;
    const style = this.state.hover ? styles.over : styles.out;
    return (
      <a
        style={{ ...styles.base, ...style }}
        href={href}
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
      >
        {text}
      </a>
    );
  }

  private onMouseOver = () => this.setState({ hover: true });

  private onMouseOut = () => this.setState({ hover: false });
}

type StyleKey = 'base' | 'out' | 'over';
const styles: Styles<StyleKey> = {
  base: {
    fontSize: fontSizeMap.xs,
  },
  out: {
    color: colorMap.white,
  },
  over: {
    color: colorMap.primaryDark,
  },
};
