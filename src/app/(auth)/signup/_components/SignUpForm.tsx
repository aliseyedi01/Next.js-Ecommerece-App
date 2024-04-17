"use client";

import { Button, Input, Separator, toast } from "@components/ui";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { KeyRound, Mail, NotebookPen, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const FormSchema = z.object({
  username: z
    .string({
      required_error: "Please enter a Username",
    })
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(16, {
      message: "Username must not be longer than 16 characters.",
    }),
  fullname: z
    .string({
      required_error: "Please enter a fullname",
    })
    .min(2, {
      message: "Fullname must be at least 2 characters.",
    })
    .max(16, {
      message: "Fullname must not be longer than 16 characters.",
    }),
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
  retypepassword: z
    .string({
      required_error: "Please enter a re-type password",
    })
    .min(8, "Password must be at least 8 characters long")
    .max(18, "Password is too long."),
});

export default function SignUpForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    if (data.password !== data.retypepassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
        className: "rtl:font-iranSans font text-lg font-kanit",
      });
      return;
    }

    toast({
      title: "Success !",
      description: "your message has been sent successfully",
      variant: "default",
      className: "rtl:font-iranSans font text-lg font-kanit",
    });
  }

  return (
    <div className="h-fit w-[90%] space-y-6  text-foreground md:w-[25rem]">
      <h2 className="text-left text-xl font-bold text-foreground">
        Welcome To Garb Shop
      </h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="order-1 w-full space-y-5 md:order-2"
        >
          <div className="flex gap-3">
            {/* Fullname Field */}
            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="relative "
                      placeholder="Fullname"
                      icon={<NotebookPen />}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* username Field */}
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
          </div>
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
          {/* Re-type Password Field */}
          <FormField
            control={form.control}
            name="retypepassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Re-type Password"
                    type="password"
                    icon={<KeyRound />}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-between"></div>
          <Button
            type="submit"
            className=" w-full rounded-full text-lg tracking-widest"
          >
            Sign Up
          </Button>
        </form>
      </Form>
      <Separator className="rounded-full bg-blue-500/60" />
      <div>
        <Link href="/contact">
          <Button
            type="submit"
            className="w-full gap-2 rounded-full bg-blue-800 text-lg text-background"
          >
            <Image
              src="/images/pages/google.svg"
              alt="google logo"
              width={100}
              height={100}
              className="size-6 rounded-full   object-contain "
            />
            Continue With Google
          </Button>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-2">
        <p className=" text-center text-foreground/75">Have a account ?</p>
        <Link href="/signin">
          <p className="text-blue-600">Sign In now</p>
        </Link>
      </div>
    </div>
  );
}
