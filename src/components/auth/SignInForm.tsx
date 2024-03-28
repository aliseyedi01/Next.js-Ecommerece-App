"use client";

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
} from "@components/ui";
import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { KeyRound, Lock, LockKeyhole, Mail } from "lucide-react";
import { toast } from "../ui/use-toast";

const FormSchema = z.object({
  email: z
    .string({
      required_error: "Please enter an email",
    })
    .max(255, "Email is too long.")
    .refine(
      (value) => /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value),
      "Invalid email address",
    ),
  password: z
    .string({
      required_error: "Please enter a password",
    })
    .min(8, "Password must be at least 8 characters long")
    .max(18, "Password is too long."),
});

export default function SignInForm() {
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
    <div className="flex h-screen items-center justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="font-kanit rtl:font-iranSans order-1 w-5/6 space-y-6 md:order-2 md:w-3/12"
        >
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
          {/* Password Field */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Password"
                    type="password"
                    icon={<KeyRound />}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="font-mitr rtl:font-iranSans w-full">
            Log In
          </Button>
        </form>
      </Form>
    </div>
  );
}
