/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import * as path from 'path';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { extendTheme, pigment } from '@pigment-css/vite-plugin';
import { DEFAULT_THEME, DEFAULT_DARK_THEME } from './src/theming/theme';

const theme = extendTheme({
  colorSchemes: {
    light: DEFAULT_THEME,
    dark: DEFAULT_DARK_THEME,
  },
  cssVarPrefix: 'snow',
});

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/packages/snow',

  plugins: [
    pigment({
      theme,
    }),
    react(),
    nxViteTsPaths(),
    dts({
      entryRoot: 'src',
      tsconfigPath: path.join(__dirname, 'tsconfig.lib.json'),
    }),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  // Configuration for building your library.
  // See: https://vitejs.dev/guide/build.html#library-mode
  build: {
    outDir: '../../dist/packages/snow',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry: 'src/index.ts',
      name: 'snow',
      fileName: 'index',
      // Change this to the formats you want to support.
      // Don't forget to update your package.json as well.
      formats: ['es'],
    },
    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'framer-motion',
        '@pigment-css/react',
        '@floating-ui/react',
      ],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
        // entryFileNames: '[name].js',
        dir: '../../dist/packages/snow',
        banner: `'use client';`,
        // exports: 'named',
        entryFileNames: (chunkInfo) => {
          if (chunkInfo.name.includes('node_modules')) {
            return chunkInfo.name.replace('node_modules', 'external') + '.js';
          }

          return '[name].js';
        },
      },
    },
  },

  test: {
    watch: false,
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../coverage/packages/snow',
      provider: 'v8',
    },
  },
});
