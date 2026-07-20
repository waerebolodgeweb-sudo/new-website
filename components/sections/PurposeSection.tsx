"use client";

import Image from "next/image";
import { useLang } from "@/lib/i18n";

export default function PurposeSection() {
  const { t } = useLang();

  return (
    <section
      id="about"
      className="bg-savana-200 py-[168px] lg:flex lg:min-h-screen lg:items-center lg:py-0"
    >
      <div className="mx-auto w-full max-w-[1920px] px-7 sm:px-8 lg:px-11">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(440px,548px)] lg:items-center lg:gap-20">
          <div>
            <div className="relative h-[1036px] sm:h-[1130px] lg:h-[690px]">
              <Image
                src="/homepage/Homepage-About-Us-Waerebo-Lodge-Picture-01.webp"
                alt="Waerebo Lodge sign"
                width={1083}
                height={1320}
                sizes="(min-width: 1024px) 31vw, 90vw"
                className="absolute top-0 left-0 h-auto w-full lg:w-[36.22%]"
                priority
              />
              <Image
                src="/homepage/Homepage-About-Us-Waerebo-Lodge-Picture-02.webp"
                alt="Aerial view of Waerebo Lodge among rice fields"
                width={909}
                height={1560}
                sizes="(min-width: 1024px) 25vw, 55vw"
                className="absolute top-[618px] left-0 h-auto w-[55%] sm:top-[680px] lg:top-[163px] lg:left-[36.2%] lg:w-[29.57%]"
              />
              <Image
                src="/homepage/Homepage-About-Us-Waerebo-Lodge-Picture-03.webp"
                alt="Waerebo Lodge cabins in rice fields"
                width={909}
                height={1476}
                sizes="(min-width: 1024px) 25vw, 42vw"
                className="absolute top-[572px] right-0 h-auto w-[40%] sm:top-[630px] lg:top-[97px] lg:right-0 lg:w-[29.57%]"
              />

              <div className="absolute top-[568px] left-0 hidden lg:block">
                <h4 className="text-[28px] leading-tight font-semibold text-pale-savana-500">
                  {t("purpose.location.title")}
                </h4>
                <p className="mt-3 max-w-[440px] text-xl leading-snug font-normal text-pale-savana-500">
                  {t("purpose.location.address")}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:translate-y-20">
            <p className="mb-2 text-base font-normal text-savana-600 lg:mb-4 lg:text-xl">
              {t("purpose.eyebrow")}
            </p>
            <h3 className="mb-6 max-w-xl text-[34px] leading-[1.12] font-semibold text-savana-800 sm:text-[40px] lg:text-[52px] lg:leading-[1.05]">
              {t("purpose.heading")}
            </h3>
            <p className="mb-5 text-xl leading-[1.35] font-normal text-pale-savana-500 lg:text-[22px]">
              {t("purpose.body1.pre")}
              <span className="font-semibold">{t("purpose.body1.bold")}</span>
              {t("purpose.body1.post")}
            </p>
            <p className="mb-8 text-xl leading-[1.35] font-normal text-pale-savana-500 lg:mb-14 lg:text-[22px]">
              {t("purpose.body2")}
            </p>

            <div className="mb-8 lg:hidden">
              <h4 className="text-[28px] leading-tight font-semibold text-pale-savana-500">
                {t("purpose.location.title")}
              </h4>
              <p className="mt-3 text-lg leading-snug font-normal text-pale-savana-500">
                {t("purpose.location.address")}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
              <a
                href="/about"
                className="inline-flex min-h-16 items-center justify-center rounded-lg bg-savana-800 px-8 text-xl font-medium text-white transition-colors hover:bg-savana-700 lg:min-h-20 lg:text-2xl"
              >
                {t("purpose.cta")}
              </a>
              <a
                href="https://www.google.com/maps/@-8.8465902,120.3055812,17z"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-16 items-center justify-center rounded-lg border border-savana-800 px-8 text-xl font-medium text-savana-800 transition-colors hover:bg-savana-800 hover:text-white lg:min-h-20 lg:text-2xl"
              >
                <span className="lg:hidden">{t("purpose.mapCtaMobile")}</span>
                <span className="hidden lg:inline">{t("purpose.mapCta")}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
