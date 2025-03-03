"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Head from "next/head";
import { createClient, media, OAuthStrategy } from "@wix/sdk";
import { items as itemsSDK } from "@wix/data";
import RichContentViewer from "@/components/RichContentViewer";

// Define the BlogPost interface
interface BlogPost {
  _id: string;
  blogTitle: string;
  category: string;
  blogImage: string;
  blogContent: string;
}

// Initialize the Wix client
const wixClient = createClient({
  modules: { items: itemsSDK },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
  }),
});

// Define props to receive the dynamic route parameter
interface SingleBlogProps {
  params: { blog: string };
}

// Server component to fetch and display a single blog post
const SingleBlog = async ({ params }: SingleBlogProps) => {
  // Extract the blog ID from the URL parameter
  const blogId = params.blog;

  // Fetch the specific blog post by its _id
  const { items } = await wixClient.items
    .query("blog_posts")
    .eq("_id", blogId)
    .find();

  // Handle case where no blog post is found
  if (!items || items.length === 0) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <p className="text-xl">Blog post not found</p>
      </div>
    );
  }

  // Cast the fetched item to BlogPost (since we expect one item)
  const blogData = items[0] as BlogPost;

  // Generate a scaled image URL
  const scaledImageUrl = media.getScaledToFillImageUrl(
    blogData.blogImage,
    1200,
    700,
    {}
  );

  // Render the blog post
  return (
    <>
      <Head>
        <title>{blogData.blogTitle} | Eyewear Insights</title>
        <meta
          name="description"
          content="Discover how different eyewear styles impact first impressions and self-perception."
        />
      </Head>
      <div className="w-full min-h-screen px-5 py-10 md:px-10 lg:px-16">
        <header className="w-full flex flex-col md:items-center md:text-center gap-4">
          <Button variant="outline" className="w-max">
            {blogData.category}
          </Button>
          <h1 className="w-full md:w-[80%] lg:w-[70%] xl:w-[60%] text-3xl md:text-5xl font-bold">
            {blogData.blogTitle}
          </h1>
        </header>
        <div className="w-full my-10 h-60 md:h-96 xl:h-[70vh] rounded-2xl overflow-hidden">
          <Image
            src={scaledImageUrl}
            alt={blogData.blogTitle}
            fill
            className="object-cover"
            priority
          />
        </div>
        <main className="flex flex-col md:flex-row items-center justify-center gap-6">
          <article className="w-full md:w-[80%] lg:w-[70%] xl:w-[60%] flex flex-col gap-8">
            <section className="flex flex-col gap-4 mt-10">
              <RichContentViewer richContent={(blogData.blogContent)} />
            </section>
          </article>
        </main>
      </div>
    </>
  );
};

export default SingleBlog;