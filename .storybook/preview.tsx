import React from "react";
import type { Preview } from "@storybook/react";
import "../src/style/globals.css";
import { withThemeByClassName } from "@storybook/addon-themes";
import { kanit } from "../src/libs/font";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { themes } from "@storybook/theming";

const preview: Preview = {
  decorators: [
    (Story) => (
      <>
        <div className={`font-sans ${kanit.className}`}>
          <Story />
        </div>
      </>
    ),
    withThemeByClassName({
      defaultTheme: "light",
      themes: {
        dark: "dark",
        light: "light",
      },
    }),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
    nextjs: {
      appDirectory: true,
    },
    options: {
      storySort: {
        order: ["Button", "Footer", "Header"],
      },
    },
    docs: {
      toc: true,
    },
    darkMode: {
      dark: { ...themes.dark },
      light: { ...themes.normal },
    },
  },
};

export default preview;
