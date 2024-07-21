'use client';
import { Checkbox } from '@arctic-kit/snow';
import { useState } from 'react';

export function CheckboxView() {
  const [value, setValue] = useState(false);

  const onChange = () => {
    setValue(!value);
  };

  return (
    <Checkbox
      onChange={onChange}
      checked={value}
      name="some-id"
      label="Checkbox Label here..."
    />
  );
}
