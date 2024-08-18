'use client';
import {
  ForwardedRef,
  PropsWithChildren,
  forwardRef,
  useContext,
  useEffect,
  useState,
} from 'react';
import { motion } from 'framer-motion';
import { styled } from '@pigment-css/react';
import {
  ExclamationCircleIcon,
  ChevronDownIcon,
} from '@heroicons/react/20/solid';
import { clsx } from 'clsx';
import { AccordionContext } from './AccordionContext';
import { Box } from '../Box';
import { HelperText } from '../HelperText';
import { SnowThemeArgs } from '../../core';

const Header = styled.div(({ theme: { vars: theme } }: SnowThemeArgs) => ({
  padding: 16,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '16px',
  cursor: 'pointer',
  userSelect: 'none',
  '&:hover': {
    background: theme.colors.grey[50],
    borderRadius: '6px',
  },
  '&.reverse': {
    flexDirection: 'row-reverse',
  },
  '.accordion-icon': {
    svg: {
      color: theme.colors.grey[900],
    },
  },
  '&.disableToggle': {
    cursor: 'default',
    '&:hover': {
      background: 'inherit',
    },
  },
}));

const StyledContentContainer = styled.div({
  overflow: 'hidden',
});

const ContentContainer = motion(StyledContentContainer);

const Content = styled.div({
  padding: 16,
  paddingTop: 2,
});

const AccordionItemContainer = styled.div(
  ({ theme: { vars: theme } }: SnowThemeArgs) => ({
    border: `1px solid ${theme.colors.grey[300]}`,
    borderRadius: '6px',
    background: theme.colors.neutral[0],
    '&.active': {
      border: `1px solid ${theme.colors.grey[900]}`,
      boxShadow: '0px 1px 12px 0px rgba(0, 0, 0, 0.15)',
    },
    '[data-has-spacing="false"]': {
      borderBottomWidth: 0,
      '&:last-child': {
        borderBottomWidth: '1px',
      },
    },
    '&.hideVerticalBorder': {
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderRadius: 0,
    },
  })
);

const TitleContainer = styled.div(
  ({ theme: { vars: theme } }: SnowThemeArgs) => ({
    display: 'flex',
    justifyContent: 'flex-start',
    gap: '8px',
    alignItems: 'flex-start',
    flexDirection: 'column',
    '&.reverse': {
      flexDirection: 'row-reverse',
    },
    '.title': {
      color: theme.colors.grey[900],
      fontWeight: theme.font.weight.medium,
      '.subTitle': {
        fontWeight: theme.font.weight.regular,
      },
    },
    '&.active': {
      '.subTitle': {
        fontWeight: theme.font.weight.medium,
      },
    },
    '.error': {
      svg: {
        color: theme.colors.error.main,
        width: 16,
      },
    },
  })
);

const TitleFooter = styled.div(({ theme: { vars: theme } }: SnowThemeArgs) => ({
  color: theme.colors.grey[700],
  fontSize: theme.font.size[50],
  fontWeight: theme.font.weight.medium,
}));

const ExpandSectionContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '12px',
});

const arrowVariants = {
  opened: { rotate: 180 },
  closed: { rotate: 0 },
};

export type AccordionItemProps = {
  title?: string;
  subTitle?: string;
  defaultExpanded?: boolean;
  className?: string;
  style?: React.CSSProperties;
  headerStyle?: React.CSSProperties;
  expandSection?: React.ReactNode;
  titleComponent?: React.ReactNode;
  reverse?: boolean;
  id?: string;
  active?: boolean;
  titleFooter?: string;
  onToggle?: () => void;
  leadingExpandSection?: React.ReactNode;
  trailingExpandSection?: React.ReactNode;
  disableToggle?: boolean;
  errorText?: string;
  hideVerticalBorder?: boolean;
};

const AccordionItem = forwardRef(function AccordionItem(
  props: PropsWithChildren<AccordionItemProps>,
  ref: ForwardedRef<HTMLDivElement>
) {
  const {
    title,
    children,
    defaultExpanded = false,
    expandSection,
    titleComponent,
    reverse,
    id = 'accordion-item',
    subTitle,
    active,
    titleFooter,
    onToggle,
    leadingExpandSection,
    trailingExpandSection,
    disableToggle,
    errorText,
    hideVerticalBorder,
    headerStyle,
    ...otherProps
  } = props;

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(defaultExpanded);
  }, [defaultExpanded]);

  const toggleOpen = () => {
    if (!disableToggle) {
      setIsOpen(!isOpen);
      onToggle && onToggle();
    }
  };

  const { spacing = null } = useContext(AccordionContext);

  return (
    <AccordionItemContainer
      ref={ref}
      data-has-spacing={!!spacing}
      id={`${id}-container`}
      data-testid={`${id}-container`}
      className={clsx({ active, hideVerticalBorder })}
      aria-disabled={disableToggle}
      {...otherProps}
    >
      <Header
        onClick={toggleOpen}
        role="button"
        className={clsx({ reverse, disableToggle })}
        id={`${id}-header`}
        data-testid={`${id}-header`}
        style={headerStyle}
      >
        <TitleContainer
          id={`${id}-header-title-container`}
          data-testid={`${id}-header-title-container`}
          className={clsx({ reverse, active })}
        >
          {errorText && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: 4,
              }}
              id={`${id}-error-container`}
              className="error"
            >
              <ExclamationCircleIcon
                id={`${id}-error-icon`}
                data-testid={`${id}-error-icon`}
                color="error"
              />
              <HelperText
                id={`${id}-error-text`}
                data-testid={`${id}-error-text`}
              >
                {errorText}
              </HelperText>
            </Box>
          )}
          <div>
            {titleComponent ? (
              <span
                id={`${id}-header-title-component`}
                data-testid={`${id}-header-title-component`}
              >
                {titleComponent}
              </span>
            ) : (
              <span
                id={`${id}-header-title`}
                data-testid={`${id}-header-title`}
                className="title"
              >
                {title}
                {subTitle && (
                  <span
                    id={`${id}-header-sub-title`}
                    data-testid={`${id}-header-sub-title`}
                    className="subTitle"
                  >
                    {`${title ? ' - ' : ''}${subTitle}`}
                  </span>
                )}
              </span>
            )}
          </div>
          {titleFooter && <TitleFooter>{titleFooter}</TitleFooter>}
        </TitleContainer>
        <ExpandSectionContainer>
          {leadingExpandSection && leadingExpandSection}
          {!disableToggle && (
            <motion.span
              variants={arrowVariants}
              initial={false}
              animate={isOpen ? 'opened' : 'closed'}
              className="accordion-icon"
              id={`${id}-header-icon-container`}
              data-testid={`${id}-header-icon-container`}
            >
              {expandSection ? (
                expandSection
              ) : (
                <ChevronDownIcon
                  id={`${id}-header-icon`}
                  data-testid={`${id}-header-icon`}
                />
              )}
            </motion.span>
          )}

          {trailingExpandSection && trailingExpandSection}
        </ExpandSectionContainer>
      </Header>
      {!disableToggle && (
        <ContentContainer
          initial={{ height: 0 }}
          animate={{ height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.2 }}
          id={`${id}-content-container`}
          data-testid={`${id}-content-container`}
        >
          <Content id={`${id}-content`} data-testid={`${id}-content`}>
            {children}
          </Content>
        </ContentContainer>
      )}
    </AccordionItemContainer>
  );
});

// AccordionItem.displayName = 'AccordionItem';

export { AccordionItem };
