"use client";

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
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
});

const LoginPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Form Submitted:", values);
  };

  return (
    <div className="flex flex-col lg:flex-row w-full h-full">
      {/* Left Section */}
      <div className="relative h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[100vh] w-full lg:w-1/2 lg:sticky lg:top-0">
        <Image
          src="/login.jpg"
          alt="Login Image"
          fill
          className="object-cover rounded-b-3xl lg:rounded-r-3xl"
        />
      </div>

      {/* Right Section */}
      <div className="h-max w-full lg:w-1/2 rounded-2xl px-5 py-10 sm:p-10 md:p-16 xl:px-24 flex flex-col gap-6">
        {/* Logo */}
        <div className="-ml-1 w-40 lg:w-52">
          <Image
            src="/logo/logo.svg"
            alt="Login Logo"
            width={250}
            height={100}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Welcome Text */}
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl lg:text-5xl font-medium">Welcome Back!</h1>
          <p className="text-gray-600 font-light">
            Log in to access your account.
          </p>
        </div>

        {/* Social Login Buttons */}
        <div className="w-full flex flex-col justify-between items-center gap-4">
          <div className="flex gap-2 w-full">
            <Button
              variant="outline"
              className="w-full flex items-center justify-center h-12 px-10 md:px-4"
            >
              <Image
                src="/signInButtons/google.svg"
                alt="Google"
                width={24}
                height={24}
              />
              <span className="hidden md:block text-base">Google</span>
            </Button>
            <Button
              variant="outline"
              className="w-full flex items-center justify-center h-12 px-10 md:px-4"
            >
              <Image
                src="/signInButtons/apple.svg"
                alt="Apple"
                width={24}
                height={24}
              />
              <span className="hidden md:block text-base">Apple</span>
            </Button>
            <Button
              variant="outline"
              className="w-full flex items-center justify-center h-12 px-10 md:px-4"
            >
              <Image
                src="/signInButtons/facebook.svg"
                alt="Facebook"
                width={24}
                height={24}
              />
              <span className="hidden md:block text-base">Facebook</span>
            </Button>
          </div>
        </div>

        {/* Separator */}
        <div className="flex items-center gap-2">
          <Separator className="flex-1" />
          <span className="text-gray-500">Or Log in with</span>
          <Separator className="flex-1" />
        </div>

        {/* Login Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Email Field */}
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
                      className="h-10"
                      aria-label="Email Address"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="">
              {/* Password Field */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeholder="Enter your password"
                        className="h-10"
                        aria-label="Password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button variant="ghost">Forgot Password?</Button>
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full h-12 text-base">
              Log In
            </Button>
          </form>
        </Form>

        <div>
          <Link href="/register" title="Sign Up to create an account.">
            <span className="text-[#000065] font-medium">New Here?</span> Register now.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
