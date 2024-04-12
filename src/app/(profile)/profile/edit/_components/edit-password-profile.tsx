"use client";
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  toast,
} from "@components/ui";
import { resetPass } from "@constants/images";
import { zodResolver } from "@hookform/resolvers/zod";
import { KeyRound, Lock } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const FormSchema = z.object({
  current: z
    .string({
      required_error: "Please enter a password",
    })
    .min(8, "Password must be at least 8 characters long")
    .max(18, "Password is too long."),
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

export default function EditPasswordProfile() {
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
    <div className="bg-section-profile flex h-full max-h-fit w-full items-center justify-between gap-5 rounded-lg p-3 md:h-1/2">
      <div className="flex h-full w-full flex-col gap-1 md:w-1/2 md:gap-2">
        <h2 className="mb-2">Reset Password</h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mx-auto flex h-full w-full flex-col justify-between gap-5 pt-3 md:w-full md:gap-0 md:pt-0"
          >
            {/* Current Password Field */}
            <FormField
              control={form.control}
              name="current"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Current Password"
                      className="relative"
                      type="password"
                      icon={<Lock />}
                      {...field}
                    />
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
                      placeholder="New Password"
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
                      placeholder="Confirm New Password"
                      type="password"
                      icon={<KeyRound />}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="justify-self-end rounded-lg tracking-wider"
            >
              Reset Password
            </Button>
          </form>
        </Form>
      </div>
      <div className="hidden md:flex">
        <Image
          src={resetPass}
          alt="About Us Image"
          width={100}
          height={100}
          className="size-60 rounded-lg"
        />
      </div>
    </div>
  );
}
