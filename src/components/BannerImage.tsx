import Image from "next/image";

const BannerImage = () => {
  return (
    <div className="px-5 md:px-10 lg:px-16">
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
    </div>
  );
};
export default BannerImage;
