"use client";

import type { SyntheticEvent } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useLang } from "@/lib/i18n";

const desktopVideos = [
  {
    webm: "/homepage/hero/Waerebo-Lodge-Hero-Desktop-Video-1.webm",
    mp4: "/homepage/hero/Waerebo-Lodge-Hero-Desktop-Video-1.mp4",
  },
  {
    webm: "/homepage/hero/Waerebo-Lodge-Hero-Desktop-Video-2.webm",
    mp4: "/homepage/hero/Waerebo-Lodge-Hero-Desktop-Video-2.mp4",
  },
  {
    webm: "/homepage/hero/Waerebo-Lodge-Hero-Desktop-Video-3.webm",
    mp4: "/homepage/hero/Waerebo-Lodge-Hero-Desktop-Video-3.mp4",
  },
  {
    webm: "/homepage/hero/Waerebo-Lodge-Hero-Desktop-Video-4.webm",
    mp4: "/homepage/hero/Waerebo-Lodge-Hero-Desktop-Video-4.mp4",
  },
];

const mobileVideos = [
  {
    webm: "/homepage/hero/Waerebo-Lodge-Hero-Mobile-Video-1.webm",
    mp4: "/homepage/hero/Waerebo-Lodge-Hero-Mobile-Video-1.mp4",
  },
  {
    webm: "/homepage/hero/Waerebo-Lodge-Hero-Mobile-Video-2.webm",
    mp4: "/homepage/hero/Waerebo-Lodge-Hero-Mobile-Video-2.mp4",
  },
  {
    webm: "/homepage/hero/Waerebo-Lodge-Hero-Mobile-Video-3.webm",
    mp4: "/homepage/hero/Waerebo-Lodge-Hero-Mobile-Video-3.mp4",
  },
  {
    webm: "/homepage/hero/Waerebo-Lodge-Hero-Mobile-Video-4.webm",
    mp4: "/homepage/hero/Waerebo-Lodge-Hero-Mobile-Video-4.mp4",
  },
];

const TRANSITION_LEAD_SECONDS = 5;
const CROSSFADE_MS = 900;

/** Play a video, ignoring the AbortError thrown when the element is
 *  removed from the DOM (e.g. desktop/mobile source swap) mid-play. */
function safePlay(element: HTMLVideoElement | null | undefined) {
  const result = element?.play();
  if (result && typeof result.catch === "function") {
    result.catch(() => {});
  }
}

function useHeroVideoMode() {
  const [mode, setMode] = useState<"desktop" | "mobile" | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const update = () => setMode(mediaQuery.matches ? "desktop" : "mobile");

    update();
    mediaQuery.addEventListener("change", update);

    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return mode;
}

export default function HeroSection() {
  const { t } = useLang();
  const mode = useHeroVideoMode();
  const isDesktop = mode === "desktop";
  const videos = isDesktop ? desktopVideos : mobileVideos;
  const poster = isDesktop
    ? "/homepage/Homepage-Waerebo-Lodge-Hero-Overlay-Desktop-1.webp"
    : "/homepage/Homepage-Waerebo-Lodge-Hero-Overlay-Mobile-1.webp";
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const transitionTimeoutRef = useRef<number | null>(null);
  const [activeVideo, setActiveVideo] = useState(0);
  const [incomingVideo, setIncomingVideo] = useState<number | null>(null);
  const [incomingReady, setIncomingReady] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (mode === null) return;

    const activeElement = videoRefs.current[activeVideo];
    if (!activeElement) return;

    safePlay(activeElement);
  }, [activeVideo, mode]);

  useEffect(() => {
    if (incomingVideo === null) return;

    const incomingElement = videoRefs.current[incomingVideo];
    if (!incomingElement) return;

    incomingElement.currentTime = 0;
    safePlay(incomingElement);
  }, [incomingVideo]);

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

      setIncomingReady(false);
      setIncomingVideo(nextIndex);
    },
    [activeVideo, incomingVideo]
  );

  useEffect(() => {
    if (!incomingReady || incomingVideo === null) return;

    const currentElement = videoRefs.current[activeVideo];
    const nextIndex = incomingVideo;

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
      setIncomingReady(false);
      setProgress(0);
    }, CROSSFADE_MS);

    return () => {
      if (transitionTimeoutRef.current !== null) {
        window.clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, [activeVideo, incomingReady, incomingVideo]);

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

  const visibleVideoIndexes =
    incomingVideo === null ? [activeVideo] : [activeVideo, incomingVideo];

  return (
    <section className="relative isolate flex h-screen min-h-[600px] items-start bg-neutral-900 lg:h-[89svh] lg:items-center">
      {mode !== null &&
        visibleVideoIndexes.map((index) => {
          const video = videos[index];

          return (
            <video
              key={`${isDesktop ? "desktop" : "mobile"}-${video.webm}`}
              ref={(element) => {
                videoRefs.current[index] = element;
              }}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-out ${
                index === incomingVideo
                  ? incomingReady
                    ? "z-20 opacity-100"
                    : "z-20 opacity-0"
                  : index === activeVideo
                    ? "z-10 opacity-100"
                    : "z-0 opacity-0"
              }`}
              autoPlay={index === 0}
              muted
              playsInline
              preload="auto"
              poster={index === activeVideo ? poster : undefined}
              onCanPlay={() => {
                if (index === incomingVideo) setIncomingReady(true);
              }}
              onTimeUpdate={(event) => handleTimeUpdate(event, index)}
              onEnded={() => {
                if (index === activeVideo) {
                  goToNextVideo();
                }
              }}
            >
              <source src={video.webm} type="video/webm" />
              <source src={video.mp4} type="video/mp4" />
            </video>
          );
        })}
      <div
        style={{
          background:
            "linear-gradient(270deg, rgba(16, 19, 19, 0) 0%, rgba(16, 19, 19, 0.5) 100%)",
          backdropFilter: "blur(0px)",
          WebkitBackdropFilter: "blur(0px)",
          pointerEvents: "none",
        }}
        className="absolute inset-0 z-30 hidden w-[660px] lg:block"
      />
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(16, 19, 19, 0.5) 0%, rgba(16, 19, 19, 0) 100%)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, transparent 100%)",
          pointerEvents: "none",
        }}
        className="absolute inset-x-0 top-0 z-30 block h-1/2 lg:hidden"
      />
      <div className="relative z-30 mx-auto w-full max-w-[1512px] px-5 pt-24 pb-16 lg:px-20 lg:py-28">
        {/* <div
          aria-hidden="true"
          className="absolute -top-20 bottom-0 left-0 hidden h-[89svh] w-[660px] lg:block"
          style={{
            background:
              "linear-gradient(270deg, rgba(16, 19, 19, 0) 0%, rgba(16, 19, 19, 0.5) 100%)",
            backdropFilter: "blur(0px)",
            WebkitBackdropFilter: "blur(0px)",
            pointerEvents: "none",
          }}
        /> */}

        <div className="relative z-20 mt-10 max-w-2xl lg:mt-0">
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
              key={`progress-${video.webm}`}
              type="button"
              aria-label={`Show hero video ${index + 1}`}
              aria-pressed={index === activeVideo || index === incomingVideo}
              onClick={() => startTransition(index)}
              className="group flex h-11 flex-1 cursor-pointer touch-manipulation items-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span className="h-1 w-full overflow-hidden rounded-full bg-white/30 transition-colors group-hover:bg-white/45">
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
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
