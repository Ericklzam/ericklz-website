"use client";
import { useEffect} from "react";
import Image from "next/image";

export default function Gallery ({
  selectedIndex,
  images,
  closeModal,
  next,
  prev,
}: {
  selectedIndex: number | null;
  images: { src: string; description: string }[];
  closeModal: () => void;
  next: () => void;
  prev: () => void;
}) {

    // Handle Esc key
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") closeModal();
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [closeModal]);

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white text-4xl font-bold hover:scale-110 transition"
          >✕</button>
          <button
            onClick={prev}
            className="absolute left-4 text-white text-6xl font-bold hover:scale-110 transition"
          >‹</button>
          <div className="flex flex-col items-center justify-center w-[80vw] h-[80vh] animate-zoomIn">
            <div className="relative w-full flex-1">
              <Image
                key={selectedIndex}
                src={selectedIndex !== null ? images[selectedIndex].src : ""}
                alt={`img-${selectedIndex}`}
                fill
                className="object-contain transition-opacity duration-300"
              />
            </div>
            <p className="mt-4 text-sm text-gray-300 text-center max-w-xl">
              {selectedIndex !== null ? images[selectedIndex].description : ""}
            </p>
          </div>
          <button
            onClick={next}
            className="absolute right-4 text-white text-6xl font-bold hover:scale-110 transition"
          >›</button>
        </div>
    )
}