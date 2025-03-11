"use client";

import Image from "next/image";
import { Calendar } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import Insight from "../../components/insights";
import Footer from "../../components/shared ui/footer";
import { fetchEvents } from "../../lib/api";
// Existing interfaces with adjustments
interface ParagraphChild {
  type: string;
  text: string;
  bold?: boolean;
}

interface ListItem {
  type: string; // e.g., "list-item"
  children: ParagraphChild[];
}

// Union type to handle both paragraphs and lists
interface Paragraph {
  type: string; // "paragraph" or "list"
  children: ParagraphChild[] | ListItem[]; // Children can be either text nodes or list items
  format?: string; // Optional, for "unordered" or "ordered" lists
}

interface Blogs {
  id: number;
  Author_name: string;
  Author_Avatar: {
    url: string;
    formats?: {
      thumbnail?: {
        url: string;
      };
    };
  }[];
  Blog_Description: string;
  Blog_title: string;
  Small_thumbnail: {
    url: string;
    formats?: {
      thumbnail?: {
        url: string;
      };
      small?: {
        url: string;
      };
    };
  }[];
  Large_thumbnail: {
    url: string;
    formats?: {
      thumbnail?: {
        url: string;
      };
      large?: {
        url: string;
      };
    };
  }[];
  Description?: Paragraph[];
  publishedAt?: string;
}

