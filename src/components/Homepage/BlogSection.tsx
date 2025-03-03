import Image from "next/image";
import { Button } from "../ui/button";
import { createClient, media, OAuthStrategy } from "@wix/sdk";
import { items as itemsSDK } from "@wix/data";

interface featured_blogPost {
  _id: string;
  blogTitle: string;
  blogText: string;
  blogCategory: string;
  blogImage: string;
}

const wixClient = createClient({
  modules: { items: itemsSDK },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
  }),
});

export default async function BlogSection() {
  const { items: featuredItems } = await wixClient.items
    .query("featured_blog")
    .find();

  if (!featuredItems || featuredItems.length === 0) {
    return (
      <section className="px-5 pt-16 my-16 md:px-10 lg:px-20 border-t">
        <h1 className="text-4xl font-medium md:text-5xl">From The Blog</h1>
        <p className="mt-5 text-center text-xl">No featured blog available</p>
      </section>
    );
  }

  const featured = featuredItems[0] as featured_blogPost;
  const scaledImageUrl = media.getScaledToFillImageUrl(
    featured.blogImage,
    800,
    600,
    {}
  );

  return (
    <section className="px-5 pt-16 my-16 md:px-10 lg:px-20 border-t">
      <h1 className="text-4xl font-medium md:text-5xl">From The Blog</h1>
      <div className="flex flex-col md:flex-row justify-between mt-5 gap-5 md:gap-10">
        <div className="relative w-full md:w-2/5 h-80 rounded-2xl">
          <Image
            src={scaledImageUrl}
            alt={featured.blogTitle}
            fill
            className="object-cover rounded-2xl"
          />
        </div>
        <div className="w-full flex-1 flex flex-col justify-center gap-4 rounded-2xl">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium">
            {featured.blogTitle}
          </h1>
          <p className="text-sm font-light md:text-lg">{featured.blogText}</p>
          <Button className="text-lg mt-2 md:w-max h-11 md:px-6">
            Read More
          </Button>
        </div>
      </div>
    </section>
  );
}
