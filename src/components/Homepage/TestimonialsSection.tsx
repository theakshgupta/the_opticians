"use client";

import "../../app/globals.css";

import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

interface Testimonial {
  name: string;
  location: string;
  profileImage: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Himanshi Dhiman",
    location: "Hoshiarpur",
    profileImage: "/profile.jpg",
    quote:
      "I’ve tried many eyewear brands, but this one stands out for its quality and durability. Highly recommend!",
  },
  {
    name: "Rahul Sharma",
    location: "Delhi",
    profileImage: "/profile.jpg",
    quote:
      "Their service was exceptional! I would recommend them to anyone looking for quality eyewear.",
  },
  {
    name: "Priya Singh",
    location: "Mumbai",
    profileImage: "/profile.jpg",
    quote:
      "Absolutely loved the range of products. They have something for everyone!",
  },
  {
    name: "Priya Nair",
    location: "Bengaluru",
    profileImage: "/profile.jpg",
    quote:
      "My family loves their collection! We found stylish frames for everyone, from my parents to my kids. Amazing options!",
  },
  {
    name: "Arjun Verma",
    location: "Hyderabad",
    profileImage: "/profile.jpg",
    quote:
      "I’ve never been happier with my glasses. The blue light lenses I got have reduced my eye strain significantly. Thank you!",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const handleTransition = (dir: "left" | "right") => {
    if (isAnimating) return; // Prevent double clicks during animation
    setIsAnimating(true);
    setDirection(dir);

    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        dir === "right"
          ? (prevIndex + 1) % testimonials.length
          : prevIndex === 0
          ? testimonials.length - 1
          : prevIndex - 1
      );
      setIsAnimating(false);
    }, 250); // Match timeout with CSS animation duration
  };

  return (
    <section
      className="flex flex-col justify-center px-5 py-16 my-16 border-t border-b md:px-10 lg:px-16 xl:px-20"
      aria-labelledby="testimonials-heading"
    >
      <div className="flex flex-col md:flex-row flex-wrap items-center justify-between gap-6 md:gap-24 lg:gap-32">
        {/* Left Section */}
        <div className="flex-1 flex flex-col gap-2 md:gap-6">
          <div className="flex flex-col gap-2">
            <h1
              id="testimonials-heading"
              className="text-4xl font-medium md:text-5xl lg:text-6xl"
            >
              From Our Customers
            </h1>
            <p className="text-base md:text-lg font-light">
              Here is what our customers had to say about our products and
              services.
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              className="w-12 h-12 flex items-center justify-center"
              onClick={() => handleTransition("left")}
              aria-label="Previous testimonial"
            >
              <ArrowLeft style={{ width: 20, height: 20 }} />
            </Button>
            <Button
              className="w-12 h-12 flex items-center justify-center"
              onClick={() => handleTransition("right")}
              aria-label="Next testimonial"
            >
              <ArrowRight style={{ width: 20, height: 20 }} />
            </Button>
          </div>
        </div>

        {/* Right Section */}
        <div
          className={`min-h-80 max-h-max bg-gray-100 px-7 py-5 rounded-2xl flex-1 flex flex-col justify-between gap-4 
            transition-opacity duration-500 ease-in-out ${
              isAnimating
                ? direction === "right"
                  ? "fade-out-left"
                  : "fade-out-right"
                : direction === "right"
                ? "fade-in-right"
                : "fade-in-left"
            }`}
          aria-live="polite"
        >
          <div className="w-12 h-12">
            <Image
              src="/icons/quote.svg"
              alt="Quote icon"
              width={48}
              height={48}
              loading="lazy"
              className="w-full h-full object-contain"
            />
          </div>
          <h2 className="text-lg font-medium leading-relaxed md:text-2xl">
            {testimonials[currentIndex].quote}
          </h2>
          <div className="flex items-center gap-4 mt-2 md:mt-5">
            <Image
              src={testimonials[currentIndex].profileImage}
              alt={`${testimonials[currentIndex].name}'s profile picture`}
              width={56}
              height={56}
              loading="lazy"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-medium">
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-gray-500">
                {testimonials[currentIndex].location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
