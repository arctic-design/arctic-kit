'use client';
import {
  MouseEventHandler,
  PropsWithChildren,
  forwardRef,
  useContext,
} from 'react';
import { styled } from '@pigment-css/react';

import {
  DefaultSnowProps,
  SnowColorValues,
  SnowSize,
  SnowSizeValues,
} from '../types';
import { SnowHeights, SnowSpacingMap } from '../constants';
import { ButtonGroupContext } from '../ButtonGroup/ButtonGroupContext';
import { ButtonVariants } from './types';
import { Loader } from '../Loader';
import { SnowTheme, SnowThemeArgs } from '../../core';

function Spacing(size: SnowSize, theme: SnowTheme) {
  return theme.spacings.main * SnowSpacingMap[size];
}
const getColorVariantStyles = (theme: SnowTheme) =>
  SnowColorValues.map((color) => ({
    props: { color: color },
    style: {
      backgroundColor: theme.colors[color].main,
      '&:hover': {
        backgroundColor: theme.colors[color][600],
      },
      '&:active': {
        backgroundColor: theme.colors[color][700],
      },

      '&:disabled': {
        backgroundColor: theme.colors[color][300],
        color: theme.colors[color][200],
      },
      '&.outlined, &.text': {
        border: `1px solid ${theme.colors[color][400]}`,

        '&:hover': {
          backgroundColor: theme.colors[color][50],
          borderColor: theme.colors[color][700],
        },

        '&:active': {
          backgroundColor: theme.colors[color][400],
        },

        '&:disabled': {
          backgroundColor: theme.colors[color][100],
          borderColor: theme.colors[color][400],
          color: theme.colors.grey[500],
          svg: {
            fill: theme.colors.grey[600],
          },
        },

        '&[data-variant="group"]:not(:disabled):active': {
          borderColor: theme.colors[color][700],
        },

        '&[data-variant="group"]:not(:disabled):focus': {
          borderColor: theme.colors[color][600],
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
      padding: `${Spacing(sizeItem, theme)}px ${
        Spacing(sizeItem, theme) * 2
      }px`,
    },
  }));

export interface ButtonProps extends DefaultSnowProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant?: ButtonVariants;
  type?: 'button' | 'submit' | 'reset';
  tabIndex?: number;
  role?: React.AriaRole;
  className?: string;
  leadingSection?: React.ReactNode;
  trailingSection?: React.ReactNode;
  loading?: boolean;
}

const StyledButton = styled.button<ButtonProps>(({ theme }: SnowThemeArgs) => ({
  fontFamily: theme.font.family.base,
  fontSize: theme.font.size[100],
  fontStyle: 'normal',
  lineHeight: 'normal',
  gap: '8px',
  border: 'none',
  borderRadius: '4px',
  display: 'flex',
  alignItems: 'center',
  color: theme.colors.neutral[0],
  backgroundColor: theme.colors.primary.main,
  boxShadow: theme.shadow.main,
  position: 'relative',
  boxSizing: 'border-box',
  cursor: 'pointer',
  outline: 'none',
  svg: {
    fill: theme.colors.neutral[0],
  },
  '&:hover': {
    backgroundColor: theme.colors.primary[600],
  },

  '&:active': {
    backgroundColor: theme.colors.primary[700],
  },
  '&.outlined, &.text': {
    color: theme.colors.grey[900],
    backgroundColor: theme.colors.neutral[0],
    border: `1px solid ${theme.colors.grey[400]}`,
    boxShadow: 'none',
    svg: {
      fill: theme.colors.grey[900],
    },
    '&:hover': {
      backgroundColor: theme.colors.grey[50],
      borderColor: theme.colors.grey[700],
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
    '&[data-variant="group"]': {
      '&:not(:disabled)': {
        '&:active': {
          borderColor: theme.colors.grey[700],
        },
        '&:focus': {
          borderColor: theme.colors.grey[600],
        },
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
  variants: [
    {
      props: { disabled: true },
      style: { cursor: 'not-allowed' },
    },
    ...getColorVariantStyles(theme),
    ...getSizeVariantStyles(theme),
  ],
}));

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
      leadingSection,
      trailingSection,
      role = 'button',
      id = 'button',
      loading = false,
      ...props
    },
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
        role={role}
        {...props}
      >
        {loading && <Loader size="extraSmall" disabled={disabled} />}
        {leadingSection}
        {children}
        {trailingSection}
      </StyledButton>
    );
  }
);

export { Button };
