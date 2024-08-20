import { forwardRef, ChangeEvent } from 'react';

import { BaseInputProps, BaseInput, BaseInputContainer } from '../BaseInput';

export type TextInputProps = Omit<BaseInputProps, 'multiline' | 'onChange'> & {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: React.HTMLInputTypeAttribute | undefined;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  prefixProps?: React.HTMLAttributes<'div'>;
  suffixProps?: React.HTMLAttributes<'div'>;
};

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      errorText,
      label,
      size = 'medium',
      required,
      className,
      containerClassName,
      containerStyle,
      id = 'text-input',
      readOnly = false,
      type = 'text',
      prefix,
      suffix,
      prefixProps,
      suffixProps,
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
        prefix={prefix}
        suffix={suffix}
        prefixProps={prefixProps}
        suffixProps={suffixProps}
        inputsize={size}
      >
        <BaseInput
          as="input"
          inputsize={size}
          type={type}
          ref={ref}
          className={`${error ? 'error' : ''} ${className}`}
          id={`${id}`}
          data-testid={`${id}`}
          readOnly={readOnly}
          aria-readonly={readOnly ? 'true' : undefined}
          data-leftsection={!!prefix}
          data-rightsection={!!suffix}
          {...otherProps}
        />
      </BaseInputContainer>
    );
  }
);

TextInput.displayName = 'TextInput';

export { TextInput };
