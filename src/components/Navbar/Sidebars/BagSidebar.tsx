"use client";

import React, { FC, useEffect, useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ShoppingBag, X } from "lucide-react";
import SidebarProductCard from "../../Products/SidebarProductCard";

interface WishlistItem {
  imageSrc: string;
  altText: string;
  brand: string;
  productName: string;
  size: string;
  price: string;
}

const wishlistItems: WishlistItem[] = [
  {
    imageSrc: "/sampleProduct.png",
    altText: "Sample Product",
    brand: "RayBan",
    productName: "Clubmaster Optics",
    size: "Medium",
    price: "₹7890/-",
  },
  {
    imageSrc: "/sampleProduct.png",
    altText: "Sample Product",
    brand: "RayBan",
    productName: "Clubmaster Optics",
    size: "Medium",
    price: "₹7890/-",
  },
  {
    imageSrc: "/sampleProduct.png",
    altText: "Sample Product",
    brand: "RayBan",
    productName: "Clubmaster Optics",
    size: "Medium",
    price: "₹7890/-",
  },
];

const BagSidebar: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    // Toggle body overflow based on sidebar state
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Clean up on unmount
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    <Sheet onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="w-8 h-8 md:w-11 md:h-11 hover:bg-blue-100 shadow-none"
          aria-label="Open shopping bag"
        >
          <ShoppingBag style={{width:20, height:20}} />
        </Button>
      </SheetTrigger>

      <SheetContent className="flex flex-col justify-between overflow-y-auto w-72 md:w-max">
        <SheetHeader>
          <div className="flex items-center justify-between">
            <SheetTitle>
              <h1 className="text-3xl font-medium">Bag</h1>
            </SheetTitle>
            <SheetClose asChild>
              <Button variant="outline" className="w-11 h-11" aria-label="Close bag">
                <X className="w-5 h-5" />
              </Button>
            </SheetClose>
          </div>
        </SheetHeader>

        <div className="my-5 flex flex-col gap-2 md:gap-4">
          {wishlistItems.map((item, index) => (
            <SidebarProductCard key={index} {...item} className="w-60" />
          ))}
        </div>

        <SheetFooter className="flex flex-row justify-between gap-2 w-full">
          <SheetClose asChild>
            <Button variant="outline" className="w-1/2 h-11" aria-label="Cancel">
              Cancel
            </Button>
          </SheetClose>
          <Button className="w-1/2 h-11" aria-label="Proceed to Checkout">
            Checkout
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default BagSidebar;
