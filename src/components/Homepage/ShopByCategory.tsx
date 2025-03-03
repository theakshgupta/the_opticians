import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const ShopByCategory = () => {
  const topCategory = {
    title: "Eyeglasses",
    description: "Lorem ipsum dolor sit amet consectetur.",
    imageSrc: "/categories/eyeglasses.png",
    link: "/shop/categories/eyeglasses",
  };

  const topSmallCategories = [
    {
      title: "Sunglasses",
      description: "Lorem ipsum dolor sit amet consectetur.",
      imageSrc: "/categories/sunglasses.png",
      link: "/shop/categories/sunglasses",
    },
    {
      title: "Contact Lens",
      description: "Lorem ipsum dolor sit amet consectetur.",
      imageSrc: "/categories/contact-lens.png",
      link: "/shop/categories/contact-lens",
    },
  ];

  const bottomCategories = [
    {
      title: "Computer Glasses",
      description: "Lorem ipsum dolor sit amet consectetur.",
      imageSrc: "/categories/computer-glasses.png",
      link: "/shop/categories/computer-glasses",
    },
    {
      title: "Reading Glasses",
      description: "Lorem ipsum dolor sit amet consectetur.",
      imageSrc: "/categories/reading-glasses.png",
      link: "/shop/categories/reading-glasses",
    },
  ];

  return (
    <div className="px-5 py-16 md:px-10 lg:px-16 flex flex-col gap-2 md:gap-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-medium md:text-5xl">Shop By Category</h1>
        <Link href="/shop/categories">
          <Button className="h-8 md:h-11 w-8 md:w-11">
            <ArrowUpRight style={{ width: 20, height: 20 }} />
          </Button>
        </Link>
      </div>

      {/* Top Section: Big Category on Left & Two Small Categories on Right */}
      <div className="flex flex-col md:flex-row w-full h-full gap-2 xl:gap-4 mt-2">
        {/* Big Category */}
        <div className="relative w-full md:w-2/3 min-h-80 md:flex-1 border rounded-2xl">
          <Image
            src={topCategory.imageSrc}
            alt={topCategory.title}
            fill
            className="object-cover rounded-2xl"
          />
          <div className="w-3/5 md:w-2/5 p-3 absolute top-3 left-3 lg:top-5 lg:left-5 flex flex-col border border-gray-200 bg-white/60 backdrop-blur-md shadow-md rounded-lg gap-1">
            <h2 className="text-xl md:text-2xl font-medium">
              {topCategory.title}
            </h2>
            <p className="text-sm md:text-base font-light leading-4">
              {topCategory.description}
            </p>
            <Link href={topCategory.link}>
              <Button className="w-max mt-2">Shop Now</Button>
            </Link>
          </div>
        </div>

        {/* Two Small Categories */}
        <div className="w-full h-full rounded-2xl md:w-1/3 flex md:flex-col gap-2 xl:gap-4 overflow-x-auto md:overflow-visible scroll-smooth snap-x snap-mandatory">
          {topSmallCategories.map((category, index) => (
            <div
              key={index}
              className="border rounded-2xl relative w-[70vw] md:w-full h-[30vh] xl:h-[50vh] snap-start shrink-0"
            >
              <Image
                src={category.imageSrc}
                alt={category.title}
                fill
                className="object-cover rounded-2xl"
              />
              <div className="w-3/5 md:w-4/5 lg:w-3/5 p-3 border border-gray-200 bg-white/60 backdrop-blur-md shadow-md absolute top-3 left-3 lg:top-5 lg:left-5 flex flex-col rounded-lg gap-1">
                <h2 className="text-base md:text-xl font-medium">
                  {category.title}
                </h2>
                <p className="text-xs md:text-sm font-light leading-4">
                  {category.description}
                </p>
                <Link href={category.link}>
                  <Button className="w-max mt-2">Shop Now</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section: Two Categories */}
      <div className="flex gap-4 w-full md:pr-3">
        <div className="w-full rounded-2xl md:w-1/2 flex gap-2 md:gap-4 overflow-x-auto md:overflow-visible scroll-smooth snap-x snap-mandatory">
          {bottomCategories.map((category, index) => (
            <div
              key={index}
              className="border rounded-2xl relative w-[70vw] md:w-full h-[30vh] lg:h-[40vh] xl:h-[50vh] 2xl:h-[60vh] snap-start shrink-0"
            >
              <Image
                src={category.imageSrc}
                alt={category.title}
                fill
                className="object-cover rounded-2xl"
              />
              <div className="w-[70%] md:w-4/5 lg:w-1/2 p-3 border border-gray-200 bg-white/60 backdrop-blur-md shadow-md absolute top-3 left-3 lg:top-5 lg:left-5 flex flex-col rounded-lg gap-1">
                <h2 className="text-base md:text-xl font-medium">
                  {category.title}
                </h2>
                <p className="text-xs md:text-sm font-light leading-4">
                  {category.description}
                </p>
                <Link href={category.link}>
                  <Button className="w-max mt-2">Shop Now</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
