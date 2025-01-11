import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import client from "@/sanity/lib/client";

interface Blog {
  title: string;
  slug: string;
  image: string;
  smallDescription: string;
  content: string;
  authorName?: string;
}

const Blog = async () => {
  const blogs: Blog[] = await client.fetch(
    `*[_type == "blog"] | order(_updatedAt asc) {
      title,
      "slug": slug.current,
      "image": titleImage.asset->url,
      smallDescription,
      content,
      authorName,
    }`
  );

  return (
    <div>
      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
              All Blogs
            </h2>
          </div>
          <div className="container px-5 mx-auto">
            <div className="flex flex-wrap -m-4">
              {blogs.map((blog, index) => (
                <div key={index} className="p-4 md:w-1/3">
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg flex flex-col justify-between">
                    <Image
                      className="rounded-t-lg"
                      src={blog.image}
                      alt={blog.title}
                      width={500}
                      height={300}
                      layout="responsive"
                    />
                    <div className="p-6 flex-grow">
                      <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
                        {blog.title}
                      </h3>
                      <p className="mt-2 text-gray-600 dark:text-gray-400">
                        {blog.smallDescription}
                      </p>
                    </div>
                    <div className="flex items-center mt-4 px-6">
                      <Image
                        src={"/University.png"}
                        alt={"authorName"}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <p className="ml-3 text-lg italic text-gray-700 dark:text-gray-300">
                        By{" "}
                        <span className="text-[16px]">
                          Muhammad Atiq Ur Rehman
                        </span>
                        {blog.authorName && (
                          <span className="text-[16px]">
                            , {blog.authorName}
                          </span>
                        )}
                      </p>
                    </div>
                    <div className="p-6 pt-1">
                      <Link href={`/blogs/${blog.slug}`}>
                        <Button className="w-full px-6 py-2" variant="outline">
                          Read More
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
