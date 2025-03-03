import Image from "next/image";
import Link from "next/link";

const BrandCard = ({
  src,
  alt,
  link,
}: {
  src: string;
  alt: string;
  link: string;
}) => (
  <Link href={link} passHref>
    <div className="w-full h-28 md:h-32 border rounded-2xl p-2 md:p-5 flex items-center justify-center bg-white hover:border-2 hover:border-gray-400 cursor-pointer">
      <Image
        src={src}
        alt={alt}
        width={100}
        height={100}
        loading="lazy"
        className="w-full h-full object-contain bg-transparent"
      />
    </div>
  </Link>
);

const BrandsSection = () => {
  const brands = [
    {
      src: "/brand-logos/ray-ban.svg",
      alt: "Ray-Ban logo",
      link: "/shop/brands/ray-ban",
    },
    {
      src: "/brand-logos/seventh-street.svg",
      alt: "Seventh Street logo",
      link: "/shop/brands/seventh-street",
    },
    {
      src: "/brand-logos/carrera.svg",
      alt: "Carrera logo",
      link: "/shop/brands/carrera",
    },
    {
      src: "/brand-logos/calvin-klein.svg",
      alt: "Calvin Klein logo",
      link: "/shop/brands/calvin-klein",
    },
    {
      src: "/brand-logos/diesel.svg",
      alt: "Diesel logo",
      link: "/shop/brands/diesel",
    },
    {
      src: "/brand-logos/pierre-cardin.svg",
      alt: "Pierre Cardin logo",
      link: "/shop/brands/pierre-cardin",
    },
    {
      src: "/brand-logos/tommy-hilfiger.svg",
      alt: "Tommy Hilfiger logo",
      link: "/shop/brands/tommy-hilfiger",
    },
    {
      src: "/brand-logos/guess.svg",
      alt: "Guess logo",
      link: "/shop/brands/guess",
    },
    {
      src: "/brand-logos/polaroid.svg",
      alt: "Polaroid logo",
      link: "/shop/brands/polaroid",
    },
    {
      src: "/brand-logos/lee-cooper.svg",
      alt: "Lee Cooper logo",
      link: "/shop/brands/lee-cooper",
    },
  ];

  return (
    <section className="px-5 md:px-10 lg:px-16 my-16">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-3 lg:gap-4 mt-10">
        {brands.map((brand, index) => (
          <BrandCard
            key={index}
            src={brand.src}
            alt={brand.alt}
            link={brand.link}
          />
        ))}
      </div>
    </section>
  );
};

export default BrandsSection;
