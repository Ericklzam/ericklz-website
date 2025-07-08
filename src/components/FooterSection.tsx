import { FaXTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#0E0E0E] py-12 flex justify-center">
      <div className="bg-[#222222] rounded-3xl w-full max-w-6xl p-8 flex flex-col items-center text-gray-400 gap-12">
        {/* Monogram Logo */}
        <div className="text-white text-3xl font-bold leading-none text-center">
          <p>E M</p>
          <p>L Z</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-8 text-sm">
          <a href="/about" className="hover:text-white transition">About</a>
          <a href="/works" className="hover:text-white transition">Works</a>
          <a href="/blog" className="hover:text-white transition">Blog</a>
          <a href="#" className="hover:text-white transition">Resume</a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a href="#" className="bg-[#333333] p-3 rounded-full hover:bg-white hover:text-black transition">
            <FaXTwitter />
          </a>
          <a href="#" className="bg-[#333333] p-3 rounded-full hover:bg-white hover:text-black transition">
            <FaInstagram />
          </a>
          <a href="#" className="bg-[#333333] p-3 rounded-full hover:bg-white hover:text-black transition">
            <FaGithub />
          </a>
          <a href="#" className="bg-[#333333] p-3 rounded-full hover:bg-white hover:text-black transition">
            <FaLinkedin />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500">&copy; 2025 Ericklz</p>
      </div>
    </footer>
  );
}
