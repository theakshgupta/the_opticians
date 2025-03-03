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
}

const MegaMenuPreview: FC<MegaMenuPreviewProps> = ({ imageSrc, imageAlt }) => (
  <div className="w-[35%] flex gap-4">
    <div className="relative w-full h-full flex flex-col gap-2">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover rounded-xl"
      />
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
              { label: "Men", href: "/shop/gender/men" },
              { label: "Women", href: "/shop/gender/women" },
              { label: "Kids", href: "/shop/gender/kids" },
            ]}
          />
          <MegaMenuColumn
            heading="Our Top Picks"
            items={[
              { label: "New Arrivals", href: "/shop/eyeglasses/new-arrivals" },
              { label: "Best Sellers", href: "/shop/eyeglasses/best-sellers" },
              { label: "Turban Frames", href: "/shop/eyeglasses/turban-frames" },
              { label: "Progressive Eyeglasses", href: "/shop/eyeglasses/progressive-eyeglasses" },
              { label: "Computer Eyeglasses", href: "/shop/eyeglasses/computer-eyeglasses" },
            ]}
          />
        </div>
        <div className="flex flex-col gap-8">
          <MegaMenuColumn
            heading="Shape"
            items={[
              { label: "Rectangle", href: "/shop/eyeglasses/rectangle" },
              { label: "Round", href: "/shop/eyeglasses/round" },
              { label: "Cat Eye", href: "/shop/eyeglasses/cat-eye" },
              { label: "Geometric", href: "/shop/eyeglasses/geometric" },
              { label: "Wayfarer", href: "/shop/eyeglasses/wayfarer" },
            ]}
          />
          <MegaMenuColumn
            heading="Style"
            items={[
              { label: "Fully Rimmed", href: "/shop/eyeglasses/fully-rimmed" },
              { label: "Half Rimmed", href: "/shop/eyeglasses/half-rimmed" },
              { label: "Rimless", href: "/shop/eyeglasses/rimless" },
            ]}
          />
        </div>
        <MegaMenuColumn
          heading="Collections"
          items={[
            { label: "Crown Jewels", href: "/shop/eyeglasses/crown-jewels" },
            { label: "Bold & Beyond", href: "/shop/eyeglasses/bold-and-beyond" },
            { label: "Light Flex Frames", href: "/shop/eyeglasses/light-flex-frames" },
            { label: "Timeless Classics", href: "/shop/eyeglasses/timeless-classics" },
            { label: "The Gentleman's Edit", href: "/shop/eyeglasses/the-gentlemans-edit" },
          ]}
        />
        <MegaMenuColumn
          heading="Brands"
          items={[
            { label: "RayBan", href: "/shop/brands/rayban" },
            { label: "Tommy Hilfiger", href: "/shop/brands/tommy-hilfiger" },
            { label: "Vogue", href: "/shop/brands/vogue" },
            { label: "Carrera", href: "/shop/brands/carrera" },
            { label: "Guess", href: "/shop/brands/guess" },
            { label: "Calvin Klein", href: "/shop/brands/calvin-klein" },
            { label: "Diesel", href: "/shop/brands/diesel" },
            { label: "Pierre Cardin", href: "/shop/brands/pierre-cardin" },
            { label: "Seventh Street", href: "/shop/brands/seventh-street" },
            { label: "Killer", href: "/shop/brands/killer" },
            { label: "French Connection", href: "/shop/brands/french-connection" },
            { label: "Lee Cooper", href: "/shop/brands/lee-cooper" },
          ]}
        />
      </div>
      <Separator orientation="vertical" />
      <MegaMenuPreview imageSrc="/sample.jpg" imageAlt="eyeglasses" />
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
              { label: "Men", href: "/shop/sunglasses/men" },
              { label: "Women", href: "/shop/sunglasses/women" },
              { label: "Kids", href: "/shop/sunglasses/kids" },
            ]}
          />
          <MegaMenuColumn
            heading="Style"
            items={[
              { label: "Mirrored", href: "/shop/sunglasses/mirrored" },
              { label: "Tinted", href: "/shop/sunglasses/tinted" },
              { label: "UV Protection", href: "/shop/sunglasses/uv-protection" },
              { label: "Polarized", href: "/shop/sunglasses/polarized" },
            ]}
          />
        </div>
        <div className="flex flex-col gap-8">
          <MegaMenuColumn
            heading="Shape"
            items={[
              { label: "Aviator", href: "/shop/sunglasses/aviator" },
              { label: "Wayfarer", href: "/shop/sunglasses/wayfarer" },
              { label: "Sporty", href: "/shop/sunglasses/sporty" },
              { label: "Rectangle", href: "/shop/sunglasses/rectangle" },
              { label: "Round", href: "/shop/sunglasses/round" },
              { label: "Wayfarer", href: "/shop/sunglasses/wayfarer" },
            ]}
          />
          <MegaMenuColumn
            heading="Type"
            items={[
              { label: "Regular", href: "/shop/sunglasses/regular" },
              { label: "Powered", href: "/shop/sunglasses/powered" },
            ]}
          />
        </div>
        <MegaMenuColumn
          heading="Collections"
          items={[
            { label: "The Polar Edit", href: "/shop/sunglasses/the-polar-edit" },
            { label: "Go-To Sunglasses", href: "/shop/sunglasses/go-to-sunglasses" },
            { label: "Screen Savers", href: "/shop/sunglasses/screen-savers" },
            { label: "Sunchaser Series", href: "/shop/sunglasses/sunchaser-series" },
            { label: "Simply Shades", href: "/shop/sunglasses/simply-shades" },
            { label: "Titan Tints", href: "/shop/sunglasses/titan-tints" },
            { label: "Game Day Gear", href: "/shop/sunglasses/game-day-gear" },
            { label: "Adventurer’s Edge", href: "/shop/sunglasses/adventurers-edge" },
            { label: "Signature Vision", href: "/shop/sunglasses/signature-vision" },
            { label: "Solar Shield", href: "/shop/sunglasses/solar-shield" },
          ]}
        />
        <MegaMenuColumn
          heading="Brands"
          items={[
            { label: "RayBan", href: "/shop/sunglasses/brands/rayban" },
            { label: "Polaroid", href: "/shop/sunglasses/brands/polaroid" },
            { label: "Tommy Hilfiger", href: "/shop/sunglasses/brands/tommy-hilfiger" },
            { label: "Carrera", href: "/shop/sunglasses/brands/carrera" },
            { label: "Fastrack", href: "/shop/sunglasses/brands/fastrack" },
            { label: "Lee Cooper", href: "/shop/sunglasses/brands/lee-cooper" },
          ]}
        />
      </div>
      <Separator orientation="vertical" />
      <MegaMenuPreview imageSrc="/sample.jpg" imageAlt="sunglasses" />
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
              { label: "Daily", href: "/shop/contact-lens/daily" },
              { label: "Day & Night", href: "/shop/contact-lens/day-and-night" },
              { label: "Weekly", href: "/shop/contact-lens/weekly" },
              { label: "Bi-Weekly", href: "/shop/contact-lens/bi-weekly" },
              { label: "Monthly", href: "/shop/contact-lens/monthly" },
              { label: "Quarterly", href: "/shop/contact-lens/quarterly" },
              { label: "Yearly", href: "/shop/contact-lens/yearly" },
            ]}
          />
          <MegaMenuColumn
            heading="Power"
            items={[
              { label: "Spherical", href: "/shop/contact-lens/spherical" },
              { label: "Cylindrical", href: "/shop/contact-lens/cylindrical" },
              { label: "Toric (Astigmatism)", href: "/shop/contact-lens/toric" },
              { label: "Multifocal", href: "/shop/contact-lens/multifocal" },
            ]}
          />
        </div>
        <div className="flex flex-col gap-8">
          <MegaMenuColumn
            heading="Colours"
            items={[
              { label: "Brown", href: "/shop/contact-lens/brown" },
              { label: "Hazel", href: "/shop/contact-lens/hazel" },
              { label: "Gray", href: "/shop/contact-lens/gray" },
              { label: "Green", href: "/shop/contact-lens/green" },
              { label: "Blue", href: "/shop/contact-lens/blue" },
              { label: "Turquoise", href: "/shop/contact-lens/turquoise" },
              { label: "View All", href: "/shop/contact-lens/view-all" },
            ]}
          />
          <MegaMenuColumn
            heading="Usage Purpose"
            items={[
              { label: "Corrective Lens", href: "/shop/contact-lens/corrective-lens" },
              { label: "Cosmetic Lens", href: "/shop/contact-lens/cosmetic-lens" },
              { label: "Therapeutic Lens", href: "/shop/contact-lens/therapeutic-lens" },
            ]}
          />
        </div>
        <MegaMenuColumn
          heading="Brands"
          items={[
            { label: "Acuvue", href: "/shop/contact-lens/brands/acuvue" },
            { label: "Bausch + Lomb", href: "/shop/contact-lens/brands/bausch-lomb" },
            { label: "CooperVision", href: "/shop/contact-lens/brands/coopervision" },
            { label: "Alcon", href: "/shop/contact-lens/brands/alcon" },
            { label: "Freshlook", href: "/shop/contact-lens/brands/freshlook" },
          ]}
        />
      </div>
      <Separator orientation="vertical" />
      <MegaMenuPreview imageSrc="/sample.jpg" imageAlt="contact lens" />
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
            <Link href="/shop/accessories">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Accessories
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