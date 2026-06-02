import Image from "next/image";
import Link from "next/link";

export default function PurposeSection() {
  return (
    <section id="about" className="py-32 lg:py-40 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-10 sm:px-12 lg:px-8">
        {/* Centered headline */}
        <h2 className="text-5xl lg:text-6xl font-semibold text-center mb-24 leading-tight text-neutral-900">
          <span className="text-savana-800">Rest Well. </span>
          <span className="text-savana-600">Give Back.</span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-20 lg:gap-16 items-end">
          {/* Left — copy */}
          <div className="lg:w-2/5 flex flex-col justify-end">
            <p className="text-base font-normal text-savana-600 mb-3 tracking-wide">
              About Us
            </p>
            <h3 className="text-4xl font-semibold text-savana-800 mb-6 leading-tight">
              Basecamp with a Purpose.
            </h3>
            <p className="text-base font-normal text-pale-savana-500 leading-relaxed mb-6">
              We built Waerebo Lodge with a simple goal: <span className="font-semibold">"to provide a
              comfortable, high-quality resting place before your ascent to the
              sky village".</span>
            </p>
            <p className="text-base font-normal text-pale-savana-500 leading-relaxed mb-8">
              But our mission goes beyond our walls. We commit 10% of your room rate
              to directly support the social and cultural initiatives of the
              Waerebo community. By staying with us, your adventure leaves a
              positive, lasting mark on the highlands.
            </p>
            <div>
              <a
                href="/about"
                className="inline-flex px-5 py-3 bg-savana-800 text-white text-base font-medium rounded-xl hover:bg-neutral-800 transition-colors"
              >
                Learn More About Us
              </a>
            </div>
          </div>

          {/* Right — image collage */}
          <div className="lg:w-3/5 flex gap-5 h-full">
            {/* Left column */}
            <div className="flex flex-col gap-5 w-[30%]">
              <div className="h-24 rounded-3xl bg-transparent" />
              <div className="relative h-72 rounded-3xl overflow-hidden shadow-sm shrink-0 aspect-2.2/3">
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
            <div className="flex flex-col gap-5 w-[30%]">
              <div className="h-40 rounded-3xl bg-transparent" />
              <div className="relative h-72 rounded-3xl overflow-hidden shadow-sm shrink-0 aspect-2.2/3">
                <Image
                  src="/home/about-2.png"
                  alt="Aerial view of Waerebo village"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-5 w-[40%]">
              <div className="relative h-96 rounded-3xl overflow-hidden shadow-sm aspect-2.7/3 ">
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
