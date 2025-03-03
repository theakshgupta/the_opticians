"use client";

import { useState } from "react";
import { useParams } from "next/navigation"; // Import useParams
import useSWR from "swr"; // Import useSWR for data fetching
import { useSwipeable } from "react-swipeable";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Heart,
  Share2,
  Truck,
} from "lucide-react";

import BreadcrumbSection from "@/components/BreadcrumbSection";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/Products/ProductCard";
import CustomizeProduct from "@/components/Products/CustomizeProduct";
import ProductAdditionalInfo from "@/components/Products/ProductAdditionalInfo";
import DeliveryEstimator from "@/components/DeliveryEstimator";
import ProductCarousel from "@/components/Products/ProductCarousel";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ProductPage: React.FC = () => {
  // Get the product id from the URL
  const { id } = useParams();

  // Fetch product data using useSWR
  const { data, error, isLoading } = useSWR(
    id ? `/api/products/${id}` : null,
    fetcher
  );

  // State for the main image carousel
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handlers for main image carousel navigation
  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === data?.product?.images?.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? data?.product?.images?.length - 1 : prevIndex - 1
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackMouse: true,
  });

  if (isLoading) return <div>Loading product...</div>;
  if (error) return <div>Error loading product. Please try again.</div>;
  if (!data?.product) return <div>Product not found.</div>;

  const product = data.product;

  // Similar products (could also be fetched dynamically)
  const similarProducts =
    product.similarProducts ||
    Array(11).fill({
      id: "sample-id", // Placeholder; replace with real IDs if fetched
      imageSrc: "/sampleProduct.png",
      altText: "Sample Product",
      brand: "Brand Name",
      productName: "Product Name",
      size: "Medium",
      price: "₹2590/-",
    });

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-16 py-5">
      {/* Breadcrumb Section - Dynamically use product data */}
      <section className="my-5">
        <BreadcrumbSection
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Shop", href: "/shop" },
            {
              label: product.category || "Eyewear",
              href: `/shop/${product.category?.toLowerCase()}`,
            },
            { label: product.productName },
          ]}
        />
      </section>

      {/* Main Content Section */}
      <div className="flex flex-col xl:flex-row gap-4">
        {/* Image Carousel Section */}
        <section
          className="relative h-[50vh] xl:h-[75vh] w-full xl:w-3/5 xl:sticky xl:top-[170px]"
          {...swipeHandlers}
        >
          <div className="relative h-full border rounded-2xl p-7 flex items-center justify-center">
            <Image
              src={product.images[currentImageIndex]}
              alt={`${product.productName} Image ${currentImageIndex + 1}`}
              width={600}
              height={600}
              className="object-contain"
            />
            {/* Navigation Arrows */}
            <Button
              variant="outline"
              className="hidden absolute left-4 top-1/2 w-11 h-11 xl:flex items-center justify-center -translate-y-1/2 p-2 rounded-full shadow-xl hover:shadow-lg"
              onClick={handlePrev}
              aria-label="Previous Image"
            >
              <ArrowLeft style={{ width: 20, height: 20 }} />
            </Button>
            <Button
              variant="outline"
              className="hidden absolute right-4 top-1/2 w-11 h-11 xl:flex items-center justify-center -translate-y-1/2 p-2 rounded-full shadow-xl hover:shadow-lg"
              onClick={handleNext}
              aria-label="Next Image"
            >
              <ArrowRight style={{ width: 20, height: 20 }} />
            </Button>
            {/* Navigation Dots */}
            {product.images && product.images.length > 0 && (
              <div className="absolute bottom-4 flex gap-2 left-1/2 transform -translate-x-1/2">
                {product.images.map((_, index) => (
                  <button
                    key={index}
                    className={`h-3 w-3 rounded-full ${
                      currentImageIndex === index
                        ? "bg-black"
                        : "bg-gray-300 hover:bg-gray-500"
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                    aria-label={`Select Image ${index + 1}`}
                  />
                ))}
              </div>
            )}{" "}
          </div>

          {/* Action Buttons */}
          <div className="absolute top-5 right-5 flex flex-col gap-1">
            <Button
              variant="outline"
              className="w-10 h-10 hover:bg-red-500 hover:text-white"
              aria-label="Add to Wishlist"
            >
              <Heart className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="w-10 h-10 hover:bg-[#000065] hover:text-white"
              aria-label="Share Product"
            >
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Product Details Section */}
        <section className="w-full xl:w-2/5 flex flex-col">
          <div className="bg-gray-50 border rounded-2xl px-4 py-5 xl:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <p className="text-gray-700 text-sm">
                  {product.sku || "3273nm01"}
                </p>
                <h1 className="text-4xl font-bold">{product.productName}</h1>
                <Link href={`/${product.brand?.toLowerCase() || ""}`}>
                  <Button
                    variant="outline"
                    className="shadow-none rounded-full border border-black py-1 px-5 flex items-center gap-2"
                  >
                    {product.brand} <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <div className="space-y-1">
                <div className="flex items-baseline gap-2">
                  {product.discount && (
                    <span className="text-xl text-red-500 font-medium">
                      {product.discount}
                    </span>
                  )}
                  <span className="text-3xl font-semibold">
                    {product.price}
                  </span>
                </div>
                {product.mrp && (
                  <p className="text-sm text-gray-700">M.R.P.: {product.mrp}</p>
                )}
                <p className="text-sm">
                  {product.description || "Frame + Stock Lens"}
                </p>
              </div>

              <CustomizeProduct />

              <div className="space-y-3">
                <div className="flex gap-2">
                  <Button className="flex-1 h-11 hover:bg-[#000065] text-base md:text-lg">
                    Select Lens
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 h-11 shadow-none border border-gray-400 hover:bg-black hover:text-white text-base md:text-lg"
                  >
                    Add to Bag
                  </Button>
                </div>
                <div className="flex items-center gap-2 text-gray-700 text-sm">
                  <Truck className="h-5 w-5" />
                  <p>Free Delivery for orders over ₹5000/-</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border px-4 pb-4 rounded-2xl mt-4 mb-10 xl:mb-0 flex flex-col gap-10">
            <ProductAdditionalInfo />
            <DeliveryEstimator />
          </div>
        </section>
      </div>

      {/* Similar Products Carousel */}
      <section className="my-5 md:my-10 lg:my-16">
        <ProductCarousel title="Similar Products" products={similarProducts} />
      </section>
    </main>
  );
};

export default ProductPage;
