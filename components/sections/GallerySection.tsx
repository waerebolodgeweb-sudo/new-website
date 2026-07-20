"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  IoChevronBackOutline,
  IoChevronForwardOutline,
  IoPlay,
} from "react-icons/io5";
import { useLang } from "@/lib/i18n";

const videos = [
  {
    id: "Rp7MpKgdeWA",
    title: "Nic Singapore",
    thumbnail: "/homepage/Homepage-Waerebo-Thumbnail-Video-Review-01.webp",
    quote: '"I did not expect my stay to be this welcoming."',
    caption:
      "Hear why Nic loved his two-night stay, from the incredible home-cooked meals to the owner's guided tours of Waerebo and Mulas Island.",
    url: "https://youtu.be/Rp7MpKgdeWA",
  },
  {
    id: "uT3myORIxcs",
    title: "Christophe & Jean from French",
    thumbnail: "/homepage/Homepage-Waerebo-Thumbnail-Video-Review-02.webp",
    quote: '"A great place, and the staff is super nice."',
    caption:
      "Listen to this wonderful family highlight the kindness, comfort, and amazing service that made their Waerebo Lodge stay memorable.",
    url: "https://youtu.be/uT3myORIxcs",
  },
  {
    id: "7q3DuaYQcfI",
    title: "Daisy & Edy Indonesia",
    thumbnail: "/homepage/Homepage-Waerebo-Thumbnail-Video-Review-03.webp",
    quote: '"When you open the door, you immediately see this beautiful view."',
    caption:
      "Daisy and Edy share why Waerebo Lodge's comfortable rooms, beautiful rice-paddy views, and incredibly attentive staff made their Flores trip unforgettable.",
    url: "https://youtu.be/7q3DuaYQcfI",
  },
  {
    id: "3xFSsOk7SL8",
    title: "Iris from Germany",
    thumbnail: "/homepage/Homepage-Waerebo-Thumbnail-Video-Review-04.webp",
    quote: '"What I told you, I loved, I really love it."',
    caption:
      "Iris shares her admiration for the stunning natural scenery, authentic local experiences, and genuine hospitality she found in Waerebo.",
    url: "https://youtu.be/3xFSsOk7SL8",
  },
  {
    id: "8dUNAZ-vhB8",
    title: "Christoph and Flo",
    thumbnail: "/homepage/Homepage-Waerebo-Thumbnail-Video-Review-05.webp",
    quote: '"The nicest views with the best people you can meet."',
    caption:
      "Hear Christoph and Flo share the magic of Waerebo Lodge: from the beautiful scenic trails and stories to meeting both locals and travelers along the village.",
    url: "https://youtu.be/8dUNAZ-vhB8",
  },
  {
    id: "KErr-2E1I_g",
    title: "NO NAME",
    thumbnail: "/homepage/Homepage-Waerebo-Thumbnail-Video-Review-06.webp",
    quote: '"If you pass by, stay right here or more."',
    caption:
      "This happy traveler explains why Waerebo Lodge became such a wonderful stop in the region, from discovering the places around the area to the warm rooms, restaurant view, and delicious traditional food.",
    url: "https://youtube.com/shorts/KErr-2E1I_g",
  },
  {
    id: "xSXuJHTuqgc",
    title: "Iris from Germany",
    thumbnail: "/homepage/Homepage-Waerebo-Thumbnail-Video-Review-07.webp",
    quote: '"To get an amazing, beautiful sunset..."',
    caption:
      "Iris shares her highlights from incredible dinner views at the restaurant and sunset to the welcoming staff and clean rooms that made Waerebo special.",
    url: "https://youtube.com/shorts/xSXuJHTuqgc?feature=share",
  },
  {
    id: "missing-video-8",
    title: "Christoph and Flo",
    thumbnail: "/homepage/Homepage-Waerebo-Thumbnail-Video-Review-08.webp",
    quote: '"We really felt around here."',
    caption:
      "Christoph and Flo share the feeling of arriving at Waerebo Lodge, discovering a scenic place, and the confidence to explore the lodge and nearby areas.",
    url: "",
  },
  {
    id: "missing-video-9",
    title: "NO NAME",
    thumbnail: "/homepage/Homepage-Waerebo-Thumbnail-Video-Review-09.webp",
    quote: '"If you are heading to Waerebo, do not forget to come here."',
    caption:
      "Discover why these guests highly recommend stopping at Waerebo Lodge to enjoy the beautiful green rice fields and fantastic local meals.",
    url: "",
  },
];

