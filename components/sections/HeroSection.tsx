import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-end">
      <Image
        src="/home/hero.png"
        alt="Waerebo Lodge among the rice terraces of Flores"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-28">
        <h1 className="text-white font-bold leading-[1.05] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl max-w-2xl">
          A lodge stop
          <br />
          before your
          <br />
          journey.
        </h1>
        <p className="mt-5 max-w-md text-white/75 text-sm lg:text-base leading-relaxed font-normal">
          Located among rice terraces and ocean views, Waerebo Lodge is the
          final oasis before your climb to the legendary Waerebo Village.
        </p>
      </div>
    </section>
  );
}
