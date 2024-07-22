'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { styled } from '@pigment-css/react';
import { SnowThemeArgs } from '../../core';

export type SkeletonProps = {
  height: React.CSSProperties['height'];
  width?: React.CSSProperties['width'];
  circle?: boolean; // If true, makes the skeleton a circle
  animate?: boolean; // Controls the animation, true by default
  id?: string;
};

const animationVariants = {
  animate: {
    opacity: [0.4, 1, 0.4],
    transition: {
      duration: 1.5,
      ease: 'linear',
      repeat: Infinity,
    },
  },
};

const Container = styled.div<{
  circle?: boolean;
}>(({ theme }: SnowThemeArgs) => ({
  borderRadius: theme.border.radius.main,
  backgroundColor: theme.colors.grey[200],
  variants: [
    {
      props: { circle: true },
      style: {
        borderRadius: '50%',
      },
    },
  ],
}));

const MotionContainer = motion(Container);

const Skeleton: React.FC<SkeletonProps> = ({
  height,
  width = '100%',
  circle = false,
  animate = true,
  id = 'skeleton',
}) => {
  const skeletonStyle = {
    height: circle ? height : height,
    width: circle ? height : width, // When circle is true, width matches height
  };

  const controlId = `${id}-${animate ? 'animated' : 'static'}`;

  return (
    <MotionContainer
      initial={{ opacity: 1 }}
      animate={animate ? 'animate' : ''}
      variants={animationVariants}
      circle={circle}
      style={skeletonStyle}
      data-testid={controlId}
      id={controlId}
    />
  );
};

export { Skeleton };
