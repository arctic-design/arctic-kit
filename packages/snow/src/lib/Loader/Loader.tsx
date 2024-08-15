import { styled, keyframes } from '@pigment-css/react';
import { forwardRef } from 'react';
import { SnowHeights } from '../constants';

import {
  LoaderComponent,
  LoaderComponentProps,
  LoadersRecord,
  LoaderSize,
  LoaderSizeValues,
} from './types';
import { DefaultSnowProps, SnowColor, SnowColorValues } from '../types';
import { SnowThemeArgs } from '../../core';
const loaderSizeExtraSmall = SnowHeights['small'] - 6;
const loaderSizeSmall = SnowHeights['small'] - 4;
const loaderSizeMedium = SnowHeights['medium'] - 4;
const loaderSizeLarge = SnowHeights['large'] - 4;

const LoaderSizeMap = {
  small: `${loaderSizeSmall}px`,
  medium: `${loaderSizeMedium}px`,
  large: `${loaderSizeLarge}px`,
  extraSmall: `${loaderSizeExtraSmall}px`,
};

// Dots loader animation
const loaderDotsAnimation = keyframes`
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }

  50% {
    transform: scale(0.6);
    opacity: 0.5;
  }
`;

// Oval loader animation
const ovalLoaderAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const Dot = styled.span<{
  size?: LoaderSize;
  color?: SnowColor;
  disabled?: boolean;
}>(({ theme }: SnowThemeArgs) => ({
  variants: [
    ...LoaderSizeValues.map((size) => ({
      props: { size: size },
      style: {
        width: `calc(${LoaderSizeMap[size]} / 3 - ${LoaderSizeMap[size]} / 15)`,
        height: `calc(${LoaderSizeMap[size]} / 3 - ${LoaderSizeMap[size]} / 15)`,
      },
    })),
    ...SnowColorValues.map((color) => ({
      props: { color: color },
      style: {
        background: theme.colors[color].main,
      },
    })),
    {
      props: { disabled: true },
      style: {
        background: theme.colors.grey[600],
      },
    },
  ],
  borderRadius: '50%',

  animation: `${loaderDotsAnimation} 0.8s infinite linear`,

  '&:nth-of-type(2)': {
    animationDelay: '0.4s',
  },
}));

const DotsContainer = styled.span<{ size?: LoaderSize }>({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  variants: LoaderSizeValues.map((size) => ({
    props: { size: size },
    style: {
      gap: `calc(${LoaderSizeMap[size]} / 10)`,
      width: LoaderSizeMap[size],
      height: LoaderSizeMap[size],
    },
  })),
});

const SpinnerContainer = styled.span<{
  size?: LoaderSize;
  color?: SnowColor;
  disabled?: boolean;
}>(({ theme }: SnowThemeArgs) => ({
  display: 'inline-block',
  '&::after': {
    content: '""',
    display: 'block',
    borderRadius: '10000px',
    borderStyle: 'solid',
    animation: `${ovalLoaderAnimation} 1.2s linear infinite`,
  },
  variants: [
    ...LoaderSizeValues.map((sizeItem) => ({
      props: { size: sizeItem },
      style: {
        width: LoaderSizeMap[sizeItem],
        height: LoaderSizeMap[sizeItem],
        '&::after': {
          width: `calc(${LoaderSizeMap[sizeItem]} - 4px)`,
          height: `calc(${LoaderSizeMap[sizeItem]} - 4px)`,
          borderWidth: `calc(${LoaderSizeMap[sizeItem]} / 8)`,
        },
      },
    })),
    ...SnowColorValues.map((color) => ({
      props: { color: color },
      style: {
        '&::after': {
          borderColor: `${theme.colors[color].main} ${theme.colors[color].main} ${theme.colors[color].main} transparent`,
        },
      },
    })),
    {
      props: { disabled: true },
      style: {
        borderColor: `${theme.colors.grey[600]} ${theme.colors.grey[600]} ${theme.colors.grey[600]} transparent`,
      },
    },
  ],
}));

const Spinner: LoaderComponent = forwardRef<
  HTMLSpanElement,
  LoaderComponentProps
>(function Spinner(props, ref) {
  return <SpinnerContainer ref={ref} {...props} />;
});

const Dots: LoaderComponent = forwardRef<HTMLSpanElement, LoaderComponentProps>(
  function Dots({ id, 'data-testid': testId, ...props }, ref) {
    return (
      <DotsContainer ref={ref} id={id} data-testid={testId} {...props}>
        <Dot {...props} />
        <Dot {...props} />
        <Dot {...props} />
      </DotsContainer>
    );
  }
);

const defaultLoaders: LoadersRecord = {
  spinner: Spinner,
  dots: Dots,
};

export type LoaderProps = Omit<DefaultSnowProps, 'size'> & {
  type?: 'spinner' | 'dots';
  size?: LoaderSize;
};

export const Loader = forwardRef<HTMLSpanElement, LoaderProps>(
  (
    {
      type = 'spinner',
      size = 'medium',
      color = 'primary',
      id = 'loader',
      ...otherProps
    }: LoaderProps,
    ref
  ) => {
    const Component = defaultLoaders[type];
    if (!Component) return null;
    return (
      <Component
        ref={ref}
        size={size}
        color={color}
        id={`${type}-${id}`}
        data-testid={`${type}-${id}`}
        {...otherProps}
      />
    );
  }
);

Loader.displayName = 'Loader';
