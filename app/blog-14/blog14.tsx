// app/blog/[id]/Blog14.tsx
"use client";

import Image from "next/image";
// import { Calendar } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
// import { format } from "date-fns";
import { fetchEvents } from "@/app/lib/api";
import Insight from "../components/insights";
import Footer from "../components/shared ui/footer";
const marketingData = [
  {
    title: "1. Digital Groove: Where Innovation Meets Cool Ideas",
    description: (
      <>
        <p className="text-[#ADADAD] font-inter text-[16px] md:text-[20px] mt-2">
          Ever think, &quot;Man, my brand needs a digital upgrade&quot;? Well,
          BEKS MEDIA doesn&apos;t just market; we&apos;re the controllers
          spinning the latest hits for your brand. Our team of freelance
          professionals keeps the ideas flowing, making sure your strategy
          isn&apos;t just innovative but groovy too. We&apos;re all about
          jazzing up your brand with marketing opportunities that keep the cash
          flow steady and the customers dancing your way.
        </p>
      </>
    ),
  },
  {
    title: "2. Budget-Friendly Voyage",
    description: (
      <>
        <p className="text-[#ADADAD] font-inter text-[16px] md:text-[20px] mt-2">
          Choosing to partner with a digital marketing agency now is akin to
          hoisting the sails for a smooth voyage, ensuring that your brand
          reaches new horizons. Penny-pinching on marketing might seem like a
          short-term gain, but in the long run, it could cost you loads of
          potential customers. A digital marketing agency is your strategic
          ally, steering your ship through the currents of online trends and
          ensuring that your brand not only survives but thrives in the
          competitive waters. It&apos;s not just about spending; it&apos;s about
          making a smart investment in the success and longevity of your
          business.
        </p>
      </>
    ),
  },
  {
    title: "3. Delegation, delegation, delegation",
    description: (
      <>
        <p className="text-[#ADADAD] font-inter text-[16px] md:text-[20px] mt-2">
          Choosing to entrust your online marketing strategy to experts rather
          than attempting to handle everything on your own is a strategic move
          that pays dividends. By delegating this crucial aspect to those
          well-versed in the intricacies of digital marketing, you free up
          valuable time and resources. This not only ensures a more effective
          online presence but also allows you to channel your focus towards
          other strategic goals, propelling your brand forward with a
          well-rounded approach. In the ever-evolving digital landscape,
          strategic delegation is the key to unlocking the full potential of
          your brand.
        </p>
      </>
    ),
  },
  {
    title: "4. Trendy Research Vibes",
    description: (
      <>
        <p className="text-[#ADADAD] font-inter text-[16px] md:text-[20px] mt-2">
          Aligning your brand with the latest trends is not just a choice;
          it&apos;s a powerful strategy that can propel your brand to new
          heights. At a top-notch marketing agency like BEKS MEDIA, we
          understand the pulse of ever-changing trends in the digital realm.
          Delegating this task to our expert team ensures that your brand
          remains in sync with the dynamic landscape of consumer preferences and
          industry innovations. Staying ahead of the curve doesn&apos;t just
          mean keeping up; it means setting the pace. By entrusting your brand
          to our experienced hands, you not only embrace the current trends but
          position yourself to lead the way, creating a lasting impact in the
          ever-evolving market.
        </p>
      </>
    ),
  },
  {
    title: "5. Results That Pop",
    description: (
      <>
        <p className="text-[#ADADAD] font-inter text-[16px] md:text-[20px] mt-2">
          Aligning with a digital marketing agency propels you toward your
          destination with a results-driven campaign. It&apos;s not just about
          enhancing your online appearance; it&apos;s about securing concrete,
          measurable outcomes. Imagine the relief of not shouldering this
          responsibility alone but entrusting it to a seasoned team with a
          precise understanding of the digital landscape. It&apos;s not just
          about looking good online; it&apos;s about achieving real, impactful
          results, and that&apos;s precisely what a proficient team can deliver
          for your brand.
        </p>
      </>
    ),
  },
];
export default function Blog14() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetchEvents();
        console.log("mount", data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    }

    getData();
  }, []);

  // const formatDate = (dateString?: string): string => {
  //   if (!dateString) return "Unknown Date";
  //   const date = new Date(dateString);
  //   return date.toString() === "Invalid Date"
  //     ? "Invalid Date"
  //     : format(date, "MMM d, yyyy");
  // };

  const isActive = (path: string): string =>
    pathname === path
      ? "text-[#DC2F39]"
      : "hover:text-gray-300 transition duration-300";

  return (
    <>
      <div className="bg-black">
        <div className="bg-black relative text-white min-h-screen px-4 md:px-[80px] py-8">
          <div>
            <div>
              <Image
                src="/redblur.png"
                alt="Blur effect"
                width="480"
                height="460"
                className="absolute left-0 top-0"
              />
            </div>

            <div className="flex relative z-10 justify-between pb-[90px] items-center">
              <div className="text-white font-bold text-lg sm:text-xl md:text-2xl">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width="122"
                  height="50"
                  className="object-contain z-10"
                />
              </div>
              <div>
                <button className="text-white focus:outline-none">
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

            <h1 className="text-3xl uppercase relative z-10 font-inter md:text-5xl font-bold max-w-[750px]">
              Smooth Sailing Ahead: 5 Big Reasons why you should partner with a
              digital marketing agency
            </h1>

            <div className="flex relative z-10 justify-between items-center gap-4 mt-4">
              <div className="flex gap-4 items-center">
                <Image
                  src="/profile.png"
                  alt="Author Avatar"
                  width="40"
                  height="40"
                  className="rounded-full"
                />
                <span className="text-lg font-inter">beks author</span>
              </div>
              <div className="flex items-center gap-1 text-gray-400">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="font-inter">April 30, 2025</span>
              </div>
            </div>

            <div className="mt-6 relative">
              <Image
                src="/reasons.png"
                alt="Storytelling in Digital Marketing"
                width="800"
                height="400"
                className="w-full h-auto"
              />
            </div>

            <div className="max-w-[1080px] mx-auto">
              <div className="flex flex-col justify-center items-center">
                <span className="mt-[60px] text-[28px] text-white font-inter max-w-[1280px]">
                  Have you ever found yourself sitting in front of your laptop,
                  thinking where to start?
                </span>
              </div>
              <div className="flex justify-start mt-8 items-center gap-2">
                <Image
                  src="/divider.png"
                  alt="Divider"
                  width="200"
                  height="1"
                  className="h-[2px]"
                />
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <div className="flex gap-2 my-8 items-center">
                    <Image
                      src="/blues.png"
                      alt="Research icon"
                      width="32"
                      height="32"
                    />
                    <h3 className="text-[24px] text-white font-inter uppercase font-semibold">
                      RESEARCH 1
                    </h3>
                  </div>
                  {marketingData.map((item, index) => (
                    <div key={index}>
                      <h2 className="text-[30px] font-inter my-4 text-white uppercase md:text-[40px] font-bold mt-2">
                        {item.title}
                      </h2>
                      {item.description}
                    </div>
                  ))}
                  <ul className="list-disc font-inter list-inside mt-2 text-[16px] md:text-[20px] text-[#F0F0F0] space-y-1">
                    <li>Builds trust with the audience.</li>
                    <li>
                      <span style={{ fontWeight: "bold" }}>
                        Increases engagement
                      </span>{" "}
                      through relatable content.
                    </li>
                    <li>Enhances brand recall and loyalty.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

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
              <div className="absolute top-[30px] left-[40px] md:left-[80px] z-10">
                <Image
                  src="/logo.png"
                  alt="Beks Media Logo"
                  width={122}
                  height={41}
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

          {/* <div className="flex justify-center items-center mt-[90px] w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-[1200px]">
              {blogs &&
                blogs.map((post) => (
                  <div key={post.id} className="overflow-hidden">
                    <div className="relative w-full h-[220px] md:h-[400px]">
                      <Image
                        width={200}
                        height={200}
                        src={
                          post.thumbnail?.[0]?.formats?.thumbnail?.url ??
                          post.thumbnail?.[0]?.url ??
                          "/default-small.png"
                        }
                        alt={post.Blog_title}
                        className="absolute inset-0 w-full h-full object-cover md:object-cover"
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
                      <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                        <Link href={`/blog/${post.id}`}>
                          <button className="bg-[#15131A] w-full sm:w-[187px] h-[50px] md:h-[56px] p-2 rounded-full inline-flex items-center space-x-2">
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
                            <span className="text-white font-inter text-sm sm:text-[14px] md:text-[18px] pr-4">
                              Read More
                            </span>
                          </button>
                        </Link>

                        <button className="bg-[#15131A] w-full sm:w-[187px] h-[50px] md:h-[56px] p-2 rounded-full inline-flex items-center space-x-2">
                          <div className="w-8 h-8 bg-[#18529D] rounded-full flex items-center justify-center">
                            <Image
                              src="/share.png"
                              width={20}
                              height={20}
                              alt="Share"
                            />
                          </div>
                          <span className="text-white font-inter text-sm sm:text-[14px] md:text-[18px] pr-4">
                            Share Post
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div> */}
        </div>

        <Insight />
        <Footer />
      </div>
    </>
  );
}
