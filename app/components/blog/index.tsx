"use client";
import { fetchEvents } from "@/app/lib/api";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

// Existing interfaces (unchanged)
interface ParagraphChild {
  type: string;
  text: string;
  bold?: boolean;
}

interface ListItem {
  type: string;
  children: ParagraphChild[];
}

interface Paragraph {
  type: string;
  children: ParagraphChild[] | ListItem[];
  format?: string;
}

interface Blogs {
  id: number;
  Author_name: string;
  // Changed thumbnail from string to object matching your usage
  thumbnail: {
    url: string;
    formats?: {
      thumbnail?: {
        url: string;
      };
    };
  }[];
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

const BlogCards: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [blogs, setBlogs] = useState<Blogs[] | null>(null);
  const pathname = usePathname();
  const isActive = (path: string) =>
    pathname === path
      ? "text-[#DC2F39]"
      : "hover:text-gray-300 transition duration-300";

  const formatDate = (dateString?: string): string => {
    if (!dateString) return "Unknown Date";
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
      try {
        const data = await fetchEvents();
        if (data) {
          setBlogs(data.data);
          console.log(data.data);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    getEvents();
  }, []);

  useEffect(() => {
    console.log("Blogs updated:", blogs);
  }, [blogs]);

  return (
    <div className="bg-black min-h-screen mt-[100px] flex items-center justify-center p-4">
      {menuOpen && (
        <div className="fixed inset-0 bg-gradient-to-b from-[#061226] to-[#030307] z-50 flex flex-col items-center justify-center text-center">
          <Image
            src="/dots.png"
            alt="Background Dots"
            layout="fill"
            objectFit="cover"
            className="z-0 opacity-50"
          />
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-[30px] right-[40px] md:right-[80px] text-white z-10 focus:outline-none"
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
          <div className="absolute top-[30px] left-[80px] z-10">
            <Image
              src="/logo.png"
              alt="Beks Media Logo"
              width={80}
              height={80}
            />
          </div>
          <nav className="z-10">
            <ul className="text-white text-[32px] md:text-[60px]  font-bold space-y-6">
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
                <Link href="/portfolio" className={isActive("/portfolio")}>
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
          <p className="absolute bottom-4 text-white text-sm z-10">
            © Copyright 2025 Beks Media
          </p>
        </div>
      )}
      {blogs ? (
        <div className="flex justify-center items-center mt-[90px] w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[1200px]">
            {blogs.map((post) => (
              <div key={post.id} className="overflow-hidden">
                <div className="relative w-full h-[400px]">
                  <Image
                    width={200}
                    height={200}
                    src={
                      post.thumbnail?.[0]?.formats?.thumbnail?.url ??
                      post.thumbnail?.[0]?.url ??
                      "/default-small.png"
                    }
                    alt={post.Blog_title}
                    className="absolute inset-0 w-full h-full object-contain lg:object-cover"
                  />
                </div>
                <div className="py-6 px-4">
                  <div className="flex items-center mb-4">
                    <Image
                      src={
                        post.Author_Avatar?.[0]?.formats?.thumbnail?.url ??
                        post.Author_Avatar?.[0]?.url ??
                        "/profile.png"
                      }
                      height={50}
                      width={50}
                      alt="Author"
                      className="rounded-full mr-3 w-10 h-10"
                    />
                    <div>
                      <p className="text-white text-[20px] font-inter font-semibold">
                        {post.Author_name}
                      </p>
                      <p className="text-[#ADADAD] font-inter text-[16px]">
                        {formatDate(post?.publishedAt)}
                      </p>
                    </div>
                  </div>
                  <h2 className="text-[28px] text-white md:text-[32px] font-[700] font-inter mb-4">
                    {post.Blog_title}
                  </h2>
                  <p className="text-[#ADADAD] font-inter mb-6">
                    {post.Blog_Description}
                  </p>
                  <div className="flex space-x-4">
                    <Link href={`/blog/${post.id}`}>
                      <button className="bg-[#15131A] w-[187px] h-[50px] md:h-[56px] p-2 rounded-full inline-flex items-center space-x-2">
                        <div className="w-8 h-8 bg-[#18529D] rounded-full flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/999/svg"
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
                        <span className="text-white font-inter text-[14px] md:text-[18px] pr-4 text-base">
                          Read More
                        </span>
                      </button>
                    </Link>
                    <button className="bg-[#15131A] w-[187px] h-[50px] md:h-[56px] p-2 rounded-full inline-flex items-center space-x-2">
                      <div className="w-8 h-8 bg-[#18529D] rounded-full flex items-center justify-center">
                        <Image
                          src="/share.png"
                          width={20}
                          height={20}
                          alt="Share"
                        />
                      </div>
                      <span className="text-white font-inter pr-4 text-[14px] md:text-[18px] text-base">
                        Share Post
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-white">Loading blogs...</div>
      )}
    </div>
  );
};

export default BlogCards;
