"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { FaXTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import Image from "next/image";

type NavbarProps = {
  onSearchClick: () => void;
};

export default function Navbar({ onSearchClick }: NavbarProps) {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-5 left-0 w-full z-50 transition-transform duration-300`}
      style={{
        transform: show ? "translateY(0)" : "translateY(-130%)"
      }}
    >
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto bg-[#151515]/60 backdrop-blur-md rounded-none md:rounded-2xl p-4 md:px-8">
        <Link href="/" className="w-8 md:w-10 flex-shrink-0">
          <Image
            src="/EMLZ.svg"
            alt="Logo"
            width={64}
            height={64}
            className="w-full h-auto"
          />
        </Link>

        <div className="hidden md:flex gap-6 text-gray-300 text-sm items-center">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/works">Works</Link>
          <Link href="/blog">Blog</Link>
        </div>

        <button
          onClick={onSearchClick}
          className="
            flex items-center gap-2 rounded px-4 py-2 text-gray-300 text-sm w-auto
            justify-center cursor-pointer z-50 transition-all duration-300
            bg-transparent
            md:bg-neutral-700 
          "
          aria-label="Open search"
        >
          <FiSearch className="text-white" />
          <span className="whitespace-nowrap pr-22 hidden md:inline">
            Search ...
          </span>
        </button>



        <div className="hidden md:flex gap-3 items-center text-gray-300 text-lg">
          <a href="https://x.com/ericklz00" aria-label="X" target="_blank" rel="noopener noreferrer">
            <FaXTwitter />
          </a>
          <a href="https://www.instagram.com/https.ericklz" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://github.com/Ericklzam" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/erickm-lopezzu/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>

        <Link
          href="/contact"
          className="hidden md:inline-block bg-gray-200 text-black px-4 py-2 rounded font-semibold text-sm hover:bg-white transition whitespace-nowrap"
        >
          Let&apos;s Talk ↗
        </Link>

        <button
          className="md:hidden text-gray-300 text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="flex flex-col items-center bg-[#151515]/60 backdrop-blur-md rounded-none md:rounded-2xl text-gray-300 py-8 md:px-8">
          <Link
            href="/"
            className="py-2 text-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="py-2 text-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/works"
            className="py-2 text-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Works
          </Link>
          <Link
            href="/blog"
            className="py-2 text-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Blog
          </Link>
          <div className="flex gap-4 py-4 text-2xl">
            <a href="https://x.com/ericklz00" aria-label="X" target="_blank" rel="noopener noreferrer">
              <FaXTwitter />
            </a>
            <a href="https://www.instagram.com/https.ericklz" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://github.com/Ericklzam" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/erickm-lopezzu/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
          <Link
            href="/contact"
            className="bg-gray-100 text-black px-6 py-3 rounded font-semibold text-lg hover:bg-white transition whitespace-nowrap"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Let&apos;s Talk ↗
          </Link>
        </div>
      )}
    </nav>
  );
}
