"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import type { Swiper as SwiperClass } from "swiper";
import { A11y } from "swiper/modules";
import { Swiper, SwiperSlide, type SwiperRef } from "swiper/react";
import { useLang } from "@/lib/i18n";
import "swiper/css";
import { guestReviews as testimonials } from "@/lib/reviews";

const DESKTOP_BREAKPOINT = 1280;
const DESKTOP_DURATION = 15_000;
const MOBILE_DURATION = 6_000;
const PROGRESS_STEPS = 4;
const REVIEW_SLIDE_SPEED = 500;

function ReviewCard({ review }: { review: (typeof testimonials)[number] }) {
  return (
    <article className="flex h-[370px] min-w-0 flex-col rounded-[28px] bg-black/45 p-5 text-white backdrop-blur-[6px] xl:h-[380px] xl:rounded-[30px]">
      <div className="flex items-start justify-between gap-4">
        <div className="relative size-[60px] shrink-0 overflow-hidden rounded-full bg-white">
          <Image
            src={review.avatar}
            alt={`Google profile photo of ${review.name}`}
            fill
            sizes="60px"
            className="object-cover"
          />
        </div>
        <p
          className="flex items-end gap-1"
          aria-label={`${review.rating} out of 5`}
        >
          <span className="text-[32px] leading-none font-medium">
            {review.rating}
          </span>
          <span className="pb-0.5 text-lg leading-none text-white/60">/5</span>
        </p>
      </div>

      <div className="mt-3 xl:mt-4">
        <h3 className="text-[20px] leading-[1.35] font-semibold">
          {review.name}
        </h3>
        <blockquote className="text-white/85text-[16px] relative mt-2 pl-4 leading-[1.5] font-normal">
          <span
            aria-hidden="true"
            className="absolute top-[-4px] left-0 leading-none font-semibold text-[26spx] text-white"
          >
            “
          </span>
          <span className="text-sm md:text-base">{review.text}</span>
          <span
            aria-hidden="true"
            className="ml-1 inline-block translate-y-1 text-[26px] leading-none font-semibold text-white"
          >
            ”
          </span>
        </blockquote>
      </div>
    </article>
  );
}

