import * as React from 'react';

import { colorMap, fontSizeMap, Styles } from '../../styles';

interface LinkProps {
  readonly href?: string;
  readonly text: string;
}

interface LinkState {
  readonly hover: string;
}

export class Link extends React.Component<LinkProps, LinkState> {
  state = {
    hover: '',
  };

  render() {
    const { href = '', text } = this.props;
    const style = this.state.hover === text ? styles.over : styles.out;
    return (
      <a
        style={{ ...styles.base, ...style }}
        href={href}
        onMouseOver={() => this.handleHover(text)}
        onMouseOut={() => this.handleHover('')}
      >
        {text}
      </a>
    );
  }

  private handleHover(hover: string): void {
    this.setState({ hover });
  }
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
