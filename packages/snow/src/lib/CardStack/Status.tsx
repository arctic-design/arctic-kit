import { styled } from '@pigment-css/react';
import { CheckIcon, ExclamationTriangleIcon } from '@heroicons/react/20/solid';

import { Chip } from '../Chip';
import { SnowThemeArgs } from '../../core';

type StatusProps = {
  id: string;
  totalItems: number;
  completedItems?: number;
  loading?: boolean;
  loadingText?: string;
  errorText?: string;
};

const Count = styled.span(({ theme: { vars: theme } }: SnowThemeArgs) => ({
  display: 'flex',
  padding: '4px 8px',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 8,

  borderRadius: 100,
  background: theme.colors.grey[300],

  color: theme.colors.grey[900],
  fontSize: theme.font.size[100],
  fontWeight: theme.font.weight.medium,
}));

export function Status({
  id,
  totalItems,
  completedItems,
  loading,
  loadingText,
  errorText,
}: StatusProps) {
  if (loading) {
    return (
      <Chip
        id={`${id}-header-loading`}
        data-testid={`${id}-header-loading`}
        loading
        size="small"
      >
        {loadingText || 'Updating...'}
      </Chip>
    );
  }

  if (errorText) {
    return (
      <Chip
        id={`${id}-header-error`}
        data-testid={`${id}-header-error`}
        color="error"
        size="small"
      >
        <ExclamationTriangleIcon color="error" />
        {errorText}
      </Chip>
    );
  }
  return (
    <Count id={`${id}-header-count`} data-testid={`${id}-header-count`}>
      <CheckIcon
        id={`${id}-header-count-check-icon`}
        data-testid={`${id}-header-count-check-icon`}
      />
      <span
        id={`${id}-header-count-text`}
        data-testid={`${id}-header-count-text`}
      >
        {completedItems}/{totalItems}
      </span>
    </Count>
  );
}
