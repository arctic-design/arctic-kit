import { DefaultSnowProps, SnowSize, SnowSizeValues } from '../types';

export type LoaderSize = SnowSize | 'extraSmall';
export const LoaderSizeValues: LoaderSize[] = [...SnowSizeValues, 'extraSmall'];

export type LoaderComponentProps = Omit<DefaultSnowProps, 'size'> & {
  size?: LoaderSize;
  'data-testid'?: string;
};

export type LoaderComponent = React.ForwardRefExoticComponent<
  React.HTMLAttributes<HTMLSpanElement> &
    LoaderComponentProps &
    React.RefAttributes<HTMLSpanElement>
>;

export type LoadersRecord = Partial<
  Record<'spinner' | 'dots', LoaderComponent>
>;
