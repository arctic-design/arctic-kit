'use client';
import { MultiSelect, OptionType, SelectKeyValue } from '@arctic-kit/snow';
import { useState } from 'react';

export function MultiSelectView({
  options,
  placeholder,
}: {
  options: OptionType[];
  placeholder: string;
}) {
  const [value, setValue] = useState<SelectKeyValue[]>([]);

  const onChange = (selectedValue: SelectKeyValue[]) => {
    setValue(selectedValue);
  };

  return (
    <MultiSelect
      options={options}
      placeholder={placeholder}
      value={value}
      onChange={(selectedValue) => onChange(selectedValue)}
      label="Select multiple items"
    />
  );
}
