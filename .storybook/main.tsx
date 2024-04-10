import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  typescript: {
    reactDocgen: "react-docgen",
    check: false,
  },
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
    "@storybook/addon-viewport",
    "storybook-dark-mode",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {
      options: { builder: { useSWC: true } },
      nextConfigPath: path.resolve(__dirname, "../next.config.mjs"),
    },
  },
  docs: {
    autodocs: true,
  },
  staticDirs: ["./public"],
  webpackFinal: async (config) => {
    const resolve = config.resolve || {};
    resolve.alias = {
      ...resolve.alias,
      "@": path.resolve(__dirname, "../src"),
    };
    return { ...config, resolve };
  },
};
export default config;
