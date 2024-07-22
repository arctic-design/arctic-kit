'use client';
import { styled } from '@pigment-css/react';
import { AnimatePresence, motion } from 'framer-motion';
import { PropsWithChildren, useId } from 'react';

const StyledContent = styled.div({
  padding: '2px 8px',
});
const Content = motion(StyledContent);

export type TabPanelProps = {
  selected: boolean;
  label: string;
  style?: React.CSSProperties;
  className?: string;
  id?: string;
};

export function TabPanel(props: PropsWithChildren<TabPanelProps>) {
  const { children, selected, label, style, className, id } = props;
  const uniqueId = useId();
  const tabPanelId = id || uniqueId;
  return (
    <AnimatePresence mode="wait">
      <Content
        key={selected ? label : 'empty'}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.2 }}
        style={style}
        className={className}
        id={tabPanelId}
        data-testid={tabPanelId}
      >
        {selected ? children : null}
      </Content>
    </AnimatePresence>
  );
}
