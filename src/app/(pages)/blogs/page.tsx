import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { createClient, media, OAuthStrategy } from "@wix/sdk";
import { items as itemsSDK } from "@wix/data";

// Initialize the Wix client.
const wixClient = createClient({
  modules: { itemsSDK },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
  }),
});

// -----------------------------
// Types & Interfaces
// -----------------------------
interface BlogContentProps {
  title: string;
  description: string;
}

export interface BlogCardProps {
  imageSrc: string;
  category: string;
  date: string;
  title: string;
  description: string;
}

// -----------------------------
// Reusable Components
// -----------------------------
const BlogContent = ({ title, description }: BlogContentProps) => (
  <div className="flex flex-col gap-2 text-black md:text-white">
    <p className="text-sm uppercase tracking-wide opacity-80">Featured</p>
    <h1 className="font-semibold leading-tight text-lg md:text-2xl lg:text-4xl">
      {title}
    </h1>
    <p className="font-light text-sm md:text-lg lg:text-xl">{description}</p>
  </div>
);

const BlogCard = ({
  imageSrc,
  category,
  date,
  title,
  description,
}: BlogCardProps) => (
  <article className="flex flex-col overflow-hidden rounded-2xl bg-white shadow transition-shadow hover:shadow-md">
    <div className="relative w-full h-40 md:h-52 lg:h-60">
      <Image
        src={media.getScaledToFillImageUrl(imageSrc, 600, 800, {})}
        alt="Blog image"
        layout="fill"
        objectFit="cover"
        className="object-cover"
        loading="lazy"
      />
    </div>
    <div className="p-5">
      <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
        <span>{category}</span>
        <span>{date}</span>
      </div>
      <h3 className="font-semibold leading-tight text-lg md:text-xl">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </div>
  </article>
);

// -----------------------------
// Sample Data (Featured Blog)
// -----------------------------
const FEATURED_BLOG = {
  image: "/sampleBlog.jpg",
  title: "Find Your Perfect Eyeglasses: Style Meets Clarity",
  description:
    "Discover the latest trends in eyewear that blend fashion, comfort, and vision enhancement.",
};

// -----------------------------
// Main Page Component (Async Server Component)
// -----------------------------
export default async function BlogsPage() {
  let blogs: BlogCardProps[] = [];

  try {
    const { items } = await wixClient.itemsSDK
      .queryDataItems({ dataCollectionId: "blog_posts" })
      .find();

    blogs = items.map((item: any) => ({
      imageSrc: item.image, // Ensure this matches your Wix collection field name
      category: item.category,
      date: item.date,
      title: item.title,
      description: item.description,
    }));
  } catch (error) {
    console.error("Error fetching blogs:", error);
  }

  return (
    <main className="px-5 my-10 md:px-10 lg:px-16 flex flex-col">
      <h1 className="mb-7 text-4xl md:text-5xl font-medium">Blogs</h1>

      {/* Featured Blog Section */}
      <section className="relative w-full h-60 md:h-[70vh]">
        <div className="relative h-full rounded-t-2xl md:rounded-2xl overflow-hidden">
          <Image
            src={FEATURED_BLOG.image}
            alt="Featured blog image"
            layout="fill"
            objectFit="cover"
            priority
            className="object-cover rounded-t-2xl md:rounded-2xl"
          />
          {/* Overlay for larger screens */}
          <div className="hidden md:flex absolute bottom-0 w-full items-center justify-between p-6 md:p-10 bg-black/50 rounded-b-2xl">
            <BlogContent
              title={FEATURED_BLOG.title}
              description={FEATURED_BLOG.description}
            />
            <Button
              variant="outline"
              className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border-white hover:bg-white hover:text-black"
              aria-label="Read More"
            >
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
        {/* Mobile Overlay */}
        <div className="flex md:hidden items-center justify-between bg-white p-5 rounded-b-2xl shadow">
          <BlogContent
            title={FEATURED_BLOG.title}
            description={FEATURED_BLOG.description}
          />
        </div>
      </section>

      {/* Recent Blog Posts Section */}
      <section className="my-16 flex flex-col gap-5">
        <h2 className="text-2xl md:text-3xl font-medium">Recent Blog Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      </section>
    </main>
  );
}
