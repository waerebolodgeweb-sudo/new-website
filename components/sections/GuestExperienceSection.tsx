"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  IoChevronBackOutline,
  IoChevronForwardOutline,
  IoClose,
  IoPlay,
} from "react-icons/io5";
import type { Swiper as SwiperClass } from "swiper";
import { A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide, type SwiperRef } from "swiper/react";
import { useLang } from "@/lib/i18n";
import "swiper/css";

const videos = [
  {
    id: "Rp7MpKgdeWA",
    title: "Nic Singapore",
    thumbnail: "/homepage/Homepage-Waerebo-Thumbnail-Video-Review-01.webp",
    quote: '"I did not expect my stay to be this welcoming."',
    caption:
      "Hear why Nick loved his two-night stay, from the incredible home-cooked meals to the owner's guided tours of Waerebo and Mulas Island.",
    url: "https://youtu.be/Rp7MpKgdeWA",
  },
  {
    id: "uT3myORIxcs",
    title: "Christophe and family",
    thumbnail: "/homepage/Homepage-Waerebo-Thumbnail-Video-Review-02.webp",
    quote: '"A great place, and the staff is super nice with children."',
    caption:
      "Listen to this wonderful family highlighting Waerebo Lodge's welcoming atmosphere, delicious local cuisine, and amazing views.",
    url: "https://youtu.be/uT3myORIxcs",
  },
  {
    id: "xSXuJHTuqgc",
    title: "Iris from Germany - Vegetarian dinner",
    thumbnail: "/homepage/Homepage-Waerebo-Thumbnail-Video-Review-03.webp",
    quote: '"What I told you, I love it, I really love it!"',
    caption:
      "Iris shares her excitement over the amazing dinner service. Watch as she highlights the lodge's ability to whip up a fantastic vegetarian spaghetti bolognese to suit her needs.",
    url: "https://youtube.com/shorts/xSXuJHTuqgc?feature=share",
  },
  {
    id: "7q3DuaYQcfI",
    title: "Daisy and Edi Indonesia",
    thumbnail: "/homepage/Homepage-Waerebo-Thumbnail-Video-Review-04.webp",
    quote:
      '"When you open the door, you immediately see the lush rice paddies."',
    caption:
      "Daisy and Edi share why Waerebo Lodge's comfortable AC rooms, beautiful rice-paddy views, and incredibly attentive staff made their Flores trip unforgettable.",
    url: "https://youtu.be/7q3DuaYQcfI",
  },
  {
    id: "8dUNAZ-vhB8",
    title: "Kristoff and Flo",
    thumbnail: "/homepage/Homepage-Waerebo-Thumbnail-Video-Review-05.webp",
    quote: '"The nicest views with the best people around you."',
    caption:
      "Kristoff and Flo share the magic of Waerebo Lodge! From the beautiful rice fields and nature to connecting with the local staff and exploring the village.",
    url: "https://youtu.be/8dUNAZ-vhB8",
  },
  {
    id: "eWlwpNx2DKs",
    title: "Guests at Waerebo Lodge",
    thumbnail: "/homepage/Homepage-Waerebo-Thumbnail-Video-Review-06.webp",
    quote: '"If you pass by, stay 1 night here or more."',
    caption:
      "Hear why these guests highly recommend stopping by Waerebo Lodge for a night or more. Discover their experience with the very clean rooms, welcoming staff, and delicious traditional food.",
    url: "https://youtube.com/shorts/eWlwpNx2DKs?feature=share",
  },
  {
    id: "3xFSsOk7SL8",
    title: "Iris from Germany",
    thumbnail: "/homepage/Homepage-Waerebo-Thumbnail-Video-Review-07.webp",
    quote: '"You get an amazing, beautiful sunset… it’s like a dream."',
    caption:
      "Iris shares her highlights from incredible drone views of the rice paddies at sunset to the welcoming staff and a dream-like trip to nearby Mulas Island.",
    url: "https://youtube.com/shorts/3xFSsOk7SL8?feature=share",
  },
  {
    id: "KErr-2E1I_g",
    title: "Christoph from Austria",
    thumbnail: "/homepage/Homepage-Waerebo-Thumbnail-Video-Review-08.webp",
    quote: '"We really like it around here."',
    caption:
      "Hear from Kristof about his amazing three-day stay at Waerebo Lodge. Discover why he loved the beautiful rice field views, the comfortable AC rooms, and his unforgettable trips to the village and nearby island.",
    url: "https://youtube.com/shorts/KErr-2E1I_g?feature=share",
  },
  {
    id: "39UPV4ZfW0c",
    title: "Indonesian guests at Waerebo Lodge",
    thumbnail: "/homepage/Homepage-Waerebo-Thumbnail-Video-Review-09.webp",
    quote: '"If you are heading to Waerebo, don’t forget to come here!"',
    caption:
      "Discover why these guests highly recommend stopping at Waerebo Lodge to enjoy the beautiful green rice fields and fantastic local meals.",
    url: "https://youtu.be/39UPV4ZfW0c",
  },
  // {
  //   id: "JtwXIwmVk0M",
  //   title: "Indonesian guests before their Waerebo trek",
  //   thumbnail: "/homepage/Homepage-Waerebo-Thumbnail-Video-Review-10.webp",
  //   quote:
  //     '"The facilities are very complete, and the place is truly unique and beautiful."',
  //   caption:
  //     "These Indonesian guests share why Waerebo Lodge is the perfect stop before the trek, from complete facilities and hearty meals to meaningful moments with the welcoming local community.",
  //   url: "https://youtube.com/shorts/JtwXIwmVk0M?feature=share",
  // },
  // {
  //   id: "M-NRn8NP3cQ",
  //   title: "Indonesian guests with Pak Martin",
  //   thumbnail: "/homepage/Homepage-Waerebo-Thumbnail-Video-Review-11.webp",
  //   quote: '"The service is amazing, and everyone here is so friendly."',
  //   caption:
  //     "Hear how conversations with Pak Martin, delicious meals three times a day, sea views, and the warmth of the family, staff, and guides made this stay memorable.",
  //   url: "https://youtube.com/shorts/M-NRn8NP3cQ?feature=share",
  // },
  {
    id: "6azFda8-7ew",
    title: "Esther from France",
    thumbnail: "/homepage/Homepage-Waerebo-Thumbnail-Video-Review-12.webp",
    quote: '"The view is superb. We’re surrounded by rice fields here."',
    caption:
      "Esther from France recommends Waerebo Lodge for its warm welcome, comfortable beds, excellent meals, spectacular rice-field views, and thoughtful help planning her return to Labuan Bajo.",
    url: "https://youtu.be/6azFda8-7ew",
  },
  {
    id: "ZOl1Wnkkq34",
    title: "Lucy from Surabaya, Indonesia",
    thumbnail: "/homepage/Homepage-Waerebo-Thumbnail-Video-Review-13.webp",
    quote: '"If seven stars is the maximum, I’d give it an eight."',
    caption:
      "Lucy from Surabaya shares why the generous dinner and breakfast, comfortable en-suite room, mountain and coastal views, and warm hospitality made Waerebo Lodge an easy recommendation.",
    url: "https://youtu.be/ZOl1Wnkkq34",
  },
  {
    id: "W3doldxPeQ0",
    title: "Sebastian and Isabel from Germany",
    thumbnail: "/homepage/Homepage-Waerebo-Thumbnail-Video-Review-14.webp",
    quote: '"You wake up to a beautiful view of the rice fields."',
    caption:
      "Sebastian and Isabel from Germany share a comfortable night at Waerebo Lodge, where friendly hosts and beautiful morning views made the perfect start to their Waerebo tour.",
    url: "https://youtu.be/W3doldxPeQ0",
  },
];

