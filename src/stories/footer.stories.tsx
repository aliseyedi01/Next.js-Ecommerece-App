import Footer from "@app/(main)/_components/footer/Footer";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Footer,
  title: "Footer",
  parameters: {
    layout: "",
    docs: {
      disable: true,
    },
  },
  argTypes: {},
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
