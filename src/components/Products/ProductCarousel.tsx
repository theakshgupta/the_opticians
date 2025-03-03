"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";
import { Button } from "../ui/button";

export interface Product {
  imageSrc: string;
  altText: string;
  brand: string;
  productName: string;
  size: string;
  price: string;
}

interface ProductCarouselProps {
  title: string;
  products?: Product[];
  viewMoreLink?: string;
  className?: string;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({
  title,
  products = [],
  viewMoreLink,
  className = "",
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    if (!scrollContainerRef.current || products.length === 0) return;
    const child = scrollContainerRef.current.children[index] as HTMLElement;
    if (child) {
      child.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  };

  const handleNext = () => {
    if (currentIndex < products.length - 1) {
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
    <section className={className}>
      {/* Heading */}
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-3xl font-medium md:text-5xl">{title}</h1>
        {viewMoreLink && (
          <Link href={viewMoreLink}>
            <Button className="h-8 md:h-11 w-8 md:w-11">
              <ArrowUpRight style={{ width: 20, height: 20 }} />
            </Button>
          </Link>
        )}
      </div>

      {/* Scrollable Container with Navigation Buttons */}
      <div className="relative">
        {/* Previous Button */}
        <Button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="absolute -left-2 top-1/2 transform -translate-y-1/2 z-10 p-2 shadow disabled:opacity-50"
        >
          <ArrowLeft style={{ width: 20, height: 20 }} />
        </Button>
        {/* Next Button */}
        <Button
          onClick={handleNext}
          disabled={currentIndex >= products.length - 1}
          className="absolute -right-2 top-1/2 transform -translate-y-1/2 z-10 p-2 shadow disabled:opacity-50"
        >
          <ArrowRight style={{ width: 20, height: 20 }} />
        </Button>

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto scroll-smooth snap-x snap-mandatory whitespace-nowrap flex gap-2 md:gap-4 border-r rounded-xl"
        >
          {products.length > 0 ? (
            products.map((product, index) => (
              <ProductCard
                key={index}
                imageSrc={product.imageSrc}
                altText={product.altText}
                brand={product.brand}
                productName={product.productName}
                size={product.size}
                price={product.price}
                className="w-48 snap-center"
                id={""}
              />
            ))
          ) : (
            <p className="text-gray-500">No products available</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
