"use client";

import BannerImage from "@/components/BannerImage";
import BreadcrumbSection from "@/components/BreadcrumbSection";
import Image from "next/image";
import Link from "next/link";

// Reusable GenderCard component
type GenderCardProps = {
  href: string;
  imageSrc: string;
  alt: string;
  title: string;
};

const GenderCard: React.FC<GenderCardProps> = ({
  href,
  imageSrc,
  alt,
  title,
}) => {
  return (
    <Link href={href}>
      <div className="flex flex-col gap-2 border p-2 rounded-2xl items-center hover:shadow-lg transition-shadow">
        <div className="relative w-full aspect-square border rounded-xl overflow-hidden">
          <Image src={imageSrc} alt={alt} fill className="object-cover" />
        </div>
        <h2 className="text-lg font-medium">{title}</h2>
      </div>
    </Link>
  );
};

const GenderPage = () => {
  return (
    <div className="container px-5 py-5 md:px-10 lg:px-16">
      <BreadcrumbSection
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Shop", href: "/shop" },
          { label: "Gender", href: "/shop/gender" },
        ]}
      />

      {/* Hero Image */}
      <div className="relative w-full h-40 md:h-60 lg:h-80 xl:h-96 my-5 rounded-2xl border max-h-[55vh] overflow-hidden">
        <Image
          src="/shop-list.jpg"
          alt="Shop Banner"
          fill
          priority
          className="rounded-2xl object-cover"
        />
      </div>

      <section className="w-full">
        <h1 className="text-4xl md:text-5xl font-medium mt-10 mb-5">Gender</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-4">
          <GenderCard
            href="/shop/gender/men"
            imageSrc="/gender-images/man.png"
            alt="Image of a man"
            title="Men"
          />
          <GenderCard
            href="/shop/gender/women"
            imageSrc="/gender-images/woman.png"
            alt="Image of a woman"
            title="Women"
          />
          <GenderCard
            href="/shop/gender/kids"
            imageSrc="/gender-images/kid.png"
            alt="Image of a kid"
            title="Kids"
          />
        </div>
      </section>
    </div>
  );
};

export default GenderPage;
