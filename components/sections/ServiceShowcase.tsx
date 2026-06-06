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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero card */}
        <div className="relative h-[360px] overflow-hidden rounded-3xl shadow-sm sm:h-[420px] lg:h-[460px]">
          <Image
            src={heroImage}
            alt={`${titleHead}${titleTail}`}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/10" />

          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-5 p-6 sm:p-8 lg:flex-row lg:items-end lg:justify-between lg:p-10">
            <div className="max-w-xl">
              <h1 className="mb-3 text-3xl leading-tight font-bold text-white sm:text-4xl lg:text-5xl">
                {titleHead}
                <span className="text-pale-green-100">{titleTail}</span>
              </h1>
              <p className="max-w-md text-sm leading-relaxed text-white/80 lg:text-base">
                {subtitle}
              </p>
            </div>

            <a
              href={bookHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit flex-shrink-0 items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-neutral-900 transition-colors hover:bg-light-green-100"
            >
              {buttonLabel}
            </a>
          </div>
        </div>

        {/* Thumbnail gallery */}
        <div className="mt-4 grid grid-cols-2 gap-3 lg:mt-5 lg:grid-cols-4 lg:gap-4">
          {thumbnails.map((thumb, i) => (
            <div
              key={i}
              data-reveal
              className="relative h-40 overflow-hidden rounded-2xl shadow-sm sm:h-48 lg:h-52"
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
