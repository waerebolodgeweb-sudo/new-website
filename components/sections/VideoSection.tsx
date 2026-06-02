import Image from "next/image";
import { IoPlaySharp, IoTvOutline } from "react-icons/io5";

export default function VideoSection() {
  return (
    <section className="py-32 lg:py-40 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-10 sm:px-12 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
          {/* Left: Video thumbnail */}
          <div className="w-full lg:w-1/2">
            <div className="relative h-64 sm:h-80 lg:h-96 rounded-3xl overflow-hidden group cursor-pointer shadow-md">
              <Image
                src="/home/local-voices.png"
                alt="The Heart of Waerebo documentary"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <IoPlaySharp size={28} className="text-neutral-900 ml-1" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="w-full lg:w-1/2 flex flex-col justify-end">
            <p className="text-base font-normal text-savana-700 uppercase mb-3 tracking-wide">
              Local Voices
            </p>
            <h2 className="text-4xl font-semibold text-neutral-900 mb-6 leading-tight">
              The Heart of Waerebo
            </h2>
            <p className="text-base font-normal text-neutral-800 leading-relaxed mb-8">
              Sit down with our founder, Pak Martin, in an exclusive interview
              with Kompas TV. Discover the untold stories, rich traditions, and
              the true spirit of the sky village from a true local.
            </p>
            <div>
              <button className="px-5 py-3 bg-neutral-900 text-white text-base font-medium rounded-xl hover:bg-neutral-800 transition-colors">
                Watch the Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
