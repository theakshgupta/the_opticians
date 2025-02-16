import BannerImage from "@/components/BannerImage";
import BreadcrumbSection from "@/components/BreadcrumbSection";
import BestSellers from "@/components/Homepage/BestSellers";
import BrandsSection from "@/components/Homepage/BrandsSection";
import ExploreByColors from "@/components/Homepage/ExploreByColors";
import NewArrivals from "@/components/Homepage/NewArrivals";
import ShopByCategory from "@/components/Homepage/ShopByCategory";
import TrendingProducts from "@/components/Homepage/TrendingProducts";
import { Separator } from "@/components/ui/separator";

const ShopPage = () => {
  return (
    <main className="overflow-x-hidden">
      <div className="mx-5 my-5 md:mx-10 lg:mx-16">
        <BreadcrumbSection
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Shop", href: "/shop" },
          ]}
        />
      </div>

      <BannerImage />
      <ShopByCategory />
      <Separator orientation="horizontal" className="flex-1" />
      <TrendingProducts />
      <BrandsSection />
      <Separator orientation="horizontal" className="flex-1 mb-16" />
      <BestSellers />
      <Separator orientation="horizontal" className="flex-1 mb-16" />
      <ExploreByColors />
      <NewArrivals />
    </main>
  );
};
export default ShopPage;
