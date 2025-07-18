import { useEffect, useRef } from "react";
import Link from "next/link";

export default function JobModal({ isOpen, onClose, data }: any) {
  const modalRef = useRef<HTMLDivElement>(null);

  const numTools = data?.tools?.length ?? 0; // if data or data.tools is undefined/null, use 0
  const numColumns = Math.ceil(numTools / 3) || 1; // default to at least 1 column
  const columns = Math.min(numColumns, 4);

  // Close modal on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
      <div
        ref={modalRef}
        className="w-11/12 md:w-1/2 h-[90vh] bg-[#151515] text-white p-12 rounded-lg overflow-y-auto relative scrollbar-thin scrollbar-thumb-[#5B2333] scrollbar-track-transparent
                  transform transition-all scale-95 opacity-0 animate-modal-in"
      >

        {/* Title + Subtitle + Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-8">
        {/* Left: Title + Subtitle */}
        <div>
          <h1 className="text-2xl font-bold md:text-4xl text-white mb-2">
            {data.title}
          </h1>
          <div className="text-lg text-gray-400">{data.subtitle}</div>
          <p className="text-sm">{data.datesfull}</p>
        </div>

        <div className="flex justify-center">
          <img
            src={data.images[0]}
            alt="img1"
            className="object-contain h-40"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p className="text-md text-gray-300 bg-[#5B2333] p-4 rounded-lg">
            {data.paragraphs[0]}
          </p>
        </div>
        <div>
          <div className="bg-[#262626] p-4 rounded-lg">
            <h2 className="text-white text-md mb-2 font-bold">Tools</h2>
            <ul className={`grid grid-cols-${columns} gap-x-6 list-disc pl-5 text-sm`}>
              {data.tools.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>


        <div className="w-75vh h-80 mt-6 flex items-center justify-center">
          <img src={data.images[1]} alt="img2" className="object-cover w-full h-full rounded-lg" />
        </div>

        <div className="mt-6 flex flex-col p-4 rounded-lg w-full">
          <p className="text-md text-gray-400">{data.paragraphs[1]}</p>
        </div>

        <div className="w-75vh h-80 mt-6 flex items-center justify-center">
          <img src={data.images[2]} alt="img2" className="object-cover w-full h-full rounded-lg" />
        </div>

        <div className="mt-6 flex flex-col p-4 rounded-lg w-full">
          <h2 className="text-md mb-2 font-bold">Services</h2>
          <ul className="list-disc pl-5 text-sm">
            {data.services.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-row justify-between p-4 rounded-lg w-full">
          <div className="flex flex-col">
            <p>Contact:</p>
            <p className="text-md text-gray-400">{data.contact}</p>
          </div>
          <Link
            href={data.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block bg-gray-200 text-black px-4 py-2 rounded font-semibold text-sm hover:bg-white transition whitespace-nowrap"
          >
            Visit their website ↗
          </Link>
        </div>
      </div>
    </div>
  );
}
