"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { projects } from "../../../data/projects/works";
import { FiSearch } from "react-icons/fi";
import { useRouter } from "next/navigation";
import ResumeDialog from "@/components/dialogs/ResumeDialog";

const tags = [
  "All Projects",
  ...Array.from(
    new Set(
      projects.flatMap(work =>
        Array.isArray(work.category) ? work.category : [work.category]
      )
    )
  ),
];

export default function Works() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState("All Projects");
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const filteredWorks = useMemo(() => {
    return projects.filter((work) => {
      const categories = Array.isArray(work.category)
        ? work.category.map((c) => c.toLowerCase())
        : [String(work.category).toLowerCase()];

      const matchesTag =
        activeTag === "All Projects" || categories.includes(activeTag.toLowerCase());

      const matchesSearch = work.title.toLowerCase().includes(search.toLowerCase());

      return matchesTag && matchesSearch;
    });
  }, [activeTag, search, projects]);


  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white px-4 py-12">
      <div className="max-w-6xl mx-auto mt-24">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          More <br/><span className="text-secondary">of my works</span><span className="text-[#5B2333]">.</span>
        </h1>

        <div className="flex gap-4 mt-4 mb-4">
          <button className="bg-[#0E0E0E] text-[#8a1f3d] font-semibold px-6 py-3 rounded hover:opacity-90 transition cursor-pointer"
          onClick={()=>{router.push("/contact")}}>
            Start a Project
          </button>
          <ResumeDialog/>
        </div>

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredWorks.length > 0 ? (
            filteredWorks.map((work, index) => (
              <div
                key={index}
                className="relative rounded-xl overflow-hidden shadow-lg group bg-[#151515] transition-all duration-500 ease-in-out hover:shadow-[0_0_8px_4px_#5B2333] cursor-pointer h-80"
                onClick={()=>{router.push(`/works/${work.id}`);}}
              >
                <div className="absolute top-4 left-4 bg-black/60 text-white text-xs px-2 py-1 rounded z-10">
                  {Array.isArray(work.category) ? work.category.join(", ") : work.category}
                </div>
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/80 to-transparent z-10">
                  <h3 className="text-xl font-semibold mb-1">{work.title}</h3>
                  <p className="text-sm text-neutral-300">{work.subtitle}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-400 col-span-full text-center">No projects found matching your search.</p>
          )}
        </div>
      </div>
    </div>
  );
}
