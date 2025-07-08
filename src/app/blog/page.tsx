"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { posts } from "../../../data/constants/posts";
import { FiSearch } from "react-icons/fi";
import { useRouter } from "next/navigation";

const tags = ["All Articles", "React.js", "Next.js", "TailwindCss", "Framer Motion", "Typescript", "Node.js"];

export default function Posts() {
  const router = useRouter();
  const [search, setSearch] = useState("");
    const [activeTag, setActiveTag] = useState("All Articles");
  
    // ✅ Compute filtered works based on activeTag and search input
    const filteredWorks = useMemo(() => {
      return posts.filter((post) => {
        const matchesTag =
          activeTag === "All Articles" || post.tag.toLowerCase() === activeTag.toLowerCase();
  
        const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase());
  
        return matchesTag && matchesSearch;
      });
    }, [activeTag, search]);

  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white px-4 py-12">
      <div className="max-w-6xl mx-auto mt-24">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          See <br/><span className="text-secondary">all of my posts</span><span className="text-[#5B2333]">.</span>
        </h1>
        <div className="flex flex-wrap gap-4 items-center bg-[#0E0E0E] p-4 rounded-xl max-w-full overflow-x-auto mb-8">
          <div className="flex items-center bg-[#1A1A1A] text-gray-400 px-4 py-2 rounded-full min-w-[200px] flex-shrink-0">
            <FiSearch className="mr-2" />
            <input
              type="text"
              placeholder="Search Site ..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent outline-none text-white placeholder-gray-400 w-full"
            />
          </div>

          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-2 rounded-full flex-shrink-0 transition cursor-pointer ${
                activeTag === tag
                  ? "bg-gray-200 text-black"
                  : "bg-[#1A1A1A] text-gray-300 hover:bg-[#333]"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {posts.map((post, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden bg-neutral-800 transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_8px_4px_#5B2333] cursor-pointer h-96"
            onClick={()=>{router.push(`/blog/${post.id}`);}}
          >
            {/* Image fills the card */}
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />

            {/* Overlaying text */}
            <div className="absolute inset-0 flex flex-col justify-between z-10 p-4 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
              <div className="flex justify-between items-center text-xs text-neutral-300">
                <span className="bg-black/60 px-2 py-0.5 rounded-full text-white">
                  {post.tag}
                </span>
                <span>⏱ {post.time}</span>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">{post.title}</h3>
                  <span className="text-white">↗</span>
                </div>
                <p className="text-sm text-neutral-300 mt-1">{post.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
