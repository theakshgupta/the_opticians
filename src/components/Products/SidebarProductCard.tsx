import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Trash } from "lucide-react";
import clsx from "clsx";

type SidebarProductCardProps = {
  imageSrc: string;
  altText: string;
  brand: string;
  productName: string;
  size: string;
  price: string;
  className?: string; // Optional className prop
};

const SidebarProductCard: React.FC<SidebarProductCardProps> = ({
  imageSrc,
  altText,
  brand,
  productName,
  size,
  price,
  className, // Destructure className
}) => {
  return (
    <div
      className={clsx(
        "bg-white relative min-w-60 w-full md:w-full mx-auto border rounded-xl transition-shadow duration-300",
        className
      )}
    >
      {/* Image Section */}
      <div className="w-full rounded-t-xl overflow-hidden border-b px-5 py-8">
        <Image
          src={imageSrc}
          alt={altText}
          width={320}
          height={100}
          loading="lazy"
          className="w-full object-contain"
        />
      </div>

      {/* Content Section */}
      <div className="p-4 sm:p-4 flex md:hidden flex-col gap-1 min-w-40">
        <Badge
          variant="outline"
          className="rounded-full font-light text-xs px-2 max-w-fit"
        >
          {brand}
        </Badge>
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-1">
            <h2 className="text-base sm:text-lg font-semibold">{productName}</h2>
            <p className="text-sm sm:text-base text-gray-600 -mt-1">Size: {size}</p>
            <h3 className="text-base sm:text-lg font-medium text-gray-800 mt-1">
              {price}
            </h3>
          </div>
          <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-4 flex flex-col gap-1">
            <Button
              className="rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center hover:bg-red-500"
              aria-label="Add to Wishlist"
            >
              <Trash size={16} />
            </Button>
            <Button
              className="rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center hover:bg-[#000065]"
              aria-label="Add to Bag"
            >
              <ShoppingBag size={16} />
            </Button>
          </div>
        </div>
      </div>
      <div className="hidden md:flex px-2 py-1 sm:p-4 flex-col gap-2">
        <Badge
          variant="outline"
          className="rounded-full font-light text-xs px-2 max-w-fit"
        >
          {brand}
        </Badge>
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-1">
            <h2 className="text-sm sm:text-lg font-semibold">{productName}</h2>
            <p className="text-xs sm:text-sm text-gray-600 -mt-1">Size: {size}</p>
            <h3 className="text-sm sm:text-lg font-medium text-gray-800 mt-1">
              {price}
            </h3>
          </div>
          <div className="absolute bottom-2 right-1 sm:bottom-5 sm:right-4 flex flex-col gap-1">
            <Button
              className="rounded-full w-6 h-6 md:w-10 md:h-10 flex items-center justify-center hover:bg-red-500"
              aria-label="Add to Wishlist"
            >
              <Trash style={{ width: 20, height: 20 }} />
            </Button>
            <Button
              className="rounded-full w-6 h-6 md:w-10 md:h-10 flex items-center justify-center hover:bg-[#000065]"
              aria-label="Add to Bag"
            >
              <ShoppingBag style={{ width: 20, height: 20 }} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarProductCard;
