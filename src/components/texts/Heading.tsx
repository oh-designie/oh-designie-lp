import * as React from 'react';

interface HeadingProps {
  readonly size?: string;
  readonly text: string;
}

export class Heading extends React.Component<HeadingProps> {
  render() {
    const { size = 'lg', text } = this.props;
    switch (size) {
      case 'xxl':
        return <h1 className={`${size}-text`}>{text}</h1>;
      case 'xl':
        return <h2 className={`${size}-text`}>{text}</h2>;
      default:
        return <h3 className={`${size}-text`}>{text}</h3>;
    }
  }
}
