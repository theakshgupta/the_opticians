"use client";

import { useEffect, useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../../ui/button";
import { Heart, X } from "lucide-react";
import SidebarProductCard from "../../Products/SidebarProductCard";

const wishlistItems = [
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

const WishlistSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    <Sheet onOpenChange={setIsOpen}>
      <SheetTrigger>
        <Button
          variant="outline"
          className="w-8 h-8 md:w-11 md:h-11 hover:bg-blue-100 shadow-none"
        >
          <Heart style={{width:20, height:20}} />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-72 md:w-max flex flex-col justify-between overflow-y-auto">
        <SheetHeader>
          <div className="flex justify-between items-center">
            <SheetTitle>
              <h1 className="text-3xl font-medium">Wishlist</h1>
            </SheetTitle>
            <SheetClose>
              <Button variant="outline" className="w-11 h-11">
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

        <SheetFooter className="w-full flex flex-row justify-between gap-2">
          <SheetClose className="w-1/2 h-11">
            <Button variant="outline" className="w-full h-11">
              Cancel
            </Button>
          </SheetClose>
          <Button className="w-1/2 h-11">Checkout</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default WishlistSidebar;
