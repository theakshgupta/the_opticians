"use client";

import React, { FC, forwardRef } from "react";
import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

// Reusable component for a column of links in the mega menu
interface MegaMenuColumnProps {
  heading: string;
  items: { label: string; href: string }[];
}

const MegaMenuColumn: FC<MegaMenuColumnProps> = ({ heading, items }) => (
  <div className="flex flex-col gap-2">
    <h2 className="font-medium md:text-base xl:text-lg">{heading}</h2>
    <ul className="flex flex-col gap-2">
      {items.map((item) => (
        <li key={item.label} className="listItem">
          <Link href={item.href}>{item.label}</Link>
        </li>
      ))}
    </ul>
  </div>
);

// Reusable preview panel for the mega menu dropdown
interface MegaMenuPreviewProps {
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  date: string;
  badgeText: string;
  title: string;
  description: string;
}

const MegaMenuPreview: FC<MegaMenuPreviewProps> = ({
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  date,
  badgeText,
  title,
  description,
}) => (
  <div className="w-[35%] flex gap-4">
    <div className="w-full flex flex-col gap-2">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
        className="w-full rounded-3xl"
      />
      <div className="md:h-8 lg:h-10 flex items-center gap-4">
        <p className="md:text-xs lg:text-sm">{date}</p>
        <Badge variant="outline" className="rounded-full text-xs font-light">
          {badgeText}
        </Badge>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="md:text-base xl:text-lg font-semibold leading-tight">
          {title}
        </h2>
        <p className="md:text-xs xl:text-sm font-light text-gray-700">
          {description}
        </p>
      </div>
    </div>
  </div>
);

// Dropdown content for "Eyeglasses"
const EyeglassesDropdown: FC = () => (
  <NavigationMenuContent className="overflow-y-auto max-h-[70vh] xl:max-h-max">
    <div className="w-[92vw] h-max flex justify-between gap-5 px-10 py-8">
      <div className="w-[65%] flex flex-wrap md:gap-10 lg:gap-10 xl:gap-20">
        <div className="flex flex-col gap-8">
          <MegaMenuColumn
            heading="Gender"
            items={[
              { label: "Men", href: "/" },
              { label: "Women", href: "/" },
              { label: "Kids", href: "/" },
            ]}
          />
          <MegaMenuColumn
            heading="Our Top Picks"
            items={[
              { label: "New Arrivals", href: "/" },
              { label: "Best Sellers", href: "/" },
              { label: "Turban Frames", href: "/" },
              { label: "Progressive Eyeglasses", href: "/" },
              { label: "Computer Eyeglasses", href: "/" },
            ]}
          />
        </div>
        <div className="flex flex-col gap-8">
          <MegaMenuColumn
            heading="Shape"
            items={[
              { label: "Rectangle", href: "/" },
              { label: "Round", href: "/" },
              { label: "Cat Eye", href: "/" },
              { label: "Geometric", href: "/" },
              { label: "Wayfarer", href: "/" },
            ]}
          />
          <MegaMenuColumn
            heading="Style"
            items={[
              { label: "Fully Rimmed", href: "/" },
              { label: "Half Rimmed", href: "/" },
              { label: "Rimless", href: "/" },
              { label: "Geometric", href: "/" },
              { label: "Wayfarer", href: "/" },
            ]}
          />
        </div>
        <MegaMenuColumn
          heading="Collections"
          items={[
            { label: "Crown Jewels", href: "/" },
            { label: "Bold & Beyond", href: "/" },
            { label: "Light Flex Frames", href: "/" },
            { label: "Timeless Classics", href: "/" },
            { label: "The Gentleman's Edit", href: "/" },
          ]}
        />
        <MegaMenuColumn
          heading="Brands"
          items={[
            { label: "RayBan", href: "/" },
            { label: "Tommy Hilfiger", href: "/" },
            { label: "Vogue", href: "/" },
            { label: "Carrera", href: "/" },
            { label: "Guess", href: "/" },
            { label: "Calvin Klein", href: "/" },
            { label: "Diesel", href: "/" },
            { label: "Pierre Cardin", href: "/" },
            { label: "Seventh Street", href: "/" },
            { label: "Killer", href: "/" },
            { label: "French Connection", href: "/" },
            { label: "Lee Cooper", href: "/" },
          ]}
        />
      </div>
      <Separator orientation="vertical" />
      <MegaMenuPreview
        imageSrc="/sample.jpg"
        imageAlt="eyeglasses"
        imageWidth={200}
        imageHeight={100}
        date="Jan 12, 2025"
        badgeText="New Arrivals"
        title="Top 5 Eyewear Trends for 2025"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, totam blanditiis! Cumque!"
      />
    </div>
  </NavigationMenuContent>
);

