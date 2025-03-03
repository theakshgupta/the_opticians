import { createClient, media, OAuthStrategy } from "@wix/sdk";
import { items as itemsSDK } from "@wix/data";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface BlogPost {
  _id: string;
  blogTitle: string;
  blogText: string;
  category: string;
  blogImage: string;
}

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

function BlogContent({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-2 text-black md:text-white">
      <p className="text-sm uppercase tracking-wide opacity-80">Featured</p>
      <h2 className="text-lg md:text-2xl lg:text-4xl font-medium leading-tight md:w-[90%]">
        {title}
      </h2>
      <p className="text-sm md:text-lg lg:text-xl font-light md:w-[90%]">
        {description}
      </p>
    </div>
  );
}

function BlogCard({ post }: { post: BlogPost }) {
  const scaledImageUrl = media.getScaledToFillImageUrl(
    post.blogImage,
    600,
    800,
    {}
  );
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl bg-white border shadow transition-shadow hover:shadow-md">
      <div className="w-full h-40 md:h-52 lg:h-60 overflow-hidden">
        <Image
          src={scaledImageUrl}
          alt={post.blogTitle}
          width={500}
          height={300}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <div className="mb-3 flex items-center justify-between text-xs text-gray-500">
          <p>{post.category}</p>
        </div>
        <h3 className="text-lg md:text-xl font-semibold leading-tight">
          {post.blogTitle}
        </h3>
        <p className="mt-2 text-sm text-gray-600">{post.blogText}</p>
      </div>
    </article>
  );
}

export default async function BlogsPage() {

  const { items: featuredItems } = await wixClient.items
    .query("featured_blog")
    .find();
  const { items: recentItems } = await wixClient.items
    .query("blog_posts")
    .find();

  if (!featuredItems || featuredItems.length === 0) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-semibold">No featured blog post found</h1>
      </div>
    );
  }
  if (!recentItems || recentItems.length === 0) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-semibold">No blog posts found</h1>
      </div>
    );
  }

  const featured = featuredItems[0] as featured_blogPost;
  const recentPosts = recentItems as BlogPost[];
  const scaledFeaturedImageUrl = media.getScaledToFillImageUrl(
    featured.blogImage,
    1920,
    1080,
    {}
  );

  return (
    <main className="flex flex-col px-5 my-10 md:px-10 lg:px-16">
      <header>
        <h1 className="mb-7 text-4xl font-medium md:text-5xl">Blogs</h1>
      </header>

      <section className="relative w-full h-60 md:h-[70vh] overflow-hidden border rounded-t-2xl md:rounded-2xl">
        <Image
          src={scaledFeaturedImageUrl}
          alt={featured.blogTitle}
          width={1920}
          height={1080}
          priority
          className="w-full h-full object-cover rounded-t-2xl md:rounded-2xl"
        />
        <div className="absolute bottom-0 hidden w-full items-center justify-between p-6 md:px-10 md:flex bg-black/50 rounded-b-2xl">
          <BlogContent
            title={featured.blogTitle}
            description={featured.blogText}
          />
          <button
            className="flex items-center justify-center rounded-full w-10 h-10 md:w-12 md:min-w-12 md:h-12 md:min-h-12 border border-white text-white hover:bg-white hover:text-black transition-colors"
            aria-label="Read More"
          >
            <ArrowRight width={20} height={20} />
          </button>
        </div>
      </section>

      <section className="flex items-center justify-between p-5 bg-white rounded-b-2xl shadow md:hidden">
        <BlogContent
          title={featured.blogTitle}
          description={featured.blogText}
        />
      </section>

      <section className="my-16 flex flex-col gap-5">
        <h2 className="text-2xl md:text-3xl font-medium">Blog Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {recentPosts.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>
      </section>
    </main>
  );
}
