import { defineConfig } from '@pandacss/dev';
import { badgeRoot, badgeLabel, badgeSection } from './src/components/Badge/badge.recipe'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/components/**/*.{ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      recipes: {
        badgeRoot: badgeRoot,
        badgeLabel: badgeLabel,
        badgeSection: badgeSection
      }      
    }
  },

  // The output directory for your css system
  outdir: '@raikou/styled-system',
  emitPackage: true,
  jsxFramework: 'react',
});