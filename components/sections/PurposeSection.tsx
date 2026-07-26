"use client";

import Image from "next/image";
import { useLang } from "@/lib/i18n";

export default function PurposeSection() {
  const { t } = useLang();

  return (
    <section
      id="about"
      className="bg-savana-200 py-20 xl:flex xl:min-h-screen xl:items-center xl:py-0"
    >
      <div className="mx-auto w-full max-w-[1512px] px-7 sm:px-8 xl:px-11">
        <div className="grid gap-12 xl:grid-cols-[minmax(0,1fr)_minmax(440px,548px)] xl:items-center xl:gap-20">
          {/* Image section */}
          <div className="w-full">
            {/* Mobile layout */}
            <div className="flex flex-col gap-4 md:hidden">
              {/* Gambar 1 — paling besar di atas */}
              <Image
                src="/homepage/Homepage-About-Us-Waerebo-Lodge-Picture-Clean-01.webp"
                alt="Waerebo Lodge sign"
                width={680}
                height={810}
                priority
                sizes="100vw"
                className="h-auto w-full rounded-[24px] object-cover"
              />

              {/* Gambar 2 dan 3 */}
              <div className="flex min-h-[300px] items-stretch gap-4">
                {/* Gambar 2 — rata bawah, lebih besar */}
                <div className="w-[58%] self-end">
                  <Image
                    src="/homepage/Homepage-About-Us-Waerebo-Lodge-Picture-Clean-02.webp"
                    alt="Aerial view of Waerebo Lodge among rice fields"
                    width={420}
                    height={500}
                    sizes="58vw"
                    className="h-auto w-full rounded-[24px] object-cover"
                  />
                </div>

                {/* Gambar 3 — rata atas, lebih kecil */}
                <div className="w-[42%] self-start">
                  <Image
                    src="/homepage/Homepage-About-Us-Waerebo-Lodge-Picture-Clean-03.webp"
                    alt="Waerebo Lodge cabins in rice fields"
                    width={320}
                    height={370}
                    sizes="42vw"
                    className="h-auto w-full rounded-[24px] object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Tablet dan desktop */}
            <div className="hidden w-full items-stretch gap-6 md:flex md:h-[560px] xl:h-[520px]">
              {/* Kiri — rata atas */}
              <div className="w-[38%] self-start">
                <Image
                  src="/homepage/Homepage-About-Us-Waerebo-Lodge-Picture-Clean-01.webp"
                  alt="Waerebo Lodge sign"
                  width={340}
                  height={410}
                  priority
                  sizes="(min-width: 1280px) 22vw, 38vw"
                  className="h-auto w-full rounded-[24px] object-cover"
                />
                <div className="mb-8 hidden md:block">
                  <h4 className="text-[20px] leading-tight font-semibold text-pale-savana-500">
                    {t("purpose.location.title")}
                  </h4>

                  <p className="mt-2 text-[14px] leading-relaxed font-normal text-pale-savana-500">
                    {t("purpose.location.address")}
                  </p>
                </div>
              </div>

              {/* Tengah — rata bawah */}
              <div className="w-[32%] self-end">
                <Image
                  src="/homepage/Homepage-About-Us-Waerebo-Lodge-Picture-Clean-02.webp"
                  alt="Aerial view of Waerebo Lodge among rice fields"
                  width={290}
                  height={340}
                  sizes="(min-width: 1280px) 19vw, 32vw"
                  className="h-auto w-full rounded-[24px] object-cover"
                />
              </div>

              {/* Kanan — rata tengah */}
              <div className="w-[30%] self-center">
                <Image
                  src="/homepage/Homepage-About-Us-Waerebo-Lodge-Picture-Clean-03.webp"
                  alt="Waerebo Lodge cabins in rice fields"
                  width={280}
                  height={320}
                  sizes="(min-width: 1280px) 18vw, 30vw"
                  className="h-auto w-full rounded-[24px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="xl:translate-y-20">
            <p className="mb-2 text-base font-normal text-savana-600 xl:mb-4 xl:text-xl">
              {t("purpose.eyebrow")}
            </p>

            <h3 className="mb-6 max-w-xl text-[34px] leading-[1.12] font-semibold text-savana-800 sm:text-[40px] xl:text-[52px] xl:leading-[1.05]">
              {t("purpose.heading")}
            </h3>

            <p className="mb-5 text-xl leading-[1.35] font-normal text-pale-savana-500 xl:text-[22px]">
              {t("purpose.body1.pre")}
              <span className="font-semibold">{t("purpose.body1.bold")}</span>
              {t("purpose.body1.post")}
            </p>

            <p className="mb-8 text-xl leading-[1.35] font-normal text-pale-savana-500 xl:mb-14 xl:text-[22px]">
              {t("purpose.body2")}
            </p>

            {/* Location mobile and tablet */}
            <div className="mb-8 md:hidden">
              <h4 className="text-[20px] leading-tight font-semibold text-pale-savana-500">
                {t("purpose.location.title")}
              </h4>

              <p className="mt-2 text-[14px] leading-relaxed font-normal text-pale-savana-500">
                {t("purpose.location.address")}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:gap-5">
              <a
                href="/about"
                className="inline-flex min-h-16 items-center justify-center rounded-lg bg-savana-800 px-8 text-xl font-medium text-white transition-colors hover:bg-savana-700 xl:min-h-20 xl:text-2xl"
              >
                {t("purpose.cta")}
              </a>

              <a
                href="https://www.google.com/maps/@-8.8465902,120.3055812,17z"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-16 items-center justify-center rounded-lg border border-savana-800 px-8 text-xl font-medium text-savana-800 transition-colors hover:bg-savana-800 hover:text-white xl:min-h-20 xl:text-2xl"
              >
                <span className="xl:hidden">{t("purpose.mapCtaMobile")}</span>
                <span className="hidden xl:inline">{t("purpose.mapCta")}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
