import Image from "next/image";
import { IoPlaySharp, IoTvOutline } from "react-icons/io5";

export default function VideoSection() {
  return (
    <section className="py-16 lg:py-24 bg-lodge-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          {/* Left: Video thumbnail */}
          <div className="w-full lg:w-1/2">
            <div className="relative h-64 sm:h-80 lg:h-96 rounded-3xl overflow-hidden group cursor-pointer">
              <Image
                src="/home/local-voices.png"
                alt="The Heart of Waerebo documentary"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                  <IoPlaySharp size={28} className="text-lodge-green ml-1" />
                </div>
              </div>
              {/* TV badge */}
              <span className="absolute top-4 right-4 flex items-center gap-1 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded">
                <IoTvOutline size={12} />
                TV
              </span>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                <p className="text-white/80 text-xs italic font-normal">
                  of Wae Rebo with their unique cone-shaped houses.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="w-full lg:w-1/2">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-lodge-mid uppercase mb-4">
              Documentary
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold text-lodge-dark mb-6 leading-tight">
              The Heart of Waerebo
            </h2>
            <p className="text-lodge-neutral leading-relaxed mb-8 text-sm font-normal">
              Explore the story of Wae Rebo — a village untouched by time,
              nestled among mountain clouds. Our documentary captures the daily
              lives, rituals, and profound connection to nature of the
              Manggarai people.
            </p>
            <button className="px-6 py-3 bg-lodge-dark text-white text-sm font-semibold rounded-full hover:bg-lodge-green transition-colors">
              Watch Story Here
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
