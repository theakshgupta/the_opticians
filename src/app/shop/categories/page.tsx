"use client";

import BannerImage from "@/components/BannerImage";
import BreadcrumbSection from "@/components/BreadcrumbSection";
import Image from "next/image";
import Link from "next/link";

// Reusable CategoryCard component
type CategoryCardProps = {
  href: string;
  imageSrc: string;
  alt: string;
  title: string;
};

const CategoryCard: React.FC<CategoryCardProps> = ({
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
        <h2 className="text-lg font-medium text-center">{title}</h2>
      </div>
    </Link>
  );
};

const CategoryPage = () => {
  return (
    <div className="container px-5 py-5 md:px-10 lg:px-16">
      <BreadcrumbSection
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Shop", href: "/shop" },
          { label: "Categories", href: "/shop/categories" },
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
        <h1 className="text-4xl md:text-5xl font-medium mt-10 mb-5">
          Categories
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-4">
          <CategoryCard
            href="/shop/categories/eyeglasses"
            imageSrc="/categories/eyeglasses.png"
            alt="Eyeglasses"
            title="Eyeglasses"
          />
          <CategoryCard
            href="/shop/categories/sunglasses"
            imageSrc="/categories/sunglasses.png"
            alt="Sunglasses"
            title="Sunglasses"
          />
          <CategoryCard
            href="/shop/categories/contact-lens"
            imageSrc="/categories/contact-lens.png"
            alt="Contact Lens"
            title="Contact Lens"
          />
          <CategoryCard
            href="/shop/categories/computer-glasses"
            imageSrc="/categories/computer-glasses.png"
            alt="Computer Glasses"
            title="Computer Glasses"
          />
          <CategoryCard
            href="/shop/categories/reading-glasses"
            imageSrc="/categories/reading-glasses.png"
            alt="Reading Glasses"
            title="Reading Glasses"
          />
          <CategoryCard
            href="/shop/categories/sports-sunglasses"
            imageSrc="/categories/sports-sunglasses.png"
            alt="Sports Sunglasses"
            title="Sports Sunglasses"
          />
          <CategoryCard
            href="/shop/categories/safety-glasses"
            imageSrc="/categories/safety-glasses.png"
            alt="Safety Glasses"
            title="Safety Glasses"
          />
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;
