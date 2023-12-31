import { defineConfig } from '@pandacss/dev';
import { badgeRoot, badgeLabel, badgeSection } from "@raikou/core";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    './node_modules/@raikou/core/src/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}'
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      recipes: {
        badgeRoot: badgeRoot,
        badgeLabel: badgeLabel,
        badgeSection: badgeSection,
      },
    }
  },

  // The output directory for your css system
  outdir: '@raikou/styled-system',
  emitPackage: true,
  jsxFramework: 'react',
});