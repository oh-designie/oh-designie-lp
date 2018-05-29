import * as React from 'react';

interface HeadingProps {
  readonly size?: string;
  readonly text: string;
}

export const Heading = ({ size = 'lg', text }: HeadingProps) => {
  const dom: string = size === 'xxl' ? 'h1' : size === 'xl' ? 'h2' : 'h3';
  return React.createElement(dom, { className: `${size}-text` }, text);
};
