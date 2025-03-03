"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Define the schema with a descriptive key.
const formSchema = z.object({
  couponCode: z.string().min(2, {
    message: "Coupon code must be at least 2 characters.",
  }),
});

const CouponCodeInput: React.FC = () => {
  // Initialize the form with resolver and default values.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      couponCode: "",
    },
  });

  // Form submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Submitted coupon code:", values.couponCode);
  }

  return (
    <div className="w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full flex items-center"
        >
          <FormField
            control={form.control}
            name="couponCode"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    placeholder="Enter coupon code"
                    className="h-10 w-full"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="h-10 hover:bg-[#000065]">Apply</Button>
        </form>
      </Form>
    </div>
  );
};

export default CouponCodeInput;
