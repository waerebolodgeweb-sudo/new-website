"use client";

import Image from "next/image";
import { useLang } from "@/lib/i18n";

export default function HeroSection() {
  const { t } = useLang();

  return (
    <section className="relative flex h-screen min-h-[600px] items-center">
      <Image
        src="/home/hero.png"
        alt="Waerebo Lodge among the rice terraces of Flores"
        fill
        priority
        className="object-cover"
      />
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
