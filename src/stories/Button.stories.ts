import type { Meta, StoryObj } from '@storybook/react';
import { Button } from "@components/ui";


const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: {
      control: "text",
      description: "The contents of the button.",
    },
    variant: {
      control: "radio",
      description: "The style variant of the button.",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "link",
        "ghost",
      ],
      table: {
        defaultValue: {
          summary: "default",
        },
      },
      title: {
        control: "text",
        description:
          "Used to describe an icon button for screen readers and search engines.",
      },
      type: "string",
    },
    size: {
      control: "radio",
      description: "The size variant of the button.",
      options: ["default", "sm", "lg" , "icon"],
      table: {
        defaultValue: {
          summary: "default",
        },
      },
      type: "string",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default",
    variant: "default",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
};

export const Link: Story = {
  args: {
    children: "Link",
    variant: "link",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
  },
};


export const Small: Story = {
  args: {
    children: "Icon",
    size: "icon",
  },
};

export const Medium: Story = {
  args: {
    children: "Small",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    children: "Large",
    size: "lg",
  },
};




