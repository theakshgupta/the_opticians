import ProductCarousel, { Product } from "../Products/ProductCarousel";

const bestSellersData: Product[] = Array(11).fill({
  imageSrc: "/sampleProduct.png",
  altText: "Sample Product",
  brand: "Brand Name",
  productName: "Product Name",
  size: "Medium",
  price: "₹2590/-",
});

const BestSellers = () => {
  return (
    <ProductCarousel
      title="Best Sellers"
      viewMoreLink="/shop/best-sellers"
      products={bestSellersData}
      className="px-5 md:px-10 lg:px-16"
    />
  );
};

export default BestSellers;
