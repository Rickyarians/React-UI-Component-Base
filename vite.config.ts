import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,

    // 🔥 performance
    threads: true,

    // 🔥 coverage
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      reportsDirectory: './coverage',
      exclude: [
        'node_modules/',
        'dist/',
        '**/*.d.ts',
        '**/*.config.*',
        '**/__tests__/**',
      ],
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 75,
        statements: 80,
      },
    },

    // 🔥 alias support (kalau pakai path)
    alias: {
      '@': '/src',
    },

    // 🔥 include test file
    // include: ['helper/**/*.{test,spec}.{ts,tsx}'],
  },
});