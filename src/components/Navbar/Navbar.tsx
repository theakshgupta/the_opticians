"use client";

import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";
import NavbarNavigation from "./NavbarNavigation";
import WishlistSidebar from "./Sidebars/WishlistSidebar";
import BagSidebar from "./Sidebars/BagSidebar";
import UserSidebar from "./Sidebars/UserSidebar";

import { Truck } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Special Offers", href: "/" },
  { label: "FAQ", href: "/faq" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Navigation Bar */}
      <div className="hidden md:flex items-center justify-between py-3 px-10 lg:px-16 bg-gray-100 text-sm font-light w-full">
        <p className="flex items-center gap-2">
          <Truck className="w-5 h-5" aria-hidden="true" />
          Free Shipping for orders over ₹5000/-
        </p>
        <nav className="flex gap-4">
          {navLinks.slice(1).map((link) => (
            <Link key={link.label} href={link.href} className="hover:underline">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Main Navbar */}
      <div className="relative w-full px-4 md:px-8 lg:px-16 md:h-28">
        {/* Mobile View */}
        <div className="flex flex-col justify-center gap-3 w-full md:hidden">
          <div className="flex items-center justify-between pt-3 w-full">
            <Link href="/">
              <div className="w-[45vw]">
                <Image
                  src="/logo/logo.svg"
                  alt="The Opticians Logo"
                  width={200}
                  height={100}
                  priority
                />
              </div>
            </Link>
            <div className="flex items-center gap-1">
              <WishlistSidebar />
              <UserSidebar />
              <BagSidebar />
              <MobileMenu />
            </div>
          </div>
          <div className="mb-3 w-full">
            <SearchBar />
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden flex-col h-full md:flex">
          <div className="flex items-center justify-between gap-5 h-full">
            <Link href="/">
              <Image
                src="/logo/logo.svg"
                alt="The Opticians Logo"
                width={250}
                height={100}
                priority
              />
            </Link>
            <SearchBar />
            <NavIcons />
          </div>
          <div className="my-2">
            <NavbarNavigation />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
