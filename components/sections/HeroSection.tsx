"use client";

import type { SyntheticEvent } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useLang } from "@/lib/i18n";

const desktopVideos = [
  "/homepage/hero/Waerebo-Lodge-Hero-Desktop-Video-1.mp4",
  "/homepage/hero/Waerebo-Lodge-Hero-Desktop-Video-2.mp4",
  "/homepage/hero/Waerebo-Lodge-Hero-Desktop-Video-3.mp4",
  "/homepage/hero/Waerebo-Lodge-Hero-Desktop-Video-4.mp4",
];

const mobileVideos = [
  "/homepage/hero/Waerebo-Lodge-Hero-Mobile-Video-1.mp4",
  "/homepage/hero/Waerebo-Lodge-Hero-Mobile-Video-2.mp4",
  "/homepage/hero/Waerebo-Lodge-Hero-Mobile-Video-3.mp4",
  "/homepage/hero/Waerebo-Lodge-Hero-Mobile-Video-4.mp4",
];

const TRANSITION_LEAD_SECONDS = 2.5;
const CROSSFADE_MS = 900;

/** Play a video, ignoring the AbortError thrown when the element is
 *  removed from the DOM (e.g. desktop/mobile source swap) mid-play. */
function safePlay(element: HTMLVideoElement | null | undefined) {
  const result = element?.play();
  if (result && typeof result.catch === "function") {
    result.catch(() => {});
  }
}

function useDesktopHeroVideo() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mediaQuery.matches);

    update();
    mediaQuery.addEventListener("change", update);

    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return isDesktop;
}

export default function HeroSection() {
  const { t } = useLang();
  const isDesktop = useDesktopHeroVideo();
  const videos = isDesktop ? desktopVideos : mobileVideos;
  const poster = isDesktop
    ? "/homepage/Homepage-Waerebo-Lodge-Hero-Overlay-Desktop-1.webp"
    : "/homepage/Homepage-Waerebo-Lodge-Hero-Overlay-Mobile-1.webp";
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const transitionTimeoutRef = useRef<number | null>(null);
  const [activeVideo, setActiveVideo] = useState(0);
  const [incomingVideo, setIncomingVideo] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const activeElement = videoRefs.current[activeVideo];
    if (!activeElement) return;

    safePlay(activeElement);
  }, [activeVideo, videos]);

  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current !== null) {
        window.clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, []);

  const startTransition = useCallback(
    (nextIndex: number) => {
      if (incomingVideo !== null || nextIndex === activeVideo) return;

      const currentElement = videoRefs.current[activeVideo];
      const nextElement = videoRefs.current[nextIndex];

      setIncomingVideo(nextIndex);

      if (nextElement) {
        nextElement.currentTime = 0;
        safePlay(nextElement);
      }

      if (transitionTimeoutRef.current !== null) {
        window.clearTimeout(transitionTimeoutRef.current);
      }

      transitionTimeoutRef.current = window.setTimeout(() => {
        currentElement?.pause();
        if (currentElement) {
          currentElement.currentTime = 0;
        }
        setActiveVideo(nextIndex);
        setIncomingVideo(null);
        setProgress(0);
      }, CROSSFADE_MS);
    },
    [activeVideo, incomingVideo]
  );

  const goToNextVideo = useCallback(() => {
    startTransition((activeVideo + 1) % videos.length);
  }, [activeVideo, startTransition, videos.length]);

  const handleTimeUpdate = (
    event: SyntheticEvent<HTMLVideoElement>,
    index: number
  ) => {
    if (index !== activeVideo || incomingVideo !== null) return;

    const video = event.currentTarget;
    const duration = video.duration;

    if (!Number.isFinite(duration) || duration <= 0) return;

    setProgress(Math.min(video.currentTime / duration, 1));

    if (duration - video.currentTime <= TRANSITION_LEAD_SECONDS) {
      goToNextVideo();
    }
  };

  return (
    <section className="relative isolate flex h-screen min-h-[600px] items-start bg-neutral-900 lg:h-[89svh] lg:items-center">
      {videos.map((video, index) => (
        <video
          key={`${isDesktop ? "desktop" : "mobile"}-${video}`}
          ref={(element) => {
            videoRefs.current[index] = element;
          }}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-out ${
            index === incomingVideo
              ? "z-20 opacity-100"
              : index === activeVideo
                ? "z-10 opacity-100"
                : "z-0 opacity-0"
          }`}
          autoPlay={index === 0}
          muted
          playsInline
          preload="auto"
          poster={poster}
          onTimeUpdate={(event) => handleTimeUpdate(event, index)}
          onEnded={() => {
            if (index === activeVideo) {
              goToNextVideo();
            }
          }}
        >
          <source src={video} type="video/mp4" />
        </video>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

      <div className="relative z-20 mx-auto w-full px-4 pt-24 pb-16 sm:px-6 lg:px-8 lg:py-28">
        {/* <div
          aria-hidden="true"
          className="absolute top-0 bottom-0 left-0 -mt-24 hidden h-[calc(100vh-86px)] w-[660px] md:block"
          style={{
            background:
              "linear-gradient(270deg, rgba(16, 19, 19, 0) 0%, rgba(16, 19, 19, 0.5) 100%)",
            backdropFilter: "blur(0px)",
            WebkitBackdropFilter: "blur(0px)",
            pointerEvents: "none",
          }}
        /> */}

        <div className="relative z-20">
          <h1 className="max-w-2xl text-4xl leading-[1.05] font-semibold text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            {t("hero.line1")}
            <br />
            {t("hero.line2")}
            <br />
            {t("hero.line3")}
          </h1>
          <p className="mt-5 max-w-md text-sm leading-relaxed font-normal text-white/75 lg:text-base">
            {t("hero.subtitle")}
          </p>
        </div>
        <div className="mt-8 flex w-full max-w-[220px] items-center gap-2">
          {videos.map((video, index) => (
            <button
              key={`progress-${video}`}
              type="button"
              aria-label={`Show hero video ${index + 1}`}
              onClick={() => startTransition(index)}
              className="h-1 flex-1 overflow-hidden rounded-full bg-white/30"
            >
              <span
                className="block h-full rounded-full bg-white transition-[width] duration-150 ease-linear"
                style={{
                  width:
                    index < activeVideo
                      ? "100%"
                      : index === activeVideo
                        ? `${Math.max(progress * 100, 8)}%`
                        : index === incomingVideo
                          ? "100%"
                          : "0%",
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
