import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const BlogsPage = () => {
  return (
    <div className="px-5 my-10 md:px-10 lg:px-16 flex flex-col">
      <h1 className="text-4xl md:text-5xl font-medium mb-7">Blogs</h1>

      {/* Featured Blog Section */}
      <div className="relative w-full h-60 md:h-[70vh] rounded-t-2xl md:rounded-2xl overflow-hidden">
        <Image
          src="/sampleBlog.jpg"
          alt="Blog Image"
          width={1920}
          height={1080}
          priority
          className="w-full h-full object-cover rounded-t-2xl md:rounded-2xl"
        />

        {/* Overlay for larger screens */}
        <div className="hidden md:flex absolute bottom-0 w-full items-center justify-between p-6 md:p-10 bg-black/50 rounded-b-2xl">
          <BlogContent
            title="Find Your Perfect Eyeglasses: Style Meets Clarity"
            description="Discover the latest trends in eyewear that blend fashion, comfort, and vision enhancement."
          />
          <Button
            variant="outline"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border-white hover:bg-white hover:text-black"
            aria-label="Read More"
          >
            <ArrowRight style={{width:20, height:20}} />
          </Button>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div className="md:hidden flex w-full items-center justify-between bg-white p-5 rounded-b-2xl shadow">
        <BlogContent
          title="Find Your Perfect Eyeglasses: Style Meets Clarity"
          description="Discover the latest trends in eyewear that blend fashion, comfort, and vision enhancement."
        />
      </div>

      {/* Recent Blog Posts Section */}
      <div className="my-16 flex flex-col gap-5">
        <h2 className="text-2xl md:text-3xl font-medium">Recent Blog Posts</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <BlogCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Blog Content Component
const BlogContent = ({ title, description }) => (
  <div className="text-black md:text-white flex flex-col gap-2">
    <p className="text-sm uppercase tracking-wide opacity-80">Featured</p>
    <h1 className="text-lg md:text-2xl lg:text-4xl font-semibold leading-tight">{title}</h1>
    <p className="text-sm md:text-lg lg:text-xl font-light">{description}</p>
  </div>
);

// Blog Card Component
const BlogCard = () => {
  return (
    <div className="border rounded-2xl overflow-hidden flex flex-col bg-white shadow hover:shadow-md transition-shadow">
      <div className="w-full h-40 md:h-52 lg:h-60 overflow-hidden">
        <Image
          src="/sampleBlog.jpg"
          alt="Blog Image"
          width={500}
          height={300}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-3 text-xs text-gray-500">
          <p>Eyeglasses</p>
          <p>2 days ago</p>
        </div>
        <h3 className="text-lg md:text-xl font-semibold leading-tight">
          Find Your Perfect Eyeglasses: Style Meets Clarity
        </h3>
        <p className="text-sm mt-2 text-gray-600">
          Discover the latest trends in eyewear that blend fashion, comfort, and vision enhancement.
        </p>
      </div>
    </div>
  );
};

export default BlogsPage;
