import React from 'react';
import { ChevronRightIcon } from '@arctic-kit/icons';

import { styled } from '@pigment-css/react';
import { SnowThemeArgs } from '../../core';
import { SnowColor } from '../types';
import { Link } from '../Link';

const BreadcrumbsContainer = styled.nav(
  ({ theme: { vars: theme } }: SnowThemeArgs) => ({
    fontFamily: theme.font.family.base,
    display: 'flex',
    alignItems: 'center',
    padding: '10px 0',
    fontSize: '14px',
    color: theme.colors.neutral[1000],
    justifyContent: 'flex-start',
    textWrap: 'nowrap',
    flexWrap: 'wrap',
    svg: {
      width: 14,
    },
  })
);

const RoutePath = styled.span({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: '4px 0',
});

const BreadcrumbLabel = styled.span(
  ({ theme: { vars: theme } }: SnowThemeArgs) => ({
    color: theme.colors.grey[700],
  })
);

const Separator = styled.span(({ theme: { vars: theme } }: SnowThemeArgs) => ({
  margin: '0 8px',
  color: '#999',
  display: 'inline-flex',
}));

export type BreadcrumbItem = {
  title: string;
  href?: string;
  clickable?: boolean;
};

export type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  renderAnchor?: (title: string, href: string) => React.ReactNode;
  color?: SnowColor;
  separator?: React.ReactNode;
};

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  renderAnchor,
  color,
  separator,
}) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <BreadcrumbsContainer role="navigation">
      {items.map((item, index) => (
        <RoutePath key={index}>
          {item.clickable !== false &&
          item.href &&
          index !== items.length - 1 ? (
            renderAnchor ? (
              renderAnchor(item.title, item.href)
            ) : (
              <Link color={color} href={item.href}>
                {item.title}
              </Link>
            )
          ) : (
            <BreadcrumbLabel>{item.title}</BreadcrumbLabel>
          )}
          {index < items.length - 1 && (
            <Separator>
              {separator ? (
                separator
              ) : (
                <ChevronRightIcon data-testid="icon-chevron-right" />
              )}
            </Separator>
          )}
        </RoutePath>
      ))}
    </BreadcrumbsContainer>
  );
};