export default function ReviewsSection() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [activeReview, setActiveReview] = useState(0);
  const [progressCycle, setProgressCycle] = useState(0);
  const swiperRef = useRef<SwiperRef>(null);
  const { t } = useLang();
  const autoplayDuration = isDesktop ? DESKTOP_DURATION : MOBILE_DURATION;
  const activeProgress = activeReview % PROGRESS_STEPS;
  const progressPageStart =
    Math.floor(activeReview / PROGRESS_STEPS) * PROGRESS_STEPS;

  const goToReview = (swiper: SwiperClass, reviewIndex: number) => {
    const normalizedIndex =
      (reviewIndex + testimonials.length) % testimonials.length;

    swiper.slideToLoop(normalizedIndex, REVIEW_SLIDE_SPEED);
    setActiveReview(normalizedIndex);
    setProgressCycle((cycle) => cycle + 1);
  };

  const prev = () => {
    const swiper = swiperRef.current?.swiper;
    if (!swiper) return;
    swiper.slidePrev(REVIEW_SLIDE_SPEED);
    setProgressCycle((cycle) => cycle + 1);
  };

  const next = () => {
    const swiper = swiperRef.current?.swiper;
    if (!swiper) return;
    swiper.slideNext(REVIEW_SLIDE_SPEED);
    setProgressCycle((cycle) => cycle + 1);
  };

  const handlePaginationClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const swiper = swiperRef.current?.swiper;
    if (!swiper) return;

    const progressIndex = Number(event.currentTarget.dataset.progressIndex);
    const currentPageStart =
      Math.floor(swiper.realIndex / PROGRESS_STEPS) * PROGRESS_STEPS;
    goToReview(swiper, currentPageStart + progressIndex);
  };

  const handleRealIndexChange = (swiper: SwiperClass) => {
    setActiveReview(swiper.realIndex);
    setProgressCycle((cycle) => cycle + 1);
  };

  const handleTouchStart = () => {
    setProgressCycle((cycle) => cycle + 1);
  };

  const handleProgressComplete = () => {
    const swiper = swiperRef.current?.swiper;
    if (!swiper) return;
    goToReview(swiper, swiper.realIndex + 1);
  };

  useEffect(() => {
    const query = window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT}px)`);
    const syncMode = () => {
      setIsDesktop(query.matches);
    };

    syncMode();
    query.addEventListener("change", syncMode);
    return () => query.removeEventListener("change", syncMode);
  }, []);

  return (
    <section
      id="reviews"
      className="scroll-mt-20 bg-savana-050 py-12 pb-0 lg:scroll-mt-24 lg:py-24 lg:pb-24"
    >
      <div className="mx-auto w-full max-w-[1512px] lg:px-20">
        <div className="relative h-[640px] overflow-hidden sm:aspect-auto sm:h-[720px] xl:aspect-[2784/1830] xl:h-auto xl:overflow-visible">
          <Image
            src="/homepage/Homepage-Waerebo-Lodge-Background-Google-Reviews-Desktop.webp"
            alt=""
            fill
            priority={false}
            sizes="(min-width: 1280px) 1352px, (min-width: 640px) calc(100vw - 48px), 0px"
            className="hidden object-fill sm:block"
          />
          <Image
            src="/homepage/Homepage-Waerebo-Lodge-Background-Google-Reviews-Mobile.webp"
            alt=""
            fill
            priority={false}
            sizes="(min-width: 640px) 560px, calc(100vw - 32px)"
            className="object-fill sm:hidden"
          />

          <div className="absolute inset-0 z-10 flex flex-col pt-[7%] pb-[9%] xl:pt-[5.5%] xl:pb-[12%]">
            <div className="flex items-end justify-between gap-5 px-[6%] xl:px-[4.5%]">
              <div>
                <p className="mb-1 text-sm font-normal text-white/90 xl:mb-2 xl:text-base">
                  {t("testimonials.eyebrow")}
                </p>
                <h2 className="text-[32px] leading-tight font-semibold text-white sm:text-4xl xl:text-[54px] xl:font-medium">
                  {t("testimonials.heading")}
                </h2>
              </div>

              <div className="hidden shrink-0 items-center gap-3 xl:flex">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous reviews"
                  className="carousel-chevron-overlay flex size-[52px] items-center justify-center transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <IoChevronBack aria-hidden="true" size={25} />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next reviews"
                  className="carousel-chevron-overlay flex size-[52px] items-center justify-center transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <IoChevronForward aria-hidden="true" size={25} />
                </button>
              </div>
            </div>

            <div className="px-[6%] xl:px-[4.5%]">
              <div
                className="reviews-pagination mt-5 flex xl:mt-4"
                role="tablist"
                aria-label="Choose a review slide"
              >
                {Array.from({ length: PROGRESS_STEPS }, (_, progressIndex) => (
                  <button
                    key={progressIndex}
                    type="button"
                    role="tab"
                    data-progress-index={progressIndex}
                    aria-selected={activeProgress === progressIndex}
                    aria-label={`Show review ${progressPageStart + progressIndex + 1}`}
                    onClick={handlePaginationClick}
                    className={`reviews-pagination-bullet ${
                      progressIndex < activeProgress
                        ? "is-complete"
                        : progressIndex === activeProgress
                          ? "is-active"
                          : ""
                    }`}
                  >
                    <span className="reviews-pagination-track">
                      {progressIndex < activeProgress && (
                        <span className="reviews-pagination-fill is-complete" />
                      )}
                      {progressIndex === activeProgress && (
                        <span
                          key={`${activeReview}-${progressCycle}`}
                          className="reviews-pagination-fill"
                          onAnimationEnd={handleProgressComplete}
                          style={{
                            animationName: "review-pagination-progress",
                            animationDuration: `${autoplayDuration}ms`,
                            animationTimingFunction: "linear",
                            animationFillMode: "forwards",
                            transformOrigin: "left",
                          }}
                        />
                      )}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-5 min-h-0 flex-1 xl:mt-8">
              <div className="relative mx-0 h-full overflow-hidden sm:mx-[1.5%]">
                <Swiper
                  key={isDesktop ? "reviews-desktop" : "reviews-mobile"}
                  ref={swiperRef}
                  modules={[A11y]}
                  initialSlide={activeReview}
                  slidesPerView={1}
                  slidesPerGroup={1}
                  slidesOffsetBefore={28}
                  slidesOffsetAfter={28}
                  spaceBetween={16}
                  breakpoints={{
                    480: { slidesPerView: 1.5, spaceBetween: 18 },
                    640: { slidesPerView: 2, spaceBetween: 20 },
                    768: { slidesPerView: 2.5, spaceBetween: 22 },
                    1024: { slidesPerView: 3, spaceBetween: 24 },
                    1200: { slidesPerView: 3.5, spaceBetween: 26 },
                    1400: { slidesPerView: 4, spaceBetween: 28 },
                  }}
                  loop
                  loopAdditionalSlides={4}
                  grabCursor
                  speed={REVIEW_SLIDE_SPEED}
                  threshold={8}
                  a11y={{
                    enabled: true,
                    containerMessage: "Traveler reviews",
                    containerRoleDescriptionMessage: "carousel",
                    itemRoleDescriptionMessage: "review",
                    paginationBulletMessage: "Show review slide {{index}}",
                  }}
                  onRealIndexChange={handleRealIndexChange}
                  onTouchStart={handleTouchStart}
                  className="reviews-carousel h-full w-full"
                >
                  {testimonials.map((review) => (
                    <SwiperSlide key={review.id} className="!h-auto min-w-0">
                      <ReviewCard review={review} />
                    </SwiperSlide>
                  ))}
                </Swiper>

                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous reviews"
                  className="carousel-chevron-overlay absolute top-[40%] left-3 z-20 flex size-10 -translate-y-1/2 items-center justify-center transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white xl:hidden"
                >
                  <IoChevronBack aria-hidden="true" size={25} />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next reviews"
                  className="carousel-chevron-overlay absolute top-[40%] right-3 z-20 flex size-10 -translate-y-1/2 items-center justify-center transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white xl:hidden"
                >
                  <IoChevronForward aria-hidden="true" size={25} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
