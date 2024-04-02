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
import { Mail, NotebookPen, Phone, UserRound } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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
  phone: z
    .string({
      required_error: "Please enter a phone number",
    })
    .max(14, "Phone is too long")
    .transform((value) => value?.trim())
    .refine(
      (value) =>
        /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(value),
      "Invalid phone number format",
    ),
});

export default function EditInformationProfile() {
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

  const [inputValue, setInputValue] = useState<string>();

  const handleFocus = () => {
    setInputValue("+98");
  };

  const handleBlur = () => {
    if (inputValue === "+98") {
      setInputValue("");
    }
  };

  const handlePhoneChange = (event: any) => {
    const inputPhoneNumber = event.target.value;

    console.log("value 1", inputPhoneNumber);

    const numbersOnly = inputPhoneNumber.replace(/\D/g, "");

    console.log("numbersOnly", numbersOnly);

    // Format the extracted numbers using regex
    const formattedNumber = numbersOnly.replace(
      /(\d{2})(\d{3})(\d{3})(\d{4})/,
      "+$1 $2 $3 $4",
    );

    console.log("formattedNumber", formattedNumber);

    setInputValue(formattedNumber);
  };

  return (
    <div className="flex h-full w-1/2 flex-col space-y-8 rounded-lg bg-slate-100 p-7">
      <h3 className="font-medium">Personal Information</h3>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-col space-y-5 px-5 md:order-2"
        >
          <div className="flex gap-3">
            {/* Fullname Field */}
            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem className="">
                  <FormControl>
                    <Input
                      className=""
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
                <FormItem className="">
                  <FormControl>
                    <Input
                      className=""
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
          {/* Phone Number Field */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    onFocus={handleFocus}
                    placeholder="+98-XXX-XXX-XXXX"
                    {...field}
                    value={inputValue}
                    onBlur={handleBlur}
                    onChange={handlePhoneChange}
                    icon={<Phone />}
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
          <div className="flex items-center justify-between"></div>
          <Button
            type="submit"
            className="w-full rounded-full text-lg tracking-widest"
          >
            Sign Up
          </Button>
        </form>
      </Form>
    </div>
  );
}
