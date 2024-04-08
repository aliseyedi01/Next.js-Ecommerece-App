import Header from "@app/(main)/_components/header/Header";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Header,
  title: "Header",
  parameters: {
    layout: "",
  },
  argTypes: {},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
