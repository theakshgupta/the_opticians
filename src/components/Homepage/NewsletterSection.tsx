"use client";

import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Check } from "lucide-react";

// Use Zod's built-in email validation
const newsletterSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

type NewsletterFormData = z.infer<typeof newsletterSchema>;

const Newsletter = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      // Clean up the timer if the component unmounts
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const onSubmit = async (data: NewsletterFormData) => {
    setIsSubmitting(true);

    // Simulate an API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);
    reset();

    timerRef.current = setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section
      className="px-5 pt-16 my-16 md:px-10 lg:px-20 border-t"
      aria-labelledby="newsletter-heading"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div>
          <div
            className="w-40 h-2 bg-[#000065] mb-6"
            aria-hidden="true"
          />
          <h1
            id="newsletter-heading"
            className="text-4xl font-medium md:text-5xl xl:text-6xl mb-4"
          >
            Stay Updated
          </h1>
          <p className="text-base font-light lg:text-lg text-gray-600 w-full lg:w-3/4">
            Sign up for our newsletter to receive the latest updates, exclusive
            offers, and eyewear trends.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="font-medium text-base md:text-lg block"
              >
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="example@email.com"
                aria-label="Enter your email address"
                className="w-full h-11 mt-2 text-base md:text-lg shadow-sm focus:ring-2 focus:ring-[#000065] focus:outline-none"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <Button
              type="submit"
              aria-label="Subscribe to our newsletter"
              className="w-full h-11 text-base text-white hover:bg-[#000065] transition focus:ring-2 focus:ring-[#000065]"
              disabled={isSubmitting || submitted}
            >
              {submitted ? (
                <>
                  <Check size={20} className="mr-2" />
                  Thank You
                </>
              ) : isSubmitting ? (
                "Submitting..."
              ) : (
                "Subscribe"
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
