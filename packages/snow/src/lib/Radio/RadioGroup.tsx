'use client';
import { useState, KeyboardEvent } from 'react';
import { styled } from '@pigment-css/react';
import { Typography } from '../Typography';
import { RadioOptions } from './RadioOptions';
import { DefaultSnowProps, OptionType } from '../types';
import { KeyboardEventKey } from '../constants';
import { RequiredIndicator } from '../Indicators';
import { HelperText } from '../HelperText';
import { SnowThemeArgs } from '../../core';

export const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
});

export const Container = styled.ul(
  ({ theme: { vars: theme } }: SnowThemeArgs) => ({
    padding: 12,
    margin: 0,
    listStyle: 'none',
    outline: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    border: `1px solid ${theme.colors.grey[400]}`,
    borderRadius: 4,
  })
);

export type RadioGroupProps = DefaultSnowProps &
  OptionType & {
    id: string;
    options: OptionType[];
    onChange: (value: OptionType['value']) => void;
    required?: boolean;
    errorText?: string;
    readOnly?: boolean;
  };

export function RadioGroup({
  id,
  label,
  options = [],
  value,
  onChange,
  size,
  color,
  required,
  errorText,
  disabled,
  readOnly,
}: RadioGroupProps) {
  const [focusId, setFocusId] = useState<string | undefined>(undefined);

  const selectedOption = options.find((option) => option.value === value);

  const selectedId = selectedOption ? selectedOption.value : '';

  function handleInitialContainerFocus() {
    if (!focusId) {
      setFocusId(options[0].value);
    }
  }

  const handleOptionClick = (option: OptionType) => {
    setFocusId(option.value);
    onChange(option.value);
  };

  function handleContainerKeyPress(event: KeyboardEvent) {
    switch (event.key) {
      case KeyboardEventKey.ArrowLeft:
      case KeyboardEventKey.ArrowUp: {
        event.preventDefault();
        const previousOptionIndex =
          options.findIndex((option) => option.value === focusId) - 1;
        if (previousOptionIndex >= 0) {
          const previousOption = options[previousOptionIndex];
          onChange(previousOption.value);
          setFocusId(previousOption.value);
        }
        break;
      }
      case KeyboardEventKey.ArrowRight:
      case KeyboardEventKey.ArrowDown: {
        event.preventDefault();
        const nextOptionIndex =
          options.findIndex((option) => option.value === focusId) + 1;
        if (nextOptionIndex < options.length) {
          const nextOption = options[nextOptionIndex];
          onChange(nextOption.value);
          setFocusId(nextOption.value);
        }
        break;
      }
      case KeyboardEventKey.Space: {
        event.preventDefault();
        if (!value) {
          onChange(options[0].value);
        }
        break;
      }
      default:
        break;
    }
  }

  const labelId = `radio-label-${id}`;

  const error = !!errorText;

  return (
    <Wrapper id={`${id}-radio-group-wrapper`}>
      <Typography as="label" id={labelId}>
        {label} <RequiredIndicator required={required} />
      </Typography>
      <Container
        tabIndex={0}
        role="radiogroup"
        aria-labelledby={labelId}
        aria-activedescendant={focusId}
        onFocus={handleInitialContainerFocus}
        onKeyDown={handleContainerKeyPress}
        id={`${id}-radio-group-container`}
      >
        <RadioOptions
          options={options}
          selectedId={selectedId}
          onClick={handleOptionClick}
          size={size}
          color={color}
          disabled={disabled}
          error={error}
          readOnly={readOnly}
        />
      </Container>
      {errorText && <HelperText>{errorText}</HelperText>}
    </Wrapper>
  );
}
