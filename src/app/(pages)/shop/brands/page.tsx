import BreadcrumbSection from "@/components/BreadcrumbSection";
import Image from "next/image";
import ProductCarousel from "@/components/Products/ProductCarousel";

const brandData = [
  {
    name: "Ray-Ban",
    link: "/shop/brands/ray-ban",
    products: Array(10).fill({
      imageSrc: "/rayban-product.jpg",
      altText: "Ray-Ban Glasses",
      brand: "Ray-Ban",
      productName: "Classic Aviator",
      size: "Medium",
      price: "₹5990/-c",
    }),
  },
  {
    name: "Oakley",
    link: "/shop/brands/oakley",
    products: Array(8).fill({
      imageSrc: "/oakley-product.jpg",
      altText: "Oakley Sports Glasses",
      brand: "Oakley",
      productName: "Performance Sunglasses",
      size: "Large",
      price: "₹7990/-",
    }),
  },
  {
    name: "Tom Ford",
    link: "/shop/brands/tom-ford",
    products: Array(7).fill({
      imageSrc: "/tomford-product.jpg",
      altText: "Tom Ford Eyewear",
      brand: "Tom Ford",
      productName: "Luxury Eyeglasses",
      size: "Small",
      price: "₹9990/-",
    }),
  },
  {
    name: "Tom Ford",
    link: "/shop/brands/tom-ford",
    products: Array(7).fill({
      imageSrc: "/tomford-product.jpg",
      altText: "Tom Ford Eyewear",
      brand: "Tom Ford",
      productName: "Luxury Eyeglasses",
      size: "Small",
      price: "₹9990/-",
    }),
  },
  {
    name: "Tom Ford",
    link: "/shop/brands/tom-ford",
    products: Array(7).fill({
      imageSrc: "/tomford-product.jpg",
      altText: "Tom Ford Eyewear",
      brand: "Tom Ford",
      productName: "Luxury Eyeglasses",
      size: "Small",
      price: "₹9990/-",
    }),
  },
];

const BrandPage = () => {
  return (
    <div className="px-5 py-10 md:px-10 lg:px-16">
      <BreadcrumbSection
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Shop", href: "/shop" },
          { label: "Brands", href: "/shop/brands/brands" },
        ]}
      />

      {/* Hero Image */}
      <div className="w-full my-5 rounded-2xl border max-h-[55vh] overflow-hidden">
        <Image
          src="/brand.jpg"
          alt="Brand Page Image"
          width={1920}
          height={1080}
          priority
          className="rounded-2xl"
        />
      </div>

      {/* Brand Carousels */}
      <div className="mt-16">
        {brandData.map((brand, index) => (
          <div className="mb-24">
            <ProductCarousel
              key={index}
              title={brand.name}
              products={brand.products}
              viewMoreLink={brand.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandPage;
