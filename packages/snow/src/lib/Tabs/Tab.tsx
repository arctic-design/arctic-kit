'use client';
import { styled } from '@pigment-css/react';
import { motion } from 'framer-motion';
import { useId } from 'react';
import { SnowThemeArgs } from '../../core';

const Container = styled.li(({ theme: { vars: theme } }: SnowThemeArgs) => ({
  textAlign: 'center',
  fontFamily: theme.font.family.base,
  fontSize: theme.font.size[100],
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
  listStyle: 'none',
  padding: 16,
  margin: '0 !important',
  borderRadius: '5px',
  borderBottomLeftRadius: '0',
  borderBottomRightRadius: '0',
  color: theme.colors.grey[900],
  background: theme.colors.neutral[0],
  position: 'relative',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: 0,
  userSelect: 'none',
  '&:hover': {
    background: theme.colors.grey[200],
  },

  button: {
    width: 20,
    height: 20,
    border: 0,
    background: theme.colors.neutral[0],
    borderRadius: 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    stroke: '#000',
    marginLeft: 10,
    cursor: 'pointer',
    flexShrink: 0,
  },

  '.underline': {
    position: 'absolute',
    bottom: '-4px',
    left: '0',
    right: '0',
    height: 3,
    alignSelf: 'stretch',
    borderRadius: '2px 2px 0 0',
  },
}));

export type TabProps = {
  label?: string;
  selectedTabIndex: number;
  index: number;
  onClick: (index: number) => void;
  id?: string;
};

export function Tab(props: TabProps) {
  const { selectedTabIndex, index, label, onClick, id } = props;
  const isSelected = index === selectedTabIndex;

  const uniqueId = useId();
  const tabId = id || uniqueId;

  return (
    <Container
      className={isSelected ? 'selected' : ''}
      onClick={() => onClick(index)}
      id={`tab-${tabId}`}
      data-testid={`tab-${tabId}`}
    >
      {`${label}`}
      {isSelected ? (
        <motion.div className="underline" layoutId={`underline-${id}`} />
      ) : null}
    </Container>
  );
}
