import { styled } from '@pigment-css/react';
import { SnowColor, SnowColorValues, SnowSize } from '../types';
import { SnowFontSizes, SnowHeights, ZIndex } from '../constants';
import { SnowThemeArgs } from '../../core';

export const InputContainerRoot = styled.div<{
  color?: SnowColor;
  inputsize?: SnowSize;
}>(({ theme: { vars: theme } }: SnowThemeArgs) => ({
  gap: '8px',
  flexShrink: 0,
  borderRadius: '5px',
  border: `1px solid ${theme.colors.grey[400]}`,
  background: theme.colors.neutral[0],
  boxShadow: theme.shadow.main,
  outline: '0px !important',
  fontSize: '0.875rem',
  minHeight: SnowHeights['medium'] - 2,
  '&:hover': {
    borderColor: theme.colors.grey[700],
  },
  '&:focus, &.menu-visible': {
    borderColor: theme.colors.primary.main,
  },
  variants: [
    ...['small', 'medium', 'large'].map((size) => ({
      props: { inputsize: size as SnowSize },
      style: {
        minHeight: SnowHeights[size as SnowSize] - 2,
      },
    })),
    ...SnowColorValues.map((color) => ({
      props: { color },
      style: {
        '&:focus, &.menu-visible': {
          borderColor: theme.colors[color].main,
        },
      },
    })),
  ],
}));

export const SelectContainer = styled.div(
  ({ theme: { vars: theme } }: SnowThemeArgs) => ({
    fontFamily: theme.font.family.base,
    position: 'relative',
    boxSizing: 'border-box',
    textAlign: 'left',
    '&[data-fullwidth="true"]': {
      minWidth: '200px',
      width: '100%',
    },
  })
);

export const SelectValueContainer = styled.div({
  alignItems: 'center',
  display: 'flex',
  flex: 1,
  flexWrap: 'wrap',
  position: 'relative',
  overflow: 'hidden',
  padding: '0 8px',
  boxSizing: 'border-box',
});

export const SelectIndicators = styled.div({
  alignItems: 'center',
  alignSelf: 'stretch',
  display: 'flex',
  flexShrink: 0,
  boxSizing: 'border-box',
  svg: {
    width: 16,
  },
});

export const SelectIndicator = styled.div({
  display: 'flex',
  transition: 'color 150ms ease 0s',
  color: 'rgb(204, 204, 204)',
  padding: '4px 8px',
  boxSizing: 'border-box',
  lineHeight: 1,
  strokeWidth: 1,

  '& svg': {
    '&:hover': {
      color: 'rgb(102, 102, 102)',
    },
  },
});

export const SelectInput = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  userSelect: 'none',
});

export const SelectMenu = styled.div<{ inputsize?: SnowSize }>(
  ({ theme: { vars: theme } }: SnowThemeArgs) => ({
    fontFamily: theme.font.family.base,
    fontSize: theme.font.size[100],
    fontWeight: theme.font.weight.regular,
    borderRadius: '8px',
    overflowY: 'auto',
    backgroundColor: theme.colors.neutral[0],
    boxShadow:
      '0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)',
    zIndex: ZIndex.Select,
    maxHeight: '360px !important',

    '.select-menu-item': {
      height: SnowHeights['medium'],
      padding: '2px 8px',
      outline: '0px',
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',

      '&:hover': {
        backgroundColor: theme.colors.grey[100],
      },

      '&.selected': {
        backgroundColor: theme.colors.info[400],
        color: '#fff',
      },
    },
    variants: ['small', 'medium', 'large'].map((size) => ({
      props: { inputsize: size as SnowSize },
      style: {
        '.select-menu-item': {
          height: SnowHeights[size as SnowSize],
          fontSize: SnowFontSizes[size as SnowSize],
        },
      },
    })),
  })
);

export const SelectInputTags = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '4px',
});

export const SelectInputTagItem = styled.div<{ inputsize?: SnowSize }>(
  ({ theme: { vars: theme } }: SnowThemeArgs) => ({
    background: theme.colors.grey[100],
    padding: '2px 8px',
    borderRadius: '2px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '4px',
    height: SnowHeights['medium'] - 8,

    svg: {
      color: '#3f4443',
      padding: '0px 2px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    variants: ['small', 'medium', 'large'].map((size) => ({
      props: { inputsize: size as SnowSize },
      style: {
        '.select-menu-item': {
          height: SnowHeights[size as SnowSize] - 8,
          fontSize: SnowFontSizes[size as SnowSize],
        },
      },
    })),
  })
);

export const TagLabel = styled.div<{ inputsize?: SnowSize }>(
  ({ theme: { vars: theme } }: SnowThemeArgs) => ({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    borderRadius: '2px',
    color: theme.colors.grey[900],
    fontSize: '14px',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    padding: '2px 2px',
    variants: [
      ...['small', 'medium', 'large'].map((size) => ({
        props: { inputsize: size as SnowSize },
        style: {
          fontSize: SnowFontSizes[size as SnowSize],
        },
      })),
    ],

    '&.single': {
      padding: '0 2px',
    },

    '&.placeholder': {
      color: theme.colors.grey[600],
    },
  })
);

export const SelectCloseContainer = styled.span({
  display: 'flex',
  alignItems: 'center',

  '&.multiple': {
    width: '14px',

    '&:hover': {
      backgroundColor: '#ddd',
    },
  },
});

export const SearchBox = styled.div({
  padding: '5px',
  backgroundColor: '#eee',

  input: {
    width: '100%',
    boxSizing: 'border-box',
    padding: '5px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
});

export const IconSeparator = styled.span({
  alignSelf: 'stretch',
  width: '1px',
  backgroundColor: 'rgb(204, 204, 204)',
  marginBottom: '8px',
  marginTop: '8px',
  boxSizing: 'border-box',
});

export const SelectInputContent = styled.div({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  outline: 'none',
});
