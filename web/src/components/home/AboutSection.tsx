"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { aboutItems } from "../../../data/constants/aboutitems";
import Experience from "../about/experience";
import JobModal from "../dialogs/JobsModal";
import Stack from "../about/stack";
import { useRouter } from "next/navigation";

interface JobData {
  title: string;
  subtitle: string;
  dates: string;
  datesfull: string;
  services: string[];
  tools: string[];
  images: string[];
  paragraphs: string[];
  title2: string;
  contact: string;
  url: string;
}

export default function About() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [currentData, setCurrentData] = useState<JobData | null>(null);

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
              I believe in people&apos;s pontential and hidden talents, sometimes we encase people&apos;s skills on what we thought they should have inside their jobs, 
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

        <Stack/>

        {/* Button */}
        <div className="text-center">
          <button className="border border-gray-400 rounded-full py-3 px-6 hover:bg-white hover:text-black transition cursor-pointer"
          onClick={()=>{router.push("/about")}}>
            Know More About Me
          </button>
        </div>
        {currentData && (
          <JobModal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            data={currentData}
          />
        )}
      </div>
    </div>
  );
}

function AboutItem({ name }: { name: string }) {
  return (
    <div className="text-sm inline-flex items-center rounded-lg bg-[#262626] hover:bg-[#5B2333] transition-colors cursor-pointer py-2 px-4 text-white">
      {name}
    </div>
  );
};