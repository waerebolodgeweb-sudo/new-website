import Image from "next/image";
import { IoPlaySharp, IoTvOutline } from "react-icons/io5";

export default function VideoSection() {
  return (
    <section className="bg-neutral-50 py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-10 sm:px-12 lg:px-8">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-20">
          {/* Left: Video thumbnail */}
          <div className="w-full lg:w-1/2">
            <div className="group relative h-64 cursor-pointer overflow-hidden rounded-3xl shadow-md sm:h-80 lg:h-96">
              <Image
                src="/home/local-voices.png"
                alt="The Heart of Waerebo documentary"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm transition-transform group-hover:scale-110">
                  <IoPlaySharp size={28} className="ml-1 text-neutral-900" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="flex w-full flex-col justify-end lg:w-1/2">
            <p className="mb-3 text-base font-normal tracking-wide text-savana-700 uppercase">
              Local Voices
            </p>
            <h2 className="mb-6 text-4xl leading-tight font-semibold text-neutral-900">
              The Heart of Waerebo
            </h2>
            <p className="mb-8 text-base leading-relaxed font-normal text-neutral-800">
              Sit down with our founder, Pak Martin, in an exclusive interview
              with Kompas TV. Discover the untold stories, rich traditions, and
              the true spirit of the sky village from a true local.
            </p>
            <div>
              <button className="rounded-xl bg-neutral-900 px-5 py-3 text-base font-medium text-white transition-colors hover:bg-neutral-800">
                Watch the Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
