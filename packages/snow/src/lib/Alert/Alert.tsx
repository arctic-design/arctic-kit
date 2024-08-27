import { styled } from '@pigment-css/react';
import { PropsWithChildren, forwardRef } from 'react';
import { SnowFeedbackColor, SnowFeedbackColorValues } from '../types';
import {
  InformationCircleIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
} from '@arctic-kit/icons';
import { SnowTheme, SnowThemeArgs } from '../../core';

const getVariantStyles = (theme: SnowTheme) => {
  return [
    ...SnowFeedbackColorValues.map((severity) => ({
      props: { severity: severity as SnowFeedbackColor },
      style: {
        backgroundColor: theme.colors[severity as SnowFeedbackColor][100],
        borderColor: theme.colors[severity as SnowFeedbackColor][200],
        color: theme.colors[severity as SnowFeedbackColor][700],
        '& svg': {
          color: theme.colors[severity as SnowFeedbackColor].main,
        },
      },
    })),
    {
      props: { shadow: true },
      style: { boxShadow: theme.shadow[200], borderColor: 'transparent' },
    },
  ];
};

const IconMap: Record<SnowFeedbackColor, JSX.Element> = {
  success: <CheckCircleIcon strokeWidth={2} />,
  info: <InformationCircleIcon strokeWidth={2} />,
  warning: <ExclamationTriangleIcon strokeWidth={2} />,
  error: <ExclamationCircleIcon strokeWidth={2} />,
};

export type AlertProps = {
  severity?: SnowFeedbackColor;
  hideIcon?: boolean;
  shadow?: boolean;
  className?: string;
  id?: string;
};

const Container = styled.div<AlertProps>(
  ({ theme: { vars: theme } }: SnowThemeArgs) => ({
    fontFamily: theme.font.family.base,
    fontSize: '0.875rem',
    fontStyle: 'normal',
    fontWeight: theme.font.weight.regular,
    lineHeight: '1.225rem',
    minWidth: '300px',
    position: 'relative',
    letterSpacing: '0.01071em',
    alignItems: 'center',
    padding: '0.75rem 1rem',
    borderRadius: '0.3125rem',
    gap: '0.25rem',
    display: 'flex',
    border: '1px solid transparent',
    boxShadow: 'none',
    variants: getVariantStyles(theme),
    '.icon': {
      display: 'inline-flex',
      '& svg': {
        width: 16,
        height: 'auto',
      },
    },
    '.content': {
      display: 'flex',
      maxWidth: 350,
      justifyContent: 'space-between',
      '.message': {
        display: 'flex',
        alignItems: 'center',
      },
    },
  })
);

const Alert = forwardRef<HTMLDivElement, PropsWithChildren<AlertProps>>(
  (props: PropsWithChildren<AlertProps>, ref) => {
    const {
      children,
      severity = 'info',
      hideIcon = false,
      shadow = false,
      className = '',
      id = 'alert',
    } = props;

    return (
      <Container
        id={`${id}-container-${severity}`}
        data-testid={`${id}-container-${severity}`}
        ref={ref}
        severity={severity}
        shadow={shadow}
        className={className}
      >
        {!hideIcon && <div className="icon">{IconMap[severity]}</div>}
        {children}
      </Container>
    );
  }
);

Alert.displayName = 'Alert';

export { Alert };