export default function GuestExperienceSection() {
  const [current, setCurrent] = useState(0);
  const [isTextVisible, setIsTextVisible] = useState(true);
  const [modalVideo, setModalVideo] = useState<(typeof videos)[number] | null>(
    null
  );
  const swiperRef = useRef<SwiperRef>(null);
  const textTimerRef = useRef<number | null>(null);
  const { t } = useLang();
  const activeVideo = videos[current];

  const changeSlide = useCallback((nextIndex: number) => {
    if (textTimerRef.current) {
      window.clearTimeout(textTimerRef.current);
    }

    setIsTextVisible(false);
    setCurrent(nextIndex);
    textTimerRef.current = window.setTimeout(() => {
      setIsTextVisible(true);
      textTimerRef.current = null;
    }, 560);
  }, []);

  const prev = () => swiperRef.current?.swiper.slidePrev();
  const next = () => swiperRef.current?.swiper.slideNext();

  const handleSlideChange = useCallback(
    (swiper: SwiperClass) => changeSlide(swiper.realIndex),
    [changeSlide]
  );

  const handlePaginationClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    swiperRef.current?.swiper.slideToLoop(
      Number(event.currentTarget.dataset.slideIndex)
    );
  };

  const openVideo = (video: (typeof videos)[number]) => {
    if (!video.url) return;
    setModalVideo(video);
  };

  const handleVideoClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    openVideo(videos[Number(event.currentTarget.dataset.videoIndex)]);
  };

  useEffect(() => {
    return () => {
      if (textTimerRef.current) window.clearTimeout(textTimerRef.current);
    };
  }, []);

  return (
    <section className="bg-savana-050 py-2.5 lg:py-20" id="testimonials">
      <div className="ml-auto w-full max-w-[1920px]">
        <div className="ml-auto w-[calc(100%_-_32px)] max-w-[1845px] lg:w-[90.1vw]">
          <div className="mc:aspect-[1845/998] relative min-h-[980px] overflow-hidden rounded-l-[28px] rounded-r-none shadow-[0_26px_42px_rgba(38,35,22,0.18)] sm:min-h-[1100px] lg:min-h-0 lg:rounded-l-[36px]">
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
            <div className="flex flex-col py-12 pl-5 sm:pl-10 lg:gap-8 lg:py-[60px] lg:pl-[80px]">
              <div className="z-10 flex flex-col">
                <p className="text-sm font-normal text-white/90 lg:text-base">
                  {t("gallery.eyebrow")}
                </p>
                <h2 className="mb-5 text-[32px] text-white sm:text-[56px] lg:mb-0 lg:text-[54px]">
                  <span className="font-light">{t("gallery.head1")}</span>
                  <span className="font-bold">{t("gallery.head2")}</span>
                </h2>
              </div>
              <div className="relative z-10 grid h-full lg:grid-cols-[410px_1fr] lg:gap-[58px]">
                <div className="relative z-20 flex min-w-0 flex-col">
                  <div className="mb-10 flex gap-1.5 pr-4 lg:mb-9">
                    {videos.map((video, index) => (
                      <button
                        key={video.id}
                        data-slide-index={index}
                        onClick={handlePaginationClick}
                        aria-label={`Show guest video ${index + 1}`}
                        className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/25 sm:w-5"
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
                    <h3 className="mb-5 max-w-[400px] text-lg leading-[1.35] font-semibold text-white italic">
                      {activeVideo.quote}
                    </h3>
                    <p className="max-w-[390px] text-sm leading-[1.35] font-normal text-white/62">
                      {activeVideo.caption}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 min-h-0 w-full overflow-hidden">
                  <Swiper
                    ref={swiperRef}
                    modules={[Autoplay, A11y]}
                    autoplay={{
                      delay: 9000,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }}
                    loop
                    grabCursor
                    slidesPerView="auto"
                    spaceBetween={8}
                    speed={500}
                    threshold={8}
                    breakpoints={{
                      1024: {
                        spaceBetween: 28,
                      },
                    }}
                    onRealIndexChange={handleSlideChange}
                    className="h-full min-h-[540px] w-full"
                  >
                    {videos.map((video, index) => (
                      <SwiperSlide
                        key={video.id}
                        className="!h-auto !w-[320px] shrink-0 overflow-hidden"
                      >
                        <button
                          type="button"
                          data-video-index={index}
                          onClick={handleVideoClick}
                          disabled={!video.url}
                          aria-label={
                            video.url
                              ? `Watch ${video.title} on YouTube`
                              : `Video unavailable for ${video.title}`
                          }
                          className={`group relative block aspect-[2/3] w-full overflow-hidden rounded-[20px] text-left transition-opacity duration-500 disabled:cursor-not-allowed lg:rounded-[24px] ${
                            index === current
                              ? "border-2 border-white ring-white"
                              : "opacity-55"
                          }`}
                        >
                          <Image
                            src={video.thumbnail}
                            alt={video.title}
                            fill
                            sizes="320px"
                            className={`rounded-[20px] object-cover transition-transform duration-500 group-hover:scale-105 ${
                              index === current
                                ? "scale-105 border-2 border-white"
                                : ""
                            }`}
                          />

                          {index !== current && (
                            <span className="absolute inset-0 bg-slate-950/45" />
                          )}

                          {index === current && video.url && (
                            <span className="absolute top-1/2 left-1/2 grid h-[112px] w-[112px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-slate-950/65 text-white shadow-lg transition-transform group-hover:scale-105">
                              <IoPlay size={62} className="translate-x-1" />
                            </span>
                          )}
                        </button>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                <div
                  className={`transition-opacity duration-200 lg:hidden ${
                    isTextVisible ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <h3 className="mb-5 text-[18px] leading-[1.35] font-semibold text-white italic">
                    {activeVideo.quote}
                  </h3>
                  <p className="text-sm leading-[1.4] font-normal text-white/70">
                    {activeVideo.caption}
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-[60px] left-[80px] z-20 hidden gap-4 lg:flex">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous video"
                className="carousel-chevron-overlay flex h-14 w-14 items-center justify-center transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
              >
                <IoChevronBackOutline size={34} />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next video"
                className="carousel-chevron-overlay flex h-14 w-14 items-center justify-center transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
              >
                <IoChevronForwardOutline size={34} />
              </button>
            </div>
          </div>
        </div>
      </div>
      {modalVideo && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/78 px-4 py-8">
          <div className="relative w-full max-w-4xl">
            <button
              type="button"
              onClick={() => setModalVideo(null)}
              aria-label="Close video"
              className="absolute -top-14 right-0 grid h-11 w-11 place-items-center rounded-full bg-white text-savana-800 shadow-lg"
            >
              <IoClose size={24} />
            </button>
            <div className="relative aspect-video overflow-hidden rounded-[24px] bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${modalVideo.id}?autoplay=1`}
                title={modalVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
