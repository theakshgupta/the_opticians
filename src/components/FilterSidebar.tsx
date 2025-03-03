"use client";

import React, { useState, useCallback } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "./ui/button";
import { SlidersHorizontal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Checkbox } from "./ui/checkbox";
import { Slider } from "./ui/slider";

// Filter data for styles and shapes
const filterData = {
  frameStyles: [
    { label: "Full Rim", imageSrc: "/filters/style/Full Rim.svg" },
    { label: "Half Rim", imageSrc: "/filters/style/Half Rim.svg" },
    { label: "Rimless", imageSrc: "/filters/style/Rimless.svg" },
  ],
  frameShapes: [
    { label: "Rectangle", imageSrc: "/filters/shape/Rectangle.svg" },
    { label: "Square", imageSrc: "/filters/shape/Square.svg" },
    { label: "Round", imageSrc: "/filters/shape/Round.svg" },
    { label: "Cat Eye", imageSrc: "/filters/shape/Cat Eye.svg" },
    { label: "Geometric", imageSrc: "/filters/shape/Geometric.svg" },
    { label: "Wayfarer", imageSrc: "/filters/shape/Wayfarer.svg" },
    { label: "Aviator", imageSrc: "/filters/shape/Aviator.svg" },
    { label: "Clubmaster", imageSrc: "/filters/shape/Clubmaster.svg" },
    { label: "Oval", imageSrc: "/filters/shape/Oval.svg" },
    { label: "Sporty", imageSrc: "/filters/shape/Sporty.svg" },
  ],
};

interface FilterButtonProps {
  label: string;
  imageSrc: string;
}

// Renders a filter button with an image and label
const FilterButton: React.FC<FilterButtonProps> = ({ label, imageSrc }) => (
  <Button
    className="min-w-[6rem] h-20 shadow-none flex flex-col items-center justify-center"
    variant="outline"
  >
    <Image src={imageSrc} alt={label} width={80} height={80} />
    <span className="font-medium text-sm -mb-2">{label}</span>
  </Button>
);

// Price slider constants and helper
const minPrice = 290;
const maxPrice = 17890;
const calculatePrice = (value: number): number =>
  Math.round(minPrice + ((maxPrice - minPrice) * value) / 100);

