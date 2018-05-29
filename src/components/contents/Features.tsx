import * as React from 'react';

import { Chapter, Heading } from './../';

export const Features = () => (
  <Chapter>
    <Heading size="xl" text="Features" />
    <Heading size="xxl" text="Practice alone or compete with others" />
    <section>
      <Heading text="1. Game mode" />
      <p>
        There are 2 game mode. 'Practice' mode to play each game only you, and
        'Competition' mode to play with other players.
      </p>
    </section>
    <section>
      <Heading text="2. Categories" />
      <p>
        Every game belongs to one of the category below. Color game icons are
        pink, fonts are bule, and layouts are orange so it is easy to know.
      </p>
    </section>
    <section>
      <Heading text="3. Games" />
      <p>
        There are 6 games for the first release but you will be able to unlock
        new games by playing 'Competition'!
      </p>
    </section>
  </Chapter>
);
