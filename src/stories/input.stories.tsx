import { Input } from "@components/ui";
import type { Meta, StoryObj } from "@storybook/react";
import { UserRound } from "lucide-react";

const meta = {
  component: Input,
  title: "Input",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "The contents of the badge.",
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Icon: Story = {
  args: {
    icon: <UserRound />,
  },
};
