import { styled } from '@pigment-css/react';
import {
  TableRootProps,
  TableHeaderProps,
  TableBodyProps,
  TableRowProps,
  TableCellProps,
  TableHeaderCellProps,
  TableRowHeaderCellProps,
} from './types';
import { SnowColorValues, SnowSizeValues } from '../types';
import { SnowFontSizes } from '../constants';

const TablePaddingSize = {
  small: {
    padding: '8px',
  },
  medium: {
    padding: '12px',
  },
  large: {
    padding: '16px',
  },
};

export const StyledTableRoot = styled.div<TableRootProps>(
  ({ theme: { vars: theme } }) => ({
    width: '100%',
    borderCollapse: 'collapse',
    overflowX: 'auto',
    '@media only screen and (max-width: 600px)': {
      display: 'block',
      overflowX: 'scroll',
    },

    boxShadow: 'none',
    fontSize: theme.font.size[100],

    table: {
      borderSpacing: 0,
      width: '100%',
    },

    "&[data-variant='surface']": {
      table: {
        borderRadius: theme.border.radius[200],
        border: `1px solid ${theme.colors.grey[200]}`,
        borderBottom: 'none',
      },
    },
    variants: [
      {
        props: { layout: 'responsive' },
        style: {
          '@media only screen and (max-width: 600px)': {
            display: 'block',
            overflowX: 'scroll',
          },
        },
      },
      {
        props: { layout: 'fixed' },
        style: {
          tableLayout: 'fixed',
        },
      },
      {
        props: { size: 'small' },
        style: {
          fontSize: theme.font.size[25],
        },
      },
      {
        props: { size: 'medium' },
        style: {
          fontSize: theme.font.size[100],
        },
      },
      {
        props: { size: 'large' },
        style: {
          fontSize: theme.font.size[200],
        },
      },
      ...SnowColorValues.map((color) => ({
        props: { color },
        style: {
          "&[data-variant='surface']": {
            table: {
              borderColor: theme.colors[color][200],
            },
          },
        },
      })),
    ],
  })
);

export const StyledTableHeader = styled('thead')<TableHeaderProps>(
  ({ theme: { vars: theme } }) => ({
    "&[data-variant='ghost']": {
      backgroundColor: 'transparent',
      color: theme.colors.neutral[1000],
    },
    "&[data-variant='surface']": {
      backgroundColor: theme.colors.grey[100],
      color: theme.colors.neutral[1000],
      tr: {
        '&:first-child': {
          th: {
            '&:first-child': {
              borderTopLeftRadius: theme.border.radius[200],
            },
            '&:last-child': {
              borderTopRightRadius: theme.border.radius[200],
            },
          },
        },
      },
    },
    variants: [
      ...SnowColorValues.map((color) => ({
        props: { color },
        style: {
          "&[data-variant='surface']": {
            backgroundColor: theme.colors[color][50],
            color: theme.colors.black,
          },
        },
      })),
    ],
  })
);

export const StyledTableBody = styled('tbody')<TableBodyProps>(
  ({ theme: { vars: theme } }) => ({
    backgroundColor: theme.colors.neutral[0],
    color: theme.colors.neutral[1000],
    variants: [
      {
        props: { variant: 'surface' },
        style: {
          tr: {
            '&:last-child': {
              'th, td': {
                '&:first-child': {
                  borderBottomLeftRadius: theme.border.radius[200],
                },
                '&:last-child': {
                  borderBottomRightRadius: theme.border.radius[200],
                },
              },
            },
          },
        },
      },
      {
        props: { variant: 'ghost' },
        style: {
          backgroundColor: 'transparent',
        },
      },
    ],
  })
);

// Row Component
export const StyledTableRow = styled('tr')<TableRowProps>(
  ({ theme: { vars: theme } }) => ({
    // '&:last-child': {
    //   'th, td': {
    //     borderBottom: 'none',
    //   },
    // },
  })
);

export const StyledColumnHeaderCell = styled('th')<TableHeaderCellProps>(
  ({ theme: { vars: theme } }) => ({
    padding: TablePaddingSize.medium.padding,
    textAlign: 'left',
    fontWeight: theme.font.weight.bold,
    borderBottom: `1px solid ${theme.colors.grey[200]}`,
    "&[data-variant='ghost']": {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
    },
    variants: [
      ...SnowSizeValues.map((size) => ({
        props: { size },
        style: {
          padding: TablePaddingSize[size].padding,
          fontSize: SnowFontSizes[size],
        },
      })),
      ...SnowColorValues.map((color) => ({
        props: { color },
        style: {
          "&[data-variant='surface']": {
            borderBottomColor: theme.colors[color][200],
          },
        },
      })),
    ],
  })
);

export const StyledRowHeaderCell = styled('th')<TableRowHeaderCellProps>(
  ({ theme: { vars: theme } }) => ({
    padding: TablePaddingSize.medium.padding,
    textAlign: 'left',
    fontWeight: theme.font.weight.regular,
    borderBottom: `1px solid ${theme.colors.grey[200]}`,
    variants: [
      ...SnowSizeValues.map((size) => ({
        props: { size },
        style: {
          padding: TablePaddingSize[size].padding,
          fontSize: SnowFontSizes[size],
        },
      })),
      ...SnowColorValues.map((color) => ({
        props: { color },
        style: {
          "&[data-variant='surface']": {
            borderBottomColor: theme.colors[color][200],
          },
        },
      })),
    ],
  })
);

export const StyledCell = styled('td')<TableCellProps>(
  ({ theme: { vars: theme } }) => ({
    padding: TablePaddingSize.medium.padding,
    borderBottom: `1px solid ${theme.colors.grey[200]}`,
    fontWeight: theme.font.weight.regular,
    variants: [
      ...SnowSizeValues.map((size) => ({
        props: { size },
        style: {
          padding: TablePaddingSize[size].padding,
          fontSize: SnowFontSizes[size],
        },
      })),
      ...SnowColorValues.map((color) => ({
        props: { color },
        style: {
          "&[data-variant='surface']": {
            borderBottomColor: theme.colors[color][200],
          },
        },
      })),
    ],
  })
);
