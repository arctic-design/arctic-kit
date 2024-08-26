'use client';
import {
  MouseEventHandler,
  PropsWithChildren,
  forwardRef,
  useContext,
} from 'react';
import { styled } from '@pigment-css/react';

import { DefaultSnowProps, SnowColorValues, SnowSizeValues } from '../types';
import { SnowFontSizes, SnowHeights, SnowSpacingMap } from '../constants';
import { ButtonGroupContext } from '../ButtonGroup/ButtonGroupContext';
import { ButtonVariants } from './types';
import { Loader } from '../Loader';
import { SnowTheme, SnowThemeArgs } from '../../core';

const getColorVariantStyles = (theme: SnowTheme) =>
  SnowColorValues.map((color) => ({
    props: { color: color },
    style: {
      backgroundColor: theme.colors[color].main,

      '&:disabled': {
        backgroundColor: theme.colors[color][300],
        color: theme.colors.grey[200],
      },

      '&:not(:disabled)': {
        '&:focus::after': {
          borderColor: theme.colors[color][300],
        },
        '&:hover': {
          backgroundColor: theme.colors[color][600],
        },
        '&:active': {
          backgroundColor: theme.colors[color][700],
        },
      },

      '&.outlined, &.text': {
        border: `1px solid ${theme.colors[color][500]}`,

        '&:not(:disabled)': {
          '&:focus::after': {
            borderColor: theme.colors[color][300],
          },
          '&:hover': {
            backgroundColor: theme.colors[color][50],
          },

          '&:active': {
            backgroundColor: theme.colors[color][400],
          },
        },

        '&:disabled': {
          borderColor: theme.colors[color][400],
          color: theme.colors.grey[500],
          svg: {
            fill: theme.colors.grey[600],
          },
          '&:hover': {
            cursor: 'not-allowed',
          },
        },

        '&.text': {
          '&:not(:disabled):hover, &:not(:disabled):focus': {
            backgroundColor: theme.colors[color][100],
          },

          '&:not(:disabled):active': {
            backgroundColor: theme.colors[color][200],
          },
        },
      },
    },
  }));

const getSizeVariantStyles = (theme: SnowTheme) =>
  SnowSizeValues.map((sizeItem) => ({
    props: { size: sizeItem },
    style: {
      height: `${SnowHeights[sizeItem]}px`,
      padding: `calc(${theme.spacings.main} * ${
        SnowSpacingMap[sizeItem]
      }) calc(${theme.spacings.main} * ${SnowSpacingMap[sizeItem] * 2});`,
      fontSize: SnowFontSizes[sizeItem],
    },
  }));

export interface ButtonProps extends DefaultSnowProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant?: ButtonVariants;
  type?: 'button' | 'submit' | 'reset';
  tabIndex?: number;
  role?: React.AriaRole;
  className?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  loading?: boolean;
  fillSvg?: boolean;
  rounded?: boolean;
}

const StyledButton = styled.button<ButtonProps>(
  ({ theme: { vars: theme } }: SnowThemeArgs) => ({
    fontFamily: theme.font.family.base,
    fontSize: theme.font.size[100],
    fontStyle: 'normal',
    lineHeight: 'normal',
    gap: '8px',
    border: 'none',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colors.neutral[0],
    backgroundColor: theme.colors.primary.main,
    boxShadow: theme.shadow.main,
    position: 'relative',
    boxSizing: 'border-box',
    cursor: 'pointer',
    outline: 'none',
    svg: {
      width: 16,
    },
    '&[data-fill-svg="true"]': {
      svg: {
        fill: 'currentcolor',
      },
    },

    '&:not(:disabled)': {
      '&:focus::after': {
        content: '""',
        position: 'absolute',
        top: '-4px',
        left: '-4px',
        right: '-4px',
        bottom: '-4px',
        borderRadius: '6px',
        zIndex: 1,
        pointerEvents: 'none', // Ensure clicks pass through to the button
        borderColor: theme.colors.primary[300],
        borderStyle: 'solid',
      },
      '&:hover': {
        backgroundColor: theme.colors.primary[600],
      },

      '&:active': {
        backgroundColor: theme.colors.primary[700],
      },
    },

    '&:disabled': {
      backgroundColor: theme.colors.primary[300],
      color: theme.colors.grey[200],
      cursor: 'not-allowed',
    },

    '&.outlined, &.text': {
      color: theme.colors.grey[900],
      backgroundColor: theme.colors.neutral[0],
      border: `1px solid ${theme.colors.grey[400]}`,
      boxShadow: 'none',
      '&:hover': {
        backgroundColor: theme.colors.grey[50],
      },
      '&:active': {
        backgroundColor: theme.colors.grey[400],
      },
      '&:disabled': {
        backgroundColor: theme.colors.grey[100],
        borderColor: theme.colors.grey[400],
        color: theme.colors.grey[500],
        svg: {
          fill: theme.colors.grey[600],
        },
      },
      '&:not(:disabled)': {
        '&:focus::after': {
          borderColor: theme.colors.grey[300],
        },
      },

      '&.text': {
        backgroundColor: 'transparent',
        border: 'none',

        '&:not(:disabled)': {
          '&:hover, &:focus': {
            backgroundColor: theme.colors.grey[100],
          },

          '&:active': {
            backgroundColor: theme.colors.grey[200],
          },
        },
      },
    },
    height: `${SnowHeights['medium']}px`,
    padding: `calc(${theme.spacings.main} * ${SnowSpacingMap['medium']}) calc(${
      theme.spacings.main
    } * ${SnowSpacingMap['medium'] * 2});`,

    variants: [
      ...getColorVariantStyles(theme),
      ...getSizeVariantStyles(theme),
      {
        props: { rounded: true },
        style: {
          borderRadius: 100,
          '&:not(:disabled)': {
            '&:focus::after': {
              borderRadius: 100,
            },
          },
        },
      },
    ],
  })
);

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>(
  (
    {
      size: btnSize = 'medium',
      disabled: btnDisabled = false,
      children,
      onClick,
      color: btnColor,
      type = 'button',
      variant: btnVariant = 'filled',
      className = '',
      prefix,
      suffix,
      role = 'button',
      id = 'button',
      loading = false,
      fillSvg,
      ...props
    }: PropsWithChildren<ButtonProps>,
    ref
  ) => {
    const {
      variant: grpVariant,
      disabled: grpDisabled,
      size: grpSize,
      color: grpColor,
    } = useContext(ButtonGroupContext);
    const variant = grpVariant || btnVariant;
    const disabled = grpDisabled || btnDisabled || loading;
    const size = grpSize || btnSize;
    const color = grpColor || btnColor;

    const isButtonGroupChild = !!grpVariant;

    return (
      <StyledButton
        ref={ref}
        type={type}
        onClick={onClick}
        disabled={disabled}
        size={size}
        color={color}
        variant={variant}
        className={`${variant} ${className}`}
        id={id}
        data-testid={id}
        data-variant={isButtonGroupChild ? 'group' : 'button'}
        data-fill-svg={fillSvg}
        data-disabled={disabled}
        role={role}
        {...props}
      >
        {loading && <Loader size="extraSmall" disabled={disabled} />}
        {prefix}
        {children}
        {suffix}
      </StyledButton>
    );
  }
);

export { Button };
