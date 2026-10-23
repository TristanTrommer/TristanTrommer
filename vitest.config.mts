import path from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: { alias: { '@': path.resolve(import.meta.dirname, '.') } },
  test: {
    // A test never reads another's calls, environment variables or globals.
    clearMocks: true,
    unstubEnvs: true,
    unstubGlobals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
    include: ['./tests/**/*.test.{ts,tsx}'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      include: [
        'actions/**/*.ts',
        'app/**/*.{ts,tsx}',
        'components/**/*.{ts,tsx}',
        'context/**/*.tsx',
        'helper/**/*.ts',
        'hooks/**/*.ts',
        'imageLoader.ts'
      ],
      exclude: ['**/*.d.ts']
    }
  }
});
