import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

type Color = {
  name: string;
  colorClass?: string; // For Tailwind background colors
  imageSrc?: string; // For custom images
  href: string;
};

const colors: Color[] = [
  { name: "Black", colorClass: "bg-black", href: "/" },
  { name: "Gray", colorClass: "bg-gray-600", href: "/" },
  { name: "Transparent", colorClass: "bg-white", href: "/" },
  { name: "Gold", colorClass: "bg-[#eec12e]", href: "/" },
  { name: "Silver", colorClass: "bg-[#C0C0C0]", href: "/" },
  { name: "Gun Metal", colorClass: "bg-[#2A3439]", href: "/" },
  { name: "Copper", colorClass: "bg-[#B87333]", href: "/" },
  { name: "Rose Gold", colorClass: "bg-[#E0BFB8]", href: "/" },
  {
    name: "Turquoise Shell",
    imageSrc: "/turquoiseShell.jpeg",
    href: "/",
  },
  { name: "Blue", colorClass: "bg-blue-500", href: "/" },
  { name: "Red", colorClass: "bg-red-500", href: "/" },
  { name: "Yellow", colorClass: "bg-yellow-500", href: "/" },
  { name: "Olive Green", colorClass: "bg-[#808000]", href: "/" },
];

const ColorButton = ({ color }: { color: Color }) => (
  <Link href={color.href}>
    <Button
      variant="outline"
      className="shadow-none rounded-full border pl-2 h-11 w-max flex items-center gap-2 hover:bg-gray-50 hpver:shadow-md"
      aria-label={`Explore ${color.name}`}
    >
      <div
        className={`w-7 h-7 rounded-full border ${
          color.imageSrc ? "overflow-hidden" : color.colorClass
        }`}
      >
        {color.imageSrc && (
          <Image
            src={color.imageSrc}
            alt={`${color.name} image`}
            width={50}
            height={50}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <p className="text-base">{color.name}</p>
    </Button>
  </Link>
);

const ExploreByColors = () => {
  return (
    <section className="w-full lg:h-80 border-t border-b px-5 py-16 md:px-10 lg:px-16 flex flex-col lg:flex-row lg:items-center gap-5">
      <div className="lg:w-1/4">
        <h1 className="text-4xl font-medium md:text-5xl">Explore by Colours</h1>
      </div>
      <div className="w-full lg:w-3/4 flex flex-wrap gap-2 md:gap-3">
        {colors.map((color, index) => (
          <ColorButton key={index} color={color} />
        ))}
      </div>
    </section>
  );
};

export default ExploreByColors;
