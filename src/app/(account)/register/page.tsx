"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
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
import { Checkbox } from "@/components/ui/checkbox";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

// Validation Schema
const formSchema = z
  .object({
    fullName: z.string().nonempty({ message: "Full name is required." }),
    phoneNumber: z
      .string()
      .nonempty({ message: "Phone number is required." })
      .refine((value) => /^\+[1-9]\d{1,14}$/.test(value), {
        message: "Invalid phone number format (e.g., +1234567890).",
      }),
    age: z.preprocess(
      (value) => (typeof value === "string" && value.trim() === "" ? undefined : Number(value)),
      z.number().min(1, { message: "Age must be at least 1." }).max(120, { message: "Age must be at most 120." })
    ),
    email: z.string().nonempty({ message: "Email is required." }).email({ message: "Invalid email address." }),
    password: z
      .string()
      .nonempty({ message: "Password is required." })
      .min(6, { message: "Password must be at least 6 characters long." }),
    confirmPassword: z.string().nonempty({ message: "Password confirmation is required." }),
    acceptTerms: z.boolean().refine((val) => val === true, { message: "You must accept the terms." }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords must match.",
  });

type FormSchema = z.infer<typeof formSchema>;

const RegisterPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      age: undefined,
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    },
  });

  // Form submission handler
  const onSubmit = async (values: FormSchema) => {
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error("Registration failed");

      setSubmitSuccess(true);
      form.reset(); // Clear form on success
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row w-full h-full">
      {/* Left Section - Background Image */}
      <div className="relative h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[100vh] w-full lg:w-1/2 lg:sticky lg:top-0">
        <Image
          src="/login.jpg"
          alt="Registration background"
          fill
          className="object-cover rounded-b-3xl lg:rounded-r-3xl"
        />
      </div>

      {/* Right Section - Form */}
      <div className="w-full lg:w-1/2 px-5 py-10 sm:p-10 md:p-16 flex flex-col gap-6">
        {/* Logo */}
        <Link href="/">
          <div className="-ml-1 w-40 lg:w-52">
            <Image
              src="/logo/logo.svg"
              alt="Company Logo"
              width={250}
              height={100}
              className="w-full h-full object-contain"
            />
          </div>
        </Link>

        {/* Welcome Text */}
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl lg:text-6xl font-medium">Join Us Today</h1>
          <p className="text-gray-600 text-sm md:text-base font-light">
            Create an account and enjoy personalized recommendations, special discounts, and more.
          </p>
        </div>

        {/* Social Login Buttons */}
        <div className="flex flex-col gap-4 w-full">
          <div className="flex gap-2 w-full">
            <Button
              variant="outline"
              className="w-full flex items-center justify-center h-12 px-10 md:px-4"
              aria-label="Sign up with Google"
            >
              <Image src="/signInButtons/google.svg" alt="Google" width={24} height={24} />
              <span className="hidden md:block text-base">Google</span>
            </Button>
            <Button
              variant="outline"
              className="w-full flex items-center justify-center h-12 px-10 md:px-4"
              aria-label="Sign up with Apple"
            >
              <Image src="/signInButtons/apple.svg" alt="Apple" width={24} height={24} />
              <span className="hidden md:block text-base">Apple</span>
            </Button>
            <Button
              variant="outline"
              className="w-full flex items-center justify-center h-12 px-10 md:px-4"
              aria-label="Sign up with Facebook"
            >
              <Image src="/signInButtons/facebook.svg" alt="Facebook" width={24} height={24} />
              <span className="hidden md:block text-base">Facebook</span>
            </Button>
          </div>
        </div>

        {/* Separator */}
        <div className="flex items-center gap-2">
          <Separator className="flex-1" />
          <span className="text-gray-500">Or Sign up with</span>
          <Separator className="flex-1" />
        </div>

        {/* Registration Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
            {/* Full Name */}
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Full Name" className="h-11 text-base" aria-label="Full Name" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone Number and Age */}
            <div className="flex flex-col sm:flex-row gap-2 w-full">
              <div className="w-full sm:w-3/4">
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <PhoneInput
                          value={field.value}
                          onChange={field.onChange}
                          defaultCountry="IN"
                          international
                          withCountryCallingCode
                          className="h-11 text-base flex gap-1 border px-3 rounded-md shadow-sm focus-visible:ring-0 focus-visible:ring-offset-0"
                          aria-label="Phone Number"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-full sm:w-1/4">
                <FormField
                  control={form.control}
                  name="age"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Age</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="number"
                          placeholder="e.g., 25"
                          className="h-11 text-base"
                          aria-label="Age"
                          min={1}
                          max={120}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="example@email.com"
                      className="h-11 text-base"
                      aria-label="Email Address"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password and Confirm Password */}
            <div className="flex flex-col md:flex-row gap-2 w-full">
              <div className="w-full md:w-1/2">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            {...field}
                            type={passwordVisible ? "text" : "password"}
                            placeholder="Enter your password"
                            className="h-11 text-base pr-10"
                            aria-label="Password"
                          />
                          <button
                            type="button"
                            onClick={() => setPasswordVisible(!passwordVisible)}
                            className="absolute inset-y-0 right-2 flex items-center text-gray-500"
                            aria-label="Toggle password visibility"
                          >
                            {passwordVisible ? <EyeClosed size={20} /> : <Eye size={20} />}
                          </button>
                        </div>
                      </FormControl>
                      <p className="text-sm text-gray-500">At least 6 characters</p>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-full md:w-1/2">
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            {...field}
                            type={confirmPasswordVisible ? "text" : "password"}
                            placeholder="Re-enter your password"
                            className="h-11 text-base pr-10"
                            aria-label="Confirm Password"
                          />
                          <button
                            type="button"
                            onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                            className="absolute inset-y-0 right-2 flex items-center text-gray-500"
                            aria-label="Toggle confirm password visibility"
                          >
                            {confirmPasswordVisible ? <EyeClosed size={20} /> : <Eye size={20} />}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Terms & Conditions */}
            <FormField
              control={form.control}
              name="acceptTerms"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex items-start gap-2 my-2">
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="w-5 h-5"
                        id="termsAndPrivacy"
                        aria-label="Accept Terms and Privacy Policy"
                      />
                      <label htmlFor="termsAndPrivacy" className="text-sm leading-snug">
                        I agree to the{" "}
                        <Link
                          href="/terms-and-conditions"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline hover:text-[#000065]"
                        >
                          Terms & Conditions
                        </Link>{" "}
                        and{" "}
                        <Link
                          href="/privacy-policy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline hover:text-[#000065]"
                        >
                          Privacy Policy
                        </Link>
                        .
                      </label>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button type="submit" className="w-full h-11 text-base text-base" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Next"}
            </Button>

            {/* Submission Feedback */}
            {submitSuccess && (
              <p className="text-green-600 mt-2">Registration successful! Please log in.</p>
            )}
            {submitError && <p className="text-red-600 mt-2">Error: {submitError}</p>}
          </form>
        </Form>

        {/* Login Link */}
        <div>
          <Link href="/login" title="Login to your account">
            Already have an account?{" "}
            <span className="text-[#000065] font-medium">Login now.</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;