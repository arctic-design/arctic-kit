import { styled } from '@pigment-css/react';
import { SnowColor, SnowColorValues, SnowSize, SnowSizeValues } from '../types';
import { forwardRef, ForwardedRef } from 'react';
import { SnowThemeArgs } from '../../core';
import { SnowHeights } from '../constants';

const AvatarContainer = styled.div<{
  color?: SnowColor;
  size?: SnowSize;
  bgColor?: SnowColor;
}>(({ theme: { vars: theme } }: SnowThemeArgs) => ({
  fontFamily: theme.font.family.base,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  width: SnowHeights['medium'],
  height: SnowHeights['medium'],
  fontSize: '1.25rem',
  lineHeight: 1,
  borderRadius: '50%',
  overflow: 'hidden',
  userSelect: 'none',

  img: {
    width: '100%',
  },

  '&.fill': {
    backgroundColor: theme.colors.grey[500],
    color: theme.colors.neutral[0],
  },

  '&.clickable': {
    cursor: 'pointer',
  },

  "&[data-img='true']": {
    backgroundColor: theme.colors.grey[100],
  },

  variants: [
    ...SnowColorValues.map((color) => ({
      props: { color },
      style: {
        '&.fill': {
          backgroundColor: theme.colors[color].main,
          color: theme.colors.white,
        },
      },
    })),
    ...SnowColorValues.map((bgColor) => ({
      props: { bgColor },
      style: {
        "&[data-img='true']": {
          backgroundColor: theme.colors[bgColor as SnowColor][100],
        },
      },
    })),
    ...SnowSizeValues.map((size) => ({
      props: { size },
      style: {
        height: `${SnowHeights[size]}px`,
        width: `${SnowHeights[size]}px`,
      },
    })),
  ],
}));

export type AvatarProps = {
  src?: string;
  alt?: string;
  onClick?: () => void;
  children?: string;
  color?: SnowColor;
  id?: string;
  size?: SnowSize;
  bgColor?: SnowColor;
};

const Avatar = forwardRef(
  (props: AvatarProps, ref: ForwardedRef<HTMLDivElement>) => {
    const {
      src,
      alt = 'Avatar',
      onClick,
      children: childrenProp,
      color,
      id = 'avatar',
      size = 'medium',
      bgColor,
    } = props;
    let children = null;
    const hasImage = !!src;

    if (hasImage) {
      children = <img src={src} alt={alt} />;
    } else if (
      childrenProp !== null &&
      childrenProp !== '' &&
      typeof childrenProp !== 'boolean'
    ) {
      children = childrenProp;
    } else {
      children = null;
    }

    return (
      <AvatarContainer
        color={color}
        className={`${!hasImage ? 'fill' : ''} ${onClick ? 'clickable' : ''}`}
        onClick={onClick}
        ref={ref}
        id={id}
        data-testid={id}
        data-img={hasImage ? true : undefined}
        size={size}
        bgColor={bgColor}
      >
        {children}
      </AvatarContainer>
    );
  }
);

Avatar.displayName = 'Avatar';

export { Avatar };
