import * as React from 'react';

import { BadgeName } from '../../enum';
import { fontSizeMap, Styles } from '../../styles';
import { IMAGES, URLS } from '../../constants';

interface Props {
  readonly type: BadgeName;
  readonly size?: number | string;
  readonly style?: React.CSSProperties;
}

interface State {
  readonly hover: boolean;
}

interface BadgeInfo {
  readonly href: string;
  readonly src: string;
}

export class Badge extends React.Component<Props, State> {
  state = { hover: false };

  render() {
    const { size = fontSizeMap.lg, style = {}, type } = this.props;
    const { href, src } = this.getInfo();
    const { hover } = this.state;
    const hoverStyle: React.CSSProperties = hover ? styles.over : styles.out;
    return (
      <a
        href={href}
        target="_blank"
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
      >
        <img
          style={{ ...styles.base, ...style, ...hoverStyle }}
          height={size}
          alt={type}
          src={src}
        />
      </a>
    );
  }

  private getInfo(): BadgeInfo {
    switch (this.props.type) {
      case 'appStore':
        return {
          href: URLS.STORES.appStore,
          src: IMAGES.BADGES.appStore,
        };
      case 'googlePlay':
        return {
          href: URLS.STORES.googlePlay,
          src: IMAGES.BADGES.googlePlay,
        };
      default:
        return {
          href: '',
          src: '',
        };
    }
  }

  private onMouseOver = () => this.setState({ hover: true });

  private onMouseOut = () => this.setState({ hover: false });
}

type StyleKey = 'base' | 'out' | 'over';
const styles: Styles<StyleKey> = {
  base: {
    transition: '0.3s all',
  },
  out: {
    opacity: 1,
  },
  over: {
    opacity: 0.7,
  },
};
