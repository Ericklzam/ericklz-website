import Image from "next/image";
import { bottomRowStacks } from "../../../data/constants/bottomstacks";
import { topRowStacks } from "../../../data/constants/topstacks";

export default function Stack() {
  const topHalf1 = topRowStacks.slice(0, Math.ceil(topRowStacks.length / 2));
  const topHalf2 = topRowStacks.slice(Math.ceil(topRowStacks.length / 2));
  const bottomHalf1 = bottomRowStacks.slice(0, Math.ceil(bottomRowStacks.length / 2));
  const bottomHalf2 = bottomRowStacks.slice(Math.ceil(bottomRowStacks.length / 2));

  return (
    <div className="bg-[#0E0E0E] p-6 rounded-2xl overflow-hidden">
      <h2 className="text-center text-2xl font-bold mb-6">Stack</h2>

      {/* Desktop: two rows */}
      <div className="hidden md:block">
        {/* Top Row */}
        <div className="relative overflow-hidden h-28 mb-4">
          <div className="flex animate-marquee whitespace-nowrap gap-4 will-change-transform">
            {[...topRowStacks, ...topRowStacks].map((item, i) => (
              <StackItem key={`top-${i}`} icon={item.icon} label={item.label} desc={item.desc} />
            ))}
          </div>
        </div>

        {/* Bottom Row */}
        <div className="relative overflow-hidden h-28">
          <div className="flex animate-marquee-reverse whitespace-nowrap gap-4 will-change-transform">
            {[...bottomRowStacks, ...bottomRowStacks].map((item, i) => (
              <StackItem key={`bottom-${i}`} icon={item.icon} label={item.label} desc={item.desc} />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: four rows */}
      <div className="flex flex-col gap-3 md:hidden">
        {[topHalf1, topHalf2, bottomHalf1, bottomHalf2].map((row, rowIndex) => (
          <div key={rowIndex} className="relative overflow-hidden h-24">
            <div
              className={`flex ${
                rowIndex % 2 === 0 ? "animate-marquee" : "animate-marquee-reverse"
              } whitespace-nowrap gap-2 will-change-transform`}
            >
              {[...row, ...row].map((item, i) => (
                <StackItem key={`mobile-${rowIndex}-${i}`} icon={item.icon} label={item.label} desc={item.desc} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


function StackItem({ icon, label, desc }: { icon: string; label: string; desc: string }) {
  return (
    <div
      className="
        flex flex-col items-center p-1.5 bg-[#151515] rounded-md w-24 flex-shrink-0 gap-1.5
        md:flex-row md:items-center md:p-4 md:w-56 md:gap-4
      "
    >
      <Image
        src={icon}
        alt={label}
        width={24}
        height={24}
        className="flex-shrink-0 md:w-10 md:h-10"
      />
      <div className="flex flex-col text-center md:text-left">
        <p className="font-bold text-[0.7rem] md:text-sm">{label}</p>
        <p className="text-gray-400 text-[0.55rem] md:text-sm leading-tight">{desc}</p>
      </div>
    </div>
  );
}

