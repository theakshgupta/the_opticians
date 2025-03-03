"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "./ui/form";

interface DeliveryResult {
  estimatedDate: string;
  productionDays: number;
  shippingDays: number;
  totalDays: number;
}

const productionDays = 3;

const formSchema = z.object({
  pincode: z.string().min(1, { message: "Please Enter Your Pincode." }),
});

type FormValues = z.infer<typeof formSchema>;

/**
 * Format the date as "18 February 2025"
 */
const formatDeliveryDate = (date: Date): string => {
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
};

const DeliveryEstimator: React.FC = () => {
  const [deliveryResult, setDeliveryResult] = useState<DeliveryResult | null>(
    null
  );
  const [loading, setLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { pincode: "" },
  });

  const onSubmit = (data: FormValues) => {
    setLoading(true);
    const { pincode } = data;

    // Simulate shipping time based on the destination PIN.
    let shippingDays = 0;
    if (pincode.startsWith("14")) {
      shippingDays = 1;
    } else if (pincode.startsWith("11")) {
      shippingDays = 2;
    } else {
      shippingDays = 3;
    }

    const totalDays = productionDays + shippingDays;
    const currentDate = new Date();
    const estimatedDate = new Date();
    estimatedDate.setDate(currentDate.getDate() + totalDays);

    setDeliveryResult({
      productionDays,
      shippingDays,
      totalDays,
      estimatedDate: formatDeliveryDate(estimatedDate),
    });
    setLoading(false);
  };

  return (
    <div className="w-full">
      <h2 className="text-lg font-medium mb-2">Check Delivery Date</h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full flex gap-1"
        >
          <div className="flex-1">
            <FormField
              control={form.control}
              name="pincode"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="e.g. 146001"
                      {...field}
                      aria-label="Enter your pincode"
                      className="h-11 w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="h-11" disabled={loading}>
            {loading ? "Checking..." : "Check"}
          </Button>
        </form>
      </Form>

      {deliveryResult && (
        <div className="mt-4">
          <p className="text-lg font-medium">
            Get it by <span className="text-blue-600">{deliveryResult.estimatedDate}</span>
          </p>
          <p className="mt-1 text-sm text-gray-600">
            (Delivery Date could be revised based on lens selection)
          </p>
        </div>
      )}
    </div>
  );
};

export default DeliveryEstimator;
