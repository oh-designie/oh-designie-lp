import * as React from 'react';

import { ButtonStyle } from '../../styles';
import {
  colorMap,
  fontFamilyMap,
  fontSizeMap,
  lengthMap,
  spaceMap,
  Styles,
} from '../../styles';

interface Props {
  readonly href?: string;
  readonly style?: React.CSSProperties;
  readonly type?: ButtonStyle;
}

interface State {
  readonly hover: boolean;
}

export class Button extends React.Component<Props, State> {
  state = { hover: false };

  render() {
    const { children, href = '', style = {}, type = 'default' } = this.props;
    const typeStyle: React.CSSProperties =
      type === 'default' ? styles.base : styles.ghost;
    const hoverStyle: React.CSSProperties = this.state.hover
      ? styles.over
      : styles.out;
    return (
      <a
        style={{ ...styles.base, ...typeStyle, ...hoverStyle, ...style }}
        href={href}
        target="_blank"
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
      >
        {children}
      </a>
    );
  }

  private onMouseOver = () => this.setState({ hover: true });

  private onMouseOut = () => this.setState({ hover: false });
}

type StyleKey = 'base' | 'default' | 'ghost' | 'over' | 'out';
const styles: Styles<StyleKey> = {
  base: {
    appearance: 'none',
    borderRadius: lengthMap.borderRadius,
    boxShadow: `0 ${spaceMap.xs} ${spaceMap.sm} ${colorMap.shadow}`,
    color: colorMap.white,
    fontFamily: fontFamilyMap.title,
    fontSize: fontSizeMap.sm,
    fontWeight: 400,
    outline: 'none',
    paddingTop: spaceMap.md,
    paddingRight: spaceMap.lg,
    paddingBottom: spaceMap.md,
    paddingLeft: spaceMap.lg,
    textAlign: 'center',
    transition: '0.3s all',
  },
  default: {
    border: `${lengthMap.border} solid ${colorMap.primaryDarker}`,
  },
  ghost: {
    border: `${lengthMap.border} solid ${colorMap.white}`,
  },
  over: {
    backgroundColor: colorMap.accentLighter,
    boxShadow: `0 ${spaceMap.sm} ${spaceMap.md} ${colorMap.shadow}`,
  },
  out: {
    backgroundColor: colorMap.accent,
  },
};
