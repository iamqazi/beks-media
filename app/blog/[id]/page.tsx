import Blog14 from "@/app/blog-14/blog14";
import { fetchEvents } from "../../lib/api";

// Interface for blog data, adjusted for typical Strapi media fields
interface Blogs {
  id: number;
  Author_name: string;
  Blog_title: string;
  Blog_Description: string;
  publishedAt?: string;
  thumbnail: {
    url: string;
    formats?: {
      thumbnail?: { url: string };
      small?: { url: string };
      large?: { url: string };
    };
  };
  Author_Avatar: {
    url: string;
    formats?: {
      thumbnail?: { url: string };
    };
  };
  Small_thumbnail?: {
    url: string;
    formats?: {
      thumbnail?: { url: string };
      small?: { url: string };
    };
  };
  Large_thumbnail?: {
    url: string;
    formats?: {
      thumbnail?: { url: string };
      large?: { url: string };
    };
  };
  description?: Paragraph[];
}

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

// Generate static parameters for all blog posts
// export async function generateStaticParams() {
//   const data = await fetchEvents();
//   const blogs = data?.data || [];

//   console.log("Blogs in generateStaticParams:", JSON.stringify(blogs, null, 2));

//   if (!blogs.length) {
//     console.warn("No blogs found, returning empty params");
//     return [];
//   }

//   // Return the params object for dynamic routes
//   return blogs.map((blog: Blogs) => ({
//     id: blog.id.toString(), // Ensure ID is a string for Next.js
//   }));
// }

// Server component to fetch and render blog data
export default async function ArticlePage({
  params,
}: {
  // params: Awaited<ReturnType<typeof generateStaticParams>>[number];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: any;
}) {
  const { id } = params;
  const data = await fetchEvents();
  const blogs = data?.data || [];
  const blog = blogs.find((post: Blogs) => post.id === Number(id)) || null;
  console.log("new blogs", blog);

  if (!blog) {
    return (
      <div className="text-white bg-black min-h-screen flex items-center justify-center">
        Blog not found
      </div>
    );
  }

  return <Blog14 />;
}
