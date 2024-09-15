'use client';
import React, { ReactNode, useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SegmentedControlContext } from './SegmentedControlContext';
import { SnowColor, SnowSize } from '../types';

import {
  Container,
  RootContainer,
  RootContainerWithLabel,
  StyledIndicator,
} from './StyledElements';
import { Typography } from '../Typography';
import { RequiredIndicator } from '../Indicators';

export interface SegmentedControlProps {
  children: ReactNode;
  initialSelectedIndex?: number;
  color?: SnowColor;
  size?: SnowSize;
  id?: string;
  label?: string;
  required?: boolean;
}

const AnimatedIndicator = motion.create(StyledIndicator);

function SegmentedControl({
  children,
  initialSelectedIndex = 0,
  color = undefined,
  size = 'medium',
  id = 'segmented-control',
  label,
  required,
}: SegmentedControlProps) {
  const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex || 0);
  const refsArray = useRef<(HTMLElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    setSelectedIndex(initialSelectedIndex);
  }, [initialSelectedIndex]);

  useEffect(() => {
    if (refsArray.current[selectedIndex]) {
      const { offsetLeft, clientWidth } = refsArray.current[selectedIndex];
      setIndicatorStyle({ left: offsetLeft, width: clientWidth });
    }
  }, [selectedIndex]);

  return (
    <SegmentedControlContext.Provider
      value={{ selectedIndex, setSelectedIndex, color, size }}
    >
      <RootContainerWithLabel>
        {label && (
          <Typography id={id} className="label" size={size}>
            {label} <RequiredIndicator required={required} />
          </Typography>
        )}
        <RootContainer size={size} data-testid={`${id}-root`} id={`${id}-root`}>
          <Container data-testid={`${id}-container`} id={`${id}-container`}>
            {React.Children.map(children, (child, index) =>
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              React.cloneElement(child as React.ReactElement<any>, {
                index,
                ref: (el: HTMLElement) => (refsArray.current[index] = el),
              })
            )}
            <AnimatePresence>
              <AnimatedIndicator
                initial={false}
                animate={indicatorStyle}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                color={color}
                data-testid={`${id}-indicator`}
                id={`${id}-indicator`}
                hide={selectedIndex === -1}
              />
            </AnimatePresence>
          </Container>
        </RootContainer>
      </RootContainerWithLabel>
    </SegmentedControlContext.Provider>
  );
}

SegmentedControl.displayName = 'SegmentedControl';

export { SegmentedControl };
