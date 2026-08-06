import Image from "next/image";

export function LodgeDirectionMap() {
  return (
    <section className="w-full">
      {/* Mobile */}
      <Image
        src="/map/Waerebo-Lodge-Maps-Blueprint-Direction-Mobile.webp"
        alt="Wae Rebo Lodge map and directions"
        width={1080}
        height={1920}
        className="h-auto w-full object-contain md:hidden"
        priority
      />

      {/* Desktop */}
      <Image
        src="/map/Waerebo-Lodge-Maps-Blueprint-Direction-Desktop.webp"
        alt="Wae Rebo Lodge map and directions"
        width={1920}
        height={1080}
        className="hidden h-auto w-full object-contain md:block"
        priority
      />
    </section>
  );
}
