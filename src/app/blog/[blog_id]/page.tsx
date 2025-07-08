"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { posts } from "../../../../data/constants/posts";
import { FiSearch } from "react-icons/fi";
import { useParams, notFound, useRouter } from "next/navigation";
import { FaXTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { FiClock } from "react-icons/fi";

const tags = ["All Projects", "React.js", "Next.js", "TailwindCss", "Framer Motion", "Typescript", "Node.js"];

export default function Works() {
  const router = useRouter();
  const params = useParams();
  const postId = params?.blog_id as string;

  const postIdNumber = Number(postId);
  const previousPost = posts.find((proj) => proj.id === postIdNumber - 1);
  const nextPost = posts.find((proj) => proj.id === postIdNumber + 1);

  const relatedProjects = [previousPost, nextPost].filter(Boolean);
  
  const data = posts.find((project) => project.id === postIdNumber);

  const buildPyramidTitle = (title: string): string[] => {
    const words = title.trim().split(/\s+/);
    const lines: string[] = [];

    if (words.length <= 5) {
      // Special case: split into two balanced lines
      const midpoint = Math.ceil(words.length / 2);
      lines.push(words.slice(0, midpoint).join(" "));
      lines.push(words.slice(midpoint).join(" "));
    } else {
      // Original pyramid logic for longer titles
      let currentLineWords: string[] = [];
      let lastLineLength = 0;

      for (let i = 0; i < words.length; i++) {
        currentLineWords.push(words[i]);
        const currentLine = currentLineWords.join(" ");
        const currentLength = currentLine.length;

        if (
          currentLength >= lastLineLength * 1.5 &&
          i !== words.length - 1
        ) {
          lines.push(currentLine);
          lastLineLength = currentLength;
          currentLineWords = [];
        }
      }

      if (currentLineWords.length > 0) {
        lines.push(currentLineWords.join(" "));
      }

      if (lines.length >= 2) {
        const penultimate = lines[lines.length - 2];
        const last = lines[lines.length - 1];
        if (last.length <= penultimate.length) {
          lines[lines.length - 2] = `${penultimate} ${last}`;
          lines.pop();
        }
      }
    }

    return lines;
  };


  if (!data) return notFound();

  const lines = buildPyramidTitle(data?.title ?? "Untitled");

  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white px-4 py-12">
      <div className="max-w-3xl mx-auto mt-24">
        <div className="bg-[#0E0E0E] text-white">
          {/* Tag */}
          <span className="bg-[#1A1A1A] text-md text-white px-3 py-2 rounded-lg">
            {data.category}
          </span>
          {/* Meta Info */}
          <div className="flex items-center text-gray-400 text-md gap-4 mb-8 mt-6">
            <span>Published {data.date}</span>
            <span className="flex items-center gap-1">
              <FiClock className="text-sm" />
              {data.read} read
            </span>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold md:text-4xl text-white mb-8">
            {data.title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-gray-400 max-w-3xl">
            {data.subtitle}
          </p>
        </div>
        <div className="grid gap-4">
          <div className="w-75vh h-80 mt-6 flex items-center justify-center">
          <img src={data.images[0]} alt="img2" className="object-cover w-full h-full rounded-lg" />
        </div>

        <div className="mt-6 flex flex-col p-4 rounded-lg w-full">
          <h1 className="text-3xl font-semibold mb-4">Introduction</h1>
          <p className="text-md text-gray-400">{data.introduction}</p>
        </div>

        <div className="w-75vh h-80 mt-6 flex items-center justify-center">
          <img src={data.images[0]} alt="img2" className="object-cover w-full h-full rounded-lg" />
        </div>

        <div className="mt-6 flex flex-col p-4 rounded-lg w-full">
          <h2 className="text-3xl font-semibold mb-4">{data.titles[0]}</h2>
          <p className="text-md text-gray-400">{data.paragraphs[0]}</p>
        </div>

        <div className="w-75vh h-80 mt-6 flex items-center justify-center">
          <img src={data.images[0]} alt="img2" className="object-cover w-full h-full rounded-lg" />
        </div>

        <div className="mt-6 flex flex-col p-4 rounded-lg w-full">
          <h2 className="text-3xl font-semibold mb-4">{data.titles[1]}</h2>
          <p className="text-md text-gray-400">{data.paragraphs[1]}</p>
        </div>

        <div className="w-75vh h-80 mt-6 flex items-center justify-center">
          <img src={data.images[1]} alt="img2" className="object-cover w-full h-full rounded-lg" />
        </div>

        <div className="mt-6 flex flex-col p-4 rounded-lg w-full">
          <h2 className="text-3xl font-semibold mb-4">{data.titles[2]}</h2>
          <p className="text-md text-gray-400">{data.paragraphs[2]}</p>
        </div>

        <div className="bg-[#181818] mt-6 flex flex-row justify-between p-4 rounded-lg w-full">
          <h2 className="text-3xl font-semibold mb-4 text-gray-400">Follow Me</h2>
          <div className="hidden md:flex gap-3 items-center text-gray-300 text-lg">
          <a href="https://x.com/ericklz00" aria-label="X" target="_blank" rel="noopener noreferrer">
            <FaXTwitter />
          </a>
          <a href="https://www.instagram.com/https.ericklz" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://github.com/Ericklzam" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/erickm-lopezzu/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
        </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-center p-4 rounded-lg w-full max-w-xl mx-auto">
          <h2 className="text-4xl font-semibold">More Articles</h2>
        </div>
        <div className={`grid gap-4 mt-8 ${relatedProjects.length === 1 ? "grid-cols-1 place-items-center" : "grid-cols-1 md:grid-cols-2"}`}>
          {relatedProjects.map((work) => (
            <div
              key={work?.id}
              className="relative rounded-xl overflow-hidden shadow-lg group bg-[#151515] transition-all duration-500 ease-in-out hover:shadow-[0_0_8px_4px_#5B2333] cursor-pointer h-80 w-full max-w-lg"
              onClick={() => { router.push(`/blog/${work?.id}`); }}
            >
              <div className="absolute top-4 left-4 bg-black/60 text-white text-xs px-2 py-1 rounded z-10">
                {work?.category}
              </div>
              <Image
                src={work?.image ?? "/placeholder.jpg"}
                alt={work?.title ?? "Project image"}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/80 to-transparent z-10">
                <h3 className="text-xl font-semibold mb-1">{work?.title}</h3>
                <p className="text-sm text-neutral-300">{work?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
