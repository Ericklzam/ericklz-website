"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaXTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { FiClock } from "react-icons/fi";

interface Post {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  read: string;
  introduction: string;
  titles: string[];
  paragraphs: string[];
  images: string[];
  description?: string;
  image?: string;
  time?: string;
};

interface BlogClientProps {
  data: Post;
  relatedProjects: Post[];
};

export default function BlogClient({ data, relatedProjects }: BlogClientProps) {
  const router = useRouter();

  if (!data) return <div className="text-white p-8">Post not found</div>;

  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white px-4 py-12">
      <div className="max-w-3xl mx-auto mt-24">
        <div className="bg-[#0E0E0E] text-white">
          <span className="bg-[#1A1A1A] text-md text-white px-3 py-2 rounded-lg">
            {data.category}
          </span>

          <div className="flex items-center text-gray-400 text-md gap-4 mb-8 mt-6">
            <span>Published {data.date}</span>
            <span className="flex items-center gap-1">
              <FiClock className="text-sm" />
              {data.read}
            </span>
          </div>

          <h1 className="text-2xl font-bold md:text-4xl text-white mb-8">
            {data.title}
          </h1>

          <p className="text-lg text-gray-400 max-w-3xl">{data.subtitle}</p>
        </div>

        {/* Main Content */}
        <div className="grid gap-4">
          <div className="w-75vh h-80 mt-6 flex items-center justify-center">
            <img
              src={data.images[0]}
              alt="img1"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>

          <div className="mt-6 flex flex-col p-4 rounded-lg w-full">
            <h1 className="text-3xl font-semibold mb-4">Introduction</h1>
            <p className="text-md text-gray-400">{data.introduction}</p>
          </div>

          {/* Section 1 */}
          <div className="w-75vh h-80 mt-6 flex items-center justify-center">
            <img
              src={data.images[0]}
              alt="img2"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <div className="mt-6 flex flex-col p-4 rounded-lg w-full">
            <h2 className="text-3xl font-semibold mb-4">{data.titles[0]}</h2>
            <p className="text-md text-gray-400">{data.paragraphs[0]}</p>
          </div>

          {/* Section 2 */}
          <div className="w-75vh h-80 mt-6 flex items-center justify-center">
            <img
              src={data.images[1]}
              alt="img3"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <div className="mt-6 flex flex-col p-4 rounded-lg w-full">
            <h2 className="text-3xl font-semibold mb-4">{data.titles[1]}</h2>
            <p className="text-md text-gray-400">{data.paragraphs[1]}</p>
          </div>

          {/* Section 3 */}
          <div className="w-75vh h-80 mt-6 flex items-center justify-center">
            <img
              src={data.images[2]}
              alt="img4"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <div className="mt-6 flex flex-col p-4 rounded-lg w-full">
            <h2 className="text-3xl font-semibold mb-4">{data.titles[2]}</h2>
            <p className="text-md text-gray-400">{data.paragraphs[2]}</p>
          </div>

          <div className="bg-[#181818] mt-6 flex flex-row justify-between p-4 rounded-lg w-full">
            <h2 className="text-3xl font-semibold mb-4 text-gray-400">
              Follow Me
            </h2>
            <div className="flex md:flex gap-3 items-center text-gray-300 text-lg">
              <a
                href="https://x.com/ericklz00"
                aria-label="X"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://www.instagram.com/https.ericklz"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://github.com/Ericklzam"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/erickm-lopezzu/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-center p-4 rounded-lg w-full max-w-xl mx-auto">
          <h2 className="text-4xl font-semibold">More Articles</h2>
        </div>

        <div
          className={`grid gap-8 max-w-6xl mx-auto mt-8
            ${
              relatedProjects.length === 1
                ? "grid-cols-1 place-items-center"
                : "grid-cols-1 md:grid-cols-2"
            }`}
        >
          {relatedProjects.map((work) => {
            const isSingle = relatedProjects.length === 1;

            return (
              <div
                key={work?.id}
                className={`relative rounded-xl overflow-hidden shadow-lg group bg-[#151515]
                  transition-all duration-500 ease-in-out hover:shadow-[0_0_8px_4px_#5B2333]
                  cursor-pointer 
                  ${isSingle ? "h-80 w-full max-w-md" : "aspect-square"}
                `}
                onClick={() => router.push(`/blog/${work?.id}`)}
              >
                <div className="absolute top-4 left-4 bg-black/60 text-white text-xs px-2 py-1 rounded z-10">
                  {Array.isArray(work?.category) ? work.category.join(", ") : work?.category}
                </div>

                {work?.time && (
                  <div className="absolute top-4 right-4 bg-black/60 text-white text-xs px-2 py-1 rounded z-10">
                    ⏱ {work.time}
                  </div>
                )}

                <Image
                  src={work?.image ?? "/placeholder.jpg"}
                  alt={work?.title ?? "Blog image"}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />

                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/80 to-transparent z-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">{work?.title}</h3>
                    <span className="text-white text-lg">↗</span>
                  </div>
                  <p className="text-sm text-neutral-300 mt-1">{work?.description}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
