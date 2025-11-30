/// <reference types="vitest" />
/// <reference types="vite/client" />

import {defineConfig} from 'vite';
import {configDefaults} from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';
// @ts-expect-error: No type definitions for vite-plugin-handlebars
import handlebars from 'vite-plugin-handlebars';

// https://vitejs.dev/config/

export default defineConfig(() => {
  return {
    base: '/barcaburguer/',
    plugins: [
      tsconfigPaths(),
      handlebars({
        partialDirectory: [
          resolve(__dirname, 'src/modules/header'),
          resolve(__dirname, 'src/modules/footer'),
          resolve(__dirname, 'src/modules/preloader'),
          resolve(__dirname, 'src/modules/side-nav'),
          resolve(__dirname, 'src/pages/landing'),
          resolve(__dirname, 'src/pages/hamburguer'),
          resolve(__dirname, 'src/pages/tapioca'),
          resolve(__dirname, 'src/pages/acai'),
          resolve(__dirname, 'src/pages/cards'),
          resolve(__dirname, 'src/pages/about'),
          resolve(__dirname, 'src/modules/facebook'),
          resolve(__dirname, 'src/modules/service-worker'),
        ],
      }),
    ],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: 'src/setupTests.ts',
      css: true,
      exclude: [...configDefaults.exclude, 'build/*'],
      reporters: ['verbose', 'junit'],
      coverage: {
        reporter: ['lcov', 'text'],
      },
      outputFile: {
        junit: './coverage/junit-report.xml',
      },
    },
    server: {
      port: 4000,
    },
    build: {
      target: 'esnext',
      sourcemap: true,
      outDir: './docs',
    }
  };
});
