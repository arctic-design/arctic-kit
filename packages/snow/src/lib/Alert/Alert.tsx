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
import { Box } from '../Box';

const getVariantStyles = (theme: SnowTheme) => {
  return [
    ...SnowFeedbackColorValues.map((severity) => ({
      props: { severity: severity as SnowFeedbackColor },
      style: {
        backgroundColor: theme.colors[severity as SnowFeedbackColor][50],
        borderColor: theme.colors[severity as SnowFeedbackColor][500],
        color: theme.colors[severity as SnowFeedbackColor][700],
        '& svg': {
          color: theme.colors[severity as SnowFeedbackColor].main,
        },
        '.children': {
          color: theme.colors.grey[800],
        },
      },
    })),
    {
      props: { shadow: true },
      style: {
        boxShadow:
          'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      },
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
  title?: React.ReactNode;
  action?: React.ReactNode;
  hideChildren?: boolean;
  childClassName?: string;
};

const Container = styled.div<AlertProps>(
  ({ theme: { vars: theme } }: SnowThemeArgs) => ({
    fontFamily: theme.font.family.base,
    fontSize: theme.font.size[100],
    fontStyle: 'normal',
    fontWeight: theme.font.weight.regular,
    lineHeight: '1.225rem',
    minWidth: 250,
    position: 'relative',
    letterSpacing: '0.01071em',
    alignItems: 'flex-start',
    padding: '0.75rem 1rem',
    borderRadius: '0.3125rem',
    gap: 6,
    display: 'flex',
    border: '1px solid transparent',
    boxShadow: 'none',

    '.icon': {
      display: 'inline-flex',
      '& svg': {
        width: 16,
        height: 'auto',
      },
    },
    '.title': {
      fontWeight: 500,
    },

    svg: {
      marginTop: 1,
    },

    variants: getVariantStyles(theme),
  })
);

const ChildContainer = styled.span<{
  hideChildren?: boolean;
  hasVariant?: boolean;
}>(({ theme: { vars: theme } }: SnowThemeArgs) => ({
  fontSize: theme.font.size[50],
  variants: [
    {
      props: { hideChildren: true },
      style: {
        display: 'none',
      },
    },
    {
      props: { hasVariant: true },
      style: {
        color: theme.colors.grey[800],
      },
    },
  ],
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
      title,
      action,
      hideChildren = false,
      childClassName,
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
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: 4,
            flex: 1,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 4,
            }}
          >
            {title && <span className="title">{title}</span>}
            {children && (
              <ChildContainer
                hideChildren={hideChildren}
                hasVariant={!!severity}
                className={childClassName}
              >
                {children}
              </ChildContainer>
            )}
          </Box>
          {action}
        </Box>
      </Container>
    );
  }
);

Alert.displayName = 'Alert';

export { Alert };
