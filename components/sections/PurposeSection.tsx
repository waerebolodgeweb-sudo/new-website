"use client";

import Image from "next/image";
import { useLang } from "@/lib/i18n";

export default function PurposeSection() {
  const { t } = useLang();

  return (
    <section id="about" className="bg-neutral-050 py-16 lg:py-40">
      <div className="mx-auto max-w-[1512px] px-6 lg:px-10">
        {/* Centered headline — hidden on mobile per Figma */}
        <h2 className="mb-24 hidden text-center text-5xl leading-tight text-neutral-900 lg:block lg:text-6xl">
          <span className="text-savana-800 font-semibold">Rest Well. </span>
          <span className="text-savana-800">Give Back.</span>
        </h2>

        <div className="flex flex-col-reverse gap-10 lg:flex-row lg:items-end lg:gap-16">
          {/* Left — copy */}
          <div className="flex flex-col justify-end lg:w-2/5">
            <p className="mb-3 text-base font-normal tracking-wide text-savana-600">
              {t("purpose.eyebrow")}
            </p>
            <h3 className="mb-6 text-4xl leading-tight font-semibold text-savana-800">
              {t("purpose.heading")}
            </h3>
            <p className="mb-6 text-base leading-relaxed font-normal text-pale-savana-500">
              {t("purpose.body1")}
            </p>
            <p className="mb-8 text-base leading-relaxed font-normal text-pale-savana-500">
              {t("purpose.body2")}
            </p>
            <div>
              <a
                href="/about"
                className="inline-flex rounded-xl bg-savana-800 px-5 py-3 text-base font-medium text-white transition-colors hover:bg-neutral-800"
              >
                {t("purpose.cta")}
              </a>
            </div>
          </div>

          {/* Right — image collage */}
          <div className="flex h-full gap-5 lg:w-3/5">
            {/* Left column — desktop only */}
            <div className="hidden w-[30%] flex-col gap-5 lg:flex">
              <div className="h-24 rounded-3xl bg-transparent" />
              <div className="aspect-2.2/3 relative h-72 shrink-0 overflow-hidden rounded-3xl shadow-sm">
                <Image
                  src="/home/about-1.png"
                  alt="Waerebo Lodge sign"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="h-24 rounded-3xl bg-transparent" />
            </div>

            {/* Middle column — desktop only */}
            <div className="hidden w-[30%] flex-col gap-5 lg:flex">
              <div className="h-40 rounded-3xl bg-transparent" />
              <div className="aspect-2.2/3 relative h-72 shrink-0 overflow-hidden rounded-3xl shadow-sm">
                <Image
                  src="/home/about-2.png"
                  alt="Aerial view of Waerebo village"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right column — full width on mobile */}
            <div className="flex w-full flex-col gap-4 lg:w-[40%] lg:gap-5">
              <div className="relative h-56 overflow-hidden rounded-3xl shadow-sm sm:h-72 lg:aspect-[2.7/3] lg:h-96">
                <Image
                  src="/home/about-3.jpg"
                  alt="Traditional cone-shaped Waerebo houses"
                  fill
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
