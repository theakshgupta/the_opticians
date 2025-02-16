import ProductCarousel, { Product } from "../Products/ProductCarousel";

const newArrivalsData: Product[] = Array(11).fill({
  imageSrc: "/sampleProduct.png",
  altText: "Sample Product",
  brand: "Brand Name",
  productName: "Product Name",
  size: "Medium",
  price: "₹2590/-",
});

const NewArrivals = () => {
  return (
    <ProductCarousel
      title="New Arrivals"
      viewMoreLink="/shop/new-arrivals"
      products={newArrivalsData}
      className="px-5 py-16 md:px-10 lg:px-16 border-b"
    />
  );
};

export default NewArrivals;
