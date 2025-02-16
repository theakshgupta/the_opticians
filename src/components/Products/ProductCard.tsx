import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag } from "lucide-react";
import clsx from "clsx";

type ProductCardProps = {
  imageSrc: string;
  altText: string;
  brand: string;
  productName: string;
  size: string;
  price: string;
  className?: string; // Optional additional classes
};

const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  altText,
  brand,
  productName,
  size,
  price,
  className,
}) => {
  return (
    <div
      className={clsx(
        // You can adjust min-w values based on your design system
        "bg-white relative min-w-[15rem] md:min-w-[20rem] w-full mx-auto border rounded-xl transition-shadow duration-300",
        className
      )}
    >
      {/* Image Section */}
      <div className="w-full min-h-40 rounded-t-xl overflow-hidden flex items-center justify-center border-b p-3">
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
      <div className="p-4 relative flex flex-col gap-2">
        <Badge
          variant="outline"
          className="rounded-full font-light text-xs px-2 max-w-fit"
        >
          {brand}
        </Badge>
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-1">
            {/* Responsive typography: base on mobile, then adjust on larger screens */}
            <h2 className="text-base sm:text-lg md:text-sm lg:text-base font-semibold">
              {productName}
            </h2>
            <p className="text-sm sm:text-base md:text-xs lg:text-sm text-gray-600 -mt-1">
              Size: {size}
            </p>
            <h3 className="text-base sm:text-lg md:text-sm lg:text-base font-semibold text-gray-800 mt-1">
              {price}
            </h3>
          </div>
          {/* Action Buttons */}
          <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-4 flex flex-col gap-1">
            <Button
              className="rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center hover:bg-red-500"
              aria-label="Add to Wishlist"
            >
              <Heart size={16} />
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
    </div>
  );
};

export default ProductCard;
