"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { IoChevronBack, IoChevronForward, IoClose } from "react-icons/io5";
import type { Swiper as SwiperClass } from "swiper";
import { A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide, type SwiperRef } from "swiper/react";
import { useLang } from "@/lib/i18n";
import "swiper/css";

const G = "/homepage/gallery";

type GalleryItem = {
  src: string;
  modalSrc: string;
  caption: { en: string; id: string };
};

const galleryItems: GalleryItem[] = [
  {
    src: `${G}/Waerebo-Lodge-Homepage-Galeri-Carousel-01.webp`,
    modalSrc: `${G}/Original-Waerebo-Lodge-Homepage-Galeri-Carousel-01.webp`,
    caption: {
      en: "Witnessing the tradition of sun-drying fresh Waerebo coffee beans.",
      id: "Menyaksikan tradisi menjemur biji kopi segar Waerebo di bawah sinar matahari.",
    },
  },
  {
    src: `${G}/Waerebo-Lodge-Homepage-Galeri-Carousel-02.webp`,
    modalSrc: `${G}/Original-Waerebo-Lodge-Homepage-Galeri-Carousel-02.webp`,
    caption: {
      en: "Experiencing a warm, heartfelt welcome ceremony from the local community.",
      id: "Merasakan sambutan hangat dan penuh ketulusan dari komunitas lokal.",
    },
  },
  {
    src: `${G}/Waerebo-Lodge-Homepage-Galeri-Carousel-03.webp`,
    modalSrc: `${G}/Original-Waerebo-Lodge-Homepage-Galeri-Carousel-03.webp`,
    caption: {
      en: "Learning about the history & heritage of the village from our guides.",
      id: "Belajar tentang sejarah dan warisan desa dari pemandu kami.",
    },
  },
  {
    src: `${G}/Waerebo-Lodge-Homepage-Galeri-Carousel-04.webp`,
    modalSrc: `${G}/Original-Waerebo-Lodge-Homepage-Galeri-Carousel-04.webp`,
    caption: {
      en: "Enjoying a scenic coastal boat ride along the beautiful Flores coastline.",
      id: "Menikmati perjalanan perahu menyusuri pesisir Flores yang indah.",
    },
  },
  {
    src: `${G}/Waerebo-Lodge-Homepage-Galeri-Carousel-05.webp`,
    modalSrc: `${G}/Original-Waerebo-Lodge-Homepage-Galeri-Carousel-05.webp`,
    caption: {
      en: "Sharing joyful moments and making memories in traditional village attire.",
      id: "Berbagi momen bahagia dan menciptakan kenangan dalam busana tradisional desa.",
    },
  },
  {
    src: `${G}/Waerebo-Lodge-Homepage-Galeri-Carousel-06.webp`,
    modalSrc: `${G}/Original-Waerebo-Lodge-Homepage-Galeri-Carousel-06.webp`,
    caption: {
      en: "Capturing unforgettable memories against the majestic backdrop of the Mbaru Niang.",
      id: "Mengabadikan kenangan tak terlupakan dengan latar megah Mbaru Niang.",
    },
  },
  {
    src: `${G}/Waerebo-Lodge-Homepage-Galeri-Carousel-07.webp`,
    modalSrc: `${G}/Original-Waerebo-Lodge-Homepage-Galeri-Carousel-07.webp`,
    caption: {
      en: "Dressing in authentic Flores woven fabrics for a true cultural immersion.",
      id: "Mengenakan kain tenun Flores autentik untuk pengalaman budaya yang mendalam.",
    },
  },
  {
    src: `${G}/Waerebo-Lodge-Homepage-Galeri-Carousel-08.webp`,
    modalSrc: `${G}/Original-Waerebo-Lodge-Homepage-Galeri-Carousel-08.webp`,
    caption: {
      en: "Discovering the intricate, generation-old art of traditional Flores weaving up close.",
      id: "Mengenal dari dekat seni tenun tradisional Flores yang rumit dan diwariskan turun-temurun.",
    },
  },
  {
    src: `${G}/Waerebo-Lodge-Homepage-Galeri-Carousel-09.webp`,
    modalSrc: `${G}/Original-Waerebo-Lodge-Homepage-Galeri-Carousel-09.webp`,
    caption: {
      en: "A thrilling close encounter with the legendary Komodo dragons.",
      id: "Berjumpa dari dekat secara mendebarkan dengan komodo yang legendaris.",
    },
  },
  {
    src: `${G}/Waerebo-Lodge-Homepage-Galeri-Carousel-10.webp`,
    modalSrc: `${G}/Original-Waerebo-Lodge-Homepage-Galeri-Carousel-10.webp`,
    caption: {
      en: "Capturing shared smiles and unforgettable memories with the welcoming local community.",
      id: "Mengabadikan senyum bersama dan kenangan tak terlupakan dengan komunitas lokal yang ramah.",
    },
  },
  {
    src: `${G}/Waerebo-Lodge-Homepage-Galeri-Carousel-11.webp`,
    modalSrc: `${G}/Original-Waerebo-Lodge-Homepage-Galeri-Carousel-11.webp`,
    caption: {
      en: "Exploring the iconic and peaceful grounds of the traditional village.",
      id: "Menjelajahi kawasan desa adat yang ikonik dan damai.",
    },
  },
  {
    src: `${G}/Waerebo-Lodge-Homepage-Galeri-Carousel-12.webp`,
    modalSrc: `${G}/Original-Waerebo-Lodge-Homepage-Galeri-Carousel-12.webp`,
    caption: {
      en: "Sharing stories and a hearty, home-cooked meal together at the lodge's open-air dining area.",
      id: "Berbagi cerita dan hidangan rumahan yang hangat di area makan terbuka lodge.",
    },
  },
];

