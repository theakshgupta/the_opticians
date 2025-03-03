"use client";

import { useParams } from "next/navigation";
import useSWR from "swr";
import BreadcrumbSection from "@/components/BreadcrumbSection";
import FilterSection from "@/components/FilterSection";
import ProductCard from "@/components/Products/ProductCard";
import BannerImage from "@/components/BannerImage";
import Image from "next/image";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ListPage = () => {
  const { slug } = useParams();

  const slugString = slug
    ? Array.isArray(slug)
      ? slug.join("-")
      : slug
    : "hero";

  const formattedCategory = slug
    ? Array.isArray(slug)
      ? slug.join(" ")
      : slug.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase())
    : "Loading...";

  const encodedCategory = slug
    ? encodeURIComponent(Array.isArray(slug) ? slug.join("/") : slug)
    : "";

  const { data, error, isLoading } = useSWR(
    slug ? `/api/products?category=${encodedCategory}` : null,
    fetcher
  );

  return (
    <div className="overflow-x-hidden mx-3 my-5 md:mx-10 lg:mx-16">
      <BreadcrumbSection
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Shop", href: "/shop" },
          { label: formattedCategory, href: `/shop/${slug}` },
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

      <FilterSection />

      <div className="w-full h-full">
        <h1 className="text-5xl font-medium my-5">{formattedCategory}</h1>

        {isLoading ? (
          <p>Loading products...</p>
        ) : error ? (
          <p className="text-red-500">
            Failed to load products. Please try again.
          </p>
        ) : data?.products?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {data.products.map((product: any) => (
              <ProductCard
                key={product.id}
                id={product.id} // Pass the id prop
                imageSrc={product.imageSrc}
                altText={product.altText || "Product image"}
                brand={product.brand}
                productName={product.productName}
                size={product.size}
                price={product.price}
              />
            ))}
          </div>
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ListPage;
