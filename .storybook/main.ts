import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";


const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-themes"
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {
      // strictMode: true,
      // nextConfigPath: path.resolve(__dirname, "../next.config.mjs"),
    },
  },
  docs: {
    autodocs: true,
    defaultName: "Documentation",
},
  staticDirs: ["..\\public"],
  async webpackFinal(config, { configType }) {
    if (config?.resolve?.alias) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "@/libs": path.resolve(__dirname, "../src/libs"),
        "@/components": path.resolve(__dirname, "../src/components"),
        "@/stories": path.resolve(__dirname, "../src/stories"),
        "@/types": path.resolve(__dirname, "../src/types"),
      };
    }
    return config;
  },
};
export default config;