export default function GallerySection() {
  const [current, setCurrent] = useState(0);
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const { t, lang } = useLang();
  const swiperRef = useRef<SwiperRef>(null);
  const modalThumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (modalIndex === null) return;
    const thumbnail = modalThumbnailRefs.current[modalIndex];
    const strip = thumbnail?.parentElement;
    if (!thumbnail || !strip) return;
    strip.scrollTo({
      left:
        thumbnail.offsetLeft -
        strip.clientWidth / 2 +
        thumbnail.offsetWidth / 2,
      behavior: "smooth",
    });
  }, [modalIndex]);

  const prev = () => swiperRef.current?.swiper.slidePrev();
  const next = () => swiperRef.current?.swiper.slideNext();

  const handleSlideChange = (swiper: SwiperClass) => {
    setCurrent(swiper.realIndex);
  };

  const handlePaginationClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    swiperRef.current?.swiper.slideToLoop(
      Number(event.currentTarget.dataset.slideIndex)
    );
  };

  const openGalleryItem = (event: React.MouseEvent<HTMLButtonElement>) => {
    setModalIndex(Number(event.currentTarget.dataset.galleryIndex));
  };

  const closeGalleryModal = () => setModalIndex(null);
  const prevModal = () =>
    setModalIndex((index) =>
      index === null
        ? null
        : (index - 1 + galleryItems.length) % galleryItems.length
    );
  const nextModal = () =>
    setModalIndex((index) =>
      index === null ? null : (index + 1) % galleryItems.length
    );

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (
      event.target instanceof Element &&
      !event.target.closest("button, img, [data-gallery-caption]")
    )
      closeGalleryModal();
  };

  useEffect(() => {
    if (modalIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setModalIndex(null);
      if (event.key === "ArrowLeft")
        setModalIndex((index) =>
          index === null
            ? null
            : (index - 1 + galleryItems.length) % galleryItems.length
        );
      if (event.key === "ArrowRight")
        setModalIndex((index) =>
          index === null ? null : (index + 1) % galleryItems.length
        );
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [modalIndex]);

  return (
    <section className="z-10 bg-transparent py-2.5 pb-16 lg:py-20">
      <div className="max-w-[1845px mr-auto w-[calc(100%_-_20px)] lg:w-[90.1vw]">
        <div className="relative flex min-h-[640px] overflow-hidden rounded-l-none rounded-r-[28px] shadow-[0_26px_42px_rgba(38,35,22,0.18)] sm:min-h-[676px] lg:rounded-r-[36px]">
          <Image
            src="/homepage/Homepage-Waerebo-Lodge-Background-Gallery-Desktop.webp"
            alt=""
            fill
            className="hidden object-cover sm:block"
          />
          <Image
            src="/homepage/Homepage-Waerebo-Lodge-Background-Gallery-Mobile.webp"
            alt=""
            fill
            className="object-cover sm:hidden"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/24 to-black/72" />

          <div className="relative z-10 my-auto flex w-full flex-col px-5 py-10 sm:px-8 sm:py-12 lg:px-[80px] lg:py-[52px]">
            <div className="mb-5 flex items-end justify-between gap-6">
              <div>
                <p className="mb-2 text-[14px] leading-5 font-normal text-white/90 sm:text-base">
                  {t("moments.eyebrow")}
                </p>
                <h2 className="text-[32px] leading-[1.05] tracking-[-0.025em] text-balance text-white sm:text-[42px] lg:text-[54px]">
                  <span className="font-light">{t("moments.head1")}</span>
                  <span className="font-bold">{t("moments.head2")}</span>
                </h2>
              </div>
              <div className="hidden flex-shrink-0 gap-5 pb-0.5 lg:flex">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous moment"
                  className="carousel-chevron-overlay flex h-12 w-12 items-center justify-center transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
                >
                  <IoChevronBack size={34} />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next moment"
                  className="carousel-chevron-overlay flex h-12 w-12 items-center justify-center transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
                >
                  <IoChevronForward size={34} />
                </button>
              </div>
            </div>

            <div className="mb-10 flex gap-1.5 sm:mb-12">
              {galleryItems.map((item, i) => (
                <button
                  type="button"
                  key={item.src}
                  data-slide-index={i}
                  onClick={handlePaginationClick}
                  aria-label={`Show moment ${i + 1}`}
                  aria-current={i === current ? "true" : undefined}
                  className="h-1 flex-1 overflow-hidden rounded-full bg-white/30 focus-visible:border-2 focus-visible:border-white focus-visible:outline-none"
                >
                  <span
                    className={`block h-full rounded-full bg-white transition-[width] duration-500 motion-reduce:transition-none ${
                      i <= current ? "w-full" : "w-0"
                    }`}
                  />
                </button>
              ))}
            </div>

            <div className="-mx-5 overflow-hidden sm:-mx-8 lg:-mx-[80px]">
              <Swiper
                ref={swiperRef}
                modules={[Autoplay, A11y]}
                autoplay={{
                  delay: 6000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                loop
                grabCursor
                slidesPerView="auto"
                spaceBetween={16}
                speed={500}
                threshold={8}
                breakpoints={{
                  0: {
                    slidesOffsetBefore: 20,
                    slidesOffsetAfter: 20,
                  },
                  640: {
                    spaceBetween: 20,
                    slidesOffsetBefore: 32,
                    slidesOffsetAfter: 32,
                  },
                  1024: {
                    spaceBetween: 20,
                    slidesOffsetBefore: 102,
                    slidesOffsetAfter: 80,
                  },
                }}
                onRealIndexChange={handleSlideChange}
                className="!h-auto [--gallery-w:clamp(280px,calc(100vw-40px),570px)]"
              >
                {galleryItems.map((item, index) => {
                  const isSquare = index % 2 === 0;
                  const isActive = index === current;

                  return (
                    <SwiperSlide
                      key={item.src}
                      className={`!h-auto shrink-0 ${
                        isSquare
                          ? "!w-[calc(var(--gallery-w)*320/570)]"
                          : "!w-[var(--gallery-w)]"
                      }`}
                    >
                      <button
                        type="button"
                        data-gallery-index={index}
                        onClick={openGalleryItem}
                        aria-label={`Open gallery photo ${index + 1}`}
                        aria-current={isActive ? "true" : undefined}
                        className="group block w-full text-left focus-visible:outline-none"
                      >
                        <span
                          className={`relative block w-full overflow-hidden rounded-2xl bg-black/25 transition-[box-shadow] duration-500 motion-reduce:transition-none md:rounded-[24px] ${
                            isSquare ? "aspect-square" : "aspect-[570/320]"
                          } ${
                            isActive
                              ? "border-2 border-white"
                              : "border-0 border-transparent"
                          } group-focus-visible:border-2 group-focus-visible:border-white`}
                        >
                          <Image
                            src={item.src}
                            alt={item.caption[lang]}
                            fill
                            sizes={isSquare ? "320px" : "570px"}
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                          />

                          <span
                            className={`absolute inset-0 transition-colors duration-500 ${
                              isActive
                                ? "bg-black/0 group-hover:bg-black/10"
                                : "bg-black/55 group-hover:bg-black/45"
                            }`}
                          />
                        </span>

                        <span
                          className={`mt-5 block text-xs leading-[1.55] transition-colors duration-500 sm:text-[18px] md:text-[16px] ${
                            isActive
                              ? "font-semibold text-white"
                              : "font-medium text-white/45"
                          }`}
                        >
                          {item.caption[lang]}
                        </span>
                      </button>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      {modalIndex !== null &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Gallery photo viewer"
            onClick={handleBackdropClick}
            className="fixed inset-0 z-[100] grid place-items-center bg-black/85 px-4 py-6 sm:px-8"
          >
            <div className="flex h-full min-h-0 w-full max-w-6xl min-w-0 flex-col items-center justify-center gap-4">
              <button
                type="button"
                onClick={closeGalleryModal}
                aria-label="Close photo"
                className="absolute top-3 right-3 z-30 grid h-11 w-11 place-items-center rounded-full bg-white text-savana-800 transition-colors hover:bg-savana-50 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
              >
                <IoClose size={24} />
              </button>

              <button
                type="button"
                onClick={prevModal}
                aria-label="Previous gallery photo"
                className="carousel-chevron-overlay absolute top-1/2 left-3 z-20 grid h-12 w-12 -translate-y-1/2 place-items-center transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none sm:left-5"
              >
                <IoChevronBack size={32} />
              </button>
              <button
                type="button"
                onClick={nextModal}
                aria-label="Next gallery photo"
                className="carousel-chevron-overlay absolute top-1/2 right-3 z-20 grid h-12 w-12 -translate-y-1/2 place-items-center transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none sm:right-5"
              >
                <IoChevronForward size={32} />
              </button>

              <div className="flex min-h-0 w-full flex-1 items-center justify-center">
                <Image
                  src={galleryItems[modalIndex].modalSrc}
                  alt={galleryItems[modalIndex].caption[lang]}
                  width={1600}
                  height={1200}
                  sizes="100vw"
                  className="h-auto max-h-[calc(100dvh-15rem)] w-auto max-w-full rounded-2xl object-contain shadow-2xl sm:max-h-[calc(100dvh-15rem)]"
                  unoptimized
                  priority
                />
              </div>
              <p
                data-gallery-caption
                className="max-h-20 max-w-4xl shrink-0 overflow-y-auto px-2 text-center text-sm leading-relaxed text-white/90 sm:text-base"
              >
                {galleryItems[modalIndex].caption[lang]}
              </p>
              <div className="relative mx-auto flex max-w-full shrink-0 [scrollbar-width:none] gap-3 overflow-x-auto rounded-2xl bg-black/25 p-2 [&::-webkit-scrollbar]:hidden">
                {galleryItems.map((item, index) => (
                  <button
                    key={item.src}
                    ref={(element) => {
                      modalThumbnailRefs.current[index] = element;
                    }}
                    type="button"
                    onClick={() => setModalIndex(index)}
                    aria-label={`${lang === "id" ? "Pratinjau foto" : "Preview image"} ${index + 1}`}
                    aria-pressed={index === modalIndex}
                    className={`relative h-20 w-28 flex-none overflow-hidden rounded-xl border-2 transition-opacity sm:h-24 sm:w-36 ${index === modalIndex ? "border-white opacity-100" : "border-transparent opacity-60 hover:opacity-90"}`}
                  >
                    <Image
                      src={item.src}
                      alt=""
                      fill
                      sizes="144px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}
