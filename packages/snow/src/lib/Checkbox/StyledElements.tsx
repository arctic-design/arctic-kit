import { styled } from '@pigment-css/react';
import { SnowThemeArgs } from '../../core';
import { SnowColor, SnowColorValues, SnowSize, ThemeSize } from '../types';

export const RootContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  label: {
    cursor: 'pointer',
  },
});

export const IndicatorContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  WebkitAppearance: 'button',
  backgroundColor: 'transparent',
  backgroundImage: 'none',
  textTransform: 'none',
  fontFamily: 'inherit',
  fontSize: '100%',
  fontWeight: 'inherit',
  lineHeight: 'inherit',
  color: 'inherit',
  margin: '0',
  padding: '0',
  border: 'none',
});

const CheckboxSizes = {
  [ThemeSize.small]: 1,
  [ThemeSize.medium]: 1.25,
  [ThemeSize.large]: 1.5,
};

type CheckboxInputProps = {
  color?: SnowColor;
  inputsize?: SnowSize;
  error?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
};

export const StyledCheckboxInput = styled.input<CheckboxInputProps>(
  ({ theme }: SnowThemeArgs) => ({
    borderWidth: 1,
    borderRadius: 3,
    position: 'relative',
    appearance: 'none',
    cursor: 'pointer',
    transitionProperty: 'all',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '500ms',
    boxShadow: theme.shadow.main,
    '&.unchecked': {
      borderStyle: 'solid',
      borderColor: theme.colors.grey[400],
      '&[data-error="true"]': {
        borderColor: theme.colors.error.main,
      },
      '&:hover': {
        borderStyle: 'solid',
        borderColor: theme.colors.grey[400],
        '&[aria-readonly="true"], &:disabled': {
          borderColor: theme.colors.grey[800],
        },
      },
    },
    variants: [
      ...['small', 'medium', 'large'].map((size) => ({
        props: { inputsize: size as SnowSize },
        style: {
          width: `${CheckboxSizes[size as SnowSize]}rem`,
          height: `${CheckboxSizes[size as SnowSize]}rem`,
        },
      })),
      ...SnowColorValues.map((color) => ({
        props: { color },
        style: {
          '&.checked': {
            backgroundColor: theme.colors[color].main,
            borderColor: theme.colors[color].main,
          },
        },
      })),
    ],
    '&[aria-readonly="true"], &:disabled': {
      cursor: 'default',
      backgroundColor: theme.colors.grey[200],
    },
  })
);

export const SvgContainer = styled.div<{ checked?: boolean }>(
  ({ theme }: SnowThemeArgs) => ({
    position: 'absolute',
    pointerEvents: 'none',
    color: 'rgb(255, 255, 255)',
    transform:
      'translate(-50%, -50%) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1)',
    top: '50%',
    left: '50%',
    svg: {
      width: '0.875rem',
      height: '0.875rem',
      display: 'block',
      verticalAlign: 'middle',
    },

    '&[aria-readonly="true"], &[aria-disabled="true"] svg': {
      color: theme.colors.grey[200],
    },
    variants: [
      {
        props: { checked: true },
        style: {
          '&[aria-readonly="true"], &[aria-disabled="true"] svg': {
            color: theme.colors.grey[200],
          },
        },
      },
    ],
  })
);
