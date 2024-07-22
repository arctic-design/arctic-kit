import { styled } from '@pigment-css/react';
import { ChangeEvent } from 'react';
import { SnowSize, SnowSizeValues } from '../types';
import { Typography } from '../Typography';
import { HelperText } from '../HelperText';
import { RequiredIndicator } from '../Indicators';
import { SnowTheme, SnowThemeArgs } from '../../core';
import { SnowHeights } from '../constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: left;
  label {
    font-weight: 500;
  }
`;

export type BaseInputProps = {
  label?: string;
  value?: string;
  onChange: (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  onBlur?: (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  placeholder?: string;
  errorText?: string;
  size?: SnowSize;
  disabled?: boolean;
  required?: boolean;
  maxLength?: number;
  style?: React.CSSProperties;
  className?: string;
  containerStyle?: React.CSSProperties;
  containerClassName?: string;
  multiline?: boolean; // Additional prop to differentiate TextArea from BaseInput
  id?: string;
  readOnly?: boolean;
};

export function InputLabel({
  label,
  required = false,
  // multiline = false,
  id,
  htmlFor,
}: {
  label?: string;
  required?: boolean;
  // multiline?: boolean;
  id: string;
  htmlFor: string;
}) {
  return (
    label && (
      <Typography htmlFor={htmlFor} id={id} as="label">
        {label} <RequiredIndicator required={required} />
      </Typography>
    )
  );
}
type BaseInputContainerProps = {
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
  errorText?: string;
  required?: boolean;
  label?: string;
  id: string;
  multiline?: boolean;
};
export function BaseInputContainer(props: BaseInputContainerProps) {
  const {
    style,
    className,
    children,
    errorText,
    label,
    id,
    required,
    // multiline = false,
  } = props;
  return (
    <Container style={style} className={className}>
      <InputLabel
        id={`${id}-label`}
        data-testid={`${id}-label`}
        label={label}
        required={required}
        // multiline={multiline}
        htmlFor={id}
      />
      {children}
      {errorText && <HelperText>{errorText}</HelperText>}
    </Container>
  );
}

const getSizeVariantStyles = (theme: SnowTheme) =>
  SnowSizeValues.map((sizeItem) => ({
    props: { inputsize: sizeItem },
    style: {
      height: `${SnowHeights[sizeItem]}px`,
    },
  }));

export const BaseInput = styled.input<{
  inputsize?: SnowSize;
  multiline?: boolean;
}>(({ theme }: SnowThemeArgs) => ({
  padding: 8,
  width: '100%',
  boxSizing: 'border-box',
  display: 'flex',
  height: 'auto',
  resize: 'none',
  variants: [
    ...getSizeVariantStyles(theme),
    {
      props: { multiline: true },
      style: { height: 'auto', resize: 'vertical' },
    },
  ],
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: 4,
  flexShrink: 0,
  borderRadius: 4,
  border: `1px solid ${theme.colors.grey[400]}`,
  background: theme.colors.neutral[0],
  transition: 'border-color 0.3s ease',
  fontSize: theme.font.size[100],
  fontWeight: theme.font.weight.regular,
  fontFamily: theme.font.family.base,
  '&:focus': {
    borderColor: theme.colors.grey[900],
    outline: 'none',
  },
  '&:hover': {
    borderColor: theme.colors.grey[700],
  },
  '&:disabled': {
    backgroundColor: theme.colors.grey[200],
    color: theme.colors.grey[600],
    borderColor: theme.colors.grey[400],
    outline: 'none',
  },
  "&[aria-readonly='true']": {
    backgroundColor: theme.colors.grey[200],
    color: theme.colors.grey[900],
    borderColor: theme.colors.grey[400],
    outline: 'none',
  },
  '&.error': {
    borderColor: theme.colors.error[500],
  },
}));
