'use client';
import React, { useState, useEffect } from 'react';
import { styled } from '@pigment-css/react';
import { SnowThemeArgs } from '../../core';
import { ChevronDownIcon, ChevronRightIcon } from '@arctic-kit/icons';
import { motion } from 'framer-motion';
import { Box } from '../Box';

const Container = styled.div(({ theme: { vars: theme } }: SnowThemeArgs) => ({
  fontFamily: theme.font.family.base,
  fontSize: theme.font.size[100],
  backgroundColor: 'inherit',
  color: theme.colors.neutral[1000],
  width: '100%',
  minWidth: 240,
  svg: {
    width: 16,
  },
  ul: {
    paddingInlineStart: 0,
  },
}));

const LeafItem = styled.div<{ selected?: boolean }>(
  ({ theme: { vars: theme } }: SnowThemeArgs) => ({
    display: 'flex',
    alignItems: 'center',
    cursor: 'default',
    padding: '4px 8px',
    borderRadius: 4,
    fontWeight: 400,
    paddingLeft: 4,

    '&:hover': {
      cursor: 'pointer',
      backgroundColor: theme.colors.grey[100],
    },

    variants: [
      {
        props: { selected: true },
        style: {
          backgroundColor: theme.colors.grey[300],

          fontWeight: 700,
          '&:hover': {
            backgroundColor: theme.colors.grey[400],
          },
        },
      },
    ],
  })
);

const TreeList = styled.li(({ theme: { vars: theme } }: SnowThemeArgs) => ({
  listStyle: 'none',
}));

const EmptySpan = styled.span({
  width: 16,
});

const TreeLabel = styled.span<{ hasMarginLeft?: boolean }>({
  flex: 1,
  paddingLeft: 2,
  marginLeft: 0,
  variants: [
    {
      props: { hasMarginLeft: true },
      style: {
        marginLeft: 4,
      },
    },
  ],
});

export type TreeItem = {
  id: string;
  label: string;
  items?: TreeItem[];
  prefix?: (expanded?: boolean) => React.ReactNode;
  suffix?: (expanded?: boolean) => React.ReactNode;
  isExpanded?: boolean;
};

export interface TreeViewItemProps {
  item: TreeItem;
  depth: number;
  onToggle: (itemId: string) => void;
  selectedId?: string;
  currentItemId?: string;
}

const isItemInTree = (item: TreeItem, itemId: string): boolean => {
  if (item.id === itemId) return true;
  if (item.items) {
    return item.items.some((child) => isItemInTree(child, itemId));
  }
  return false;
};

export const TreeViewItem: React.FC<TreeViewItemProps> = ({
  item,
  depth,
  onToggle,
  selectedId,
  currentItemId,
}) => {
  const [isExpanded, setIsExpanded] = useState(item.isExpanded || false);

  useEffect(() => {
    if (currentItemId && isItemInTree(item, currentItemId)) {
      setIsExpanded(true);
    }
  }, [currentItemId, item]);

  const handleToggle = () => {
    if (item.items && item.items.length > 0) {
      setIsExpanded(!isExpanded);
    }

    onToggle(item.id);
  };

  const hasMarginLeft = !!item.prefix;

  return (
    <TreeList>
      <LeafItem
        onClick={handleToggle}
        selected={selectedId === item.id}
        style={{
          paddingLeft: depth * 10,
        }}
      >
        {item.prefix ? (
          item.prefix?.(isExpanded)
        ) : item.items && item.items.length > 0 ? (
          isExpanded ? (
            <ChevronDownIcon />
          ) : (
            <ChevronRightIcon />
          )
        ) : (
          <EmptySpan />
        )}

        <TreeLabel hasMarginLeft={hasMarginLeft}>{item.label}</TreeLabel>

        {item.suffix && (
          <Box as="span" sx={{ marginLeft: 4 }}>
            {item.suffix?.(isExpanded)}
          </Box>
        )}
      </LeafItem>

      <motion.div
        initial={false}
        animate={{
          height: isExpanded ? 'auto' : 0,
          opacity: isExpanded ? 1 : 0,
        }}
        style={{ overflow: 'hidden' }}
      >
        {isExpanded && item.items && (
          <ul>
            {item.items.map((childItem) => (
              <TreeViewItem
                key={childItem.id}
                item={childItem}
                depth={depth + 1}
                onToggle={onToggle}
                selectedId={selectedId}
                currentItemId={currentItemId}
              />
            ))}
          </ul>
        )}
      </motion.div>
    </TreeList>
  );
};

export interface TreeViewProps {
  items?: TreeItem[];
  currentItemId?: string;
  sx?: React.CSSProperties;
  className?: string;
  style?: React.CSSProperties;
  onSelect?: (itemId: string) => void;
}

const TreeView: React.FC<TreeViewProps> = ({
  items,
  currentItemId,
  sx,
  onSelect,
  style,
  className,
}) => {
  const [selectedItem, setSelectedItem] = useState(currentItemId || '');

  useEffect(() => {
    if (currentItemId) {
      setSelectedItem(currentItemId);
    }
  }, [currentItemId]);

  const handleToggle = (itemId: string) => {
    setSelectedItem(itemId);
    onSelect?.(itemId);
  };

  return (
    <Container sx={sx} style={style} className={className}>
      <ul>
        {items?.map((item) => (
          <TreeViewItem
            key={item.id}
            item={item}
            depth={0.5}
            onToggle={handleToggle}
            selectedId={selectedItem}
            currentItemId={currentItemId}
          />
        ))}
      </ul>
    </Container>
  );
};

export { TreeView };
