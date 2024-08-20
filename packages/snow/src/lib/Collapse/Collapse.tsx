'use client';
import React from 'react';
import { motion } from 'framer-motion';

export interface CollapseProps {
  expanded: boolean;
  children: React.ReactNode;
  id?: string;
}

export const Collapse: React.FC<CollapseProps> = React.memo(
  ({ expanded, children, id = 'collapse-container' }) => {
    return (
      <motion.div
        initial={false}
        animate={{ height: expanded ? 'auto' : 0 }}
        style={{ overflow: 'hidden' }}
        transition={{ duration: 0.2 }}
        id={id}
        data-testid={id}
      >
        {children}
      </motion.div>
    );
  }
);
