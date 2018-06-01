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

interface ButtonProps {
  readonly onClick?: () => void;
  readonly style?: React.CSSProperties;
  readonly type?: ButtonStyle;
}

interface ButtonState {
  readonly hover: boolean;
}

export class Button extends React.Component<ButtonProps, ButtonState> {
  state = { hover: false };

  render() {
    const { children, onClick, style, type = 'default' } = this.props;
    const typeStyle: React.CSSProperties =
      type === 'default' ? styles.base : styles.ghost;
    const hoverStyle: React.CSSProperties = this.state.hover
      ? styles.over
      : styles.out;
    return (
      <button
        style={{ ...styles.base, ...typeStyle, ...hoverStyle, ...style }}
        onClick={onClick}
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
      >
        {children}
      </button>
    );
  }

  private onMouseOver = () => this.setState({ hover: true });

  private onMouseOut = () => this.setState({ hover: false });
}

type StyleKey = 'base' | 'default' | 'ghost' | 'over' | 'out';
const styles: Styles<StyleKey> = {
  base: {
    borderRadius: lengthMap.borderRadius,
    boxShadow: `0 ${spaceMap.xs} ${spaceMap.sm} ${colorMap.shadow}`,
    color: colorMap.white,
    fontFamily: fontFamilyMap.title,
    fontSize: fontSizeMap.sm,
    fontWeight: 400,
    paddingTop: spaceMap.sm,
    paddingRight: spaceMap.lg,
    paddingBottom: spaceMap.sm,
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
    backgroundColor: colorMap.primaryLighter,
    boxShadow: `0 ${spaceMap.sm} ${spaceMap.md} ${colorMap.shadow}`,
  },
  out: {
    backgroundColor: colorMap.primary,
  },
};
