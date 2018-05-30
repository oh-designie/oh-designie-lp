export type Styles<S extends string = string> = Record<S, React.CSSProperties>;

type ColorKey = 'white' | 'offWhite';
export const colorSet: Record<ColorKey, string> = {
  white: '#ffffff',
  offWhite: '#fafafa',
};
