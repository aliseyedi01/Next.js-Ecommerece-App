"use client";
import React, { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { Button } from "@components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@components/ui/input-otp";
import { toast } from "@components/ui/use-toast";
import { useCountdown } from "@hooks/UseCountDown";
import BlurringImage from "@components/utility/BluringImage";

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

export default function OTPForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  const [resendVisible, setResendVisible] = useState(false);

  const seconds = useCountdown(10);
  const minutes = Math.floor(seconds / 60);
  const formattedSeconds = seconds % 60;

  useEffect(() => {
    if (seconds === 0 && !resendVisible) {
      setResendVisible(true);
    }
  }, [seconds, resendVisible]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="pin"
          render={({ field }) => (
            <FormItem className="space-y-5">
              <FormLabel className="md:text-xl">
                Authenticate Your Account
              </FormLabel>
              <FormDescription className="w-64 text-foreground md:w-96 md:text-base">
                Enter the code that we send to your email : <br />
                <span className=" text-blue-400">
                  m***********432@gmail.com
                </span>
              </FormDescription>
              <FormControl>
                <InputOTP
                  maxLength={6}
                  {...field}
                  pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              {resendVisible ? (
                <p className="text-xs text-foreground md:text-base">
                  Did not receive OTP ?
                  <span className="ml-2 cursor-pointer text-blue-400 underline">
                    Resend
                  </span>
                </p>
              ) : (
                <p className="text-base text-blue-500">{`${minutes.toString().padStart(2, "0")}:${formattedSeconds.toString().padStart(2, "0")}`}</p>
              )}
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="md:w-1/2">
          Verify
        </Button>
      </form>
    </Form>
  );
}
