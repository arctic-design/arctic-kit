import {
  ChevronUpDownIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from '@arctic-kit/icons';
import { Autocomplete, AutocompleteProps } from '../Autocomplete';
import { useCallback, useMemo } from 'react';

export type ComboboxProps = Omit<
  AutocompleteProps,
  'prefix' | 'suffix' | 'suffixProps' | 'prefixProps'
>;
export function Combobox({ value, onChange, ...props }: ComboboxProps) {
  const onChangeHandler = useCallback(
    (val: string) => {
      if (onChange) {
        onChange(val);
      }
    },
    [onChange]
  );

  const prefixIcon = useMemo(() => <MagnifyingGlassIcon />, []);
  const suffixIcon = useMemo(
    () => (value ? <XMarkIcon /> : <ChevronUpDownIcon />),
    [value]
  );

  return (
    <Autocomplete
      {...props}
      value={value}
      onChange={onChangeHandler}
      prefix={prefixIcon}
      suffix={suffixIcon}
      suffixProps={{
        onClick: () => onChangeHandler(''),
        style: {
          cursor: value ? 'pointer' : 'default',
          pointerEvents: value ? 'auto' : 'none', // Disable pointer events if no value
        },
      }}
    />
  );
}
