'use client';
import React, { forwardRef, useEffect, useState } from 'react';
import { styled } from '@pigment-css/react';
import { motion, AnimatePresence } from 'framer-motion';

import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid';
import { Box } from '../Box';
import { Status } from './Status';
import { SnowThemeArgs } from '../../core';

export type CardStackProps = {
  title: string;
  children: React.ReactNode;
  initialCollapsed?: boolean;
  totalItems: number;
  completedItems?: number;
  id?: string;
  onToggle?: (collapsed: boolean) => void;
  active?: boolean;
  loading?: boolean;
  loadingText?: string;
  errorText?: string;
};

const HEADER_HEIGHT = 50;
const CARD_GAP = 3;
const REDUCING_WIDTH = 8;

const Container = styled.div(({ theme }: SnowThemeArgs) => ({
  borderRadius: 8,
  minWidth: 320,
  background: 'transparent',
  "&[aria-expanded='true']": {
    background: theme.colors.grey[200],
  },
}));

const Title = styled.span(({ theme }: SnowThemeArgs) => ({
  fontSize: theme.font.size[300],
  fontWeight: theme.font.weight.bold,
}));

const Content = styled.div<{ minHeight: number | 'auto' }>({
  position: 'relative',
  transition: 'height 0.3s ease',
  "&[aria-expanded='true']": {
    padding: 4,
    margin: 4,
  },
  minHeight: ({ minHeight }) =>
    minHeight ? (minHeight === 'auto' ? 'auto' : minHeight) : 'auto',
});

const EmptyCard = styled.div<{
  zindex: number;
  top: number;
  reducedWidth: number;
  left: number;
}>(({ theme }: SnowThemeArgs) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  border: `1px solid ${theme.colors.grey[300]}`,
  borderRadius: 4,
  position: 'absolute',
  left: ({ left }) => left,
  top: ({ top }) => top,
  zIndex: ({ zindex }) => zindex,
  height: 6,
  width: ({ reducedWidth }) => `calc(100% - ${reducedWidth}px)`,
  background: theme.colors.neutral[0],
}));

const MotionEmptyCard = motion(EmptyCard);

const HeaderCard = styled.div<{
  zindex: number;
}>(({ theme }: SnowThemeArgs) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  border: `1px solid ${theme.colors.grey[300]}`,
  borderRadius: 4,
  position: 'absolute',
  left: 0,
  width: '100%',
  background: theme.colors.neutral[0],
  "&[aria-expanded='true']": {
    background: theme.colors.grey[200],
    borderColor: 'transparent',
  },

  "&[aria-expanded='false']": {
    "&[data-active='true']": {
      borderColor: theme.colors.grey[600],
    },
  },

  height: HEADER_HEIGHT,
  top: 0,
  zIndex: ({ zindex }) => zindex,
  cursor: 'pointer',
  svg: {
    width: 16,
  },
}));

const MotionHeaderCard = motion(HeaderCard);

const ExpandedBox = styled.div({
  marginTop: HEADER_HEIGHT,
});

const MotionExpandedBox = motion(ExpandedBox);

const CardStack = forwardRef<HTMLDivElement, CardStackProps>(function CardStack(
  {
    title,
    children,
    initialCollapsed = true,
    totalItems,
    completedItems = 0,
    id = 'card-stack',
    onToggle,
    active,
    loading,
    loadingText,
    errorText,
  },
  ref
) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    setIsCollapsed(initialCollapsed);
  }, [initialCollapsed]);

  const handleToggle = () => {
    const collapsed = !isCollapsed;
    setIsCollapsed(collapsed);
    onToggle && onToggle(collapsed);
  };

  const highestZIndex = totalItems - 1;

  const containerMinHeight = highestZIndex * CARD_GAP + HEADER_HEIGHT + 2;
  const minHeight = isCollapsed ? containerMinHeight : 'auto';

  return (
    <Container
      aria-expanded={!isCollapsed}
      ref={ref}
      id={`${id}-container`}
      data-testid={`${id}-container`}
    >
      <Content
        id={`${id}-content`}
        data-testid={`${id}-content`}
        minHeight={minHeight}
        aria-expanded={!isCollapsed}
      >
        <MotionHeaderCard
          aria-expanded={!isCollapsed}
          zindex={highestZIndex}
          onClick={handleToggle}
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          id={`${id}-header-container`}
          data-testid={`${id}-header-container`}
          data-active={active}
        >
          <Box
            sx={{
              padding: 16,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flex: 1,
            }}
            id={`${id}-header`}
            data-testid={`${id}-header`}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: 8,
              }}
              id={`${id}-header-left`}
              data-testid={`${id}-header-left`}
            >
              <Title
                id={`${id}-header-title`}
                data-testid={`${id}-header-title`}
              >
                {title}
              </Title>
              <Status
                id={id}
                totalItems={totalItems}
                completedItems={completedItems}
                loading={loading}
                loadingText={loadingText}
                errorText={errorText}
              />
            </Box>
            {isCollapsed ? (
              <PlusIcon
                id={`${id}-header-icon`}
                data-testid={`${id}-header-icon`}
              />
            ) : (
              <MinusIcon
                id={`${id}-header-icon`}
                data-testid={`${id}-header-icon`}
              />
            )}
          </Box>
        </MotionHeaderCard>
        <AnimatePresence>
          {isCollapsed ? (
            <>
              {Array.from({ length: highestZIndex }).map((_, index) => (
                <MotionEmptyCard
                  key={index}
                  zindex={highestZIndex - 1 - index}
                  top={HEADER_HEIGHT - CARD_GAP + index * CARD_GAP}
                  reducedWidth={(index + 1) * REDUCING_WIDTH}
                  left={(index + 1) * (REDUCING_WIDTH / 2)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  id={`${id}-empty-card-${index}`}
                  data-testid={`${id}-empty-card-${index}`}
                />
              ))}
            </>
          ) : (
            <MotionExpandedBox
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              id={`${id}-content-card`}
              data-testid={`${id}-content-card`}
            >
              {children}
            </MotionExpandedBox>
          )}
        </AnimatePresence>
      </Content>
    </Container>
  );
});

export { CardStack };
