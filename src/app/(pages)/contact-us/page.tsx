"use client";

import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

import TextareaAutosize from "react-textarea-autosize";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters."),
  lastName: z.string().min(2, "Last name must be at least 2 characters."),
  email: z.string().email("Enter a valid email address."),
  phone: z.string().min(10, "Enter a valid phone number."),
  category: z.string().min(1, "Please select a reason for contact."),
  message: z.string().min(5, "Message must be at least 5 characters long."),
});

const ContactUsPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      category: "",
      message: "",
    },
  });

  const onSubmit = useCallback((values: z.infer<typeof formSchema>) => {
    console.log("Form Data:", values);
  }, []);

  return (
    <div className="px-5 py-10 md:px-10 lg:px-16 flex flex-col items-center gap-5">
      {/* Header */}
      <div className="md:text-center">
        <h1 className="text-5xl font-medium tracking-tight md:text-6xl">
          Contact Us
        </h1>
        <p className="mt-2 text-sm md:text-base text-gray-600">
          We’re here to help! Reach out for any questions, feedback, or
          assistance.
        </p>
      </div>

      {/* Contact Form */}
      <div className="w-full md:w-2/3 lg:w-1/2 mt-5 md:mt-10">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="First Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Last Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="example@email.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <PhoneInput
                        {...field}
                        defaultCountry="IN"
                        international
                        withCountryCallingCode
                        className="h-11 w-full border px-3 rounded-md shadow-sm"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Reason for Contact</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="h-11">
                          <SelectValue placeholder="Select a reason" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="orderStatus">
                            Order Status
                          </SelectItem>
                          <SelectItem value="returnsAndRefunds">
                            Returns & Refunds
                          </SelectItem>
                          <SelectItem value="paymentIssues">
                            Payment Issues
                          </SelectItem>
                          <SelectItem value="shippingAndDelivery">
                            Shipping & Delivery
                          </SelectItem>
                          <SelectItem value="productInquiry">
                            Product Inquiry
                          </SelectItem>
                          <SelectItem value="prescriptionAssistance">
                            Prescription Assistance
                          </SelectItem>
                          <SelectItem value="complaintOrIssue">
                            Complaint/Issue
                          </SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <TextareaAutosize
                      placeholder="Briefly describe your issue or inquiry..."
                      // Remove any fixed height classes such as "h-max"
                      // Optionally add classes to disable manual resizing and hide scrollbars:
                      className="min-h-20 resize-none overflow-hidden w-full border rounded-md p-3"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full h-11">
              Submit
            </Button>
          </form>
        </Form>
      </div>

      {/* Contact Options */}
      <div className="w-full mt-10 md:mt-20">
        <h1 className="text-4xl md:text-5xl font-medium md:text-center">
          We'd Love to Hear From You
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5">
          {[
            {
              icon: <Mail size={26} />,
              title: "Email Support",
              desc: "Reach out and we’ll get back to you within 24 hours.",
              detail: "helpdesk@theopticians.in",
            },
            {
              icon: <MapPin size={26} />,
              title: "Visit Our Store",
              desc: "Explore our eyewear collection in person.",
              detail: (
                <span className="flex gap-2 items-center">
                  Location <ArrowRight size={18} />
                </span>
              ),
            },
            {
              icon: <Phone size={26} />,
              title: "Talk to Us",
              desc: "Call us for immediate assistance.",
              detail: "+91 9356472227",
            },
          ].map(({ icon, title, desc, detail }, index) => (
            <div
              key={index}
              className="flex flex-col gap-6 rounded-2xl p-6 bg-gray-50"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                {icon}
              </div>
              <div>
                <h1 className="text-2xl font-medium">{title}</h1>
                <p className="text-sm md:text-base text-gray-600">{desc}</p>
              </div>
              <span className="text-[#000065] text-lg font-semibold">
                {detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
