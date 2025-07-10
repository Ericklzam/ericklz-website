"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { faqs } from "../../../data/constants/faqs";
import { images } from "../../../data/constants/images";
import { colors } from "../../../data/constants/colors";
import { aboutItems } from "../../../data/constants/aboutitems";
import Experience from "@/components/about/experience";
import JobModal from "@/components/dialogs/JobsModal";
import Stack from "@/components/about/stack";
import Gallery from "@/components/about/gallery";
import { habilitiesStack } from "../../../data/constants/habilities";

export default function About() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentData, setCurrentData] = useState<any>(null);
  const [openStates, setOpenStates] = useState<boolean[]>(
    Array(faqs.length).fill(false)
  );

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeModal = () => setSelectedIndex(null);
  const next = () => setSelectedIndex((prev) => (prev !== null ? (prev + 1) % images.length : null));
  const prev = () => setSelectedIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null));

  const toggle = (index: number) => {
    setOpenStates((prev) => {
      const newStates = [...prev];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  useEffect(() => {
  const shouldLockScroll = isOpen || selectedIndex !== null;

  document.body.style.overflow = shouldLockScroll ? "hidden" : "auto";

  return () => {
    document.body.style.overflow = "auto";
  };
  }, [isOpen, selectedIndex]);


  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto mt-24">
         <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Who am <span className="text-secondary">I</span><span className="text-[#5B2333]">.</span>
        </h1>
        <p className="text-gray-200 text-start mb-12">
            Born and raised in Ciudad Juarez, Chihuahua, Mexico. Currently what i am most focus on is in the field of Mobile and Web-App Development, 
            but in the future i want to specialize in the field of Data Science.
        </p>
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
        <Experience onOpenModal={(data) => {setCurrentData(data);setIsOpen(true);}} />
        <div className="flex-2 flex flex-col gap-6">
          {/* Bio */}
          <div className="bg-[#5B2333] p-6 rounded-2xl flex flex-row items-center text-start">
            <Image
              src="/img/ProfilePhoto.jpg"
              alt="Erick Lopez"
              width={120}
              height={120}
              className="rounded-full mb-4 mr-8 object-cover"
            />
            <p className="text-gray-200">
              I believe in people's pontential and hidden talents, sometimes we encase people's skills on what we thought they should have inside their jobs, 
              associations, communities, not realizing that each person has a unique ability that has not fully develop yet, and we as colleagues is our 
              job to help them to know their true pontential.
            </p>
          </div>

          {/* Hobbies */}
          <div className="bg-[#151515] p-6 rounded-2xl flex flex-wrap gap-4 items-center">
            <h3 className="w-full text-center text-lg font-bold mb-2">Hobbies & Interests</h3>
            {aboutItems.map((item, i) => (
              <AboutItem key={i} name={item.name} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 mb-8">
        <div className="flex-2 space-y-2 bg-[#151515] p-6 rounded-2xl  flex items-center justify-center">
              <div className="grid grid-cols-14 gap-2 p-4">
                {colors.map((color, index) => (
                  <div
                    key={index}
                    className="w-5 h-5 rounded-md"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
        </div>

        <div className="flex-1 flex flex-col gap-6 items-">
          <div className="bg-[#151515] p-6 rounded-2xl flex flex-col items-center justify-center">
            <p className="text-gray-400 text-center font-semibold mb-8">Experience</p>
            <p className="text-gray-200 text-lg">4 Years</p>
          </div>
          <div className="bg-[#151515] p-6 rounded-2xl flex flex-row items-center text-start">
            
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-6">
          <div className="bg-[#151515] p-6 rounded-2xl flex flex-col items-center justify-center">
            <p className="text-gray-400 text-center font-semibold mb-8">Freelance</p>
            <p className="text-gray-200 text-lg">8 Projects</p>
          </div>
          <div className="bg-[#151515] p-6 rounded-2xl flex flex-row items-center text-start">
            <span className="flex items-center gap-2 text-sm">
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
              Available for Work
            </span>
          </div>
        </div>
      </div>

      <Stack/>

      <div className="bg-[#0E0E0E] p-6 rounded-2xl overflow-hidden mb-8">
        <h2 className="text-center text-2xl font-bold mb-6">Habilities</h2>
        <div className="relative overflow-hidden h-28 mb-4">
        <div className="flex justify-center items-center whitespace-nowrap gap-4">
            {[...habilitiesStack].map((item, i) => (
            <StackItem
                key={`top-${i}`}
                icon={item.icon}
                label={item.label}
                desc={item.desc}
            />
            ))}
        </div>
        </div>
      </div>
      
      <div className="min-h-screen bg-[#0E0E0E] text-white px-4 py-8">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">FAQs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {faqs.map((faq, index) => {
          const isOpen = openStates[index];
          return (
              <div
              key={index}
              onClick={() => toggle(index)}
              className="bg-[#111111] rounded-xl p-6 cursor-pointer transition-all duration-300"
              >
              <div className="flex items-start gap-3 hover:text-[#793d3d] transition-all duration-150">
                  <span className="text-xl font-bold">
                  {isOpen ? "✕" : "+"}
                  </span>
                  <div className="flex-1">
                  <h3 className="text-md font-semibold">
                      {faq.question}
                  </h3>
                  <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-40 mt-2" : "max-h-0"
                      }`}
                  >
                      <p className="text-sm text-gray-400">
                      {faq.answer}
                      </p>
                  </div>
                  </div>
              </div>
              </div>
          );
          })}
      </div>
      </div>

    <div className="bg-[#0E0E0E] text-white py-16 px-4">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">Some cool photos</h2>
      <div className="grid grid-cols-4 grid-rows-3 gap-1 max-w-6xl mx-auto h-[600px]">
        {images.map((img, i) => (
          <div
            key={i}
            className={`relative cursor-pointer transition-transform duration-300 hover:bg-black ${
              i === 0 ? "row-span-3 col-span-1" :
              i === 1 ? "row-span-1 col-span-2" :
              i === 2 ? "row-span-1 col-span-1" :
              i === 3 ? "row-span-2 col-span-1" :
              i === 4 || i === 5 || i === 6 || i === 7 ? "row-span-1 col-span-1" :
              null
            }`}
            onClick={() => setSelectedIndex(i)}
          >
            <Image src={img.src} alt={`img-${i}`} fill className="object-cover transition-opacity duration-300 group-hover:opacity-80" />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedIndex !== null && (
        <Gallery selectedIndex={selectedIndex} images={images} closeModal={closeModal} next={next} prev={prev}/>
      )}
    </div>
    <JobModal isOpen={isOpen} onClose={() => setIsOpen(false)} data={currentData}/>
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

function StackItem({ icon, label, desc }: { icon: string; label: string; desc: string }) {
  return (
    <div className="flex flex-row items-center p-4 bg-[#151515] rounded-lg w-55 flex-shrink-0 gap-4">
      <Image src={icon} alt={label} width={40} height={40} className="flex-shrink-0" />
      <div className="flex flex-col text-left">
        <p className="font-bold">{label}</p>
        <p className="text-gray-400 text-sm">{desc}</p>
      </div>
    </div>
  );
};