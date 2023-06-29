import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    './node_modules/@raikou/core/dist/panda.buildinfo.json',
    './app/**/*.{ts,tsx}'
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {}
  },

  // The output directory for your css system
  outdir: '@raikou/styled-system',
  emitPackage: true,
  jsxFramework: 'react',
});