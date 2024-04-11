import type { Meta, StoryObj } from "@storybook/react";

import { Label, Input } from "@components/ui";

const meta: Meta<typeof Label> = {
  title: "Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  parameters: {
    controls: { exclude: ["placeholder"] },
  },

  render: (_args) => {
    return (
      <div className="w-[300px]">
        <Label>Name</Label>
        <Input placeholder="Your name" />
      </div>
    );
  },
};
