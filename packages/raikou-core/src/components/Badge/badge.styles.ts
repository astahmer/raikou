import { css } from '../../../../../styled-system/css'
import { rem } from "../../core";

export const rootStyle = css({
  fontSize: "var(--badge-fz)",
    borderRadius: "var(--badge-radius)",
    height: "var(--badge-height)",
    // "-webkit-tap-highlight-color": "transparent",
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
})

export const labelStyle = css({
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
})

export const sectionStyle = css({
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
})
