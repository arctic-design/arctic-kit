import { forwardRef, ChangeEvent } from 'react';

import { BaseInputProps, BaseInput, BaseInputContainer } from '../BaseInput';

export type TextInputProps = Omit<BaseInputProps, 'multiline' | 'onChange'> & {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      errorText,
      label,
      size,
      required,
      className,
      containerClassName,
      containerStyle,
      id = 'text-input',
      readOnly = false,
      ...otherProps
    },
    ref
  ) => {
    const error = !!errorText;

    return (
      <BaseInputContainer
        style={containerStyle}
        className={containerClassName}
        id={id}
        data-testid={id}
        label={label}
        required={required}
        errorText={errorText}
      >
        <BaseInput
          as="input"
          inputsize={size}
          type="text"
          ref={ref}
          className={`${error ? 'error' : ''} ${className}`}
          id={`${id}`}
          data-testid={`${id}`}
          readOnly={readOnly}
          aria-readonly={readOnly ? 'true' : undefined}
          {...otherProps}
        />
      </BaseInputContainer>
    );
  }
);

TextInput.displayName = 'TextInput';

export { TextInput };
