import * as React from 'react';

interface HeadingProps {
  readonly size?: string;
  readonly text: string;
}

export class Heading extends React.Component<HeadingProps> {
  render() {
    const { size = 'lg', text } = this.props;
    return <p className={`${size}-text`}>{text}</p>;
  }
}
