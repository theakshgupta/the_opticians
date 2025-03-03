import Link from 'next/link';
import Image from 'next/image';
import { media } from '@wix/sdk';

interface BlogPost {
  _id: string;
  blogTitle: string;
  blogText: string;
  category: string;
  blogImage: string;
}

function BlogCard({ post }: { post: BlogPost }) {
  const scaledImageUrl = media.getScaledToFillImageUrl(
    post.blogImage,
    600,
    800,
    {}
  );

  return (
    <Link href={`/blogs/${post._id}`}>
      <article className="flex flex-col overflow-hidden rounded-2xl bg-white border shadow transition-shadow hover:shadow-md cursor-pointer">
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
    </Link>
  );
}

export default BlogCard;