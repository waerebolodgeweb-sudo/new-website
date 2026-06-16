"use client";

import Image from "next/image";
import { useLang } from "@/lib/i18n";

export default function PurposeSection() {
  const { t } = useLang();

  return (
    <section id="about" className="bg-neutral-050 py-[60px] lg:py-40">
      <div className="mx-auto max-w-[1512px] px-5 lg:px-10">
        {/* Mobile-only: large hero image */}
        <div className="relative mb-10 h-[200px] overflow-hidden rounded-3xl shadow-sm lg:hidden">
          <Image
            src="/home/about-1.png"
            alt="Waerebo Lodge sign"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Desktop-only: centered headline */}
        <h2 className="mb-24 hidden text-center text-5xl leading-tight text-neutral-900 lg:block lg:text-6xl">
          <span className="font-semibold text-savana-800">Rest Well. </span>
          <span className="text-savana-800">Give Back.</span>
        </h2>

        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:gap-16">
          {/* Left — copy */}
          <div className="flex flex-col justify-end lg:w-2/5">
            <p className="mb-3 text-sm font-normal tracking-wide text-savana-600 lg:text-base">
              {t("purpose.eyebrow")}
            </p>
            <h3 className="mb-[12px] text-[36px] leading-[40px] font-semibold text-savana-800 lg:mb-6 lg:text-4xl lg:leading-tight">
              {t("purpose.heading")}
            </h3>
            <p className="mb-[12px] text-sm leading-[20px] font-normal text-pale-savana-500 lg:mb-6 lg:text-base lg:leading-relaxed">
              {t("purpose.body1.pre")}
              <span className="font-semibold">{t("purpose.body1.bold")}</span>
              {t("purpose.body1.post")}
            </p>
            <p className="mb-[12px] text-sm leading-[20px] font-normal text-pale-savana-500 lg:mb-8 lg:text-base lg:leading-relaxed">
              {t("purpose.body2")}
            </p>

            {/* Mobile-only: Waerebo Village horizontal card */}
            <div className="mb-10 flex items-stretch gap-5 lg:hidden">
              <div className="relative w-1/2 min-h-[100px] overflow-hidden rounded-xl shadow-sm shrink-0">
                <Image
                  src="/home/about-3.jpg"
                  alt="Traditional cone-shaped Waerebo houses"
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-1 justify-center">
                <h4 className="text-base font-semibold text-pale-savana-500">
                  {t("purpose.village.title")}
                </h4>
                <p className="text-sm font-normal leading-[20px] text-pale-savana-500">
                  {t("purpose.village.caption")}
                </p>
              </div>
            </div>

            <div>
              <a
                href="/about"
                className="inline-flex rounded-xl bg-savana-800 px-5 py-3 text-base font-medium text-white transition-colors hover:bg-neutral-800"
              >
                {t("purpose.cta")}
              </a>
            </div>
          </div>

          {/* Right — image collage, desktop only */}
          <div className="hidden h-full gap-5 lg:flex lg:w-3/5">
            {/* Left column */}
            <div className="flex w-[30%] flex-col gap-5">
              <div className="h-24 rounded-3xl bg-transparent" />
              <div className="relative h-72 shrink-0 overflow-hidden rounded-3xl shadow-sm">
                <Image
                  src="/home/about-1.png"
                  alt="Waerebo Lodge sign"
                  fill
                  sizes="20vw"
                  className="object-cover"
                />
              </div>
              <div className="h-24 rounded-3xl bg-transparent" />
            </div>

            {/* Middle column */}
            <div className="flex w-[30%] flex-col gap-5">
              <div className="h-40 rounded-3xl bg-transparent" />
              <div className="relative h-72 shrink-0 overflow-hidden rounded-3xl shadow-sm">
                <Image
                  src="/home/about-2.png"
                  alt="Aerial view of Waerebo village"
                  fill
                  sizes="20vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right column */}
            <div className="flex w-[40%] flex-col gap-5">
              <div className="relative h-96 shrink-0 overflow-hidden rounded-3xl shadow-sm">
                <Image
                  src="/home/about-3.jpg"
                  alt="Traditional cone-shaped Waerebo houses"
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-xl font-semibold text-neutral-900">
                  {t("purpose.village.title")}
                </h4>
                <p className="text-sm font-normal text-neutral-700">
                  {t("purpose.village.caption")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
