'use client';
import { useCallback } from 'react';
import { BaseSelect } from './BaseSelect';
import { DefaultSelectProps, SelectKeyValue } from './types';

export type SelectProps = DefaultSelectProps & {
  onChange?: (value?: SelectKeyValue) => void;
  value?: SelectKeyValue;
};
const Select: React.FC<SelectProps> = (props: SelectProps) => {
  const { value, onChange, id = 'select', ...otherProps } = props;

  const onChangeHandler = useCallback(
    (updatedValue: SelectKeyValue[]) => {
      onChange &&
        onChange(
          updatedValue
            ? updatedValue.length > 0
              ? updatedValue[0]
              : undefined
            : undefined
        );
    },
    [onChange]
  );
  return (
    <BaseSelect
      id={id}
      data-testid={id}
      value={value ? [value] : []}
      onChange={onChangeHandler}
      {...otherProps}
    />
  );
};

export { Select };
