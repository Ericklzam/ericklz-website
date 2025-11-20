"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./FooterSection";
import { FiSearch, FiX } from "react-icons/fi";
import Link from "next/link";
import searchData from "../../data/constants/searchData.json";

type Entry = {
  title: string;
  description: string;
  url: string;
};

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<Entry[]>([]);
  //const [data, setData] = useState<Entry[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const [showResults, setShowResults] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

useEffect(() => {
  if (searchTerm.trim().length > 0) {
    const filtered = searchData.filter((entry) =>
      entry.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(filtered);
    setShowResults(true);
  } else {
    setShowResults(false);
    setResults([]);
  }
}, [searchTerm]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsSearchOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  /*useEffect(() => {
    // Fetch JSON data
    const fetchData = async () => {
      const res = await fetch("/searchData.json");
      const json = await res.json();
      setData(json);
    };
    fetchData();
  }, []);*/

  /*useEffect(() => {
  const filtered = data.filter((entry) =>
    entry.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  setResults(filtered);
}, [searchTerm, data]);*/

  useEffect(() => {
  function handleClickOutside(event: MouseEvent) {
    if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
      setIsSearchOpen(false);
    }
  }

  if (isSearchOpen) {
    document.addEventListener("mousedown", handleClickOutside);
  }

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [isSearchOpen]);

  return (
    <>
      <Navbar onSearchClick={() => setIsSearchOpen(true)} />
      {children}
      <Footer />

      {isSearchOpen && (
        <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-start justify-center">
            <div ref={searchRef} className="rounded-lg w-full max-w-md mx-4 shadow-lg">
            {/* Search Input */}
            <div className="flex items-center gap-2 bg-white rounded-t px-4 py-4 mt-28">
                <FiSearch className="text-gray-400" />
                <input
                type="text"
                placeholder="Search ..."
                autoComplete="off"
                className="bg-transparent w-full focus:outline-none text-black placeholder-gray-500"
                autoFocus
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                onClick={() => {
                    setIsSearchOpen(false);
                    setSearchTerm("");
                }}
                className="text-black hover:text-red-400 transition"
                aria-label="Close search"
                >
                <FiX size={20} />
                </button>
            </div>

            <div
                className={`bg-white rounded-b px-4 overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                showResults ? "max-h-64 py-3" : "max-h-0 py-0"
                }`}
            >
                {results.length > 0 ? (
                <ul className="space-y-2">
                    {results.map((result, idx) => (
                    <li key={idx}>
                        <Link
                        href={result.url}
                        className="block text-black hover:bg-gray-100 px-2 py-1 rounded"
                        onClick={() => {
                            setIsSearchOpen(false);
                            setSearchTerm("");
                        }}
                        >
                        <p>{result.title}</p>
                        <p className="text-sm text-gray-600">{result.description}</p>
                        </Link>
                    </li>
                    ))}
                </ul>
                ) : (
                searchTerm.trim() !== "" && (
                    <p className="text-gray-500 text-sm">No results found.</p>
                )
                )}
            </div>
            </div>


        </div>
        )}

        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-[9999] bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition"
            aria-label="Back to top"
          >
            Back to top ↑
          </button>
        )}
    </>
  );
}
