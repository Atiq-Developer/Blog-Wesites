import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import CommentBox from "@/components/comment";

export async function generateStaticParams() {
  const blogs = await client.fetch(
    `*[_type == "blog"] { "slug": slug.current }`
  );
  return blogs.map((blog: { slug: string }) => ({ slug: blog.slug }));
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const blog = await client.fetch(
    `*[_type == "blog" && slug.current == $slug] {
      title,
      content,
      "image": titleImage.asset->url,
    }[0]`,
    { slug }
  );

  if (!blog) {
    return (
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
          Blog Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto my-10 justify-center items-center text-center">
      {/* Author Info */}
      <div className="flex justify-center items-center flex-row p-2">
        <div className="rounded-full overflow-hidden w-12 h-12">
          <Image
            src="/University.png"
            alt="University Logo"
            width={48}
            height={48}
            className="object-cover"
          />
        </div>
        <p className="ml-3 text-lg italic text-gray-700 dark:text-gray-300">
          By{" "}
          <span className="text-[16px] font-semibold">
            Muhammad Atiq Ur Rehman
          </span>
        </p>
      </div>

      {/* Blog Title and Image */}
      <div className="flex flex-col mt-5 mx-auto justify-center items-center text-center">
        <h1
          className="text-center block text-4xl leading-8 tracking-tight
          font-bold text-black dark:text-white sm:text-5xl"
        >
          {blog.title}
        </h1>
        <Image
          className="my-6 rounded-lg object-cover shadow-md shadow-black dark:shadow-white"
          src={blog.image}
          alt={blog.title}
          width={800}
          height={800}
        />
      </div>

      {/* Blog Content */}
      <div
        className="mt-10 w-full max-w-96 sm:max-w-[500px] md:max-w-screen-md 
          mx-5 sm:mx-16 md:mx-auto text-center sm:text-left
          prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary"
      >
        <PortableText value={blog.content} />
        <CommentBox />
      </div>
    </div>
  );
}
