import * as React from 'react';

import { Styles } from '../styles';

// interface CompProps {
//   readonly classes: number;
// }

// class Comp extends React.Component<CompProps> {
//   render() {
//     return <div>{this.props.num}</div>;
//   }
// }

type WithStyles<T extends string> = Record<T, string>;
function withStyles<T extends string>(styles: Styles<T>) {
  const keys = Object.keys(styles);
  const classes: WithStyles<T> = {} as any;
  keys.forEach(key => (classes[key] = key));
  function func<P, S>(Component: any) {
    return class extends React.Component<P, S> {
      render() {
        return <Component {...this.props} classes={classes} />;
      }
    };
  }
  return func;
}

// withStyles(styles)(Comp);
