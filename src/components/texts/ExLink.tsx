import * as React from 'react';

import { colorMap, fontSizeMap, Styles } from '../../styles';

interface Props {
  readonly href?: string;
  readonly style?: React.CSSProperties;
  readonly text: string;
}

interface State {
  readonly hover: boolean;
}

export class ExLink extends React.Component<Props, State> {
  state = { hover: false };

  render() {
    const { href = '', style = {}, text } = this.props;
    const hoverStyle = this.state.hover ? styles.over : styles.out;
    return (
      <a
        style={{ ...styles.base, ...style, ...hoverStyle }}
        href={href}
        target="_blank"
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
