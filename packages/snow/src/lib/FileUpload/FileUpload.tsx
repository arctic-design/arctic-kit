'use client';
import { styled } from '@pigment-css/react';
import { ChangeEvent, forwardRef, useRef } from 'react';
import { CloudArrowUpIcon, PaperClipIcon, TrashIcon } from '@arctic-kit/icons';

import { HelperText } from '../HelperText';
import { Box } from '../Box';
import clsx from 'clsx';
import { SnowThemeArgs } from '../../core';
import { SnowColor, SnowColorValues } from '../types';

export type FileUploadColor = Omit<SnowColor, 'error' | 'warning'>;
const FileUploadColorValues = SnowColorValues.filter(
  (color) => !['error', 'warning'].includes(color)
);
const RootContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
});

const Container = styled.div<{ color?: FileUploadColor }>(
  ({ theme: { vars: theme } }: SnowThemeArgs) => ({
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    borderRadius: '4px',
    svg: {
      width: 16,
    },
    background: theme.colors.neutral[0],
    color: theme.colors.neutral[1000],

    'input[type="file"]': {
      display: 'none',
    },

    '.helper-text': {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },

    '&.ready': {
      padding: 16,
      border: `1px dashed ${theme.colors.grey[500]}`,
      background: theme.colors.grey[50],

      '&:hover, &.active': {
        "&[aria-disabled='false']": {
          border: `1px dashed ${theme.colors.primary[300]}`,
          background: theme.colors.grey[100],
        },
      },
      '.clickable': {
        "&[aria-disabled='false']": {
          cursor: 'pointer',
          color: theme.colors.primary.main,
        },
      },
      '&.error': {
        border: `1px dashed ${theme.colors.error[500]}`,
        background: theme.colors.error[50],
      },
    },
    '&.uploaded': {
      height: 36,
      alignItems: 'center',
      padding: '0 8px',
      justifyContent: 'center',
      border: `1px solid ${theme.colors.grey[200]}`,
      background: theme.colors.neutral[0],
      '.clear-container': {
        display: 'flex',
        flex: 1,
        justifyContent: 'flex-end',
        svg: {
          cursor: 'pointer',
        },
      },
      "&[aria-disabled='true']": {
        svg: {
          cursor: 'not-allowed',
        },
        background: theme.colors.grey[50],
      },
    },

    variants: [
      ...FileUploadColorValues.map((color) => ({
        props: {
          color,
        },
        style: {
          '&.ready': {
            '&:hover, &.active': {
              "&[aria-disabled='false']": {
                border: `1px dashed ${theme.colors[color][300]}`,
                background: theme.colors.grey[100],
              },
            },
            '.clickable': {
              "&[aria-disabled='false']": {
                color: theme.colors[color].main,
              },
            },
          },
        },
      })),
    ],
  })
);

const Footer = styled(Box)(({ theme: { vars: theme } }: SnowThemeArgs) => ({
  color: theme.colors.grey[700],
  fontSize: 12,
}));

export type FileUploadProps = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
  disabled?: boolean;
  errorText?: string;
  accept?: string;
  value: File | null;
  label?: string;
  footerLabel?: string;
  className?: string;
  isActive?: boolean;
  multiple?: boolean;
  id?: string;
  color?: FileUploadColor;
};
export const FileUpload = forwardRef<HTMLDivElement, FileUploadProps>(
  (props, ref) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const {
      onChange,
      disabled = false,
      errorText,
      accept = '*',
      value,
      onClear,
      label,
      footerLabel,
      className,
      isActive = false,
      multiple = false,
      color = 'primary',
      id = 'file-upload',
    } = props;

    const handleButtonClick = () => {
      if (fileInputRef.current) {
        fileInputRef.current.click();
      }
    };

    const handleClearSelection = () => {
      if (fileInputRef.current) {
        fileInputRef.current.value = ''; // Clear the input's value
      }

      onClear();
    };

    const error = !!errorText;
    const controlId = `file-upload-${id}`;
    const hasSelectedFile = value !== null;
    const containerClasses = clsx(
      {
        ready: !hasSelectedFile,
        uploaded: hasSelectedFile,
        error,
        active: isActive,
      },
      className
    );

    return (
      <RootContainer>
        <Container
          ref={ref}
          className={containerClasses}
          id={`${id}-container`}
          data-testid={`${id}-container`}
          aria-disabled={disabled}
          color={color}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 10,
              width: '100%',
            }}
          >
            <input
              data-testid="file-input"
              ref={fileInputRef}
              accept={accept}
              id={controlId}
              type="file"
              onChange={onChange}
              multiple={multiple}
            />
            {hasSelectedFile ? <PaperClipIcon /> : <CloudArrowUpIcon />}

            <div className="helper-text">
              {hasSelectedFile
                ? value.name
                : label ?? 'Upload your file here...'}
            </div>
            {hasSelectedFile ? (
              <div
                className="clear-container"
                onClick={() => !disabled && handleClearSelection()}
                data-testid="clear-button"
                id="clear-button"
                aria-disabled={disabled}
              >
                <TrashIcon />
              </div>
            ) : (
              <div
                id="clickable"
                data-testid="clickable"
                className="clickable"
                aria-disabled={disabled}
                onClick={() => !disabled && handleButtonClick()}
              >
                browse your computer
              </div>
            )}
          </Box>
          {footerLabel && !hasSelectedFile && (
            <Footer id="footer" data-testid="footer">
              {footerLabel}
            </Footer>
          )}
        </Container>
        <HelperText>{errorText}</HelperText>
      </RootContainer>
    );
  }
);
