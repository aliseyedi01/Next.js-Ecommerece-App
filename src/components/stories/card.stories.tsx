import type { Meta, StoryObj } from "@storybook/react";

import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@components/ui";

const meta: Meta = {
  title: "Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type CardStory = StoryObj<typeof Card>;

export const Default: CardStory = {
  render: (args) => <Card {...args} />,
  args: {
    children: (
      <div className="w-96">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>Card Content</CardContent>
        <CardFooter>Card Footer</CardFooter>
      </div>
    ),
  },
};
