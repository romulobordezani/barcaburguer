/// <reference types="vitest" />
/// <reference types="vite/client" />

import {defineConfig} from 'vite';
import {configDefaults} from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/

export default defineConfig(() => {
  return {
    base: '/barcaburguer/',
    plugins: [tsconfigPaths()],
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
