import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    // "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    {
      titlePrefix: "component",
      directory: "../src/components/stories/ui",
      files: "**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)",
    },
  ],
  typescript: {
    // reactDocgen: "react-docgen",
    check: false,
  },
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-onboarding",
    "@storybook/addon-themes",
    "@storybook/addon-viewport",
    "storybook-dark-mode",
    "@storybook/addon-docs",
    "@storybook/addon-actions",
    // {
    //   name: "@storybook/addon-docs",
    //   options: {
    //     csfPluginOptions: null,
    //     mdxPluginOptions: {},
    //   },
    // },
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {
      options: { builder: { useSWC: true } },
      nextConfigPath: path.resolve(__dirname, "../next.config.mjs"),
    },
  },
  docs: {
    autodocs: "tag",
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
