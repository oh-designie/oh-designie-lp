import * as React from 'react';
import { GithubOutlined, TwitterOutlined } from '@ant-design/icons';

import { colorMap, fontSizeMap, spaceMap, Styles } from '../../styles';

interface Props {
  readonly href?: string;
  readonly type: string;
}

interface State {
  readonly hover: boolean;
}

export class IconButton extends React.Component<Props, State> {
  state = { hover: false };

  getIcon = () => {
    const { type } = this.props;
    switch (type) {
      case 'github':
        return <GithubOutlined style={styles.icon} />;
      case 'twitter':
      default:
        return <TwitterOutlined style={styles.icon} />;
    }
  };

  render() {
    const { href = '' } = this.props;
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
        {this.getIcon()}
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
