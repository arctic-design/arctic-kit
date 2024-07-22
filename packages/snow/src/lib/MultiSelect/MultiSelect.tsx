'use client';
import { BaseSelect } from '../Select/BaseSelect';
import { DefaultSelectProps, SelectKeyValue } from '../Select/types';

export type MultiSelectProps = DefaultSelectProps & {
  onChange: (value: SelectKeyValue[]) => void;
  value: SelectKeyValue[];
};

const MultiSelect: React.FC<MultiSelectProps> = ({
  id = 'multi-select',
  ...props
}) => {
  return <BaseSelect multiple id={id} data-testid={id} {...props} />;
};

export { MultiSelect };
