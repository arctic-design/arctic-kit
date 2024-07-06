export enum ThemeSize {
  small = 'small',
  medium = 'medium',
  large = 'large',
}
export type SnowSize = keyof typeof ThemeSize;
export type SnowFeedbackColor = 'success' | 'error' | 'warning' | 'info';
export type SnowColor = SnowFeedbackColor | 'primary' | 'secondary';

export const SnowSizeValues: SnowSize[] = ['small', 'medium', 'large'];
export const SnowFeedbackColorValues: SnowFeedbackColor[] = [
  'success',
  'error',
  'warning',
  'info',
];

export const SnowColorValues: SnowColor[] = [
  'primary',
  'secondary',
  ...SnowFeedbackColorValues,
];

export type DefaultSnowProps = {
  color?: SnowColor;
  size?: SnowSize;
  disabled?: boolean;
  id?: string;
};

export type OptionType = {
  label: string;
  value: string;
};
