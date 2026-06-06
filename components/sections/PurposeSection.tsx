import Image from "next/image";
import Link from "next/link";

export default function PurposeSection() {
  return (
    <section id="about" className="bg-neutral-050 py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-10 sm:px-12 lg:px-8">
        {/* Centered headline */}
        <h2 className="mb-24 text-center text-5xl leading-tight font-semibold text-neutral-900 lg:text-6xl">
          <span className="text-savana-800">Rest Well. </span>
          <span className="text-savana-600">Give Back.</span>
        </h2>

        <div className="flex flex-col items-end gap-20 lg:flex-row lg:gap-16">
          {/* Left — copy */}
          <div className="flex flex-col justify-end lg:w-2/5">
            <p className="mb-3 text-base font-normal tracking-wide text-savana-600">
              About Us
            </p>
            <h3 className="mb-6 text-4xl leading-tight font-semibold text-savana-800">
              Basecamp with a Purpose.
            </h3>
            <p className="mb-6 text-base leading-relaxed font-normal text-pale-savana-500">
              We built Waerebo Lodge with a simple goal:{" "}
              <span className="font-semibold">
                "to provide a comfortable, high-quality resting place before
                your ascent to the sky village".
              </span>
            </p>
            <p className="mb-8 text-base leading-relaxed font-normal text-pale-savana-500">
              But our mission goes beyond our walls. We commit 10% of your room
              rate to directly support the social and cultural initiatives of
              the Waerebo community. By staying with us, your adventure leaves a
              positive, lasting mark on the highlands.
            </p>
            <div>
              <a
                href="/about"
                className="inline-flex rounded-xl bg-savana-800 px-5 py-3 text-base font-medium text-white transition-colors hover:bg-neutral-800"
              >
                Learn More About Us
              </a>
            </div>
          </div>

          {/* Right — image collage */}
          <div className="flex h-full gap-5 lg:w-3/5">
            {/* Left column */}
            <div className="flex w-[30%] flex-col gap-5">
              <div className="h-24 rounded-3xl bg-transparent" />
              <div className="aspect-2.2/3 relative h-72 shrink-0 overflow-hidden rounded-3xl shadow-sm">
                <Image
                  src="/home/about-1.png"
                  alt="Waerebo Lodge sign"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="h-24 rounded-3xl bg-transparent" />
            </div>

            {/* Middle column */}
            <div className="flex w-[30%] flex-col gap-5">
              <div className="h-40 rounded-3xl bg-transparent" />
              <div className="aspect-2.2/3 relative h-72 shrink-0 overflow-hidden rounded-3xl shadow-sm">
                <Image
                  src="/home/about-2.png"
                  alt="Aerial view of Waerebo village"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right column */}
            <div className="flex w-[40%] flex-col gap-5">
              <div className="aspect-2.7/3 relative h-96 overflow-hidden rounded-3xl shadow-sm">
                <Image
                  src="/home/about-3.jpg"
                  alt="Traditional cone-shaped Waerebo houses"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-xl font-semibold text-neutral-900">
                  Waerebo Village
                </h4>
                <p className="text-sm font-normal text-neutral-700">
                  Discover the iconic Wae Rebo houses, sustained by responsible
                  and mindful travel choices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
