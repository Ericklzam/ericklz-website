"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { posts } from "../../../data/constants/posts";

export default function PostsSection() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
        Posts &amp; Content
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {posts.slice(0,3).map((post, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden bg-neutral-800 transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_8px_4px_#5B2333] cursor-pointer h-96"
            onClick={()=>{router.push(`/blog/${post.id}`);}}
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 flex flex-col justify-between z-10 p-4 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
              <div className="flex justify-between items-center text-xs text-neutral-300">
                <span className="bg-black/60 px-2 py-0.5 rounded-full text-white">
                  {post.category}
                </span>
                <span>⏱ {post.read}</span>
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

      <div className="mt-12 text-center">
        <button className="border border-gray-400 rounded-full py-3 px-6 hover:bg-white hover:text-black transition cursor-pointer"
        onClick={()=>{router.push("/blog")}}>
          Read All Articles
        </button>
      </div>
    </div>
  );
}
