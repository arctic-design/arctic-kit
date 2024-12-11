'use client';
import React, { useContext } from 'react';
import {
  TableRootProps,
  TableHeaderProps,
  TableBodyProps,
  TableRowProps,
  TableCellProps,
  TableHeaderCellProps,
  TableRowHeaderCellProps,
} from './types';

import { TableContext } from './TableContext';
import {
  StyledCell,
  StyledColumnHeaderCell,
  StyledRowHeaderCell,
  StyledTableBody,
  StyledTableHeader,
  StyledTableRoot,
  StyledTableRow,
} from './StyledTableElements';

export const TableRoot: React.FC<TableRootProps> = ({
  size = 'medium',
  variant = 'surface',
  layout = 'responsive',
  color,
  children,
}) => {
  return (
    <TableContext.Provider value={{ size, variant, layout, color }}>
      <StyledTableRoot
        size={size}
        layout={layout}
        color={color}
        data-variant={variant}
      >
        <table>{children}</table>
      </StyledTableRoot>
    </TableContext.Provider>
  );
};
TableRoot.displayName = 'Table';

export const TableHeader: React.FC<TableHeaderProps> = ({ children }) => {
  const { variant, color } = useContext(TableContext);
  return (
    <StyledTableHeader data-variant={variant} color={color}>
      {children}
    </StyledTableHeader>
  );
};

TableHeader.displayName = 'Table.Header';

export const TableBody: React.FC<TableBodyProps> = ({ children }) => {
  const { variant, color } = useContext(TableContext);
  return (
    <StyledTableBody variant={variant} color={color}>
      {children}
    </StyledTableBody>
  );
};

TableBody.displayName = 'Table.Body';

export const TableRow: React.FC<TableRowProps> = ({ children }) => {
  return <StyledTableRow>{children}</StyledTableRow>;
};
TableRow.displayName = 'Table.Row';

export const TableColumnHeaderCell: React.FC<TableHeaderCellProps> = ({
  children,
}) => {
  const { size, variant, color } = useContext(TableContext);

  return (
    <StyledColumnHeaderCell size={size} data-variant={variant} color={color}>
      {children}
    </StyledColumnHeaderCell>
  );
};

TableColumnHeaderCell.displayName = 'Table.ColumnHeaderCell';

export const TableRowHeaderCell: React.FC<TableRowHeaderCellProps> = ({
  children,
}) => {
  const { size, variant, color } = useContext(TableContext);

  return (
    <StyledRowHeaderCell size={size} data-variant={variant} color={color}>
      {children}
    </StyledRowHeaderCell>
  );
};

TableRowHeaderCell.displayName = 'Table.RowHeaderCell';

export const TableCell: React.FC<TableCellProps> = ({ children }) => {
  const { size, variant, color } = useContext(TableContext);

  return (
    <StyledCell size={size} data-variant={variant} color={color}>
      {children}
    </StyledCell>
  );
};

TableCell.displayName = 'Table.Cell';

export const Table = {
  Root: TableRoot,
  Header: TableHeader,
  Body: TableBody,
  Row: TableRow,
  Cell: TableCell,
  ColumnHeaderCell: TableColumnHeaderCell,
  RowHeaderCell: TableRowHeaderCell,
};
