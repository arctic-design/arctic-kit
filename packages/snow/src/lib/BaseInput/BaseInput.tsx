import { styled } from '@pigment-css/react';
import { ChangeEvent } from 'react';
import { SnowSize, SnowSizeValues } from '../types';
import { Typography } from '../Typography';
import { HelperText } from '../HelperText';
import { RequiredIndicator } from '../Indicators';
import { SnowTheme, SnowThemeArgs } from '../../core';
import { SnowFontSizes, SnowHeights } from '../constants';
import { Box } from '../Box';

const getSizeVariantStyles = (theme: SnowTheme) =>
  SnowSizeValues.map((sizeItem) => ({
    props: { inputsize: sizeItem },
    style: {
      height: `${SnowHeights[sizeItem]}px`,
      fontSize: SnowFontSizes[sizeItem],
    },
  }));

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  textAlign: 'left',
  label: {
    fontWeight: 500,
  },
});

type InputSectionType = React.HTMLAttributes<'div'> & { inputsize?: SnowSize };

const InputSection = styled.div<InputSectionType>(
  ({ theme: { vars: theme } }: SnowThemeArgs) => ({
    position: 'absolute',
    width: 32,
    height: 32,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.colors.grey[700],
    svg: {
      width: 14,
    },
    variants: [...getSizeVariantStyles(theme)],
    "&[data-right='true']": {
      right: 0,
    },
    "&[data-pointer-events='true']": {
      '&:hover': {
        svg: {
          backgroundColor: theme.colors.grey[50],
          padding: 4,
          borderRadius: 2,
        },
      },
    },
  })
);

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
  size,
}: {
  label?: string;
  required?: boolean;
  // multiline?: boolean;
  id: string;
  htmlFor: string;
  size?: SnowSize;
}) {
  return (
    label && (
      <Typography htmlFor={htmlFor} id={id} as="label" size={size}>
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
  prefix?: React.ReactNode;
  inputsize?: SnowSize;
  suffix?: React.ReactNode;
  prefixProps?: React.HTMLAttributes<'div'>;
  suffixProps?: React.HTMLAttributes<'div'>;
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
    prefix,
    suffix,
    inputsize,
    prefixProps = {},
    suffixProps = {},
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
        size={inputsize}
      />
      <Box sx={{ position: 'relative' }}>
        {prefix && (
          <InputSection
            {...prefixProps}
            data-pointer-events={prefixProps.style?.pointerEvents === 'auto'}
            inputsize={inputsize}
          >
            {prefix}
          </InputSection>
        )}
        {suffix && (
          <InputSection
            {...suffixProps}
            data-right={true}
            data-pointer-events={suffixProps.style?.pointerEvents === 'auto'}
            inputsize={inputsize}
          >
            {suffix}
          </InputSection>
        )}
        {children}
      </Box>

      {errorText && <HelperText>{errorText}</HelperText>}
    </Container>
  );
}

export const BaseInput = styled.input<{
  inputsize?: SnowSize;
  multiline?: boolean;
}>(({ theme: { vars: theme } }: SnowThemeArgs) => ({
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

  "&[data-leftsection='true']": {
    paddingInlineStart: 30,
  },
  "&[data-rightsection='true']": {
    paddingInlineEnd: 30,
  },
}));
