'use client';
import { OptionType, RadioGroup } from '@arctic-kit/snow';
import { useState } from 'react';

export function RadioGroupView({
  options,
  id,
}: {
  options: OptionType[];
  id: string;
}) {
  const [value, setValue] = useState('');

  const onChange = (val: OptionType['value']) => {
    setValue(val);
  };

  return (
    <RadioGroup
      id={id}
      label="Select anyone"
      options={options}
      value={value}
      onChange={onChange}
    />
  );
}
