"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import SizeGuide from "../SizeGuide";
import { cn } from "@/lib/utils";

// Hardcoded values – ready to be replaced with backend data later.
const colors = [
  { hex: "#FFF", name: "White" },
  { hex: "#000", name: "Black" },
  { hex: "#F00", name: "Red" },
];

const sizes = [
  { code: "N", label: "Narrow", title: "Narrow" },
  { code: "A", label: "Average", title: "Average" },
  { code: "W", label: "Wide", title: "Wide" },
];

type ColorOptionsProps = {
  selectedColor: string | null;
  onSelect: (color: string) => void;
};

const ColorOptions: React.FC<ColorOptionsProps> = ({ selectedColor, onSelect }) => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <span className="font-medium">Color:</span>
        <span className="font-light">
          {selectedColor
            ? colors.find((color) => color.hex === selectedColor)?.name
            : "Choose a color"}
        </span>
      </div>
      <div className="flex gap-1 mt-2">
        {colors.map((color) => (
          <Button
            key={color.hex}
            onClick={() => onSelect(color.hex)}
            className={cn(
              "h-10 w-10 border border-gray-400 shadow-none",
              // Only apply fading if a color has been selected.
              selectedColor
                ? selectedColor === color.hex
                  ? "ring-2 ring-blue-500"
                  : "opacity-50"
                : ""
            )}
            style={{ backgroundColor: color.hex }}
            aria-label={`Color ${color.hex}`}
          />
        ))}
      </div>
    </div>
  );
};

type SizeOptionsProps = {
  selectedSize: string | null;
  onSelect: (size: string) => void;
};

const SizeOptions: React.FC<SizeOptionsProps> = ({ selectedSize, onSelect }) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <span className="font-medium">Size:</span>
        <span className="font-light">
          {selectedSize
            ? sizes.find((size) => size.code === selectedSize)?.label
            : "Choose a size"}
        </span>
      </div>
      <div className="flex gap-1 mt-1">
        {sizes.map((size) => (
          <Button
            key={size.code}
            title={size.title}
            onClick={() => onSelect(size.code)}
            className={cn(
              "shadow-none text-xl h-10 w-10",
              "hover:bg-[#000065] hover:text-white",
              // Only apply fading if a size has been selected.
              selectedSize
                ? selectedSize === size.code
                  ? "bg-[#000065] text-white"
                  : "opacity-50"
                : ""
            )}
          >
            {size.code}
          </Button>
        ))}
      </div>
      <div>
        <SizeGuide />
      </div>
    </div>
  );
};

const CustomizeProduct: React.FC = () => {
  // Initially, no option is selected.
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-5">
      <ColorOptions selectedColor={selectedColor} onSelect={setSelectedColor} />
      <SizeOptions selectedSize={selectedSize} onSelect={setSelectedSize} />
    </div>
  );
};

export default CustomizeProduct;
