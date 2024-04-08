import { Button } from "@components/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Vespi/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Add to bag",
    className : "w-full"
  },
};

export const General: Story = {
  args: {
    label: "Learn more about us",
  },
};

export const Special: Story = {
  args: {
    label: "Follow us on the gram",
    icon: true,
  },
};