const FilterSidebar: React.FC = () => {
  const [priceRange, setPriceRange] = useState<number[]>([0, 100]);

  const handlePriceConfirm = useCallback(() => {
    console.log("Price Range Selected:", {
      min: calculatePrice(priceRange[0]),
      max: priceRange[1] === 100 ? `${maxPrice}+` : calculatePrice(priceRange[1]),
    });
  }, [priceRange]);

  return (
    <div className="">
      <Sheet>
        <SheetTrigger>
          <Button variant="outline" className="shadow-none text-sm font-medium">
            All Filters <SlidersHorizontal />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col justify-between px-4 overflow-y-auto max-h-[100vh]">
          <div className="flex flex-col gap-6">
            <SheetHeader>
              <SheetTitle className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">All Filters</h1>
                <Button variant="outline">Reset</Button>
              </SheetTitle>
            </SheetHeader>
            <div className="py-2">
              <Accordion type="single" collapsible>
                {/* Frame Styles */}
                <AccordionItem value="frame-styles">
                  <AccordionTrigger className="text-base font-medium">
                    Frame Style
                  </AccordionTrigger>
                  <AccordionContent className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-2 py-2">
                    {filterData.frameStyles.map((style) => (
                      <FilterButton
                        key={style.label}
                        label={style.label}
                        imageSrc={style.imageSrc}
                      />
                    ))}
                  </AccordionContent>
                </AccordionItem>

                {/* Frame Shapes (using grid layout instead of horizontal scroll) */}
                <AccordionItem value="frame-shapes">
                  <AccordionTrigger className="text-base font-medium">
                    Frame Shape
                  </AccordionTrigger>
                  <AccordionContent className="grid grid-cols-2 sm:grid-cols-3 gap-2 py-2">
                    {filterData.frameShapes.map((shape) => (
                      <FilterButton
                        key={shape.label}
                        label={shape.label}
                        imageSrc={shape.imageSrc}
                      />
                    ))}
                  </AccordionContent>
                </AccordionItem>

                {/* Frame Colors */}
                <AccordionItem value="frame-colors">
                  <AccordionTrigger className="text-base font-medium">
                    Frame Color
                  </AccordionTrigger>
                  <AccordionContent className="w-full">
                    <Link
                      href="/"
                      className="flex gap-2 h-8 items-center justify-between"
                    >
                      <span className="flex gap-2 items-center h-8">
                        <div className="h-5 w-5 rounded-md bg-black"></div>
                        <span className="text-base">Black</span>
                      </span>
                      <Checkbox />
                    </Link>
                  </AccordionContent>
                </AccordionItem>

                {/* Frame Sizes */}
                <AccordionItem value="frame-size">
                  <AccordionTrigger className="text-base font-medium">
                    Frame Size
                  </AccordionTrigger>
                  <AccordionContent className="w-full">
                    {["Small", "Medium", "Large"].map((size) => (
                      <Link
                        key={size}
                        href="/"
                        className="flex gap-2 h-8 items-center justify-between"
                      >
                        <span className="text-base">{size}</span>
                        <Checkbox />
                      </Link>
                    ))}
                  </AccordionContent>
                </AccordionItem>

                {/* Frame Material */}
                <AccordionItem value="frame-material">
                  <AccordionTrigger className="text-base font-medium">
                    Frame Material
                  </AccordionTrigger>
                  <AccordionContent className="w-full">
                    <Link
                      href="/"
                      className="flex gap-2 h-8 items-center justify-between"
                    >
                      <span className="text-base">Stainless Steel</span>
                      <Checkbox />
                    </Link>
                  </AccordionContent>
                </AccordionItem>

                {/* Brands */}
                <AccordionItem value="brands">
                  <AccordionTrigger className="text-base font-medium">
                    Brands
                  </AccordionTrigger>
                  <AccordionContent className="w-full">
                    <Link
                      href="/"
                      className="flex gap-2 h-8 items-center justify-between"
                    >
                      <span className="text-base">Rayban</span>
                      <Checkbox />
                    </Link>
                  </AccordionContent>
                </AccordionItem>

                {/* Collections */}
                <AccordionItem value="collections">
                  <AccordionTrigger className="text-base font-medium">
                    Collections
                  </AccordionTrigger>
                  <AccordionContent className="w-full">
                    <Link
                      href="/"
                      className="flex gap-2 h-8 items-center justify-between"
                    >
                      <span className="text-base">The Gentleman's Edit</span>
                      <Checkbox />
                    </Link>
                  </AccordionContent>
                </AccordionItem>

                {/* Price */}
                <AccordionItem value="price">
                  <AccordionTrigger className="text-base font-medium">
                    Price
                  </AccordionTrigger>
                  <AccordionContent className="w-full mt-2">
                    <Slider
                      defaultValue={[0, 100]}
                      max={100}
                      step={1}
                      onValueChange={(values) => setPriceRange(values)}
                    />
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-base">
                        ₹{calculatePrice(priceRange[0])} - ₹
                        {priceRange[1] === 100
                          ? `${maxPrice}+`
                          : calculatePrice(priceRange[1])}
                      </span>
                      <Button
                        type="button"
                        className="text-xs px-2 py-2 h-max"
                        onClick={handlePriceConfirm}
                      >
                        OK
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <SheetFooter>
            <div className="w-full flex justify-between">
              <SheetClose asChild>
                <Button variant="outline">Cancel</Button>
              </SheetClose>
              <Button type="submit">Show Products</Button>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default FilterSidebar;
