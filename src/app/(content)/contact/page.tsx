"use client";

import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import {
  CheckCircle,
  AlertCircle,
  X,
  Mail,
  MapPin,
  ArrowRight,
  Phone,
} from "lucide-react";
import TextareaAutosize from "react-textarea-autosize";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Link from "next/link";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters."),
  lastName: z.string().min(2, "Last name must be at least 2 characters."),
  email: z.string().email("Enter a valid email address."),
  phone: z.string().min(10, "Enter a valid phone number."),
  category: z.string().min(1, "Please select a reason for contact."),
  message: z.string().min(5, "Message must be at least 5 characters long."),
});

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

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

  const onSubmit = useCallback(
    async (values: z.infer<typeof formSchema>) => {
      setIsSubmitting(true);
      setSubmitSuccess(false);
      setSubmitError(null);

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        if (!response.ok) throw new Error("Failed to submit form");

        setSubmitSuccess(true);
        form.reset();
      } catch (error) {
        setSubmitError(
          error instanceof Error ? error.message : "An error occurred"
        );
      } finally {
        setIsSubmitting(false);
      }
    },
    [form]
  );

  return (
    <div className="px-5 py-10 md:px-10 lg:px-20 flex flex-col gap-5">
      {/* Header */}
      <header className="my-5">
        <h1 className="text-6xl font-medium tracking-tight md:text-7xl lg:text-8xl">
          Contact Us
        </h1>
        <p className="mt-2 text-sm md:text-base text-gray-600">
          We’re here to help! Reach out for any questions, feedback, or
          assistance.
        </p>
      </header>

      <div className="flex flex-col md:flex-row gap-5 md:gap-20">
        {/* Contact Form */}
        <section className="w-full md:w-2/3 lg:w-[70%]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="First Name"
                          className="h-11 text-base"
                          {...field}
                        />
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
                        <Input
                          placeholder="Last Name"
                          className="h-11 text-base"
                          {...field}
                        />
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
                        className="h-11 text-base"
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
                          className="h-11 w-full border px-3 rounded-md shadow-sm text-base"
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
                          <SelectTrigger className="h-11 text-base">
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
                        placeholder="Your message here..."
                        className="min-h-32 resize-none text-base w-full border rounded-md px-3 py-2"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full h-11"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>

              {submitSuccess && (
                <Alert variant="default" className="mt-4 relative">
                  <CheckCircle className="h-4 w-4" />
                  <AlertTitle>Message Sent</AlertTitle>
                  <AlertDescription>
                    Thank you! We’ll get back to you soon.
                  </AlertDescription>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2"
                    onClick={() => setSubmitSuccess(false)}
                    aria-label="Close success message"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </Alert>
              )}
              {submitError && (
                <Alert variant="destructive" className="mt-4 relative">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{submitError}</AlertDescription>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2"
                    onClick={() => setSubmitError(null)}
                    aria-label="Close error message"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </Alert>
              )}
            </form>
          </Form>
        </section>
        {/* Contact Options */}
        <aside className="w-full md:w-1/3 lg:w-[30%]">
          <div className="flex flex-col gap-6 mt-5">
            {[
              {
                icon: <Mail size={24} />,
                title: "Email Support",
                desc: "We’ll respond within 24 hours.",
                detail: (
                  <Link
                    href="mailto:helpdesk@theopticians.in"
                    className="text-[#000065] text-lg font-semibold hover:underline"
                  >
                    helpdesk@theopticians.in
                  </Link>
                ),
              },
              {
                icon: <MapPin size={24} />,
                title: "Visit Our Store",
                desc: "See our eyewear in person.",
                detail: (
                  <Link
                    href="https://maps.google.com/?q=zsVCtSv8nqmMX7ku7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#000065] text-lg font-semibold flex items-center gap-2 hover:underline"
                  >
                    Location <ArrowRight size={18} />
                  </Link>
                ),
              },
              {
                icon: <Phone size={24} />,
                title: "Talk to Us",
                desc: "Call for immediate help.",
                detail: (
                  <Link
                    href="tel:+919356472227"
                    className="text-[#000065] text-lg font-semibold hover:underline"
                  >
                    +91 9356472227
                  </Link>
                ),
              },
            ].map(({ icon, title, desc, detail }, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 rounded-2xl border p-6 bg-gray-50 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center text-[#000065]">
                  {icon}
                </div>
                <div>
                  <h2 className="text-xl font-medium">{title}</h2>
                  <p className="text-sm md:text-base text-gray-600">{desc}</p>
                </div>
                {detail}
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ContactPage;
