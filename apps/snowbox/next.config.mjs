//@ts-check

import { composePlugins, withNx } from '@nx/next';
import { extendTheme, withPigment } from '@pigment-css/nextjs-plugin';

//TODO: temp fix till the theme is moved to a separate npm module
const lightTheme = {
  spacing: 1,
  spacings: {
    0: 0,
    25: 2,
    50: 4,
    100: 8,
    200: 12,
    300: 16,
    400: 24,
    500: 32,
    600: 40,
    700: 64,
    800: 80,
    900: 120,
    main: 8,
  },
  border: {
    radius: { 50: '2px', 100: '4px', 200: '8px', main: '4px' },
    width: { 100: '1px', 200: '2px', 300: '4px', main: '1px' },
  },
  shadow: {
    0: 'none',
    50: '0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 2px 4px 0px rgba(0, 0, 0, 0.02);',
    100: '0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 2px 4px 0px rgba(0, 0, 0, 0.02);',
    200: '0px 1px 2px 0px rgba(0, 0, 0, 0.08), 0px 2px 12px 0px rgba(0, 0, 0, 0.10), 0px 8px 32px 0px rgba(0, 0, 0, 0.12);',
    main: '0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 2px 4px 0px rgba(0, 0, 0, 0.02);',
  },
  colors: {
    primary: {
      50: '#e6edff',
      100: '#ccd9ff',
      200: '#99b3ff',
      300: '#669dff',
      400: '#3386ff',
      500: '#3366ff',
      600: '#2e5be6',
      700: '#294fcc',
      800: '#2444b3',
      900: '#1f3999',
      main: '#3366ff',
    },
    secondary: {
      50: '#efe5ff',
      100: '#d5c0fe',
      200: '#b896ff',
      300: '#9867ff',
      400: '#7b41ff',
      500: '#5906ff',
      600: '#4900f9',
      700: '#2b00f1',
      800: '#0000ed',
      900: '#0000e9',
      main: '#5906ff',
    },
    error: {
      50: '#FEF5F5',
      100: '#FDE8E9',
      200: '#F9C7C8',
      300: '#F38E92',
      400: '#EB4B51',
      500: '#E61E25',
      600: '#D11B22',
      700: '#A3151A',
      800: '#8A0F14',
      900: '#610D10',
      main: '#E61E25',
    },
    warning: {
      50: '#FFFCF5',
      100: '#FFF1D1',
      200: '#FFE29D',
      300: '#FED370',
      400: '#FECB55',
      500: '#FEBE2A',
      600: '#E7AD26',
      700: '#B4871E',
      800: '#8C6917',
      900: '#6B5012',
      main: '#FEBE2A',
    },
    info: {
      50: '#F2F6FC',
      100: '#E9F0FB',
      200: '#C6D7F6',
      300: '#719DEA',
      400: '#4D7FD6',
      500: '#215FCC',
      600: '#1E56BA',
      700: '#174391',
      800: '#123778',
      900: '#0E2856',
      main: '#215FCC',
    },
    success: {
      50: '#F3FBF5',
      100: '#E5F6E8',
      200: '#C7EBCF',
      300: '#A5DFB2',
      400: '#84D396',
      500: '#48BD62',
      600: '#42AC59',
      700: '#338646',
      800: '#286836',
      900: '#1E4F29',
      main: '#48BD62',
    },
    neutral: { 0: '#FFFFFF', 1000: '#000000' },
    grey: {
      50: '#FAFAFA',
      100: '#F4F5F5',
      200: '#ECEDEE',
      300: '#E4E5E7',
      400: '#D6D8DB',
      500: '#BBBFC3',
      600: '#93989F',
      700: '#6D7278',
      800: '#53565A',
      900: '#27292A',
      main: '#BBBFC3',
    },
  },
  font: {
    family: { base: "'Inter', inherit, sans-serif" },
    weight: { regular: 400, medium: 500, semibold: 600, bold: 700 },
    size: {
      25: '12px',
      50: '13px',
      100: '14px',
      200: '16px',
      300: '18px',
      400: '20px',
      500: '24px',
      600: '30px',
    },
  },
  lineHeight: { 100: 1, 200: 1.25, 300: 1.5 },
};

const theme = extendTheme({
  colorSchemes: {
    light: lightTheme,
    dark: lightTheme,
  },
  // getSelector: (colorScheme) =>
  //   colorScheme ? `.theme-${colorScheme}` : ':root',
  cssVarPrefix: 'snow',
});

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
};

// const nextConfigWithPigment = withPigment(nextConfig, { theme });

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

export default withPigment(composePlugins(...plugins)(nextConfig), {
  theme,
  // transformLibraries: ['@arctic-kit/snow'],
});
