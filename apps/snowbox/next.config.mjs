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
    radius: {
      50: '2px',
      100: '4px',
      200: '8px',
      main: '4px',
    },
    width: {
      100: '1px',
      200: '2px',
      300: '4px',
      main: '1px',
    },
  },
  shadow: {
    0: 'none',
    50: '0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 2px 4px 0px rgba(0, 0, 0, 0.02);',
    100: '0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)',
    200: '0px 1px 2px 0px rgba(0, 0, 0, 0.08), 0px 2px 12px 0px rgba(0, 0, 0, 0.10), 0px 8px 32px 0px rgba(0, 0, 0, 0.12);',
    main: '0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 2px 4px 0px rgba(0, 0, 0, 0.02);',
  },
  colors: {
    primary: {
      50: '#EBF0FF',
      100: '#D1DDFF',
      200: '#94AFFF',
      300: '#3366FF',
      400: '#245BFF',
      500: '#0A47FF',
      600: '#003DF5',
      700: '#0034D1',
      800: '#002DB3',
      900: '#001C70',
      main: '#0A47FF',
    },
    secondary: {
      50: '#F1EBFF',
      100: '#E0D1FF',
      200: '#BB99FF',
      300: '#5906FF',
      400: '#5000F0',
      500: '#4B00E0',
      600: '#4100C2',
      700: '#3A00AD',
      800: '#330099',
      900: '#1D0057',
      main: '#4B00E0',
    },
    error: {
      50: '#FDEDED',
      100: '#FAD6D7',
      200: '#F49A9D',
      300: '#E61E25',
      400: '#D8181E',
      500: '#CA161C',
      600: '#B31419',
      700: '#A11217',
      800: '#810E12',
      900: '#650B0E',
      main: '#CA161C',
    },
    warning: {
      50: '#FFF6E1',
      100: '#FFEDC2',
      200: '#FED980',
      300: '#FEBE2A',
      400: '#F9AE01',
      500: '#E4A001',
      600: '#CB8E01',
      700: '#B78001',
      800: '#986B01',
      900: '#6B4B00',
      main: '#E4A001',
    },
    info: {
      50: '#E5EDFB',
      100: '#CADBF6',
      200: '#88ADEC',
      300: '#215FCC',
      400: '#1E59BD',
      500: '#1C50AB',
      600: '#19489A',
      700: '#17428D',
      800: '#123672',
      900: '#0D254F',
      main: '#1C50AB',
    },
    success: {
      50: '#E9F7EC',
      100: '#D2EFD8',
      200: '#96D9A5',
      300: '#48BD62',
      400: '#40B058',
      500: '#3BA552',
      600: '#359249',
      700: '#2F8341',
      800: '#266934',
      900: '#1C4F27',
      main: '#3BA552',
    },
    neutral: {
      0: '#FFFFFF',
      1000: '#000000',
    },
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
    white: '#fff',
    black: '#000',
  },
  font: {
    family: {
      base: "'Inter', inherit, sans-serif",
    },
    weight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
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
  lineHeight: {
    100: 1,
    200: 1.25,
    300: 1.5,
  },
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
