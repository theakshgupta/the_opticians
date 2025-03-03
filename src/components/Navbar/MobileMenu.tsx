"use client";

import Link from "next/link";
import Image from "next/image";
import { MenuIcon, UserRound, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const menuSections = [
  {
    title: "Gender",
    value: "gender",
    links: [
      { label: "Men", href: "/shop/gender/men" },
      { label: "Women", href: "/shop/gender/women" },
      { label: "Kids", href: "/shop/gender/kids" },
    ],
  },
  {
    title: "Our Top Picks",
    value: "our-top-picks",
    links: [
      "New Arrivals",
      "Best Sellers",
      "Turban Eyewear",
      "Computer Glasses",
      "Progressive Glasses",
      "Day Night Glasses",
      "Powered Sunglasses",
    ].map((label) => ({ label, href: "/" })),
  },
  {
    title: "Eyeglasses",
    value: "eyeglasses",
    links: [
      "Blue Light Glasses",
      "Anti-Glare Glasses",
      "Day Night Glasses",
      "Progressive Glasses",
      "Turban Glasses",
      "Reading Glasses",
      "Collections",
    ].map((label) => ({ label, href: "/" })),
  },
  {
    title: "Sunglasses",
    value: "sunglasses",
    links: [
      "Aviator Sunglasses",
      "Wayfarer Sunglasses",
      "Bold Sunglasses",
      "Powered Sunglasses",
      "Sporty Sunglasses",
      "Collections",
    ].map((label) => ({ label, href: "/" })),
  },
  {
    title: "Contact Lens",
    value: "contact-lens",
    links: [
      "Daily Disposable",
      "Monthly Disposable",
      "Cosmetic Lenses",
      "Toric Lenses (Astigmatism)",
      "Multifocal Lenses",
      "Lens Solution",
    ].map((label) => ({ label, href: "/" })),
  },
  {
    title: "Brands",
    value: "brands",
    links: [
      "RayBan",
      "Seventh Street",
      "Carrera",
      "Calvin Klein",
      "Diesel",
      "Pierre Cardin",
      "Tommy Hilfiger",
      "Guess",
      "Polaroid",
      "Lee Cooper",
    ].map((label) => ({ label, href: "/" })),
  },
];

const footerLinks = [
  { label: "Blogs", href: "/blogs" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "FAQs", href: "/faq" },
];

const Menu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button
          variant="outline"
          className="h-8 w-8 shadow-none"
          aria-label="Open menu"
        >
          <MenuIcon className="size-6" />
        </Button>
      </SheetTrigger>
      <SheetContent className="px-5 flex flex-col gap-4 overflow-y-auto">
        <SheetHeader>
          <div className="flex justify-between items-center">
            <div className="w-44">
              <Image
                src="/logo/logo.svg"
                alt="The Opticians Logo"
                width={200}
                height={100}
                className="w-full h-full object-contain"
              />
            </div>
            <SheetClose>
              <Button variant="outline" className="shadow-none border p-2">
                <X className="size-4" />
              </Button>
            </SheetClose>
          </div>
        </SheetHeader>

        <div className="h-full w-full flex flex-col justify-between">
          {/* Menu Section */}
          <div className="px-2">
            <Accordion type="single" collapsible className="w-full">
              {menuSections.map((section) => (
                <AccordionItem key={section.value} value={section.value}>
                  <AccordionTrigger>
                    <h1 className="text-lg font-medium">{section.title}</h1>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-2">
                      {section.links.map((link) => (
                        <Link
                          key={link.label}
                          href={link.href}
                          className="text-gray-800 font-light text-base"
                        >
                          <p className="hover:text-black hover:underline">
                            {link.label}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Footer Section */}
          <div className="px-2 border-t pt-5">
            <div className="flex flex-col">
              {footerLinks.map((link, index) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={
                    index < footerLinks.length - 1
                      ? ""
                      : ""
                  }
                >
                  <p className="text-black hover:underline py-2">
                    {link.label}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Menu;
