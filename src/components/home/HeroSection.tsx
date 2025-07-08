"use client";
import Image from "next/image";
import { Pattern } from "../../../public/Pattern";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-around px-6 md:px-12 py-20 bg-[#0E0E0E] text-white">
      <div className="flex flex-col gap-6 max-w-xl">
        <span className="flex items-center gap-2 text-sm">
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
          Available for Work
        </span>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Hi! <br />
          I&apos;m <span className="text-secondary">Erick Lopez</span><span className="text-[#5B2333]">.</span>
        </h1>

        <p className="text-lg text-gray-300">
          Empowering Ideas Through End-to-End Development
          <br />
          Software Developer
        </p>

        <div className="flex gap-4 mt-4">
          <button className="bg-[#0E0E0E] text-[#8a1f3d] font-semibold px-6 py-3 rounded hover:opacity-90 transition cursor-pointer">
            Start a Project
          </button>
          <button className="flex items-center gap-2 border border-gray-500 px-6 py-3 rounded transition cursor-pointer text-white hover:bg-white hover:text-black">
            Download Resume
          </button>
        </div>
      </div>

      <div className="w-60 md:w-80 flex-shrink-0">
        <Pattern/>
      </div>
    </section>
  );
}
