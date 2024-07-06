import { styled } from '@pigment-css/react';
import { PropsWithChildren, forwardRef } from 'react';
import { SnowFeedbackColor } from '../types';
import {
  InformationCircleIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/16/solid';
import { SnowThemeArgs } from '../../core';

const IconMap: Record<SnowFeedbackColor, JSX.Element> = {
  success: <CheckCircleIcon />,
  info: <InformationCircleIcon />,
  warning: <ExclamationTriangleIcon />,
  error: <ExclamationCircleIcon />,
};

export type AlertProps = {
  severity?: SnowFeedbackColor;
  hideIcon?: boolean;
  shadow?: boolean;
  className?: string;
  id?: string;
};

const Container = styled.div<AlertProps>(({ theme }: SnowThemeArgs) => ({
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
  variants: [
    ...['success', 'error', 'warning', 'info'].map((severity) => ({
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
  ],
  '& svg': {
    width: 16,
    height: 'auto',
  },
  '.content': {
    display: 'flex',
    justifyContent: 'space-between',
    '.message': {
      display: 'flex',
      alignItems: 'center',
    },
  },
}));

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
        {!hideIcon && IconMap[severity]}
        {children}
      </Container>
    );
  }
);

Alert.displayName = 'Alert';

export { Alert };
