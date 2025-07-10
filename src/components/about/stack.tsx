import Image from "next/image";
import { bottomRowStacks } from "../../../data/constants/bottomstacks";
import { topRowStacks } from "../../../data/constants/topstacks";

export default function Stack () {

    return(
        <div className="bg-[#0E0E0E] p-6 rounded-2xl overflow-hidden">
        <h2 className="text-center text-2xl font-bold mb-6">Stack</h2>

        {/* Top Row */}
        <div className="relative overflow-hidden h-28 mb-4">
        <div className="flex animate-marquee whitespace-nowrap gap-4 will-change-transform">
            {[...topRowStacks, ...topRowStacks].map((item, i) => (
            <StackItem
                key={`top-${i}`}
                icon={item.icon}
                label={item.label}
                desc={item.desc}
            />
            ))}
        </div>

        <div className="absolute top-0 left-0 w-16 h-full z-10 bg-gradient-to-r from-[#0E0E0E] to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-16 h-full z-10 bg-gradient-to-l from-[#0E0E0E] to-transparent pointer-events-none" />
        </div>

        {/* Bottom Row */}
        <div className="relative overflow-hidden h-28">
        <div className="flex animate-marquee-reverse whitespace-nowrap gap-4 will-change-transform">
            {[...bottomRowStacks, ...bottomRowStacks].map((item, i) => (
            <StackItem
                key={`bottom-${i}`}
                icon={item.icon}
                label={item.label}
                desc={item.desc}
            />
            ))}
        </div>

        <div className="absolute top-0 left-0 w-16 h-full z-10 bg-gradient-to-r from-[#0E0E0E] to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-16 h-full z-10 bg-gradient-to-l from-[#0E0E0E] to-transparent pointer-events-none" />
        </div>

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