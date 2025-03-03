"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ImageSlider: React.FC = () => {
  const images = [
    { src: "/sliderImages/1.jpg", alt: "Slider Image 1", link: "/" },
    { src: "/sliderImages/2.jpg", alt: "Slider Image 2", link: "/" },
    { src: "/sliderImages/3.jpg", alt: "Slider Image 3", link: "/" },
    { src: "/sliderImages/4.jpg", alt: "Slider Image 4", link: "/" },
    { src: "/sliderImages/5.jpg", alt: "Slider Image 5", link: "/" },
    { src: "/sliderImages/6.jpg", alt: "Slider Image 6", link: "/" },
    { src: "/sliderImages/7.jpg", alt: "Slider Image 7", link: "/" },
    { src: "/sliderImages/8.jpg", alt: "Slider Image 8", link: "/" },
  ];

  const totalSlides = images.length;
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [pauseAutoSlide, setPauseAutoSlide] = useState(false);
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null);

  const slides = [images[totalSlides - 1], ...images, images[0]];

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev + 1);
    restartAutoSlide();
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev - 1);
    restartAutoSlide();
  };

  const restartAutoSlide = () => {
    setPauseAutoSlide(true);
    if (autoSlideRef.current) clearTimeout(autoSlideRef.current);
    autoSlideRef.current = setTimeout(() => {
      setPauseAutoSlide(false);
    }, 10000);
  };

  useEffect(() => {
    if (pauseAutoSlide) return;
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [pauseAutoSlide]);

  const handleTransitionEnd = () => {
    setIsAnimating(false);
    if (currentIndex === 0) setCurrentIndex(totalSlides);
    else if (currentIndex === totalSlides + 1) setCurrentIndex(1);
  };

  const [startX, setStartX] = useState(0);
  const handleTouchStart = (e: React.TouchEvent) =>
    setStartX(e.touches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    const swipeDistance = startX - e.changedTouches[0].clientX;
    if (Math.abs(swipeDistance) > 50)
      swipeDistance > 0 ? nextSlide() : prevSlide();
  };

  return (
    <div
      className="relative w-full max-w-full h-max mx-auto overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isAnimating ? "transform 0.5s ease-in-out" : "none",
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full h-[25vh] sm:h-96 lg:h-[40vh] xl:h-[60vh]"
          >
            <Link href={slide.link}>
              <Image
                src={slide.src}
                alt={slide.alt}
                width={1920}
                height={1080}
                priority
                className="w-full h-full object-cover"
              />
            </Link>
          </div>
        ))}
      </div>

      <Button
        onClick={prevSlide}
        className="absolute left-5 md:left-10 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2"
      >
        <ArrowLeft style={{ width: 20, height: 20 }} />
      </Button>
      <Button
        onClick={nextSlide}
        className="absolute right-5 md:right-10 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2"
      >
        <ArrowRight style={{ width: 20, height: 20 }} />
      </Button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index + 1);
              restartAutoSlide();
            }}
            className={`w-3 h-3 rounded-full ${
              index + 1 === currentIndex
                ? "bg-white"
                : "bg-white/50 hover:bg-white"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
