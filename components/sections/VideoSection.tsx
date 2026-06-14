import Image from "next/image";
import { IoPlaySharp } from "react-icons/io5";

export default function VideoSection() {
  return (
    <section className="bg-neutral-050 py-20 lg:py-28">
      <div className="mx-auto max-w-[1512px] px-6 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.65fr_1fr]">
          {/* Left: Video thumbnail (large) */}
          <div className="group relative h-72 cursor-pointer overflow-hidden rounded-3xl shadow-md sm:h-96 lg:h-[504px]">
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

          {/* Right: Text */}
          <div className="flex flex-col justify-end gap-10">
            <div>
              <p className="mb-2 text-base font-normal text-savana-600">
                Local Voices
              </p>
              <h2 className="mb-3 text-3xl leading-none font-semibold text-savana-800 lg:text-4xl">
                The Heart of Waerebo
              </h2>
              <p className="text-base leading-relaxed font-normal text-pale-savana-500">
                Sit down with our founder, Pak Martin, in an exclusive interview
                with Kompas TV. Discover the untold stories, rich traditions,
                and the true spirit of the sky village from a true local.
              </p>
            </div>
            <button className="inline-flex w-fit items-center justify-center rounded-xl bg-savana-800 px-5 py-3 text-base font-medium text-white transition-colors hover:bg-savana-700">
              Watch the Video
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
