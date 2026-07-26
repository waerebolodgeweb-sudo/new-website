"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { IoChevronBack, IoChevronForward, IoClose } from "react-icons/io5";
import { useLang } from "@/lib/i18n";

const G = "/Gallery";

const moments: { src: string; caption: { en: string; id: string } }[] = [
  {
    src: `${G}/Waerebo-Lodge-Gallery-Guest-Photo-19.webp`,
    caption: {
      en: "Experiencing a warm, heartfelt welcome ceremony from the local community.",
      id: "Merasakan sambutan hangat dan penuh ketulusan dari komunitas lokal.",
    },
  },
  {
    src: `${G}/Waerebo-Lodge-Gallery-Guest-Photo-03.webp`,
    caption: {
      en: "Learning about the history & heritage of the village from our guides.",
      id: "Belajar sejarah & warisan desa dari pemandu kami.",
    },
  },
  {
    src: `${G}/Waerebo-Lodge-Gallery-Guest-Photo-01.webp`,
    caption: {
      en: "Enjoying a scenic coastal boat ride along the beautiful Flores coastline.",
      id: "Menikmati perjalanan perahu menyusuri pesisir Flores yang indah.",
    },
  },
  {
    src: `${G}/Waerebo-Lodge-Gallery-Guest-Photo-10.webp`,
    caption: {
      en: "Sharing joyful moments and making memories in traditional village attire.",
      id: "Berbagi momen bahagia dan kenangan dalam busana tradisional desa.",
    },
  },
  {
    src: `${G}/Waerebo-Lodge-Gallery-Mbaru-Niang-House-Desktop.webp`,
    caption: {
      en: "Capturing unforgettable memories against the majestic backdrop of the Mbaru Niang.",
      id: "Mengabadikan kenangan tak terlupakan dengan latar megah Mbaru Niang.",
    },
  },
  {
    src: `${G}/Waerebo-Lodge-Gallery-Guest-Photo-23.webp`,
    caption: {
      en: "Dressing in authentic Flores woven fabrics for a true cultural immersion.",
      id: "Mengenakan kain tenun Flores asli untuk pengalaman budaya yang lebih dekat.",
    },
  },
  {
    src: `${G}/Waerebo-Lodge-Gallery-Ikat-Weaving-Desktop.webp`,
    caption: {
      en: "Discovering the intricate, generation-old art of traditional Flores weaving up close.",
      id: "Mengenal dari dekat seni tenun tradisional Flores yang diwariskan turun-temurun.",
    },
  },
  {
    src: `${G}/Waerebo-Lodge-Gallery-Guest-Photo-16.webp`,
    caption: {
      en: "Capturing shared smiles and unforgettable memories with the welcoming local community.",
      id: "Mengabadikan senyum dan kenangan bersama komunitas lokal yang ramah.",
    },
  },
  {
    src: `${G}/Waerebo-Lodge-Gallery-Guest-Photo-20.webp`,
    caption: {
      en: "Exploring the iconic and peaceful grounds of the traditional village.",
      id: "Menjelajahi area desa adat yang ikonik dan tenang.",
    },
  },
  {
    src: `${G}/Waerebo-Lodge-Gallery-Guest-Photo-12.webp`,
    caption: {
      en: "Sharing stories and a hearty, home-cooked meal together at the lodge's open-air dining area.",
      id: "Berbagi cerita dan hidangan rumahan yang hangat di area makan terbuka lodge.",
    },
  },
];

