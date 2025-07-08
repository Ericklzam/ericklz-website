"use client";

import Image from "next/image";

const works = [
  {
    title: "Making Of: Portolfio Website",
    description: "A quick overview of the process",
    category: "UI / UX",
    image: "/img/website.jpg",
  },
  {
    title: "Pictura",
    description: "Image Recognition: Visual Search Product",
    category: "Front End, Back End",
    image: "/images/digitron.jpg",
  },
  {
    title: "Sentivo",
    description: "Real-time Speech Emotion Recognition System",
    category: "Deep Learning",
    image: "/img/sentivo.jpg",
  },
  {
    title: "Title",
    description: "Descarga y Manejo de Facturas",
    category: "Front End, Back End",
    image: "/images/trado.jpg",
  },
];

export default function WorksPage() {
  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
        Some of my works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {works.map((work, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-lg group bg-[#151515] transition-all duration-500 ease-in-out hover:shadow-[0_0_8px_4px_#5B2333] cursor-pointer h-80"
          >
            <div className="absolute top-4 left-4 bg-black/60 text-white text-xs px-2 py-1 rounded z-10">
              {work.category}
            </div>
            <Image
              src={work.image}
              alt={work.title}
              fill
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/80 to-transparent z-10">
              <h3 className="text-xl font-semibold mb-1">{work.title}</h3>
              <p className="text-sm text-neutral-300">{work.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <button className="border border-gray-400 rounded-full py-3 px-6 hover:bg-white hover:text-black transition cursor-pointer">
          See All Works
        </button>
      </div>
    </div>
  );
}
