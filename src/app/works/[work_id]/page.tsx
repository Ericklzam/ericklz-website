"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { projects } from "../../../../data/projects/projects";
import { FiSearch } from "react-icons/fi";
import { useParams, notFound, useRouter } from "next/navigation";
import { FaXTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";

const tags = ["All Projects", "React.js", "Next.js", "TailwindCss", "Framer Motion", "Typescript", "Node.js"];

export default function Works() {
  const router = useRouter();
  const params = useParams();
  const workId = params?.work_id as string;

  const workIdNumber = Number(workId);
  const previousProject = projects.find((proj) => proj.id === workIdNumber - 1);
  const nextProject = projects.find((proj) => proj.id === workIdNumber + 1);

  const relatedProjects = [previousProject, nextProject].filter(Boolean);
  
  const data = projects.find((project) => project.id === workIdNumber);

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
        <span className="bg-[#1A1A1A] text-md text-white px-3 py-2 rounded-lg">
          {data.category}
        </span>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 mt-4">
          {lines.slice(0, -1).map((line, idx) => (
            <div key={idx}>{line}</div>
          ))}
          <div>
            {lines[lines.length - 1]}<span className="text-[#5B2333]">.</span>
          </div>
        </h1>
        <div className="text-lg text-gray-400 mb-4">{data.subtitle}</div>
        <button className="flex items-center gap-2 border border-gray-500 px-6 py-3 rounded transition cursor-pointer text-white hover:bg-white hover:text-black">
          <FaGithub className="transition-colors duration-200" />
          See Repository
        </button>
        <div className="w-75vh h-80 mt-6 flex items-center justify-center">
          <img src={data.images[0]} alt="img2" className="object-cover w-full h-full rounded-lg" />
        </div>

        
        <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="col-span-2 bg-[#5B2333] rounded-lg p-4">
              <h2 className="text-3xl font-semibold mb-4">Introduction</h2>
              <p className="text-md text-gray-300">{data.introduction}</p>
            </div>
            <div className="col-span-1 bg-[#151515] p-4 rounded-lg grid grid-cols-2 gap-4">
              <div>
                <h2 className="text-sm mb-2 font-bold">Client</h2>
                <p className="text-gray-400">{data.client}</p>
                <h2 className="text-sm mb-2 font-bold">My role</h2>
                <p className="text-gray-400">{data.role}</p>
              </div>
              <div>
                <h2 className="text-sm mb-2 font-bold">Year</h2>
                <p className="text-gray-400">{data.year}</p>
                <h2 className="text-sm mb-2 font-bold">Services</h2>
                <p className="text-gray-400">{data.services[0]}</p>
              </div>
            </div>
          </div>

        <div className="w-75vh h-120 mt-6 flex items-center justify-center">
          <img src={data.images[0]} alt="img2" className="object-cover w-full h-full rounded-lg" />
        </div>

        <div className="mt-6 flex flex-col p-4 rounded-lg w-full">
          <h2 className="text-3xl font-semibold mb-4">Approach</h2>
          <p className="text-md text-gray-400">{data.approach}</p>
        </div>

        <div className="mt-6 flex flex-col p-4 rounded-lg w-full">
          <h2 className="text-3xl font-semibold mb-4">Results</h2>
          <p className="text-md text-gray-400">{data.results}</p>
        </div>

        <div className="w-75vh h-120 mt-6 flex items-center justify-center">
          <img src={data.images[0]} alt="img2" className="object-cover w-full h-full rounded-lg" />
        </div>

        <div className="mt-6 flex flex-col p-4 rounded-lg w-full">
          <h2 className="text-3xl font-semibold mb-4">Conclusion</h2>
          <p className="text-md text-gray-400">{data.conclusion}</p>
        </div>

        <div className="mt-6 flex flex-col items-center justify-center p-4 rounded-lg w-full max-w-xl mx-auto">
          <button className="flex mb-8 items-center gap-2 border border-gray-500 px-6 py-3 rounded transition cursor-pointer text-white hover:bg-white hover:text-black">
            <FaGithub className="transition-colors duration-200" />
            See Repository
          </button>
          <h2 className="text-3xl font-semibold">See more projects</h2>
        </div>
        <div className={`grid gap-4 mt-8 ${relatedProjects.length === 1 ? "grid-cols-1 place-items-center" : "grid-cols-1 md:grid-cols-2"}`}>
          {relatedProjects.map((work) => (
            <div
              key={work?.id}
              className="relative rounded-xl overflow-hidden shadow-lg group bg-[#151515] transition-all duration-500 ease-in-out hover:shadow-[0_0_8px_4px_#5B2333] cursor-pointer h-80 w-full max-w-lg"
              onClick={() => { router.push(`/works/${work?.id}`); }}
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