export default function ArticlePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [blog, setBlog] = useState<Blogs | null>(null);
  const [blogs, setBlogs] = useState<Blogs[] | null>(null);
  const baseUrl = "http://localhost:1337";
  const { id } = useParams();

  const formatDate = (dateString?: string): string => {
    if (!dateString) return "Unknown Date"; // Fallback for undefined or empty string
    const date = new Date(dateString);
    return date.toString() === "Invalid Date"
      ? "Invalid Date"
      : date.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        });
  };
  useEffect(() => {
    const getEvents = async () => {
      const data = await fetchEvents();
      if (data) {
        setBlogs(data.data); // Strapi API wraps data inside `.data`
      }
    };
    getEvents();
  }, []);

  const pathname = usePathname();

  useEffect(() => {
    const getBlog = async () => {
      const data = await fetchEvents(); // Fetch all blogs
      if (data && data.data) {
        const selectedBlog = data.data.find(
          (post: Blogs) => post.id === Number(id)
        );
        setBlog(selectedBlog || null); // Set a single blog object
      }
    };
    getBlog();
  }, [id]);

  if (!blog) {
    return <div className="text-white bg-black min-h-screen">Loading...</div>;
  }
  // Fix: Use string instead of 'any' for type safety
  const isActive = (path: string) =>
    pathname === path
      ? "text-red-600"
      : "hover:text-gray-300 transition duration-300";
  return (
    <>
      <div className="bg-black">
        <>
          {" "}
          <div className="bg-black relative text-white min-h-screen px-4 md:px-[80px] py-8">
            <div className="">
              <Image
                src="/redblur.png"
                alt="Blur effect"
                width={480}
                height={460}
                className="absolute left-0 top-0 "
              />
            </div>

            <div className="flex relative z-10 justify-between pb-[90px] items-center">
              <div className="text-white font-bold text-lg sm:text-xl md:text-2xl">
                <Image
                  src="/logo.png"
                  alt="Blur effect"
                  width={122}
                  height={50}
                  objectFit="contain z-10"
                />
              </div>
              <div>
                {" "}
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="text-white focus:outline-none "
                >
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {/* Title */}
            <h1 className="text-3xl uppercase relative z-10 font-sans md:text-5xl font-bold max-w-[750px]">
              {blog.Blog_title}
            </h1>

            {/* Author & Date */}
            <div className="flex relative z-10  justify-between items-center gap-4 mt-4">
              <div className="flex gap-4 items-center">
                {" "}
                <Image
                  src={
                    `${baseUrl}${blog.Author_Avatar?.[0]?.url}` ||
                    "/default-avatar.png"
                  }
                  alt={blog.Author_name || "Author Avatar"}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="text-lg font-sans">{blog.Author_name}</span>
              </div>
              <div className="flex items-center gap-1 text-gray-400">
                <Calendar className="w-5 h-5" />
                <span className="font-sans">
                  {formatDate(blog?.publishedAt)}
                </span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mt-6 relative">
              <Image
                src="/blogbg.jpg"
                alt="Storytelling in Digital Marketing"
                width={800}
                height={400}
                className="w-full h-auto "
              />
            </div>

            <div className="max-w-[1080px] mx-auto">
              {/* Article Content */}
              <div className="flex flex-col justify-center items-center">
                {" "}
                <span className="mt-[60px] text-[28px]  text-white font-sans max-w-[1280px]">
                  {blog.Blog_Description}
                </span>
              </div>
              <div className="flex justify-start mt-8 items-center gap-2">
                <Image
                  src="/divider.png"
                  alt="Storytelling in Digital Marketing"
                  width={200}
                  height={1}
                  className="h-[2px]"
                />
                <span className="uppercase font-sans text-[24px] ">
                  Lorem ipsum
                </span>
              </div>

              {/* Research Sections */}
              <div className="mt-8 space-y-6">
                {[1, 2].map((item) => (
                  <div key={item}>
                    <div className="flex gap-2 my-8 items-center">
                      <Image
                        src="/blues.png"
                        alt="Storytelling in Digital Marketing"
                        width={32}
                        height={32}
                      />
                      <h3 className="text-[24px] text-white font-sans uppercase font-semibold">
                        RESEARCH {item}
                      </h3>
                    </div>
                    <h2 className="text-[30px] font-sans my-4 text-white uppercase md:text-[50px] font-bold mt-2">
                      LOREM IPSUM DOLOR SIT AMET
                    </h2>
                    {blog.Description &&
                      blog.Description.map((block, index) => {
                        if (block.type === "paragraph") {
                          return (
                            <p
                              key={index}
                              className="text-[#ADADAD] font-sans text-[16px] md:text-[20px] mt-2"
                            >
                              {(block.children as ParagraphChild[]).map(
                                (child, childIndex) => (
                                  <span
                                    key={childIndex}
                                    style={{
                                      fontWeight: child.bold
                                        ? "bold"
                                        : "normal",
                                    }}
                                  >
                                    {child.text}
                                  </span>
                                )
                              )}
                            </p>
                          );
                        } else if (
                          block.type === "list" &&
                          block.format === "unordered"
                        ) {
                          return (
                            <ul
                              key={index}
                              className="list-disc font-sans list-inside mt-2 text-[16px] md:text-[20px] text-[#F0F0F0] space-y-1"
                            >
                              {(block.children as ListItem[]).map(
                                (item, itemIndex) => (
                                  <li key={itemIndex}>
                                    {item.children.map((child, childIndex) => (
                                      <span
                                        key={childIndex}
                                        style={{
                                          fontWeight: child.bold
                                            ? "bold"
                                            : "normal",
                                        }}
                                      >
                                        {child.text}
                                      </span>
                                    ))}
                                  </li>
                                )
                              )}
                            </ul>
                          );
                        }
                        return null;
                      })}
                  </div>
                ))}
              </div>
            </div>
            {menuOpen && (
              <div className="fixed inset-0 bg-gradient-to-b from-[#061226] to-[#030307] z-50 flex flex-col items-center justify-center text-center">
                {/* Background Image */}
                <Image
                  src="/dots.png"
                  alt="Background Dots"
                  layout="fill"
                  objectFit="cover"
                  className="z-0 opacity-50"
                />

                {/* Close Button */}
                <button
                  onClick={() => setMenuOpen(false)}
                  className="absolute top-4 right-4 text-white z-10 focus:outline-none"
                >
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {/* Logo */}
                <div className="absolute top-6 left-6 z-10">
                  <Image
                    src="/logo.png"
                    alt="Beks Media Logo"
                    width={80}
                    height={80}
                  />
                </div>

                {/* Menu Items */}
                <nav className="z-10">
                  <ul className="text-white text-3xl sm:text-4xl font-bold space-y-6">
                    <li>
                      <Link href="/" className={isActive("/")}>
                        BEKS MEDIA
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" className={isActive("/about")}>
                        ABOUT US
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/portfolio"
                        className={isActive("/portfolio")}
                      >
                        PORTFOLIO
                      </Link>
                    </li>
                    <li>
                      <Link href="/article" className={isActive("/article")}>
                        BLOGS
                      </Link>
                    </li>
                  </ul>
                </nav>

                {/* Footer */}
                <p className="absolute bottom-4 text-white text-sm z-10">
                  © Copyright 2025 Beks Media
                </p>
              </div>
            )}
            <div className="flex justify-center items-center mt-[90px] w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[1200px]">
                {blogs &&
                  blogs.map((post) => (
                    <div key={post.id} className="overflow-hidden">
                      {/* Image Container */}
                      <div className="relative w-full h-[400px]">
                        <Image
                          width={200}
                          height={200}
                          src={
                            `${baseUrl}${post.Small_thumbnail?.[0]?.formats?.thumbnail?.url}` ||
                            `${baseUrl}${post.Small_thumbnail?.[0]?.url}` ||
                            "/default-small.png"
                          }
                          alt={post.Blog_title}
                          className="absolute inset-0 w-full h-full object-contain lg:object-cover"
                        />
                      </div>

                      {/* Card Content */}
                      <div className="py-6 px-4">
                        <div className="flex items-center mb-4">
                          <Image
                            src="/profile.png"
                            height={50}
                            width={50}
                            alt="Author"
                            className="rounded-full mr-3 w-10 h-10"
                          />
                          <div>
                            <p className="text-white text-[20px] font-sans font-semibold">
                              {post.Author_name}
                            </p>
                            <p className="text-[#ADADAD] font-sans text-[16px]">
                              {formatDate(post?.publishedAt)}
                            </p>
                          </div>
                        </div>

                        <h2 className="text-[28px] text-white md:text-[32px] font-[700] font-sans mb-4">
                          {post.Blog_title}
                        </h2>

                        <p className="text-[#ADADAD] font-sans mb-6">
                          {post.Blog_Description}
                        </p>

                        <div className="flex space-x-4">
                          <Link href={`/blog/${post.id}`}>
                            <button className="bg-[#15131A] w-[187px] h-[50px] md:h-[56px] p-2 rounded-full inline-flex items-center space-x-2 ">
                              <div className="w-8 h-8 bg-[#18529D] rounded-full flex items-center justify-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="white"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M5 12h14" />
                                  <path d="M12 5l7 7-7 7" />
                                </svg>
                              </div>
                              <span className="text-white font-sans text-[14px] md:text-[18px] pr-4 text-base">
                                Read More
                              </span>
                            </button>
                          </Link>
                          <button className="bg-[#15131A] w-[187px] h-[50px] md:h-[56px] p-2 rounded-full inline-flex items-center space-x-2 ">
                            <div className="w-8 h-8 bg-[#18529D] rounded-full flex items-center justify-center">
                              <Image
                                src="/share.png"
                                width={20}
                                height={20}
                                alt="Share"
                              />
                            </div>
                            <span className="text-white font-sans pr-4 text-[14px] md:text-[18px] text-base">
                              Share Post
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </>

        <Insight />
        <Footer />
      </div>
    </>
  );
}
