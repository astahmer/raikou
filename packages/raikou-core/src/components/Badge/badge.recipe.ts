import { defineRecipe } from '@pandacss/dev'
import { rem } from '../../core'

export const badgeRoot: any = defineRecipe({
  name: 'badgeRoot',
  jsx: ["Badge"],
  description: 'The styles for the Button component',
  base: {
    fontSize: "var(--badge-fz)",
    borderRadius: "var(--badge-radius)",
    height: "var(--badge-height)",
    "-webkit-tap-highlight-color": "transparent",
    lineHeight: `calc(var(--badge-height) - ${rem("2px")})`,
    textDecoration: "none",
    padding: "0 var(--badge-padding-x)",
    display: "var(--_badge-display, inline-flex)",
    alignItems: "center",
    justifyContent: "center",
    width: "var(--_badge-width, auto)",
    textTransform: "uppercase",
    fontWeight: 700,
    letterSpacing: rem("0.25px"),
    cursor: "inherit",
    textOverflow: "ellipsis",
    overflow: "hidden",

    color: "var(--badge-color)",
    background: "var(--badge-bg)",
    border: "var(--badge-bd)",

    _block: {
      "--badge-display": "flex",
      "--badge-width": "100%"
    }
  }
})

export const badgeLabel = defineRecipe({
  name: 'badgeLabel',
  jsx: ["Badge"],
  description: 'The styles for the Button component',
  base: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  }
})

export const badgeSection = defineRecipe({
  name: 'badgeSection',
  jsx: ["Badge"],
  description: 'The styles for the Button component',
  base: {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
  }
})
