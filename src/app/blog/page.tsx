"use client";

import { useState, useMemo} from "react";
import Image from "next/image";
import { posts } from "../../../data/constants/posts";
import { FiSearch } from "react-icons/fi";
import { useRouter } from "next/navigation";

const tags = [
  "All Articles",
  ...Array.from(
    new Set(
      posts.flatMap(posts =>
        Array.isArray(posts.category) ? posts.category : [posts.category]
      )
    )
  ),
];

export default function Posts() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState("All Articles");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const tags = Array.isArray(post.category)
        ? post.category.map((t) => t.toLowerCase())
        : [String(post.category).toLowerCase()];

      const matchesTag =
        activeTag === "All Articles" || tags.includes(activeTag.toLowerCase());

      const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase());

      return matchesTag && matchesSearch;
    });
  }, [activeTag, search, posts]);


  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white px-4 py-12">
      <div className="max-w-6xl mx-auto mt-24">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          See <br/><span className="text-secondary">all of my posts</span><span className="text-[#5B2333]">.</span>
        </h1>
        <div className="relative mb-8">
          <div className="hidden md:flex flex-wrap gap-4 items-center bg-[#0E0E0E] p-4 rounded-xl w-full">
            <div className="flex items-center bg-[#1A1A1A] text-gray-400 px-4 py-2 rounded-full min-w-[200px]">
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
                className={`px-4 py-2 rounded-full transition cursor-pointer ${
                  activeTag === tag
                    ? "bg-gray-200 text-black"
                    : "bg-[#1A1A1A] text-gray-300 hover:bg-[#333]"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="md:hidden bg-[#0E0E0E] p-4 rounded-xl w-full">
            <div className="flex items-center bg-[#1A1A1A] text-gray-400 px-4 py-2 rounded-full mb-4">
              <FiSearch className="mr-2" />
              <input
                type="text"
                placeholder="Search Site ..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-transparent outline-none text-white placeholder-gray-400 w-full"
              />
            </div>

            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="w-full bg-[#1A1A1A] text-gray-300 px-4 py-3 rounded-lg flex justify-between items-center"
            >
              <span>{activeTag}</span>
              <span className="text-sm">{showMobileMenu ? "▲" : "▼"}</span>
            </button>

            {showMobileMenu && (
              <div
                className="
                  absolute 
                  left-0 right-0
                  mt-2 
                  bg-[#1A1A1A] 
                  rounded-xl 
                  p-2 
                  shadow-xl 
                  z-50

                  max-h-[220px]
                  overflow-y-auto
                  scrollbar-thin
                  scrollbar-thumb-[#333]
                  scrollbar-track-transparent
                "
              >
                {tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => {
                      setActiveTag(tag);
                      setShowMobileMenu(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-md transition ${
                      activeTag === tag
                        ? "bg-gray-200 text-black"
                        : "text-gray-300 hover:bg-[#333]"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-xl overflow-hidden shadow-lg group bg-[#151515] transition-all duration-500 ease-in-out hover:shadow-[0_0_8px_4px_#5B2333] cursor-pointer"
              onClick={() => router.push(`/blog/${post.id}`)}
            >
              <div className="absolute top-4 left-4 bg-black/60 text-white text-xs px-2 py-1 rounded z-10">
                {Array.isArray(post.category) ? post.category.join(", ") : post.category}
              </div>
              <div className="absolute top-4 right-4 bg-black/60 text-white text-xs px-2 py-1 rounded z-10">
                ⏱ {post.time}
              </div>

              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />

              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/80 to-transparent z-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">{post.title}</h3>
                  <span className="text-white text-lg">↗</span>
                </div>
                <p className="text-sm text-neutral-300 mt-1">{post.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400 col-span-full text-center">
            No articles found matching your search.
          </p>
        )}
      </div>
    </div>
    </div>
  );
}
