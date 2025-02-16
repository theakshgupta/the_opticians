import { Button } from "@/components/ui/button";
import Image from "next/image";
import Head from "next/head";
import { FC } from "react";

interface BlogMetadata {
  title: string;
  category: string;
  date: string;
  time: string;
  imageUrl: string;
}

const blogData: BlogMetadata = {
  title: "The Psychology of Eyeglasses: What Your Frames Say About You",
  category: "Eyeglasses",
  date: "3 February 2025",
  time: "10:00 AM",
  imageUrl: "/sample-blog.jpg",
};

const SingleBlog: FC = () => {
  return (
    <>
      <Head>
        <title>{blogData.title} | Eyewear Insights</title>
        <meta
          name="description"
          content="Discover how different eyewear styles impact first impressions and self-perception."
        />
      </Head>
      <div className="w-full min-h-screen px-5 py-10 md:px-10 lg:px-16">
        {/* Blog Header */}
        <header className="w-full flex flex-col md:items-center md:text-center gap-4">
          <Button variant="outline" className="w-max">
            {blogData.category}
          </Button>
          <h1 className="w-full md:w-[80%] lg:w-[70%] xl:w-[60%] text-3xl md:text-5xl font-bold">
            {blogData.title}
          </h1>
          <div className="text-gray-600 flex gap-4 items-center">
            <p>{blogData.date}</p>
            <span className="h-3 w-3 rounded-full bg-gray-300"></span>
            <p>{blogData.time}</p>
          </div>
        </header>

        {/* Blog Image */}
        <div className="w-full my-10 h-60 md:h-96 xl:h-[70vh] rounded-2xl overflow-hidden">
          <Image
            src={blogData.imageUrl}
            alt={blogData.title}
            width={1200}
            height={700}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        <main className="flex flex-col md:flex-row it ems-center justify-center gap-6">
          {/* Blog Content */}
          <article className="w-full md:w-[80%] lg:w-[70%] xl:w-[60%] flex flex-col gap-8">
            <section className="flex flex-col gap-4 mt-10">
              <h2 className="text-3xl font-semibold">Introduction</h2>
              <p className="text-base text-gray-800 font-light leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque laborum consequatur magnam harum animi iure itaque sed incidunt saepe vel.
              </p>
            </section>

            {/* Other sections here... */}
          </article>
        </main>
      </div>
    </>
  );
};

export default SingleBlog;
