import { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface JobData {
  title: string;
  subtitle: string;
  datesfull: string;
  images: string[];
  paragraphs: string[];
  tools: string[];
  services: string[];
  contact: string;
  url: string;
}

interface JobModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: JobData;
}

export default function JobModal({ isOpen, onClose, data }: JobModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  const numTools = data?.tools?.length ?? 0;
  const numColumns = Math.ceil(numTools / 3) || 1;
  const columns = Math.min(numColumns, 4);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    if (isOpen && !expandedImage) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose, expandedImage]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
      <div
        ref={modalRef}
        className="w-11/12 sm:w-4/5 md:w-4/5 lg:w-1/2 h-[90vh] bg-[#151515] text-white p-12 rounded-lg overflow-y-auto relative scrollbar-thin scrollbar-thumb-[#5B2333] scrollbar-track-transparent
                  transform transition-all scale-95 opacity-0 animate-modal-in"
      >
        <button
          onClick={onClose}
          className="fixed top-4 right-4 text-white text-2xl font-bold z-[60] md:hidden"
        >
          ✕
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold md:text-4xl text-white mb-2">
              {data.title}
            </h1>
            <div className="text-lg text-gray-400">{data.subtitle}</div>
            <p className="text-sm">{data.datesfull}</p>
          </div>

          <div
            className="flex justify-center cursor-pointer"
            onClick={() => setExpandedImage(data.images[0])}
          >
            <img
              src={data.images[0]}
              alt="img1"
              className="object-contain h-40 w-auto max-w-full"
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

        <div className="w-full h-80 mt-4 sm:mt-6 flex items-center justify-center">
          <img
            src={data.images[1]}
            alt="img2"
            className="object-contain w-full h-full rounded-lg cursor-pointer"
            onClick={() => setExpandedImage(data.images[1])}
          />
        </div>

        <div className="mt-4 sm:mt-6 flex flex-col p-3 sm:p-4 rounded-lg w-full">
          <p className="text-md text-gray-400">{data.paragraphs[1]}</p>
        </div>

        <div className="w-full h-80 mt-4 sm:mt-6 flex items-center justify-center">
          <img
            src={data.images[2]}
            alt="img3"
            className="object-contain w-full h-full rounded-lg cursor-pointer"
            onClick={() => setExpandedImage(data.images[2])}
          />
        </div>

        <div className="mt-4 sm:mt-6 flex flex-col p-3 sm:p-4 rounded-lg w-full">
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

      {expandedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-[60] p-4"
          onClick={() => setExpandedImage(null)}
        >
          <img
            src={expandedImage}
            alt="expanded"
            className="object-contain max-w-full max-h-full rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={() => setExpandedImage(null)}
            className="absolute top-4 right-4 text-white text-3xl font-bold"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
