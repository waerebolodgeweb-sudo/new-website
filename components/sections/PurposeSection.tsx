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
      <div className="mx-auto w-full max-w-[1512px] px-5 lg:px-20">
        <div className="flex flex-col gap-12 xl:flex-row xl:items-center xl:gap-10">
          {/* Image section */}
          <div className="w-full xl:w-3/5">
            {/* Mobile layout */}
            <div className="flex flex-col gap-4 min-[480px]:hidden">
              {/* Gambar 1 — paling besar di atas */}
              <Image
                src="/homepage/Homepage-About-Us-Waerebo-Lodge-Picture-Clean-01.webp"
                alt="Waerebo Lodge sign"
                width={680}
                height={810}
                sizes="(max-width: 479px) calc(100vw - 40px), 1px"
                className="h-auto w-full rounded-[24px] object-cover shadow-md"
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
                    className="h-auto w-full rounded-[24px] object-cover shadow-md"
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
                    className="h-auto w-full rounded-[24px] object-cover shadow-md"
                  />
                </div>
              </div>
            </div>

            {/* Tablet dan desktop */}
            <div className="hidden w-full items-stretch gap-6 min-[480px]:flex xl:h-[520px]">
              {/* Kiri — rata atas */}
              <div className="w-[38%] self-start">
                <Image
                  src="/homepage/Homepage-About-Us-Waerebo-Lodge-Picture-Clean-01.webp"
                  alt="Waerebo Lodge sign"
                  width={340}
                  height={410}
                  priority
                  sizes="(min-width: 1280px) 22vw, 38vw"
                  className="h-auto w-full rounded-[24px] object-cover shadow-md"
                />
                <div className="mt-2 hidden min-[480px]:block">
                  <h4 className="text-base leading-tight font-semibold text-pale-savana-500 md:text-[20px]">
                    {t("purpose.location.title")}
                  </h4>

                  <p className="mt-2 text-[12px] leading-relaxed font-normal text-pale-savana-500">
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
                  className="h-auto w-full rounded-[24px] object-cover shadow-md"
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
                  className="h-auto w-full rounded-[24px] object-cover shadow-md"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full xl:w-2/5 xl:translate-y-20">
            <p className="mb-2 text-sm font-normal text-savana-800 xl:mb-4 xl:text-base">
              {t("purpose.eyebrow")}
            </p>

            <h3 className="mb-6 max-w-xl text-[24px] leading-[1.12] font-semibold text-savana-800 xl:text-[36px] xl:leading-[1.05]">
              {t("purpose.heading")}
            </h3>

            <p className="mb-5 text-sm leading-[1.35] font-normal text-pale-savana-500 xl:text-base">
              {t("purpose.body1.pre")}
              <span className="font-semibold">{t("purpose.body1.bold")}</span>
              {t("purpose.body1.post")}
            </p>

            <p className="mb-8 text-sm leading-[1.35] font-normal text-pale-savana-500 xl:mb-14 xl:text-base">
              {t("purpose.body2")}
            </p>

            {/* Location mobile and tablet */}
            <div className="mb-8 min-[480px]:hidden">
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
                className="button-primary inline-flex min-h-12 items-center justify-center rounded-lg px-8 text-base font-medium transition-colors xl:min-h-15 xl:text-lg"
              >
                {t("purpose.cta")}
              </a>

              <a
                href="https://www.google.com/maps/@-8.8465902,120.3055812,17z"
                target="_blank"
                rel="noreferrer"
                className="button-outline inline-flex min-h-12 items-center justify-center rounded-lg px-8 text-base font-medium transition-colors xl:min-h-15 xl:text-lg"
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
