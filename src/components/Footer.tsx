import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import React from "react";

// Constants defined outside the component
const currentYear = new Date().getFullYear();

const socialMedia = [
  { name: "Instagram", href: "https://instagram.com/theopticians18/", icon: "/icons/social-media/instagram.svg" },
  { name: "Facebook", href: "https://facebook.com/theopticians.in/", icon: "/icons/social-media/facebook.svg" },
  { name: "YouTube", href: "https://www.youtube.com/@theopticians18", icon: "/icons/social-media/youtube.svg" },
  { name: "X (Twitter)", href: "/", icon: "/icons/social-media/x.svg" },
];

const genderLinks = [
  { name: "Men", href: "/shop/gender/men" },
  { name: "Women", href: "/shop/gender/women" },
  { name: "Kids", href: "/shop/gender/kids" },
];

const topPicks = [
  { name: "New Arrivals", href: "/shop/new-arrivals" },
  { name: "Best Sellers", href: "/shop/best-sellers" },
  { name: "Turban Eyewear", href: "/shop/turban-eyewear" },
  { name: "Computer Glasses", href: "/shop/computer-glasses" },
  { name: "Progressive Glasses", href: "/shop/progressive-glasses" },
  { name: "Day Night Glasses", href: "/shop/day-night-glasses" },
  { name: "Powered Sunglasses", href: "/shop/powered-sunglasses" },
];

const eyeglasses = [
  { name: "Blue Light Glasses", href: "/shop/eyeglasses/blue-light-glasses" },
  { name: "Anti-Glare Glasses", href: "/shop/eyeglasses/anti-glare-glasses" },
  { name: "Day Night Glasses", href: "/shop/eyeglasses/day-night-glasses" },
  { name: "Progressive Glasses", href: "/shop/eyeglasses/progressive-glasses" },
  { name: "Turban Glasses", href: "/shop/eyeglasses/turban-glasses" },
  { name: "Reading Glasses", href: "/shop/eyeglasses/reading-glasses" },
  { name: "Collections", href: "/shop/eyeglasses/collections" },
];

const sunglasses = [
  { name: "Aviator Sunglasses", href: "/shop/sunglasses/aviator-sunglasses" },
  { name: "Wayfarer Sunglasses", href: "/shop/sunglasses/wayfarer-sunglasses" },
  { name: "Bold Sunglasses", href: "/shop/sunglasses/bold-sunglasses" },
  { name: "Powered Sunglasses", href: "/shop/sunglasses/powered-sunglasses" },
  { name: "Sporty Sunglasses", href: "/shop/sunglasses/sporty-sunglasses" },
  { name: "Collections", href: "/shop/sunglasses/collections" },
];

const contactLens = [
  { name: "Daily Disposable", href: "/shop/contact-lens/daily-disposable" },
  { name: "Monthly Disposable", href: "/shop/contact-lens/monthly-disposable" },
  { name: "Cosmetic Lenses", href: "/shop/contact-lens/cosmetic-lenses" },
  { name: "Toric Lenses (Astigmatism)", href: "/shop/contact-lens/toric-lenses" },
  { name: "Multifocal Lenses", href: "/shop/contact-lens/multifocal-lenses" },
  { name: "Lens Solution", href: "/shop/contact-lens/lens-solution" },
];

// LinkList Component (Updated)
type LinkListProps = {
  title: string;
  links: { name: string; href: string }[];
};

const LinkList: React.FC<LinkListProps> = ({ title, links }) => (
  <div className="flex flex-col gap-1">
    <h2 className="font-medium text-lg">{title}</h2>
    <ul className="flex flex-col gap-1 md:gap-2">
      {links.map((link) => (
        <li key={link.name} className="listItem">
          <Link href={link.href}>{link.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

// SocialButton Component
type SocialButtonProps = {
  href: string;
  imgSrc: string;
  alt: string;
};

const SocialButton: React.FC<SocialButtonProps> = ({ href, imgSrc, alt }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer">
    <Button className="rounded-full w-9 h-9 p-2 hover:bg-[#000065]" aria-label={alt}>
      <Image src={imgSrc} width={20} height={20} alt={alt} className="w-5 h-5" />
    </Button>
  </Link>
);

// SocialButtons Component
const SocialButtons: React.FC = () => (
  <div className="flex gap-1">
    {socialMedia.map((social) => (
      <SocialButton key={social.name} href={social.href} imgSrc={social.icon} alt={social.name} />
    ))}
  </div>
);

// LegalSection Component
const LegalSection: React.FC = () => (
  <div className="flex flex-col md:flex-row md:justify-between md:items-center md:h-10 md:bg-gray-50 md:border md:px-5 md:py-2 md:rounded-lg text-sm">
    <div className="flex justify-between w-full md:w-auto md:gap-4">
      <Link href="/" className="listItem text-black">
        Privacy Policy
      </Link>
      <Link href="/" className="listItem text-black">
        Terms & Conditions
      </Link>
    </div>
    <p className="mt-4 md:mt-0">© {currentYear} The Opticians. All rights reserved.</p>
  </div>
);

// Footer Component
const Footer: React.FC = () => (
  <footer className="border-t px-5 pt-10 pb-4 md:px-10 lg:px-16 lg:pt-16 flex flex-col gap-10">
    {/* Link Lists Section */}
    <div className="flex flex-col md:flex-row justify-between md:gap-28 lg:gap-10">
      <div className="flex flex-wrap lg:flex-nowrap gap-10 md:gap-14 lg:gap-20 xl:gap-28">
        <LinkList title="Gender" links={genderLinks} />
        <LinkList title="Our Top Picks" links={topPicks} />
        <LinkList title="Eyeglasses" links={eyeglasses} />
        <LinkList title="Sunglasses" links={sunglasses} />
        <LinkList title="Contact Lens" links={contactLens} />
      </div>
    </div>

    {/* Bottom Section */}
    <div className="mt-5 pt-5 border-t">
      <div className="md:flex justify-between items-center gap-4">
        <Image src="/logo/Logo.svg" width={250} height={100} alt="logo" className="hidden md:block" />
        <div className="flex flex-col items-center w-full md:w-auto md:items-end border-b md:border-none pb-4 md:pb-0">
          <h1 className="mt-3 text-4xl font-medium md:hidden">Follow Us On Social Media</h1>
          <SocialButtons />
        </div>
      </div>
      <div className="mt-4 md:mt-2">
        <LegalSection />
      </div>
    </div>
  </footer>
);

export default Footer;