import { styled } from '@pigment-css/react';
import { SnowColor, SnowColorValues } from '../types';
import { forwardRef, ForwardedRef } from 'react';
import { SnowThemeArgs } from '../../core';

const AvatarContainer = styled.div<{ color?: SnowColor }>(
  ({ theme }: SnowThemeArgs) => ({
    fontFamily: theme.font.family.base,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    width: '40px',
    height: '40px',
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
    variants: SnowColorValues.map((color) => ({
      props: { color },
      style: {
        '&.fill': {
          backgroundColor: theme.colors[color].main,
        },
      },
    })),
  })
);

export type AvatarProps = {
  src?: string;
  alt?: string;
  onClick?: () => void;
  children?: string;
  color?: SnowColor;
  id?: string;
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
      >
        {children}
      </AvatarContainer>
    );
  }
);

Avatar.displayName = 'Avatar';

export { Avatar };
