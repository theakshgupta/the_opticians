import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import React from "react";

type LinkListProps = {
  title: string;
  links: { name: string; href: string }[];
};

const LinkList: React.FC<LinkListProps> = ({ title, links }) => (
  <div className="flex flex-col gap-1">
    <h2 className="font-medium text-lg">{title}</h2>
    <ul className="flex flex-col gap-1 md:gap-2">
      {links.map((link) => (
        <li key={link.href} className="listItem">
          <Link href={link.href}>{link.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

type SocialButtonProps = {
  href: string;
  imgSrc: string;
  alt: string;
};

const SocialButton: React.FC<SocialButtonProps> = ({ href, imgSrc, alt }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer">
    <Button
      className="rounded-full w-9 h-9 p-2 hover:bg-[#000065]"
      aria-label={alt}
    >
      <Image src={imgSrc} width={50} height={50} alt={alt} />
    </Button>
  </Link>
);

const currentYear = new Date().getFullYear();

const MapEmbed: React.FC = () => (
  <div className="h-80 w-full md:w-[30vw]">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.7306826961194!2d75.90270907561204!3d31.531556074208815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5a6439feec7f%3A0x5a37b2d5e4afd12c!2sThe%20Opticians%20-%20Optometrist!5e0!3m2!1sen!2sin!4v1735830765419!5m2!1sen!2sin"
      className="w-full h-full min-w-60 rounded-2xl"
      title="The Opticians Location"
      loading="lazy"
    ></iframe>
  </div>
);

const FooterDesktop: React.FC = () => (
  <div className="hidden md:flex w-full flex-col gap-2 border-t mt-5 pt-5">
    <div className="flex justify-between items-center">
      <Image src="/logo/Logo.svg" width={250} height={100} alt="logo" />
      <div className="flex gap-1">
        <SocialButton
          href="https://instagram.com/theopticians18/"
          imgSrc="/icons/social-media/instagram.svg"
          alt="Instagram"
        />
        <SocialButton
          href="https://facebook.com/theopticians.in/"
          imgSrc="/icons/social-media/facebook.svg"
          alt="Facebook"
        />
        <SocialButton
          href="https://www.youtube.com/@theopticians18"
          imgSrc="/icons/social-media/youtube.svg"
          alt="YouTube"
        />
        <SocialButton href="/" imgSrc="/icons/social-media/x.svg" alt="X (Twitter)" />
      </div>
    </div>
    <div className="mt-2">
      <div className="h-10 bg-gray-200 px-5 py-2 rounded-lg text-sm flex justify-between items-center">
        <div className="flex gap-4">
          <Link href="/" className="listItem text-black">
            Privacy Policy
          </Link>
          <Link href="/" className="listItem text-black">
            Terms &amp; Conditions
          </Link>
        </div>
        <p>© {currentYear} The Opticians. All rights reserved.</p>
      </div>
    </div>
  </div>
);

const FooterMobile: React.FC = () => (
  <div className="flex md:hidden w-full flex-col gap-2 border-t">
    <div className="h-44 flex flex-col justify-center gap-2 border-b">
      <h1 className="mt-3 text-4xl font-medium">Follow Us On Social Media</h1>
      <div className="my-1 flex gap-1">
        <SocialButton
          href="https://instagram.com/theopticians18/"
          imgSrc="/instagram.svg"
          alt="Instagram"
        />
        <SocialButton
          href="https://facebook.com/theopticians.in/"
          imgSrc="/facebook.svg"
          alt="Facebook"
        />
        <SocialButton
          href="https://www.youtube.com/@theopticians18"
          imgSrc="/youtube.svg"
          alt="YouTube"
        />
        <SocialButton href="/" imgSrc="/x.svg" alt="X (Twitter)" />
      </div>
    </div>
    <div className="w-full">
      <div className="h-max w-full text-sm flex justify-between items-center">
        <div className="w-full flex flex-col items-center gap-4">
          <div className="flex justify-between w-full border-b my-2 pb-4">
            <Link href="/" className="listItem text-black">
              Privacy Policy
            </Link>
            <Link href="/" className="listItem text-black">
              Terms &amp; Conditions
            </Link>
          </div>
          <p>© {currentYear} The Opticians. All rights reserved.</p>
        </div>
      </div>
    </div>
  </div>
);

const Footer: React.FC = () => {
  const genderLinks = [
    { name: "Men", href: "/" },
    { name: "Women", href: "/" },
    { name: "Kids", href: "/" },
  ];

  const topPicks = [
    { name: "New Arrivals", href: "/" },
    { name: "Best Sellers", href: "/" },
    { name: "Turban Eyewear", href: "/" },
    { name: "Computer Glasses", href: "/" },
    { name: "Progressive Glasses", href: "/" },
    { name: "Day Night Glasses", href: "/" },
    { name: "Powered Sunglasses", href: "/" },
  ];

  const eyeglasses = [
    { name: "Blue Light Glasses", href: "/" },
    { name: "Anti-Glare Glasses", href: "/" },
    { name: "Day Night Glasses", href: "/" },
    { name: "Progressive Glasses", href: "/" },
    { name: "Turban Glasses", href: "/" },
    { name: "Reading Glasses", href: "/" },
    { name: "Collections", href: "/" },
  ];

  const sunglasses = [
    { name: "Aviator Sunglasses", href: "/" },
    { name: "Wayfarer Sunglasses", href: "/" },
    { name: "Bold Sunglasses", href: "/" },
    { name: "Powered Sunglasses", href: "/" },
    { name: "Sporty Sunglasses", href: "/" },
    { name: "Collections", href: "/" },
  ];

  const contactLens = [
    { name: "Daily Disposable", href: "/" },
    { name: "Monthly Disposable", href: "/" },
    { name: "Cosmetic Lenses", href: "/" },
    { name: "Toric Lenses (Astigmatism)", href: "/" },
    { name: "Multifocal Lenses", href: "/" },
    { name: "Lens Solution", href: "/" },
  ];

  return (
    <footer className="border-t px-5 pt-10 pb-4 md:px-16 md:pt-16 flex flex-col gap-10">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <MapEmbed />
        <div className="flex flex-wrap lg:flex-nowrap gap-10 lg:gap-14">
          <LinkList title="Gender" links={genderLinks} />
          <LinkList title="Our Top Picks" links={topPicks} />
          <LinkList title="Eyeglasses" links={eyeglasses} />
          <LinkList title="Sunglasses" links={sunglasses} />
          <LinkList title="Contact Lens" links={contactLens} />
        </div>
      </div>
      <FooterDesktop />
      <FooterMobile />
    </footer>
  );
};

export default Footer;
