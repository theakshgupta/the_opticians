import Image from "next/image";
import { Button } from "../ui/button";

const BlogSection = () => {
  return (
    <section className="px-5 pt-16 my-16 md:px-10 lg:px-20 border-t">
      <h1 className="text-4xl font-medium md:text-5xl">From The Blog</h1>
      <div className="flex flex-col md:flex-row justify-between mt-5 gap-5 md:gap-10">
        <div className="relative w-full md:w-2/5 h-80 rounded-2xl">
          <Image
            src="/sample-blog.jpg"
            alt="blog image"
            fill
            className="object-cover rounded-2xl"
          />
        </div>

        <div className="w-full flex-1 flex flex-col justify-center gap-4 rounded-2xl">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus facere ducimus vero?
          </h1>
          <p className="text-sm font-light md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sed
            sapiente omnis cupiditate. Excepturi perferendis repudiandae iure
            ipsum ipsam sint, quod nobis beatae reprehenderit quos?
          </p>
          <Button
            className="text-lg mt-2 md:w-max h-11 md:px-6"
          >
            Read More
          </Button>
        </div>
      </div>
    </section>
  );
};
export default BlogSection;
