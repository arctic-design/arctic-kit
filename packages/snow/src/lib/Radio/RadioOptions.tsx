import { DefaultSnowProps, OptionType } from '../types';
import { Radio } from './Radio';

type RadioOptionsProps = DefaultSnowProps & {
  options: OptionType[];
  selectedId?: string;
  onClick: (value: OptionType) => void;
  disabled?: boolean;
  error?: boolean;
  readOnly?: boolean;
};

export function RadioOptions({
  options,
  selectedId,
  onClick,
  size = 'medium',
  color = 'primary',
  disabled,
  error,
  readOnly,
}: RadioOptionsProps) {
  return options.map((option) => {
    return (
      <Radio
        key={option.value}
        selectedValue={selectedId}
        option={option}
        onClick={(option) => onClick(option)}
        size={size}
        color={color}
        id={option.value}
        disabled={disabled}
        error={error}
        readOnly={readOnly}
      />
    );
  });
}
