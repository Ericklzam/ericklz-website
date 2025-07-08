"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { topRowStacks } from "../../../data/constants/topstacks";
import { bottomRowStacks } from "../../../data/constants/bottomstacks";
import { aboutItems } from "../../../data/constants/aboutitems";
import Experience from "../about/experience";
import JobModal from "../dialogs/JobsModal";

export default function About() {
const [isOpen, setIsOpen] = useState(false);
const [currentData, setCurrentData] = useState<any>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center text-4xl font-bold mb-12">About Me</h1>
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          <Experience onOpenModal={(data) => {setCurrentData(data);setIsOpen(true);}} />
          {/* Bio */}
          <div className="flex-1 bg-[#5B2333] p-6 rounded-2xl flex flex-col items-center text-center">
            <Image
              src="/img/ProfilePhoto.jpg"
              alt="Erick Lopez"
              width={120}
              height={120}
              className="rounded-full mb-4 object-cover"
            />
            <p className="text-gray-200">
              I believe in people's pontential and hidden talents, sometimes we encase people's skills on what we thought they should have inside their jobs, 
            associations, communities, not realizing that each person has a unique ability that has not fully develop yet, and we as colleagues is our 
            job to help them to know their true pontential.
            </p>
          </div>

          <div className="flex-1 bg-[#151515] p-6 rounded-2xl hidden lg:flex flex-wrap gap-4 items-center">
            <h3 className="w-full text-center text-lg font-bold mb-2">Hobbies & Interests</h3>
            {aboutItems.map((item, i) => (
              <AboutItem key={i} name={item.name} />
            ))}
          </div>

        </div>

        <div className="bg-[#0E0E0E] p-6 rounded-2xl overflow-hidden mb-8">
        <h2 className="text-center text-2xl font-bold mb-6">Stack</h2>

        {/* Top Row */}
        <div className="relative overflow-hidden h-28 mb-4">
        <div className="flex animate-scroll-right whitespace-nowrap gap-4">
            {topRowStacks.map((item, i) => (
            <StackItem
                key={`top-${i}`}
                icon={item.icon}
                label={item.label}
                desc={item.desc}
            />
            ))}
        </div>

        {/* Left Fade */}
        <div className="absolute top-0 left-0 w-16 h-full z-10 bg-gradient-to-r from-[#0E0E0E] to-transparent pointer-events-none" />
        {/* Right Fade */}
        <div className="absolute top-0 right-0 w-16 h-full z-10 bg-gradient-to-l from-[#0E0E0E] to-transparent pointer-events-none" />
        </div>

        {/* Bottom Row */}
        <div className="relative overflow-hidden h-28">
        <div className="flex animate-scroll-left whitespace-nowrap gap-4">
           {bottomRowStacks.map((item, i) => (
            <StackItem
                key={`bottom-${i}`}
                icon={item.icon}
                label={item.label}
                desc={item.desc}
            />
            ))}
        </div>

        {/* Left Fade */}
        <div className="absolute top-0 left-0 w-16 h-full z-10 bg-gradient-to-r from-[#0E0E0E] to-transparent pointer-events-none" />
        {/* Right Fade */}
        <div className="absolute top-0 right-0 w-16 h-full z-10 bg-gradient-to-l from-[#0E0E0E] to-transparent pointer-events-none" />
        </div>
        </div>

        {/* Button */}
        <div className="text-center">
          <button className="border border-gray-400 rounded-full py-3 px-6 hover:bg-white hover:text-black transition cursor-pointer">
            Know More About Me
          </button>
        </div>
        <JobModal isOpen={isOpen} onClose={() => setIsOpen(false)} data={currentData}/>
      </div>
    </div>
  );
}

function StackItem({ icon, label, desc }: { icon: string; label: string; desc: string }) {
  return (
    <div className="flex flex-row items-center p-4 bg-[#151515] rounded-lg w-64 flex-shrink-0 gap-4">
      <Image src={icon} alt={label} width={40} height={40} className="flex-shrink-0" />
      <div className="flex flex-col text-left">
        <p className="font-bold">{label}</p>
        <p className="text-gray-400 text-sm">{desc}</p>
      </div>
    </div>
  );
};

function AboutItem({ name }: { name: string }) {
  return (
    <div className="text-sm inline-flex items-center rounded-lg bg-[#262626] hover:bg-[#5B2333] transition-colors cursor-pointer py-2 px-4 text-white">
      {name}
    </div>
  );
};