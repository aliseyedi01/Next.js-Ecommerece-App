import { Toggle } from "@components/ui";
import { Meta, StoryObj } from "@storybook/react";
import { Bold } from "lucide-react";

const meta: Meta<typeof Toggle> = {
  title: "Toggle",
  component: Toggle,
};

export default meta;

type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  render() {
    return (
      <Toggle aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </Toggle>
    );
  },
};
