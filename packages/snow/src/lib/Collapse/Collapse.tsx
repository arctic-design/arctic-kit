'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { styled } from '@pigment-css/react';
import { SnowThemeArgs } from '../../core';

const CollapseContainer = styled.div(
  ({ theme: { vars: theme } }: SnowThemeArgs) => ({
    backgroundColor: theme.colors.neutral[0],
    color: theme.colors.neutral[1000],
  })
);

const MotionCollapseContainer = motion(CollapseContainer);

export interface CollapseProps {
  expanded: boolean;
  children: React.ReactNode;
  id?: string;
}

export const Collapse: React.FC<CollapseProps> = React.memo(
  ({ expanded, children, id = 'collapse-container' }) => {
    return (
      <MotionCollapseContainer
        initial={false}
        animate={{ height: expanded ? 'auto' : 0 }}
        style={{ overflow: 'hidden' }}
        transition={{ duration: 0.2 }}
        id={id}
        data-testid={id}
      >
        {children}
      </MotionCollapseContainer>
    );
  }
);
