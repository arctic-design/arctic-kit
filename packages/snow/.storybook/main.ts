import type { StorybookConfig } from '@storybook/react-vite';
import * as path from 'path';
import { mergeConfig, searchForWorkspaceRoot } from 'vite';

const config: StorybookConfig = {
  stories: ['../src/lib/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: 'vite.config.ts',
      },
    },
  },
  viteFinal: async (config, { configType }) => {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@fontsource/inter': path.resolve(
            __dirname,
            '../../../node_modules/@fontsource/inter'
          ),
        },
      },
      server: {
        fs: {
          allow: [
            // search up for workspace root
            searchForWorkspaceRoot(process.cwd()),
            path.resolve(__dirname, '../../../node_modules/@fontsource/inter'),
          ],
        },
      },
    });
  },
};

export default config;

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/recipes/storybook/custom-builder-configs
