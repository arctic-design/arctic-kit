'use client';
import { styled } from '@pigment-css/react';
import { motion } from 'framer-motion';
import {
  DefaultSnowProps,
  OptionType,
  SnowColor,
  SnowColorValues,
  SnowSize,
} from '../types';
import { RadioSizes } from './types';

import { useRadioVariants } from './useRadioVariants';
import { SnowThemeArgs } from '../../core';
import { Typography } from '../Typography';

export const RadioOption = styled.li(
  ({ theme: { vars: theme } }: SnowThemeArgs) => ({
    fontFamily: theme.font.family.base,
    display: 'flex',
    cursor: 'pointer',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '8px',
    color: theme.colors.neutral[1000],
    '&[aria-disabled="true"]': {
      cursor: 'not-allowed',
      color: theme.colors.grey[500],
    },
    '&[aria-readonly="true"]': {
      cursor: 'default',
      color: theme.colors.grey[900],
    },
  })
);

const StyledRadioOptionCircle = styled.div<{
  size?: SnowSize;
  selected?: boolean;
  color?: SnowColor;
}>(({ theme: { vars: theme } }: SnowThemeArgs) => ({
  width: RadioSizes['medium'],
  height: RadioSizes['medium'],
  minWidth: RadioSizes['medium'],
  minHeight: RadioSizes['medium'],
  borderRadius: '50%',
  boxSizing: 'border-box',
  boxShadow: theme.shadow.main,
  border: `1px solid ${theme.colors.grey[400]}`,
  '&[data-variant="hover"]': {
    borderColor: `${theme.colors.grey[700]} `,
  },
  '&[data-variant="disabled"], &[data-variant="disabledSelected"], &[data-variant="readOnly"], &[data-variant="readOnlySelected"]':
    {
      borderColor: theme.colors.grey[200],
    },
  '&[data-variant="error"]': {
    borderColor: theme.colors.error.main,
  },
  '&[aria-disabled="true"]': {
    backgroundColor: theme.colors.grey[200],
  },
  '&[aria-readonly="true"]': {
    backgroundColor: theme.colors.grey[200],
  },
  variants: [
    ...SnowColorValues.map((color) => ({
      props: { color },
      style: {
        '&[data-variant="selected"]': {
          borderColor: `${theme.colors[color].main}`,
        },
      },
    })),
    ...['small', 'medium', 'large'].map((size) => ({
      props: {
        size: size as SnowSize,
      },
      style: {
        width: RadioSizes[size as SnowSize],
        height: RadioSizes[size as SnowSize],
        minWidth: RadioSizes[size as SnowSize],
        minHeight: RadioSizes[size as SnowSize],
      },
    })),
    {
      props: {
        selected: true,
      },
      style: {
        '&[aria-disabled="true"]': {
          backgroundColor: theme.colors.grey.main,
        },
        '&[aria-readonly="true"]': {
          backgroundColor: theme.colors.grey[900],
        },
      },
    },
  ],
}));

export const RadioOptionCircle = motion(StyledRadioOptionCircle);

const determineVariant = (
  isSelected: boolean,
  disabled: boolean,
  readOnly: boolean,
  hasErrors: boolean
): string => {
  if (isSelected) {
    if (disabled) {
      return readOnly ? 'readOnlySelected' : 'disabledSelected';
    }
    return readOnly ? 'readOnlySelected' : 'selected';
  } else {
    if (disabled) {
      return readOnly ? 'readOnly' : 'disabled';
    }
    return readOnly ? 'readOnly' : hasErrors ? 'error' : 'initial';
  }
};

export type RadioProps = DefaultSnowProps & {
  option: OptionType;
  selectedValue?: string;
  onClick?: (selectedOption: OptionType) => void;
  stopPropagation?: boolean;
  error?: boolean;
  readOnly?: boolean;
};

export function Radio({
  option,
  selectedValue,
  onClick,
  size,
  color = 'primary',
  stopPropagation,
  disabled = false,
  error = false,
  readOnly = false,
}: RadioProps) {
  const isSelected = option.value === selectedValue;
  const { variants } = useRadioVariants(size);
  const onClickHandler = (event: React.MouseEvent) => {
    stopPropagation && event.stopPropagation();
    onClick && onClick(option);
  };

  const hasErrors = !isSelected && !disabled && !readOnly && error;
  const variant = determineVariant(isSelected, disabled, readOnly, hasErrors);

  return (
    <RadioOption
      id={option.value}
      role="checkbox"
      aria-checked={isSelected}
      onClick={(event) => !disabled && !readOnly && onClickHandler(event)}
      aria-disabled={disabled}
      aria-readonly={readOnly ? 'true' : undefined}
    >
      <RadioOptionCircle
        variants={variants}
        initial="initial"
        animate={variant}
        data-variant={variant}
        whileHover={variant}
        size={size}
        color={color}
        id={`${option.value}-circle`}
        data-testid={`${option.value}-circle`}
        aria-disabled={disabled}
        aria-readonly={readOnly ? 'true' : undefined}
        selected={isSelected}
      />
      <Typography
        data-testid={`${option.value}-label`}
        id={`${option.value}-label`}
        className="label"
        size={size}
      >
        {option.label}
      </Typography>
    </RadioOption>
  );
}
