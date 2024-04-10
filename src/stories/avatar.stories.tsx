import { Avatar, AvatarFallback, AvatarImage } from "@components/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Avatar,
  title: "Avatar",
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
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;
type AvatarImageStory = StoryObj<typeof AvatarImage>;
type AvatarFallbackStory = StoryObj<typeof AvatarFallback>;

export const Default: Story = {
  render: (args) => <Avatar {...args} />,
  args: {
    children: "SS",
  },
};

export const WithImage: AvatarImageStory = {
  render: (args) => (
    <Avatar>
      <AvatarImage {...args} />
    </Avatar>
  ),
  args: {
    src: "https://avatars.githubusercontent.com/u/51694759?v=4",
    width: 50,
    height: 50,
    alt: "SS",
  },
};

export const WithFallback: AvatarFallbackStory = {
  render: (args) => (
    <Avatar>
      <AvatarFallback {...args} />
    </Avatar>
  ),
  args: {
    children: "SS",
  },
};
