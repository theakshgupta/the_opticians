"use client";

import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { ChevronDown } from "lucide-react";
import { Slider } from "./ui/slider";
import FilterSidebar from "./FilterSidebar";

type Checked = DropdownMenuCheckboxItemProps["checked"];

const FilterSection = () => {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);
  const [priceRange, setPriceRange] = React.useState<number[]>([0, 100]);
  const [isPriceDropdownOpen, setIsPriceDropdownOpen] = React.useState(false);

  // Slider value mapping
  const minPrice = 290;
  const maxPrice = 17890;

  const calculatePrice = (value: number) => {
    return Math.round(minPrice + ((maxPrice - minPrice) * value) / 100);
  };

  const handlePriceConfirm = () => {
    console.log("Price Range Selected:", {
      min: calculatePrice(priceRange[0]),
      max:
        priceRange[1] === 100 ? `${maxPrice}+` : calculatePrice(priceRange[1]),
    });
    setIsPriceDropdownOpen(false); // Close the dropdown
  };

  const [position, setPosition] = React.useState("bottom");
  return (
    <div className="my-5 md:mb-10 flex justify-between">
      <div className="flex">
        <div className="hidden md:flex">
          {/* Color Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="mr-2">
              <Button variant="outline">
                Color <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 ml-16">
              <DropdownMenuLabel>Color Options</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem
                checked={showStatusBar}
                onCheckedChange={setShowStatusBar}
              >
                Black
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={showActivityBar}
                onCheckedChange={setShowActivityBar}
              >
                Gray
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={showPanel}
                onCheckedChange={setShowPanel}
              >
                Transparent
              </DropdownMenuCheckboxItem>
              {/* Add more color options here */}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Shape Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="mr-2">
              <Button variant="outline">
                Shape <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 ml-32">
              <DropdownMenuLabel>Shape Options</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem
                checked={showStatusBar}
                onCheckedChange={setShowStatusBar}
              >
                Rectangle
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={showActivityBar}
                onCheckedChange={setShowActivityBar}
                disabled
              >
                Round
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={showPanel}
                onCheckedChange={setShowPanel}
              >
                Wayfarer
              </DropdownMenuCheckboxItem>
              {/* Add more shape options here */}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Price Dropdown */}
          <DropdownMenu
            open={isPriceDropdownOpen}
            onOpenChange={setIsPriceDropdownOpen}
          >
            <DropdownMenuTrigger asChild className="mr-2">
              <Button variant="outline">
                Price <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 ml-40">
              <DropdownMenuLabel>Price Range</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Slider
                defaultValue={[0, 100]}
                max={100}
                step={1}
                onValueChange={(values) => setPriceRange(values)}
              />
              <div className="mt-5 mb-1 mx-1 flex items-center justify-between">
                <h2>
                  ₹{calculatePrice(priceRange[0])} - ₹
                  {priceRange[1] === 100
                    ? `${maxPrice}+`
                    : calculatePrice(priceRange[1])}
                </h2>
                <Button type="button" onClick={handlePriceConfirm}>
                  OK
                </Button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <FilterSidebar />
      </div>
      <div>
        <Select>
          <SelectTrigger className="w-max flex gap-3 shadow-none">
            <SelectValue placeholder="Sort By" className="text-sm" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="bestSellers">Best Sellers</SelectItem>
              <SelectItem value="priceLowToHigh">Price: Low to High</SelectItem>
              <SelectItem value="priceHighToLow">Price: High to Low</SelectItem>
              <SelectItem value="newArrivals">New Arrivals</SelectItem>
              <SelectItem value="sale">Sale</SelectItem>
              <SelectItem value="mostViewed">Most Viewed</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default FilterSection;
