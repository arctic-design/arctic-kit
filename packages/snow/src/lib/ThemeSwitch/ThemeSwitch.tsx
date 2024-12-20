'use client';
import { MoonIcon, SunIcon, ComputerDesktopIcon } from '@arctic-kit/icons';
import { styled } from '@pigment-css/react';
import { useEffect, useState } from 'react';
import { SnowThemeArgs } from '../../core';
import { SnowSize, SnowSizeValues } from '../types';
import { SnowHeights } from '../constants';

const ThemeIconButton = styled.button<{ active?: boolean; size?: SnowSize }>(
  ({ theme: { vars: theme } }: SnowThemeArgs) => ({
    color: theme.colors.grey[700],
    height: `${SnowHeights['medium'] - 2}px`,
    width: `${SnowHeights['medium'] - 2}px`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'inherit',
    border: 0,
    backgroundColor: theme.colors.neutral[0],
    cursor: 'pointer',
    boxSizing: 'border-box',
    svg: {
      width: 18,
    },
    '&:hover': {
      backgroundColor: theme.colors.grey[100],
    },
    variants: [
      ...SnowSizeValues.map((size) => ({
        props: { size },
        style: {
          height: `${SnowHeights[size] - 2}px`,
          width: `${SnowHeights[size] - 2}px`,
        },
      })),
      {
        props: { active: true },
        style: {
          color: theme.colors.grey[900],
          backgroundColor: theme.colors.grey[300],
          '&:hover': {
            backgroundColor: theme.colors.grey[200],
          },
        },
      },
    ],
  })
);

const Container = styled.div(({ theme: { vars: theme } }: SnowThemeArgs) => ({
  display: 'inline-flex',
  alignItems: 'flex-start',
  gap: 2,
  borderRadius: 9999,
  border: `0.5px solid ${theme.colors.grey[400]}`,
  padding: '3px !important',
  color: theme.colors.grey[700],
  backgroundColor: theme.colors.neutral[0],
}));

export type ThemeModeType = 'light' | 'dark' | 'system';
export type ThemeSwitchProps = {
  onChange?: (isDarkMode: boolean) => void;
  size?: SnowSize;
};

export function ThemeSwitch({ onChange, size }: ThemeSwitchProps) {
  // 1. Initialize themeMode without accessing localStorage
  const [themeMode, setThemeMode] = useState<ThemeModeType>('system');
  const [isMounted, setIsMounted] = useState(false);

  // 2. useEffect to read from localStorage on client-side after component mounts
  useEffect(() => {
    setIsMounted(true); // Component is now mounted
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as ThemeModeType | null;
      if (savedTheme) {
        setThemeMode(savedTheme);
      }
    }
  }, []);

  // 3. Apply the theme whenever themeMode changes
  useEffect(() => {
    if (!isMounted) return; // Ensure this runs only on client after mount
    if (typeof window !== 'undefined') {
      const root = document.documentElement;
      root.classList.remove('theme-light', 'theme-dark');

      let mediaQuery: MediaQueryList;
      let handleChange: (e: MediaQueryListEvent) => void;

      const applyPreferredTheme = () => {
        const prefersDarkScheme = window.matchMedia(
          '(prefers-color-scheme: dark)'
        );
        if (prefersDarkScheme.matches) {
          root.classList.add('theme-dark');
          root.classList.remove('theme-light');
          onChange?.(true);
        } else {
          root.classList.add('theme-light');
          root.classList.remove('theme-dark');
          onChange?.(false);
        }
      };

      if (themeMode === 'dark') {
        root.classList.add('theme-dark');
        localStorage.setItem('theme', 'dark');
        onChange?.(true);
      } else if (themeMode === 'light') {
        root.classList.add('theme-light');
        localStorage.setItem('theme', 'light');
        onChange?.(false);
      } else if (themeMode === 'system') {
        localStorage.setItem('theme', 'system');
        applyPreferredTheme();
        mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        handleChange = () => {
          applyPreferredTheme();
        };
        mediaQuery.addEventListener('change', handleChange);
      }

      // Cleanup event listener when themeMode changes or component unmounts
      return () => {
        if (mediaQuery && handleChange) {
          mediaQuery.removeEventListener('change', handleChange);
        }
      };
    }
  }, [themeMode, isMounted, onChange]);

  // 4. Render the component only after mounting to avoid SSR issues
  if (!isMounted) {
    // Optionally, return null or a loading indicator to prevent FOUC
    return null;
  }

  // 5. Render the buttons for 'light', 'dark', and 'system' modes
  return (
    <Container>
      <ThemeIconButton
        active={themeMode === 'light'}
        onClick={() => setThemeMode('light')}
        size={size}
        data-testid="theme-light-icon"
      >
        <SunIcon name="SunIcon" />
      </ThemeIconButton>
      <ThemeIconButton
        active={themeMode === 'dark'}
        onClick={() => setThemeMode('dark')}
        size={size}
        data-testid="theme-dark-icon"
      >
        <MoonIcon name="MoonIcon" />
      </ThemeIconButton>
      <ThemeIconButton
        active={themeMode === 'system'}
        onClick={() => setThemeMode('system')}
        size={size}
        data-testid="theme-system-icon"
      >
        <ComputerDesktopIcon name="ComputerDesktopIcon" />
      </ThemeIconButton>
    </Container>
  );
}
