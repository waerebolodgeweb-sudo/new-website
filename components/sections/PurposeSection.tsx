import Image from "next/image";
import Link from "next/link";

export default function PurposeSection() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-lodge-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-center mb-14 lg:mb-20 leading-tight">
          <span className="text-lodge-dark">Rest Well. </span>
          <span className="text-lodge-mid">Give Back.</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — copy */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] text-lodge-mid uppercase mb-4">
              About Us
            </p>
            <h3 className="text-2xl lg:text-4xl font-bold text-lodge-dark mb-6">
              Basecamp with a Purpose.
            </h3>
            <p className="text-lodge-neutral leading-relaxed mb-4 text-sm font-normal">
              We built Waerebo Lodge with a simple goal: to provide a
              comfortable, high-quality resting place before your ascent to the
              sky village.
            </p>
            <p className="text-lodge-neutral leading-relaxed mb-8 text-sm font-normal">
              But our mission goes beyond our walls. We commit 10% of your stay
              to directly support the social and cultural initiatives of the
              Waerebo community. By staying with us, your adventure leaves a
              positive, lasting mark on the highlands.
            </p>
            <Link
              href="/about"
              className="inline-flex px-6 py-3 border-2 border-lodge-green text-lodge-green text-sm font-semibold rounded-full hover:bg-lodge-green hover:text-white transition-colors"
            >
              Learn More About Us
            </Link>
          </div>

          {/* Right — image collage */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-40 sm:h-48 rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/home/about-1.png"
                alt="Waerebo Lodge sign"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-40 sm:h-48 rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/home/about-2.png"
                alt="Aerial view of Waerebo village"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative col-span-2 h-56 sm:h-64 rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/home/about-3.jpg"
                alt="Traditional cone-shaped Waerebo houses"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-base font-bold mb-1">
                  Waerebo Village
                </p>
                <p className="text-white/80 text-xs leading-relaxed">
                  Discover the iconic Waerebo houses — a blend of nature and
                  traditional ways.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
