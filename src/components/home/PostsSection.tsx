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
        {posts.slice(0, 3).map((post, index) => (
          <div
            key={index}
            className="relative aspect-square rounded-xl overflow-hidden shadow-lg group bg-[#151515] transition-all duration-500 ease-in-out hover:shadow-[0_0_8px_4px_#5B2333] cursor-pointer"
            onClick={() => router.push(`/blog/${post.id}`)}
          >

            <div className="absolute top-4 left-4 bg-black/60 text-white text-xs px-2 py-1 rounded z-10">
              {Array.isArray(post.category) ? post.category.join(", ") : post.category}
            </div>

            <div className="absolute top-4 right-4 bg-black/60 text-white text-xs px-2 py-1 rounded z-10">
              ⏱ {post.read}
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
