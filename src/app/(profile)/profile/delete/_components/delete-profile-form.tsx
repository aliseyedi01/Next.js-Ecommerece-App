"use client";

import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
  Input,
  toast,
} from "@components/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { Bomb } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const ConfirmationWord = "DELETE";

const FormSchema = z.object({
  confirmation: z.literal(ConfirmationWord),
});

export function DeleteProfileForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
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

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="confirmation"
          render={({ field }) => (
            <FormItem>
              <FormDescription className="pb-2 font-mono text-sm">
                To confirm this , type &#34;DELETE&#34;
              </FormDescription>
              <FormControl>
                <Input {...field} icon={<Bomb />} className="w-1/2" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Confirm Delete</Button>
      </form>
    </Form>
  );
}
