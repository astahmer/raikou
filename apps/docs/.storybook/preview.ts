import { withThemeByDataAttribute } from "@storybook/addon-styling";
import type { Preview } from "@storybook/react";
import "../panda.css"

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "dark",
    attributeName: "data-raikou-color-scheme",
  }),
];

export default preview;
