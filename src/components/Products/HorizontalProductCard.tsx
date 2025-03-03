"use client";

import { memo } from "react";
import Image from "next/image";
import clsx from "clsx";
import { Badge } from "../ui/badge";

export interface HorizontalProductCardProps {
  imageSrc: string;
  altText: string;
  brand: string;
  productName: string;
  size: string;
  price: string;
  /** Optional lens information; defaults provided if not passed */
  lensInfo?: {
    title: string;
    description: string;
  };
  className?: string;
}

const HorizontalProductCard = ({
  imageSrc,
  altText,
  brand,
  productName,
  size,
  price,
  lensInfo = {
    title: "Lens",
    description: "Single Vision Anti Reflective Standard Lenses",
  },
  className,
}: HorizontalProductCardProps) => {
  return (
    <article
      className={clsx(
        "flex flex-col md:flex-row w-full bg-white border rounded-2xl overflow-hidden shadow-sm transition-shadow duration-300 hover:shadow",
        className
      )}
    >
      {/* Image Section */}
      <figure className="relative flex-shrink-0 w-full md:w-[40%] h-60 md:h-auto m-0 overflow-hidden border-r">
        <Image
          src={imageSrc}
          alt={altText}
          fill
          sizes="(max-width: 768px) 100vw, 40vw"
          className="object-contain p-5"
        />
      </figure>

      {/* Content Section */}
      <div className="flex flex-col flex-grow gap-2 px-4 py-3 md:px-6 md:py-4">
        <Badge variant="outline" className="rounded-full text-sm w-max">
          {brand}
        </Badge>

        <header>
          <h2 className="text-2xl font-semibold">{productName}</h2>
          <p className="text-sm text-gray-600">Size: {size}</p>
        </header>

        {lensInfo && (
          <section className="bg-gray-100 px-4 py-2 rounded-lg">
            <p className="text-sm font-light">{lensInfo.title}</p>
            <p className="text-lg font-medium">{lensInfo.description}</p>
          </section>
        )}

        <footer>
          <h3 className="text-2xl font-medium mt-2">{price}</h3>
        </footer>
      </div>
    </article>
  );
};

export default memo(HorizontalProductCard);
