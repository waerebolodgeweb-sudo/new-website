export function LodgeDirectionMap() {
  return (
    <section className="w-full">
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet="/map/Waerebo-Lodge-Maps-Blueprint-Direction-Desktop-Optimized.webp"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/map/Waerebo-Lodge-Maps-Blueprint-Direction-Mobile-Optimized.webp"
          alt="Waerebo Lodge map and directions"
          width={1080}
          height={1920}
          loading="lazy"
          decoding="async"
          className="h-auto w-full object-contain"
        />
      </picture>
    </section>
  );
}
