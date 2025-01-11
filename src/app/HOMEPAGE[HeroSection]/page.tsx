"use client";
import { Button } from "@/components/ui/button";
import Typed from "typed.js";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  const el = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const typed = new Typed(el.current!, {
      strings: [
        "Software Engineering",
        "Programming Insights",
        "Tech Trends",
        "Coding Tutorials",
        "Development Tips",
      ],
      typeSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <main>
      <section className="container px-4 py-20 mx-auto lg:flex lg:items-center lg:space-x-8">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl font-bold leading-snug text-gray-800 dark:text-gray-200 md:text-5xl">
            Discover the World of <br className="hidden lg:block" />
            <span className="text-primary underline decoration-primary">
              <span ref={el} />
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Dive into our blog for the latest articles, tutorials, and resources
            to enhance your skills and knowledge in tech.
          </p>
          <div className="mt-6">
            <Link href="/blog">
              <Button className="px-6 py-3 text-white bg-primary dark:bg-gray-800 rounded-lg shadow hover:bg-primary-dark transition-all">
                Read Our Blog
              </Button>
            </Link>
          </div>
        </div>
        <div className="w-full mt-8 lg:mt-0 lg:w-1/2">
          <Image
            src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg"
            alt="Programming and Technology"
            width={600}
            height={400}
            className="w-full h-auto max-w-md mx-auto rounded-lg shadow-lg"
          />
        </div>
      </section>
      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
              Latest Blogs
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              Explore our trending posts
            </p>
          </div>
          <div className="container px-5 mx-auto">
            <div className="flex flex-wrap -m-4">
              {[
                {
                  title:
                    "AI in Everyday Software: How GPT Models are Shaping the Future of Programming",
                  description:
                    "Explore how AI tools like ChatGPT are transforming development workflows, debugging, and user interaction.",
                  image: "/AI.jpg",
                  link: "/blog",
                  author: "Muhammad Atiq ur Rehman",
                  authorImage: "/University.png",
                },
                {
                  title:
                    "Top Programming Languages of 2025: Trends You Can’t Ignore",
                  description:
                    "Forecast the most in-demand programming languages and skills for the coming years.",
                  image: "/top.jpg",
                  link: "/blog",
                  author: "Muhammad Atiq ur Rehman",
                  authorImage: "/University.png",
                },
                {
                  title:
                    "APIs and Their Ecosystem: Tips for Creating Robust and Scalable APIs",
                  description:
                    "Share insights into designing APIs that perform well and adapt to evolving requirements.",
                  image: "/APIs.jpg",
                  link: "/blog",
                  author: "Muhammad Atiq ur Rehman",
                  authorImage: "/University.png",
                },
              ].map((blog, index) => (
                <div key={index} className="p-4 md:w-1/3">
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg flex flex-col justify-between">
                    <Image
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={blog.image}
                      alt={blog.title}
                      width={400}
                      height={400}
                    />
                    <div className="p-6 flex-grow">
                      <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
                        {blog.title}
                      </h3>
                      <p className="mt-2 text-gray-600 dark:text-gray-400">
                        {blog.description}
                      </p>
                    </div>
                    <div className="flex items-center mt-4 px-6">
                      <Image
                        src={blog.authorImage}
                        alt={blog.author}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <p className="ml-3 text-lg italic text-gray-700 dark:text-gray-300">
                        By <span className="text-[16px]">{blog.author}</span>
                      </p>
                    </div>
                    <div className="p-6 pt-1 ">
                      <Link href={blog.link}>
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
          <div className="text-center mt-8">
            <Link href="/blog">
              <Button className="m-2" variant="outline">
                Check More Blogs
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
