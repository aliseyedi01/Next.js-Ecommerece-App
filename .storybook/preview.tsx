import React from "react";
import type { Preview } from "@storybook/react";
import "../src/style/globals.css";
import { withThemeByClassName } from "@storybook/addon-themes";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { themes } from "@storybook/theming";
import { kanit } from "../src/libs/font";

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
    layout: "centered",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      expanded: true,
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
    nextjs: {
      appDirectory: true,
    },
    // options: {
    //   storySort: {
    //     order: ["Button", "Footer", "Header"],
    //   },
    // },
    docs: {
      theme: themes.normal,
      toc: true,
    },
    theme: {
      ...themes.dark,
    },
    darkMode: {
      dark: { ...themes.dark },
      light: { ...themes.normal },
    },
  },
};

export default preview;
