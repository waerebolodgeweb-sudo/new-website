import Image from "next/image";

export interface ServiceShowcaseProps {
  titleHead: string;
  titleTail: string;
  subtitle: string;
  heroImage: string;
  buttonLabel: string;
  bookHref: string;
  thumbnails: { src: string; alt: string }[];
}

export default function ServiceShowcase({
  titleHead,
  titleTail,
  subtitle,
  heroImage,
  buttonLabel,
  bookHref,
  thumbnails,
}: ServiceShowcaseProps) {
  return (
    <section className="bg-white py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero card */}
        <div className="relative h-[360px] sm:h-[420px] lg:h-[460px] rounded-3xl overflow-hidden shadow-sm">
          <Image
            src={heroImage}
            alt={`${titleHead}${titleTail}`}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/10" />

          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
            <div className="max-w-xl">
              <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-3">
                {titleHead}
                <span className="text-lodge-pale">{titleTail}</span>
              </h1>
              <p className="text-white/80 text-sm lg:text-base leading-relaxed max-w-md">
                {subtitle}
              </p>
            </div>

            <a
              href={bookHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-lodge-dark text-sm font-semibold rounded-full hover:bg-lodge-warm transition-colors flex-shrink-0 w-fit"
            >
              {buttonLabel}
            </a>
          </div>
        </div>

        {/* Thumbnail gallery */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mt-4 lg:mt-5">
          {thumbnails.map((thumb, i) => (
            <div
              key={i}
              className="relative h-40 sm:h-48 lg:h-52 rounded-2xl overflow-hidden shadow-sm"
            >
              <Image
                src={thumb.src}
                alt={thumb.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
