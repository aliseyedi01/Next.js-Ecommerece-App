import type { Meta, StoryObj } from "@storybook/react";

import { Slider } from "@components/ui";

const meta = {
  title: "Slider",
  component: Slider,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (_args) => (
    <div className="flex w-[500px] flex-col gap-12">
      <Slider defaultValue={[50]} max={100} step={1} className="w-[100%]" />

      <Slider defaultValue={[25, 75]} max={100} step={1} className="w-[100%]" />
    </div>
  ),
};
