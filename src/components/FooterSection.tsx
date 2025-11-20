import { FaXTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0E0E0E] py-12 flex justify-center">
      <div className="bg-[#222222] rounded-3xl w-full max-w-6xl p-8 flex flex-col items-center text-gray-400 gap-12">
        <div className="text-white text-3xl font-bold leading-none text-center">
          <p>E M</p>
          <p>L Z</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-sm">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/about" className="hover:text-white transition">About</Link>
          <Link href="/works" className="hover:text-white transition">Works</Link>
          <Link href="/blog" className="hover:text-white transition">Blog</Link>
        </div>

        <div className="flex gap-4">
          <Link href="#" className="bg-[#333333] p-3 rounded-full hover:bg-white hover:text-black transition">
            <FaXTwitter />
          </Link>
          <Link href="#" className="bg-[#333333] p-3 rounded-full hover:bg-white hover:text-black transition">
            <FaInstagram />
          </Link>
          <Link href="#" className="bg-[#333333] p-3 rounded-full hover:bg-white hover:text-black transition">
            <FaGithub />
          </Link>
          <Link href="#" className="bg-[#333333] p-3 rounded-full hover:bg-white hover:text-black transition">
            <FaLinkedin />
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500">&copy; 2025 Ericklz</p>
      </div>
    </footer>
  );
}
