"use client";

import { useEffect, useState } from "react";
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

export default function HeroSection() {
  const { t } = useLang();
  const [activeVideo, setActiveVideo] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveVideo((current) => (current + 1) % desktopVideos.length);
    }, 9000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative flex h-screen min-h-[600px] items-center">
      <video
        key={`desktop-${desktopVideos[activeVideo]}`}
        className="absolute inset-0 hidden h-full w-full object-cover md:block"
        autoPlay
        muted
        loop
        playsInline
        poster="/homepage/Homepage-Waerebo-Lodge-Hero-Overlay-Desktop-1.webp"
      >
        <source src={desktopVideos[activeVideo]} type="video/mp4" />
      </video>
      <video
        key={`mobile-${mobileVideos[activeVideo]}`}
        className="absolute inset-0 h-full w-full object-cover md:hidden"
        autoPlay
        muted
        loop
        playsInline
        poster="/homepage/Homepage-Waerebo-Lodge-Hero-Overlay-Mobile-1.webp"
      >
        <source src={mobileVideos[activeVideo]} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

      <div className="relative z-10 mx-auto w-full px-4 py-16 sm:px-6 lg:px-8 lg:py-28">
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
    </section>
  );
}