export default function GallerySection() {
  const [current, setCurrent] = useState(0);
  const [isTextVisible, setIsTextVisible] = useState(true);
  const [slideOffset, setSlideOffset] = useState(0);
  const firstSlideRef = useRef<HTMLDivElement>(null);
  const currentRef = useRef(0);
  const textTimerRef = useRef<number | null>(null);
  const { t } = useLang();
  const activeVideo = videos[current];

  const changeSlide = useCallback((nextIndex: number) => {
    if (textTimerRef.current) {
      window.clearTimeout(textTimerRef.current);
    }

    setIsTextVisible(false);
    currentRef.current = nextIndex;
    setCurrent(nextIndex);
    textTimerRef.current = window.setTimeout(() => {
      setIsTextVisible(true);
      textTimerRef.current = null;
    }, 560);
  }, []);

  const prev = () =>
    changeSlide((currentRef.current - 1 + videos.length) % videos.length);
  const next = () => changeSlide((currentRef.current + 1) % videos.length);

  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 640px)").matches;
    const duration = isDesktop ? 6000 : 5000;
    const id = window.setInterval(() => {
      changeSlide((currentRef.current + 1) % videos.length);
    }, duration);
    return () => {
      window.clearInterval(id);
      if (textTimerRef.current) {
        window.clearTimeout(textTimerRef.current);
      }
    };
  }, [changeSlide]);

  useEffect(() => {
    const updateOffset = () => {
      const firstSlide = firstSlideRef.current;
      if (!firstSlide) return;
      const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
      setSlideOffset(
        firstSlide.getBoundingClientRect().width + (isDesktop ? 28 : 0)
      );
    };

    updateOffset();
    window.addEventListener("resize", updateOffset);
    return () => window.removeEventListener("resize", updateOffset);
  }, []);

  return (
    <section className="bg-neutral-050 py-16 lg:py-20" id="testimonials">
      <div className="mx-auto max-w-[1920px]">
        <div className="mx-auto w-[calc(100%-32px)] max-w-[1845px] lg:mr-0 lg:ml-auto lg:w-[90.1vw]">
          <div className="relative min-h-[980px] overflow-hidden rounded-[40px] shadow-[0_26px_42px_rgba(38,35,22,0.18)] sm:min-h-[1100px] lg:aspect-[1845/998] lg:min-h-0 lg:rounded-l-[48px] lg:rounded-r-none">
            <Image
              src="/homepage/Homepage-Waerebo-Lodge-Background-Youtube-Video-Reviews-Desktop.webp"
              alt=""
              fill
              priority
              className="hidden object-cover sm:block"
            />
            <Image
              src="/homepage/Homepage-Waerebo-Lodge-Background-Youtube-Video-Reviews-Mobile.webp"
              alt=""
              fill
              priority
              className="object-cover sm:hidden"
            />
            <div className="absolute inset-0 bg-black/28" />
            <div className="absolute inset-y-0 left-0 w-[50%] bg-gradient-to-r from-black/42 via-black/24 to-transparent backdrop-blur-[2px]" />
            <div className="absolute inset-x-0 bottom-0 h-[36%] bg-gradient-to-t from-black/45 to-transparent" />

            <div className="relative z-10 grid h-full gap-8 px-6 py-12 sm:px-10 lg:grid-cols-[410px_1fr] lg:gap-[58px] lg:px-[110px] lg:py-[86px]">
              <div className="relative z-20 flex min-w-0 flex-col">
                <p className="mb-5 text-base font-normal text-white/90 lg:text-[22px]">
                  {t("gallery.eyebrow")}
                </p>
                <h2 className="mb-8 text-[40px] leading-[1.08] text-white sm:text-[56px] lg:mb-[58px] lg:text-[76px] lg:leading-[1.02]">
                  <span className="font-light">{t("gallery.head1")}</span>
                  <span className="font-bold">{t("gallery.head2")}</span>
                </h2>
                <div className="mb-2 flex gap-2 lg:mb-9">
                  {videos.map((video, index) => (
                    <button
                      key={video.id}
                      onClick={() => changeSlide(index)}
                      aria-label={`Show guest video ${index + 1}`}
                      className="h-1.5 w-10 overflow-hidden rounded-full bg-white/25 lg:w-[40px]"
                    >
                      <span
                        className={`block h-full rounded-full bg-white transition-all duration-500 ${
                          index <= current ? "w-full" : "w-0"
                        }`}
                      />
                    </button>
                  ))}
                </div>
                <div
                  className={`hidden transition-opacity duration-200 lg:block ${
                    isTextVisible ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <h3 className="mb-5 max-w-[400px] text-2xl leading-[1.35] font-semibold text-white italic lg:text-[26px]">
                    {activeVideo.quote}
                  </h3>
                  <p className="max-w-[390px] text-lg leading-[1.35] font-normal text-white/62 lg:text-[22px]">
                    {activeVideo.caption}
                  </p>
                </div>
                <div className="mt-auto hidden gap-5 lg:flex">
                  <button
                    onClick={prev}
                    aria-label="Previous video"
                    className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-black/10 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-savana-800"
                  >
                    <IoChevronBackOutline size={42} />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next video"
                    className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-black/10 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-savana-800"
                  >
                    <IoChevronForwardOutline size={42} />
                  </button>
                </div>
              </div>

              <div className="relative z-10 min-h-[600px] overflow-hidden sm:min-h-[700px] lg:min-h-0">
                <div
                  className="flex h-full gap-0 transition-transform duration-500 ease-out lg:gap-7"
                  style={{
                    transform: `translateX(-${current * slideOffset}px)`,
                  }}
                >
                  {videos.map((video, index) => (
                    <div
                      key={video.id}
                      ref={index === 0 ? firstSlideRef : undefined}
                      className="h-full w-full flex-shrink-0 lg:w-[26.4vw] lg:max-w-[487px]"
                    >
                      <a
                        href={video.url || "#testimonials"}
                        target={video.url ? "_blank" : undefined}
                        rel={video.url ? "noopener noreferrer" : undefined}
                        aria-label={`Watch ${video.title} on YouTube`}
                        className={`group relative block h-full min-h-[600px] w-full overflow-hidden rounded-[28px] transition-opacity duration-500 sm:min-h-[700px] lg:min-h-0 lg:rounded-[24px] ${
                          index === current ? "ring-2 ring-white" : "opacity-55"
                        }`}
                      >
                        <Image
                          src={video.thumbnail}
                          alt={video.title}
                          fill
                          sizes="(min-width: 1024px) 487px, 80vw"
                          className="object-cover"
                        />
                        {index !== current && (
                          <span className="absolute inset-0 bg-slate-950/45" />
                        )}
                        {index === current && (
                          <span className="absolute top-1/2 left-1/2 grid h-[112px] w-[112px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-slate-950/65 text-white shadow-lg transition-transform group-hover:scale-105">
                            <IoPlay size={62} className="translate-x-1" />
                          </span>
                        )}
                      </a>
                    </div>
                  ))}
                </div>
                <div className="pointer-events-none absolute inset-y-0 right-0 left-0 flex items-center justify-between px-6 lg:hidden">
                  <button
                    onClick={prev}
                    aria-label="Previous video"
                    className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-savana-800"
                  >
                    <IoChevronBackOutline size={34} />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next video"
                    className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-savana-800"
                  >
                    <IoChevronForwardOutline size={34} />
                  </button>
                </div>
              </div>

              <div
                className={`transition-opacity duration-200 lg:hidden ${
                  isTextVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                <h3 className="mb-5 text-[28px] leading-[1.35] font-semibold text-white italic">
                  {activeVideo.quote}
                </h3>
                <p className="text-xl leading-[1.4] font-normal text-white/70">
                  {activeVideo.caption}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
