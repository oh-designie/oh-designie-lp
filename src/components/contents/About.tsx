import * as React from 'react';

import { Chapter, Heading } from './../';

export class About extends React.Component {
  render() {
    return (
      <Chapter>
        <Heading text="About" />
        <Heading size="xxl" text="Practice alone or compete with others" />
        <p>
          For non-designiers through designiers. Enjoy playing games to acquire
          fundamental design knowledge and skills.
        </p>
      </Chapter>
    );
  }
}