// Dropdown content for "Sunglasses"
const SunglassesDropdown: FC = () => (
  <NavigationMenuContent className="overflow-y-auto max-h-[70vh] xl:max-h-max">
    <div className="w-[92vw] h-max flex justify-between gap-5 px-10 py-8">
      <div className="w-[65%] flex flex-wrap md:gap-10 lg:gap-10 xl:gap-20">
        <div className="flex flex-col gap-8">
          <MegaMenuColumn
            heading="Gender"
            items={[
              { label: "Men", href: "/" },
              { label: "Women", href: "/" },
              { label: "Kids", href: "/" },
            ]}
          />
          <MegaMenuColumn
            heading="Style"
            items={[
              { label: "Mirrored", href: "/" },
              { label: "Tinted", href: "/" },
              { label: "UV Protection", href: "/" },
              { label: "Polarized", href: "/" },
            ]}
          />
        </div>
        <div className="flex flex-col gap-8">
          <MegaMenuColumn
            heading="Shape"
            items={[
              { label: "Aviator", href: "/" },
              { label: "Wayfarer", href: "/" },
              { label: "Sporty", href: "/" },
              { label: "Rectangle", href: "/" },
              { label: "Round", href: "/" },
              { label: "Wayfarer", href: "/" },
            ]}
          />
          <MegaMenuColumn
            heading="Type"
            items={[
              { label: "Regular", href: "/" },
              { label: "Powered", href: "/" },
            ]}
          />
        </div>
        <MegaMenuColumn
          heading="Collections"
          items={[
            { label: "The Polar Edit", href: "/" },
            { label: "Go-To Sunglasses", href: "/" },
            { label: "Screen Savers", href: "/" },
            { label: "Sunchaser Series", href: "/" },
            { label: "Simply Shades", href: "/" },
            { label: "Titan Tints", href: "/" },
            { label: "Game Day Gear", href: "/" },
            { label: "Adventurer’s Edge", href: "/" },
            { label: "Signature Vision", href: "/" },
            { label: "Solar Shield", href: "/" },
          ]}
        />
        <MegaMenuColumn
          heading="Brands"
          items={[
            { label: "RayBan", href: "/" },
            { label: "Polaroid", href: "/" },
            { label: "Tommy Hilfiger", href: "/" },
            { label: "Carrera", href: "/" },
            { label: "Fastrack", href: "/" },
            { label: "Lee Cooper", href: "/" },
          ]}
        />
      </div>
      <Separator orientation="vertical" />
      <MegaMenuPreview
        imageSrc="/sample.jpg"
        imageAlt="sunglasses"
        imageWidth={300}
        imageHeight={300}
        date="Jan 12, 2025"
        badgeText="New Arrivals"
        title="Top 5 Eyewear Trends for 2025"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, totam blanditiis! Cumque!"
      />
    </div>
  </NavigationMenuContent>
);

// Dropdown content for "Contact Lens"
const ContactLensDropdown: FC = () => (
  <NavigationMenuContent className="overflow-y-auto max-h-[70vh] xl:max-h-max">
    <div className="w-[92vw] h-max flex justify-between gap-5 px-10 py-8">
      <div className="w-[65%] flex flex-wrap md:gap-10 lg:gap-10 xl:gap-20">
        <div className="flex flex-col gap-8">
          <MegaMenuColumn
            heading="Explore by Disposability"
            items={[
              { label: "Daily", href: "/" },
              { label: "Day & Night", href: "/" },
              { label: "Weekly", href: "/" },
              { label: "Bi-Weekly", href: "/" },
              { label: "Monthly", href: "/" },
              { label: "Quarterly", href: "/" },
              { label: "Yearly", href: "/" },
            ]}
          />
          <MegaMenuColumn
            heading="Power"
            items={[
              { label: "Spherical", href: "/" },
              { label: "Cylindrical", href: "/" },
              { label: "Toric (Astigmatism)", href: "/" },
              { label: "Multifocal", href: "/" },
            ]}
          />
        </div>
        <div className="flex flex-col gap-8">
          <MegaMenuColumn
            heading="Colours"
            items={[
              { label: "Brown", href: "/" },
              { label: "Hazel", href: "/" },
              { label: "Gray", href: "/" },
              { label: "Green", href: "/" },
              { label: "Blue", href: "/" },
              { label: "Turquoise", href: "/" },
              { label: "View All", href: "/" },
            ]}
          />
          <MegaMenuColumn
            heading="Usage Purpose"
            items={[
              { label: "Corrective Lens", href: "/" },
              { label: "Cosmetic Lens", href: "/" },
              { label: "Therapeutic Lens", href: "/" },
            ]}
          />
        </div>
        <MegaMenuColumn
          heading="Brands"
          items={[
            { label: "Acuvue", href: "/" },
            { label: "Bausch + Lomb", href: "/" },
            { label: "CooperVision", href: "/" },
            { label: "Alcon", href: "/" },
            { label: "Freshlook", href: "/" },
          ]}
        />
      </div>
      <Separator orientation="vertical" />
      <MegaMenuPreview
        imageSrc="/sample.jpg"
        imageAlt="contact lens"
        imageWidth={300}
        imageHeight={300}
        date="Jan 12, 2025"
        badgeText="New Arrivals"
        title="Top 5 Eyewear Trends for 2025"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, totam blanditiis! Cumque!"
      />
    </div>
  </NavigationMenuContent>
);

const NavbarNavigation: FC = () => {
  return (
    <nav>
      <NavigationMenu className="-ml-2">
        <NavigationMenuList className="space-x-0">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-sm xl:text-base">
              Eyeglasses
            </NavigationMenuTrigger>
            <EyeglassesDropdown />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-sm xl:text-base">
              Sunglasses
            </NavigationMenuTrigger>
            <SunglassesDropdown />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-sm xl:text-base">
              Contact Lens
            </NavigationMenuTrigger>
            <ContactLensDropdown />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/shop/computer-glasses">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Computer Glasses
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/shop/brands">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Brands
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/blogs">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Blogs
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default NavbarNavigation;

// Example ListItem component (if needed elsewhere)
const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
