import { PropsWithChildren, forwardRef } from 'react';
import { DefaultSnowProps, SnowColorValues, SnowSize } from '../types';
import { styled } from '@pigment-css/react';
import { SnowThemeArgs } from '../../core';
const TagPaddingSize = {
  small: {
    padding: '2px 4px',
    borderRadius: '2px',
  },
  medium: {
    padding: '4px 8px',
    borderRadius: '4px',
  },
  large: {
    padding: '8px 16px',
    borderRadius: '6px',
  },
};
export type TagProps = { noFill?: boolean } & DefaultSnowProps;

const TagContainer = styled.div<DefaultSnowProps>(
  ({ theme: { vars: theme } }: SnowThemeArgs) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontStyle: 'normal',
    lineHeight: 'normal',
    border: `1px solid ${theme.colors.grey[100]}`,
    padding: TagPaddingSize.medium.padding,

    fontFamily: theme.font.family.base,
    fontSize: theme.font.size[50],
    fontWeight: theme.font.weight.regular,
    borderRadius: TagPaddingSize.medium.borderRadius,

    color: theme.colors.grey[700],

    '&[data-empty="false"]': {
      border: 'none',
      fontWeight: theme.font.weight.medium,
      color: theme.colors.grey[700],
      backgroundColor: theme.colors.grey[100],
    },

    variants: [
      ...['small', 'medium', 'large'].map((size) => ({
        props: { size: size as SnowSize },
        style: {
          padding: TagPaddingSize[size as SnowSize].padding,
          borderRadius: TagPaddingSize[size as SnowSize].borderRadius,
        },
      })),
      ...SnowColorValues.map((color) => ({
        props: { color },
        style: {
          '&[data-empty="false"]': {
            color: theme.colors[color][700],
            backgroundColor: theme.colors[color][100],
          },
        },
      })),
    ],
  })
);

const Content = styled.span({
  display: 'flex',
  alignItems: 'center',
  gap: 4,
});

export const Tag = forwardRef<HTMLDivElement, PropsWithChildren<TagProps>>(
  (props, ref) => {
    const {
      color,
      disabled,
      size,
      children,
      noFill = false,
      id = 'tag',
    } = props;
    return (
      <TagContainer
        ref={ref}
        color={color}
        aria-disabled={disabled}
        size={size}
        data-empty={noFill}
        id={id}
        data-testid={id}
      >
        <Content id={`${id}-content`} data-testid={`${id}-content`}>
          {children}
        </Content>
      </TagContainer>
    );
  }
);

Tag.displayName = 'Tag';
