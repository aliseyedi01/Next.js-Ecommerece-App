"use client";

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Checkbox,
  Input,
  Separator,
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
import { toast } from "../../../../components/ui/use-toast";
import Link from "next/link";
import Image from "next/image";

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
    <div className="h-fit w-[90%] space-y-7  text-foreground md:w-[25rem]">
      <h2 className="text-left text-xl font-bold text-foreground">
        Nice to see you again
      </h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="font-kanit rtl:font-iranSans order-1 w-full space-y-6 md:order-2"
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
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember Me
              </label>
            </div>
            <div>
              <Link href="/contact">
                <p className="text-sm text-blue-600">Forget Password ?</p>
              </Link>
            </div>
          </div>
          <Button
            type="submit"
            className="font-mitr rtl:font-iranSans  w-full rounded-full text-lg tracking-widest"
          >
            Sign In
          </Button>
        </form>
      </Form>
      <Separator className="rounded-full bg-blue-500/60" />
      <div>
        <Link href="/contact">
          <Button
            type="submit"
            className="font-mitr rtl:font-iranSans w-full gap-2 rounded-full bg-blue-800 text-lg text-background"
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
        <p className=" text-center text-foreground/75">Dont have a account ?</p>
        <Link href="/signup">
          <p className="text-blue-600">Sign up now</p>
        </Link>
      </div>
    </div>
  );
}
