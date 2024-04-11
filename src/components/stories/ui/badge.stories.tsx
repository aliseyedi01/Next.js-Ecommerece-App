import { Badge } from "@components/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Badge,
  title: "Badge",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "The contents of the badge.",
    },
    variant: {
      control: "radio",
      type: "string",
      description: "The style variant of the button.",
      options: ["default", "secondary", "destructive", "outline"],
      table: {
        defaultValue: {
          summary: "default",
        },
      },
      title: {
        control: "text",
        description: "Used to describe badge.",
      },
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default",
  },
};

export const Secondary: Story = {
  args: {
    children: "approved",
    variant: "secondary",
  },
};

export const Destructive: Story = {
  args: {
    children: "destructive",
    variant: "destructive",
  },
};

export const Outline: Story = {
  args: {
    children: "outline",
    variant: "outline",
  },
};