export default function MomentsSection() {
  const [current, setCurrent] = useState(0);
  const [modalMoment, setModalMoment] = useState<
    (typeof moments)[number] | null
  >(null);
  const { t, lang } = useLang();
  const dragRef = useRef<{
    pointerId: number;
    startX: number;
    startY: number;
    dragged: boolean;
  } | null>(null);
  const total = moments.length;
  const visibleMoments = Array.from({ length: total }, (_, index) => {
    const momentIndex = (current + index) % total;
    return { ...moments[momentIndex], momentIndex };
  });

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const openMoment = (moment: (typeof moments)[number]) => {
    if (dragRef.current?.dragged) return;
    setModalMoment(moment);
  };

  useEffect(() => {
    const id = window.setInterval(
      () => setCurrent((c) => (c + 1) % total),
      6000
    );
    return () => window.clearInterval(id);
  }, [total]);

  return (
    <section className="bg-neutral-050 py-12 lg:py-20">
      <div className="mx-auto max-w-[1920px] px-5 lg:px-0">
        <div className="relative mx-auto min-h-[560px] w-full max-w-[430px] overflow-hidden rounded-[32px] shadow-[0_22px_34px_rgba(38,35,22,0.18)] sm:max-w-[620px] lg:mr-auto lg:ml-0 lg:aspect-[1845/980] lg:min-h-0 lg:w-[90.1vw] lg:max-w-[1845px] lg:rounded-l-none lg:rounded-r-[48px] lg:shadow-[0_26px_42px_rgba(38,35,22,0.18)]">
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

          <div className="relative z-10 flex h-full flex-col px-5 pt-9 pb-9 sm:px-8 sm:pt-12 sm:pb-12 lg:px-[110px] lg:pt-[86px] lg:pb-[120px]">
            <div className="mb-5 flex items-start justify-between gap-6 lg:mb-8">
              <div>
                <p className="mb-2 text-[15px] font-normal text-white/90 sm:text-base lg:mb-5 lg:text-[22px]">
                  {t("moments.eyebrow")}
                </p>
                <h2 className="text-[31px] leading-[1.05] text-white sm:text-[42px] lg:text-[76px]">
                  <span className="font-light">{t("moments.head1")}</span>
                  <span className="font-bold">{t("moments.head2")}</span>
                </h2>
              </div>
              <div className="hidden flex-shrink-0 gap-7 pt-[58px] lg:flex">
                <button
                  onClick={prev}
                  aria-label="Previous moment"
                  className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-black/10 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-savana-800"
                >
                  <IoChevronBack size={42} />
                </button>
                <button
                  onClick={next}
                  aria-label="Next moment"
                  className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-black/10 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-savana-800"
                >
                  <IoChevronForward size={42} />
                </button>
              </div>
            </div>

            <div className="mb-8 flex gap-1.5 lg:mb-[64px]">
              {moments.map((m, i) => (
                <button
                  key={m.src}
                  onClick={() => setCurrent(i)}
                  aria-label={`Show moment ${i + 1}`}
                  className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/25"
                >
                  <span
                    className={`block h-full rounded-full bg-white transition-all duration-500 ${
                      i <= current ? "w-full" : "w-0"
                    }`}
                  />
                </button>
              ))}
            </div>

            <div
              className="overflow-hidden lg:-mx-[110px] lg:overflow-visible"
              onPointerDown={(event) => {
                dragRef.current = {
                  pointerId: event.pointerId,
                  startX: event.clientX,
                  startY: event.clientY,
                  dragged: false,
                };
                event.currentTarget.setPointerCapture(event.pointerId);
              }}
              onPointerMove={(event) => {
                const drag = dragRef.current;
                if (!drag || drag.pointerId !== event.pointerId) return;
                const deltaX = event.clientX - drag.startX;
                const deltaY = event.clientY - drag.startY;
                if (
                  Math.abs(deltaX) > 14 &&
                  Math.abs(deltaX) > Math.abs(deltaY)
                ) {
                  drag.dragged = true;
                }
              }}
              onPointerUp={(event) => {
                const drag = dragRef.current;
                if (!drag || drag.pointerId !== event.pointerId) return;
                const deltaX = event.clientX - drag.startX;
                const deltaY = event.clientY - drag.startY;
                const isSwipe =
                  Math.abs(deltaX) > 48 && Math.abs(deltaX) > Math.abs(deltaY);

                if (isSwipe) {
                  if (deltaX > 0) {
                    prev();
                  } else {
                    next();
                  }
                }

                window.setTimeout(() => {
                  dragRef.current = null;
                }, 0);
              }}
              onPointerCancel={() => {
                dragRef.current = null;
              }}
            >
              <div className="flex cursor-grab touch-pan-y items-start gap-7 transition-transform duration-500 ease-out active:cursor-grabbing">
                <button
                  onClick={prev}
                  className="hidden w-[6%] flex-shrink-0 translate-x-[-28%] text-left opacity-55 lg:block"
                  aria-label="Show previous moment"
                >
                  <div className="relative h-[433px] overflow-hidden rounded-[24px] bg-black/30">
                    <Image
                      src={moments[(current - 1 + total) % total].src}
                      alt={moments[(current - 1 + total) % total].caption[lang]}
                      fill
                      sizes="120px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-slate-950/55" />
                  </div>
                </button>

                {visibleMoments.slice(0, 4).map((m, i) => {
                  const active = i === 0;
                  return (
                    <button
                      key={m.src}
                      onClick={() =>
                        active ? openMoment(m) : setCurrent(m.momentIndex)
                      }
                      className={`flex-shrink-0 text-left ${
                        !active ? "hidden lg:block" : ""
                      } ${active ? "w-full lg:w-[42%]" : "w-[23.5%]"}`}
                    >
                      <div
                        className={`relative overflow-hidden transition-all duration-500 ${
                          active
                            ? "aspect-[1.48] rounded-[18px] ring-2 ring-white lg:aspect-auto lg:h-[433px] lg:rounded-[24px]"
                            : "h-[433px] rounded-[24px] opacity-60"
                        }`}
                      >
                        <Image
                          src={m.src}
                          alt={m.caption[lang]}
                          fill
                          sizes={
                            active
                              ? "(min-width: 1024px) 780px, calc(100vw - 80px)"
                              : "435px"
                          }
                          className="object-cover"
                        />
                        {!active && (
                          <div className="absolute inset-0 bg-slate-950/45" />
                        )}
                      </div>
                      <p
                        className={`mt-5 max-w-[780px] text-[17px] leading-[1.45] transition-colors duration-500 sm:text-xl lg:mt-8 lg:text-[26px] lg:leading-[1.35] ${
                          active ? "font-semibold text-white" : "text-white/42"
                        }`}
                      >
                        {m.caption[lang]}
                      </p>
                    </button>
                  );
                })}
              </div>
              <div className="mt-6 hidden justify-center gap-3">
                <button
                  onClick={prev}
                  aria-label="Previous moment"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-black/15 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-savana-800"
                >
                  <IoChevronBack size={24} />
                </button>
                <button
                  onClick={next}
                  aria-label="Next moment"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-black/15 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-savana-800"
                >
                  <IoChevronForward size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modalMoment && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/78 px-4 py-8">
          <div className="relative w-full max-w-5xl">
            <button
              type="button"
              onClick={() => setModalMoment(null)}
              aria-label="Close photo"
              className="absolute -top-14 right-0 grid h-11 w-11 place-items-center rounded-full bg-white text-savana-800 shadow-lg"
            >
              <IoClose size={24} />
            </button>
            <div className="relative max-h-[82vh] overflow-hidden rounded-[24px] bg-black">
              <Image
                src={modalMoment.src}
                alt={modalMoment.caption[lang]}
                width={1400}
                height={940}
                className="h-auto max-h-[82vh] w-full object-contain"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
