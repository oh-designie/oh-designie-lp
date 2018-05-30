export type Styles<S extends string = string> = Record<S, React.CSSProperties>;

type ColorKey = 'white' | 'offWhite' | 'primary' | 'shadow';
export const colorMap: Record<ColorKey, string> = {
  white: '#ffffff',
  offWhite: '#fafafa',
  primary: '#9a86f0',
  shadow: 'rgba(89, 79, 139, 0.3)',
};

type HeightKey = 'hero';
export const heightMap: Record<HeightKey, string> = {
  hero: '640px',
};

export const baseSpace: number = 16;
type SpaceKey = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export const spaceMap: Record<SpaceKey, string> = {
  xs: `${baseSpace * 0.25}px`,
  sm: `${baseSpace * 0.5}px`,
  md: `${baseSpace}px`,
  lg: `${baseSpace * 1.5}px`,
  xl: `${baseSpace * 2}px`,
  xxl: `${baseSpace * 3}px`,
};
