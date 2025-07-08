import { useEffect, useRef } from "react";

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
        className="w-1/2 h-[90vh] bg-[#151515] text-white p-12 rounded-lg overflow-y-auto relative scrollbar-thin scrollbar-thumb-[#5B2333] scrollbar-track-transparent"
      >
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="flex items-center justify-start h-40">
            <img src={data.images[0]} alt="img1" className="object-contain h-full" />
          </div>
          <div>
              <h2 className="text-white text-md mb-2 text-end">Date</h2>
              <p className="text-sm text-end">{data.datesfull}</p>
            <div className="bg-[#262626] p-4 rounded-lg mb-4 mt-4">
              <h2 className="text-white text-md mb-2 font-bold">Tools</h2>
            <ul className={`grid grid-cols-${columns} gap-x-6 list-disc pl-5 text-sm`}>
              {data.tools.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            </div>
          </div>
        </div>
        <div className="text-lg text-gray-400">{data.subtitle}</div>
        <p className="text-sm text-gray-300 mt-4 bg-[#262626] p-4 rounded-lg">{data.paragraphs[0]}</p>

        <div className="mt-6 flex items-center justify-center h-80">
          <img src={data.images[1]} alt="img2" className="object-contain h-full rounded-lg" />
        </div>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="col-span-1 ">
              <h2 className="text-2xl font-semibold mb-4">{data.title2}</h2>
              <p className="text-sm text-gray-300">{data.paragraphs[1]}</p>
            </div>
            <div className="col-span-1 bg-[#262626] p-4 rounded-lg">
              <h2 className="text-md mb-2 font-bold">Services</h2>
              <ul className="list-disc pl-5 text-sm">
                {data.services.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="col-span-1 bg-[#151515] p-4 rounded-lg">
              <img src={data.images[2]} alt="img1" className="object-contain h-full" />
            </div>
            <div className="col-span-1 ">
              <h2 className="text-2xl font-semibold mb-4">{data.title2}</h2>
              <p className="text-sm text-gray-300">{data.paragraphs[1]}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="col-span-1 ">
              Contact
            </div>
            <div className="col-span-1 bg-[#151515] p-4 rounded-lg">
              Visit their website
            </div>
          </div>
      </div>
    </div>
  );
}
