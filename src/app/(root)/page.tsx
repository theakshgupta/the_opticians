import ImageSlider from "@/components/Homepage/ImageSlider";
import TrendingProducts from "@/components/Homepage/TrendingProducts";
import ShopByCategory from "@/components/Homepage/ShopByCategory";
import ExploreByColors from "@/components/Homepage/ExploreByColors";
import NewArrivals from "@/components/Homepage/NewArrivals";
import CollectionsSection from "@/components/Homepage/CollectionsSection";
import BestSellers from "@/components/Homepage/BestSellers";
import ShopByGenderSection from "@/components/ShopByGenderSection";
import BlogSection from "@/components/Homepage/BlogSection";
import Testimonials from "@/components/Homepage/TestimonialsSection";
import BrandsSection from "@/components/Homepage/BrandsSection";
import Newsletter from "@/components/Homepage/NewsletterSection";

const HomePage = () => {
  return (
    <main className="overflow-x-hidden">
      <ImageSlider />
      <TrendingProducts />
      <ShopByCategory />
      <ExploreByColors />
      <NewArrivals />
      <CollectionsSection />
      <BestSellers />
      <ShopByGenderSection />
      <BlogSection />
      <Testimonials />
      <BrandsSection />
      <Newsletter />
    </main>
  );
};

export default HomePage;