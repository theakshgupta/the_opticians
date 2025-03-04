"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";

// Sample collections data (replace with CMS data later)
const collections = [
  {
    id: 1,
    title: "Timeless Classics",
    image: "/collections/collection1.jpg",
    alt: "Timeless Classics Collection",
  },
  {
    id: 2,
    title: "The Gentleman's Edit",
    image: "/collections/collection2.jpg",
    alt: "The Gentleman's Edit Collection",
  },
  {
    id: 3,
    title: "Elegant Frames",
    image: "/collections/collection1.jpg",
    alt: "Elegant Frames Collection",
  },
  {
    id: 4,
    title: "Bold Statements",
    image: "/collections/collection2.jpg",
    alt: "Bold Statements Collection",
  },
  {
    id: 5,
    title: "Modern Edge",
    image: "/collections/collection1.jpg",
    alt: "Modern Edge Collection",
  },
];

// CollectionCard Component
const CollectionCard = ({
  title,
  image,
  alt,
}: {
  title: string;
  image: string;
  alt: string;
}) => (
  <div
    className="relative flex-shrink-0 w-[80vw] sm:w-[60vw] md:w-[40vw] lg:w-[30vw] h-60 md:h-80 bg-gray-200 rounded-2xl overflow-hidden shadow-lg"
    role="link"
    aria-label={alt}
  >
    <Image src={image} alt={alt} fill className="object-cover rounded-2xl" />
    <div className="absolute bottom-4 md:bottom-6 flex items-center justify-between w-full px-4 md:px-6">
      <h1 className="text-xl md:text-3xl font-medium text-white">{title}</h1>
      <ArrowUpRight size={28} className="text-white" />
    </div>
  </div>
);

const CollectionsSection = () => {
  // Ref and state for slider navigation
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Scroll to the collection card at the given index
  const scrollToIndex = (index: number) => {
    if (!sliderRef.current) return;
    const child = sliderRef.current.children[index] as HTMLElement;
    if (child) {
      child.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  };

  const handleNext = () => {
    if (currentIndex < collections.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      scrollToIndex(newIndex);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      scrollToIndex(newIndex);
    }
  };

  return (
    <section className="w-full px-5 my-16 md:px-10 lg:px-16 border-b pb-16">
      <div className="w-full flex flex-col md:flex-row items-start md:items-center gap-10">
        {/* Left Section */}
        <div className="w-full md:w-[30%] flex flex-col gap-4">
          <h1 className="w-[90%] text-4xl lg:text-5xl font-medium">
            Casual Inspirations
          </h1>
          <p className="w-[90%] text-base lg:text-lg font-light">
            Discover collections that redefine casual eyewear with timeless
            style.
          </p>
          <Button
            className="h-11 text-lg w-full"
            aria-label="Browse Collections"
          >
            Browse Collections
          </Button>
        </div>

        {/* Right Section (Scrollable Slider with Navigation Buttons) */}
        <div className="relative w-full md:w-[70%]">
          {/* Previous Button */}
          <Button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="absolute -left-2 top-1/2 transform -translate-y-1/2 z-10 p-2 shadow disabled:opacity-50"
            aria-label="Previous Collection"
          >
            <ArrowLeft size={20} />
          </Button>
          {/* Next Button */}
          <Button
            onClick={handleNext}
            disabled={currentIndex === collections.length - 1}
            className="absolute -right-2 top-1/2 transform -translate-y-1/2 z-10 p-2 shadow disabled:opacity-50"
            aria-label="Next Collection"
          >
            <ArrowRight size={20} />
          </Button>

          {/* Scrollable Slider */}
          <div
            ref={sliderRef}
            className="overflow-x-auto scrollbar-hide flex gap-2 md:gap-4 scroll-smooth snap-x snap-mandatory rounded-2xl"
          >
            {collections.map((collection) => (
              <div key={collection.id} className="snap-center">
                <CollectionCard
                  title={collection.title}
                  image={collection.image}
                  alt={collection.alt}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
