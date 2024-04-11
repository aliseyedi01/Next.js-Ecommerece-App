import { Button, Toast, ToastAction, Toaster, toast } from "@components/ui";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render() {
    return (
      <>
        <Toaster />
        <Button
          variant="outline"
          onClick={() => {
            toast({
              variant: "default",
              description: "Your message has been sent.",
            });
          }}
        >
          Show Toast
        </Button>
      </>
    );
  },
};

export const Destructive: Story = {
  render() {
    return (
      <>
        <Toaster />
        <Button
          variant="outline"
          onClick={() => {
            toast({
              title: "Uh oh! Something went wrong.",
              description: "There was a problem with your request.",
              variant: "destructive",
            });
          }}
        >
          Show Toast
        </Button>
      </>
    );
  },
};

export const Success: Story = {
  render() {
    return (
      <>
        <Toaster />
        <Button
          variant="outline"
          onClick={() => {
            toast({
              title: "Amazing!",
              variant: "default",
              description: "The payment was successfully",
            });
          }}
        >
          Show Toast
        </Button>
      </>
    );
  },
};
