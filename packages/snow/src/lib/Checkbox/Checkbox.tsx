import { Typography } from '../Typography';
import { CheckboxIndicator } from './CheckboxIndicator';
import { DefaultSnowProps } from '../types';
import { useId } from 'react';
import { RootContainer } from './StyledElements';

export type CheckboxProps = DefaultSnowProps & {
  name: string;
  label?: string;
  checked?: boolean;
  onChange?: (value: boolean) => void;
  readOnly?: boolean;
  error?: boolean;
};

export function Checkbox({
  id = 'checkbox',
  label,
  checked,
  onChange,
  size = 'medium',
  color = 'primary',
  disabled = false,
  name,
  readOnly,
  error,
}: CheckboxProps) {
  const uniqueId = useId();
  const checkboxId = id || name || uniqueId;
  const hasErrors = !checked && !disabled && !readOnly && error;
  return (
    <RootContainer
      id={`${checkboxId}-container`}
      data-testid={`${checkboxId}-container`}
    >
      <CheckboxIndicator
        name={name}
        id={checkboxId}
        data-testid={checkboxId}
        checked={checked}
        onChange={onChange}
        size={size}
        color={color}
        disabled={disabled}
        readOnly={readOnly}
        error={hasErrors}
      />
      <Typography
        htmlFor={checkboxId}
        as="label"
        aria-disabled={disabled}
        aria-readonly={readOnly ? true : undefined}
        fontWeight={400}
      >
        {label}
      </Typography>
    </RootContainer>
  );
}
