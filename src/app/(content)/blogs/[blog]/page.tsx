import { Button } from "@/components/ui/button";
import Image from "next/image";
import Head from "next/head";
import { createClient, media, OAuthStrategy } from "@wix/sdk";
import { items as itemsSDK } from "@wix/data";

import React from "react";
import RichContentViewer from "@/components/RichContentViewer";
import { getRichContent } from "@/lib/rich-content-api";

interface BlogPost {
  _id: string;
  blogTitle: string;
  category: string;
  blogImage: string;
  blogContent: string;
}

const wixClient = createClient({
  modules: { items: itemsSDK },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
  }),
});

const SingleBlog = async () => {
  const richContent = await getRichContent();

  const { items } = await wixClient.items.query("blog_posts").find();
  if (!items || items.length === 0) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <p className="text-xl">No blog post found</p>
      </div>
    );
  }
  const blogData = items[0] as BlogPost;
  const scaledImageUrl = media.getScaledToFillImageUrl(
    blogData.blogImage,
    1200,
    700,
    {}
  );

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
              <RichContentViewer content={richContent} />
            </section>
          </article>
        </main>
      </div>
    </>
  );
};

export default SingleBlog;
