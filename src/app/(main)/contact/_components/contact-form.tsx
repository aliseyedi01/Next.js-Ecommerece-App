"use client";

import { Button, Input, Textarea, toast } from "@components/ui";
// components
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@components/ui/form";
// hooks
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MessageSquareText, UserRound } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const FormSchema = z.object({
  username: z
    .string({
      required_error: "Please enter a username",
    })
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(16, {
      message: "Username must not be longer than 16 characters.",
    }),
  email: z
    .string({
      required_error: "Please enter an email",
    })
    .refine(
      (value) => /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value),
      "Invalid email address",
    ),
  message: z
    .string({
      required_error: "Please enter a message",
    })
    .min(10, {
      message: "Message must be at least 10 characters.",
    })
    .max(150, {
      message: "Message must not be longer than 150 characters.",
    }),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "Success !",
      description: "your message has been sent successfully",
      variant: "default",
      className: "rtl:font-iranSans font text-lg font-kanit",
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="rtl:font-iranSans order-1 w-5/6 space-y-6 font-kanit md:order-2 md:w-2/3"
      >
        {/* UserName Field */}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="relative"
                  placeholder="Username"
                  icon={<UserRound />}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Email Field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Email" icon={<Mail />} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Message Field */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Message"
                  {...field}
                  icon={<MessageSquareText />}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="font-mitr rtl:font-iranSans w-full">
          Send
        </Button>
      </form>
    </Form>
  );
}
