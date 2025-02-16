import ProductCarousel, { Product } from "../Products/ProductCarousel";

const trendingProducts: Product[] = Array.from({ length: 11 }, () => ({
  imageSrc: "/sampleProduct.png",
  altText: "Sample Product",
  brand: "Brand Name",
  productName: "Product Name",
  size: "Medium",
  price: "₹2590/-",
}));

const TrendingProducts = () => {
  return (
    <ProductCarousel
      title="Trending Products"
      viewMoreLink="/list?name=trending-products"
      products={trendingProducts}
      className="px-5 py-16 md:px-10 lg:px-16 border-b"
    />
  );
};

export default TrendingProducts;
