import Image from "next/image";
import React from "react";

// Define the type for our blog post data
interface BlogPost {
  id: number;
  title: string;
  description: string;
  titleColor: string;
  backgroundImage: string;
}

// Sample blog post data matching the exact UI
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "THE POWER OF STORYTELLING IN DIGITAL MARKETING",
    description:
      "Storytelling is the key to standing out in a world flooded with content. It cuts through the noise and makes your message unforgettable!",
    titleColor: "text-white",
    backgroundImage: "/article1.png",
  },
  {
    id: 2,
    title: "WHY EMAIL MARKETING IS YOUR BFF IN 2024",
    description:
      "Storytelling is the key to standing out in a world flooded with content. It cuts through the noise and makes your message unforgettable!",
    titleColor: "text-white",
    backgroundImage: "/article2.png",
  },
  {
    id: 3,
    title: "WHY EMAIL MARKETING IS YOUR BFF IN 2024",
    description:
      "Storytelling is the key to standing out in a world flooded with content. It cuts through the noise and makes your message unforgettable!",
    titleColor: "text-white",
    backgroundImage: "/article3.png",
  },
  {
    id: 4,
    title: "WHY EMAIL MARKETING IS YOUR BFF IN 2024",
    description:
      "Storytelling is the key to standing out in a world flooded with content. It cuts through the noise and makes your message unforgettable!",
    titleColor: "text-white",
    backgroundImage: "/article4.png",
  },
];

const BlogCards: React.FC = () => {
  return (
    <div className="bg-black min-h-screen mt-[100px] flex items-center justify-center p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[1200px]">
        {blogPosts.map((post) => (
          <div key={post.id} className="overflow-hidden shadow-lg">
            {/* Image Container */}
            <div className="relative w-full h-[400px]">
              <Image
                width={200}
                height={200}
                src={post.backgroundImage}
                alt={post.title}
                className="absolute inset-0 w-full h-full object-contain lg:object-cover"
              />
            </div>

            {/* Card Content */}
            <div className="py-6">
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
                    BEKS
                  </p>
                  <p className="text-[#ADADAD] text-[16px]">
                    Sep 4, 2024, 3 min read
                  </p>
                </div>
              </div>

              <h2
                className={`text-[28px] md:text-[32px] font-[700] font-sans mb-4 ${post.titleColor}`}
              >
                {post.title}
              </h2>

              <p className="text-[#ADADAD] font-sans mb-6">
                {post.description}
              </p>

              <div className="flex space-x-4">
                <button className="bg-[#15131A] w-[187px]  h-[50px] md:h-[56px] p-2 rounded-full inline-flex items-center space-x-2">
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
                    Read Now
                  </span>
                </button>
                <button className="bg-[#15131A] w-[187px] h-[50px] md:h-[56px] p-2 rounded-full inline-flex items-center space-x-2">
                  <div className="w-8 h-8 bg-[#18529D] rounded-full flex items-center justify-center">
                    <Image
                      src={"/share.png"}
                      width={20}
                      height={20}
                      alt="img"
                    />
                  </div>
                  <span className="text-white font-sans pr-4 text-[14px] md:text-[18px]  text-base">
                    Share Post
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCards;
